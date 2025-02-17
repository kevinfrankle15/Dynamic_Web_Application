import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  state,
  prop,
  getInvoices,
  editInvoice,
  setState,
  rowData,
  deleteInvoice,
}) {
  let { buttonName } = prop;
  const [invoice, setInvoice] = React.useState({
    id: "",
    invoiceNo: "",
    clientName: "",
    company: "",
    date: "",
    totalAmount: "",
  });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {});
  const handleClickOpen = () => {
    setOpen(true);
  };
  React.useEffect(() => {
    setOpen(state);
  }, [state, prop]);

  const handleClose = () => {
    setOpen(false);
    setState(false);
  };
  const handleSubmit = (d) => {
    getInvoices(JSON.stringify(invoice));
  };
  const handleEdit = () => {
    editInvoice(JSON.stringify(invoice));
  };
  const handleDelete = (e) => {
    deleteInvoice(JSON.stringify(invoice));
  };
  React.useEffect(() => {
    if (rowData) {
      const { row } = rowData;
      const { id, invoiceNo, clientName, company, date, totalAmount } = row;
      setInvoice({
        id: id,
        invoiceNo: invoiceNo,
        clientName: clientName,
        company: company,
        date: date,
        totalAmount: totalAmount,
      });
    }
  }, [setState]);
  const handleChange = (e) => {
    setInvoice((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "white",
          color: "#EB6767",
          display: !state ? "block" : "none",
        }}
      >
        {buttonName}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const data = formJson;
            // handleSubmit(data);
            handleClose();
          },
        }}
      >
        <DialogTitle>Invoice</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Invoice For Clients</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="clientId"
            name="id"
            label="Client Id"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={invoice.id}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="InvoiceNo"
            name="invoiceNo"
            label="Invoice No"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={invoice.invoiceNo}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="ClientName"
            name="clientName"
            label="Client Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={invoice.clientName}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="company"
            name="company"
            label="Company"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={invoice.company}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Date"
            name="date"
            label="mm/dd/yyyy"
            type="Date"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={invoice.date}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="Total"
            name="totalAmount"
            label="Total Amount"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={invoice.totalAmount}
          />
        </DialogContent>
        {!rowData ? (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleSubmit}>
              Add
            </Button>
          </DialogActions>
        ) : (
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleEdit}>Edit</Button>
            <Button type="submit" onClick={(e) => handleDelete(e)}>
              Delete
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}
