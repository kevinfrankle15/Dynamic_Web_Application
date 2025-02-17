import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useMovieData } from "@mui/x-data-grid-generator";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import FormDialog from "../../Utils/popup-dialog";
import { FormControlLabel, IconButton } from "@mui/material";
import { DataTableObj } from "../../Utils/DefaultInputsJson";
// const VISIBLE_FIELDS = [
//   "title",
//   "company",
//   "director",
//   "year",
//   "cinematicUniverse",
// ];
const VISIBLE_FIELDS = [
  "invoiceNo",
  "clientName",
  "company",
  "date",
  "totalAmount",
  "edit",
  "delete",
  // "Status",
];

export default function InvoiceDataTable() {
  const [dataa, setDataa] = React.useState(DataTableObj);
  const [singleRowData, setSingleRowData] = React.useState();
  const [openDialogAction, setOpenDialogAction] = React.useState(false);
  const DataTableColumns = [
    {
      field: "invoiceNo",
      headerName: "Invoice No",
      width: 150,
      // groupable: false,
    },
    {
      field: "clientName",
      headerName: "Client Name",
      width: 180,
    },
    {
      field: "company",
      headerName: "Company",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      // type: "number",
      width: 150,
      // availableAggregationFunctions: ["max", "min"],
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      // type: "number",
      width: 150,
      // groupable: false,
    },
    // {
    //   field: "edit",
    //   headerName: "Edit",
    //   sortable: false,
    //   width: 150,
    //   disableClickEventBubbling: true,
    //   renderCell: (params) => {
    //     return (
    //       <div
    //         className="d-flex justify-content-between align-items-center"
    //         style={{ cursor: "pointer" }}
    //       >
    //         <MatEdit index={params.id} />
    //       </div>
    //     );
    //   },
    // },
    // {
    //   field: "delete",
    //   headerName: "Delete",
    //   sortable: false,
    //   width: 150,
    //   disableClickEventBubbling: true,
    //   renderCell: (params) => {
    //     return <DeleteIcon onClick={(e) => handleDeleteClick(params)} />;
    //   },
    // },
  ];
  const getAddedInvoice = (data) => {
    setOpenDialogAction(false);
    setDataa({ ...dataa, rows: [...dataa.rows, JSON.parse(data)] });
  };
  const EditInvoice = (data) => {
    const { id, invoiceNo, clientName, company, date, totalAmount } =
      JSON.parse(data);
    const existing = dataa.rows.find((obj) => obj.id == id);
    console.log(
      existing,
      "existing",
      id,
      invoiceNo,
      clientName,
      company,
      date,
      totalAmount
    );

    // if (existing) {
    //   setDataa({
    //     ...dataa,
    //     rows: [
    //       ...dataa.rows,
    //       (existing.id = id),
    //       (existing.invoiceNo = invoiceNo),
    //       (existing.clientName = clientName),
    //       (existing.company = company),
    //       (existing.date = date),
    //       (existing.totalAmount = totalAmount),
    //     ],
    //   });
    // }
    if (existing) {
      // Create a new object with updated properties
      const updatedRow = {
        ...existing,
        id,
        invoiceNo,
        clientName,
        company,
        date,
        totalAmount,
      };
      console.log(updatedRow, "updatedRow");

      // Find the index of the existing row in the array
      const rowIndex = dataa.rows.findIndex((row) => row.id === existing.id);
      console.log(rowIndex, "rowIndex");
      // Create a new array with the updated row
      const updatedRows = [
        ...dataa.rows.slice(0, rowIndex), // Rows before the updated row
        updatedRow, // Updated row
        ...dataa.rows.slice(rowIndex + 1), // Rows after the updated row
      ];
      console.log(updatedRows, "updatedRows");
      // Update the state immutably
      setDataa({
        ...dataa,
        rows: updatedRows,
      });
    }
    setOpenDialogAction(false);
  };
  const deleteInvoice = (rowData) => {
    const { id } = JSON.parse(rowData);
    const updatedRow = dataa.rows.filter((obj) => obj.id !== id);
    setDataa({ ...dataa, rows: updatedRow });
  };
  const handleRow = (params, event, details) => {
    // console.log(params, "params");
    // setDataa({
    //   ...dataa,
    //   rows: [...dataa.rows.filter((valueObj) => valueObj?.id !== params?.id)],
    // });
    console.log(params, "params");
    setSingleRowData(params);
    setOpenDialogAction(true);
  };
  // const handleDeleteClick = (params) => {
  //   console.log(params, "delete");
  //   setDataa({
  //     ...dataa,
  //     rows: [
  //       ...dataa.rows.filter((valueObj) => valueObj?.id !== params?.row.id),
  //     ],
  //   });
  // };
  // const handleEditClick = (id, e) => {
  //   e.preventDefault();
  //   console.log(id, "edit");
  // };
  // const MatEdit = ({ index }) => {
  //   return (
  //     <FormControlLabel
  //       control={
  //         <IconButton color="secondary" aria-label="add an alarm">
  //           <EditIcon onClick={(e) => handleEditClick(index, e)} />
  //         </IconButton>
  //       }
  //     />
  //   );
  // };
  // const MatDelete = ({ index }) => {
  //   return (
  //     <FormControlLabel
  //       control={
  //         <IconButton color="secondary" aria-label="add an alarm">
  //           <DeleteIcon onClick={(e) => handleDeleteClick(index, e)} />
  //         </IconButton>
  //       }
  //     />
  //   );
  // };

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () =>
      DataTableColumns.filter((column) =>
        VISIBLE_FIELDS.includes(column.field)
      ),
    []
  );
  const openDialogProps = {
    buttonName: "Add Invoice",
  };
  console.log(dataa.rows, "dataa.rows");

  return (
    <Stack spacing={1} sx={{ alignItems: "flex-end" }}>
      {/* <Button variant="text" sx={{ backgroundColor: "white", width: "20%" }}>
        Add
      </Button> */}

      <FormDialog
        prop={openDialogProps}
        getInvoices={getAddedInvoice}
        setState={setOpenDialogAction}
      />
      {openDialogAction ? (
        <FormDialog
          prop={openDialogProps}
          state={openDialogAction}
          editInvoice={EditInvoice}
          setState={setOpenDialogAction}
          deleteInvoice={deleteInvoice}
          rowData={singleRowData}
        />
      ) : null}
      <Box sx={{ height: 450, width: 1, backgroundColor: "white" }}>
        <DataGrid
          {...dataa}
          onRowClick={handleRow}
          disableColumnFilter
          // disableColumnSelector
          disableDensitySelector
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          rows={dataa.rows}
          getRowId={(row) => row.id}
        />
        {/* <Button size="small">Delete</Button> */}
      </Box>
    </Stack>
  );
}
