import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import { Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ConfirmDialog } from "@toolpad/core";
import AxiosInstance from "../../Axios/Axios";
import { ContentCopy } from "@mui/icons-material";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import Alert from "@mui/material/Alert";
import { Alertt } from "../../Utils/Material-ui.js";
function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(1, "Cupcake", 305, 3.7, 67, 4.3),
  createData(2, "Donut", 452, 25.0, 51, 4.9),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
  createData(6, "Honeycomb", 408, 3.2, 87, 6.5),
  createData(7, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(8, "Jelly Bean", 375, 0.0, 94, 0.0),
  createData(9, "KitKat", 518, 26.0, 65, 7.0),
  createData(10, "Lollipop", 392, 0.2, 98, 0.0),
  createData(11, "Marshmallow", 318, 0, 81, 2.0),
  createData(12, "Nougat", 360, 19.0, 9, 37.0),
  createData(13, "Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "Company Name",
    numeric: false,
    disablePadding: false,
    label: "Company Name",
  },
  {
    id: "Mobile No",
    numeric: false,
    disablePadding: false,
    label: "Mobile No",
  },
  {
    id: "Email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  // {
  //   id: "protein",
  //   numeric: true,
  //   disablePadding: false,
  //   label: "Protein (g)",
  // },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "right"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
// const users = [
//   {
//     id: 1,
//     name: "Cupcake",
//     calories: 305,
//     fat: 3.7,
//     carbs: 67,
//     protein: 4.3,
//   },
//   {
//     id: 2,
//     name: "Donut",
//     calories: 452,
//     fat: 25,
//     carbs: 51,
//     protein: 4.9,
//   },
//   {
//     id: 3,
//     name: "Eclair",
//     calories: 262,
//     fat: 16,
//     carbs: 24,
//     protein: 6,
//   },
//   {
//     id: 4,
//     name: "Frozen yoghurt",
//     calories: 159,
//     fat: 6,
//     carbs: 24,
//     protein: 4,
//   },
//   {
//     id: 5,
//     name: "Gingerbread",
//     calories: 356,
//     fat: 16,
//     carbs: 49,
//     protein: 3.9,
//   },
//   {
//     id: 6,
//     name: "Honeycomb",
//     calories: 408,
//     fat: 3.2,
//     carbs: 87,
//     protein: 6.5,
//   },
//   {
//     id: 7,
//     name: "Ice cream sandwich",
//     calories: 237,
//     fat: 9,
//     carbs: 37,
//     protein: 4.3,
//   },
//   {
//     id: 8,
//     name: "Jelly Bean",
//     calories: 375,
//     fat: 0,
//     carbs: 94,
//     protein: 0,
//   },
//   {
//     id: 9,
//     name: "KitKat",
//     calories: 518,
//     fat: 26,
//     carbs: 65,
//     protein: 7,
//   },
//   {
//     id: 10,
//     name: "Lollipop",
//     calories: 392,
//     fat: 0.2,
//     carbs: 98,
//     protein: 0,
//   },
//   {
//     id: 11,
//     name: "Marshmallow",
//     calories: 318,
//     fat: 0,
//     carbs: 81,
//     protein: 2,
//   },
//   {
//     id: 12,
//     name: "Nougat",
//     calories: 360,
//     fat: 19,
//     carbs: 9,
//     protein: 37,
//   },
//   {
//     id: 13,
//     name: "Oreo",
//     calories: 437,
//     fat: 18,
//     carbs: 63,
//     protein: 4,
//   },
// ];

function EnhancedTableToolbar(props) {
  const navigate = useNavigate();
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Customer's
        </Typography>
      )}
      <ToolbarActionsSearch />
      <RefreshRoundedIcon style={{ cursor: "pointer", color: "gray" }} />

      {/* {numSelected > 0 ? ( */}
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon onClick={() => navigate("history")} />
        </IconButton>
      </Tooltip>
      {/* ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function ToolbarActionsSearch() {
  const [searchVal, setSearchVal] = useState("");
  // var filtering = users.filter((item) => item.name.includes(searchVal));

  return (
    <Stack direction="row">
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: "inline", md: "none" },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}
        value={searchVal}
        onChange={(e) => {
          setSearchVal(e.target.value);
        }}
      />
    </Stack>
  );
}
export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [users, setUsers] = useState([]);
  const [fetchResponse, setFetchResponse] = useState({
    code: "info",
    message: "Fetching",
  });
  const [limitFetching, setLimitFetching] = useState(0);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  console.log(users, "users from BE");
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = users?.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //   const handleChangeDense = (event) => {
  //     setDense(event.target.checked);
  //   };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users?.length) : 0;
  const visibleRows = React.useMemo(
    () =>
      [...users]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, users]
  );

  const userFetch = async () => {
    try {
      await AxiosInstance.get(`/view-users/`)
        .then((response) => {
          setUsers(response?.data);
          setFetchResponse({
            code: response.status,
            message: response?.message || "Client's Fetched",
          });
          setLimitFetching((prev) => prev + 1);
        })
        .catch((err) => setFetchResponse({ code: 400, message: err.message }));
    } catch (e) {
      setFetchResponse({ code: 400, message: e.message });
    }
  };

  useEffect(() => {
    console.log(limitFetching, "limitFetching");
    if (limitFetching <= 2) {
      userFetch();
    }
  }, [limitFetching]);
  return (
    <>
      <Alertt prop={fetchResponse} />
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={users?.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  const isItemSelected = selected.includes(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="right"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.company_name}</TableCell>
                      <TableCell align="right">{row.mobile_number}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      {/* <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: dense ? 33 : 53, //* emptyRows
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
      </Box>
      {/* <Outlet /> */}
    </>
  );
}
