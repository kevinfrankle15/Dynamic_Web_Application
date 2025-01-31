import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ prop, getInvoices }) {
  let { buttonName } = prop;

  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {});
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (d) => {
    getInvoices(JSON.stringify(d));
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ backgroundColor: "white", color: "#EB6767" }}
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
            console.log(event.currentTarget);
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const data = formJson;
            handleSubmit(data);
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
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
            // onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
