import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";

function DeleteModal(props) {
  const { open, setOpen, index } = props;
  const [message, setMessage] = useState({ status: "", message: "" });
  const data = JSON.parse(localStorage.getItem("studentList"));
  const handleClose = () => {
    setOpen({ status: false });
    setMessage({ status: "", message: "" });
  };
  const handleDelete = (e) => {
    data.splice(index, 1);
    localStorage.setItem("studentList", JSON.stringify(data));
    setMessage({
      status: "success",
      message: "Deleted successfully",
    });
    setTimeout(() => {
      handleClose();
    }, [500]);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Wanna delete this row ?</DialogTitle>
      <DialogContent>
        <p style={{ color: "green" }}>
          {" "}
          {message.status === "success" && message.message}
        </p>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteModal;
