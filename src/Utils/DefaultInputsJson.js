export const defaultJson = {
  ourServices: [
    "eWay Bill",
    "eInvoicing",
    "Bill of Material",
    "Production Management",
    "Approval System",
    "Sales Order Tracking",
    "Purchase Order Tracking",
    "Quality Control",
  ],
};

export const DataTableObj = {
  rows: [
    {
      id: 0,
      invoiceNo: "Avatar",
      clientName: "James Cameron",
      company: "20th Century Fox",
      totalAmount: 237000000,
      date: 2009,
    },
  ],

  columns: [
    {
      field: "invoiceNo",
      headerName: "Invoice No",
      width: 200,
      groupable: false,
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
      type: "number",
      availableAggregationFunctions: ["max", "min"],
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      type: "number",
      width: 150,
      groupable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 220,
    },
  ],
};
// {
//   id: 0,
//   InvoiceNo: "Avatar",
//   Total: 237000000,
//   ClientName: "James Cameron",
//   company: "20th Century Fox",
//   Date: 2009,
//   Status: true,
// },
