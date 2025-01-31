import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { useMovieData } from "@mui/x-data-grid-generator";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import { DataTableObj } from "../../Utils/DefaultInputsJson";
import { useDemoData } from "@mui/x-data-grid-generator";
import FormDialog from "../../Utils/popup-dialog";
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
  // "Status",
];

export default function InvoiceDataTable() {
  const [dataa, setDataa] = React.useState({
    rows: [
      {
        id: "1",
        invoiceNo: "12",
        clientName: "default",
        company: "default",
        date: "2025-01-24",
        totalAmount: "1245",
      },
    ],
  });
  const getAddedInvoice = (data) => {
    setDataa({ ...dataa, rows: [...dataa.rows, JSON.parse(data)] });
  };
  console.log(dataa, "hook outer function ");

  const DataTableColumns = [
    {
      field: "invoiceNo",
      headerName: "Invoice No",
      width: 200,
      // groupable: false,
    },
    {
      field: "clientName",
      headerName: "Client Name",
      width: 200,
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
      width: 200,
      // availableAggregationFunctions: ["max", "min"],
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      // type: "number",
      width: 200,
      // groupable: false,
    },
  ];
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

  return (
    <Stack spacing={1} sx={{ alignItems: "flex-end" }}>
      {/* <Button variant="text" sx={{ backgroundColor: "white", width: "20%" }}>
        Add
      </Button> */}

      <FormDialog prop={openDialogProps} getInvoices={getAddedInvoice} />
      <Box sx={{ height: 450, width: 1, backgroundColor: "white" }}>
        <DataGrid
          {...dataa}
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
        />
        <Button size="small">Delete</Button>
      </Box>
    </Stack>
  );
}
