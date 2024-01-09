import React, { useRef, useState } from "react";
import {
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function StudentEntryModal(props) {
  const { open, setOpen } = props;
  const [totalStudentList, setTotalStudentList] = useState([]);
  const name = useRef();
  const address = useRef();
  const city = useRef();
  const country = useRef();
  const pincode = useRef();
  const score = useRef();
  const [error, setError] = useState("");
  const [errorSubmission, setErrorSubmission] = useState("");
  const [sucess, setSuccess] = useState({ status: false, message: "" });
  const currentStudentList = JSON.parse(localStorage.getItem("studentList"));

  const handleClose = () => {
    setOpen(false);
    setSuccess({ status: false, message: "" });
    setErrorSubmission("");
    setError("");
  };
  const checkPass = (value) => {
    const totalMarks = 1600;
    const passPercentage = 30;
    const passMark = (passPercentage / 100) * totalMarks;
    return value >= passMark ? "Pass" : "Fail";
  };
  const checkValue = (obj) => {
    let isValid = true;
    const isNotEmpty = (value) => {
      return value !== "";
    };
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !isNotEmpty(obj[key])) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    const data = [];
    const finalValue = {
      name: name.current.value,
      address: address.current.value,
      country: country.current.value,
      city: city.current.value,
      pincode: pincode.current.value,
      score: score.current.value,
      isPass: checkPass(score.current.value),
    };

    const isValidSubmission = checkValue(finalValue);

    if (currentStudentList && currentStudentList.length !== 0) {
      data.push(...currentStudentList);
    }

    if (isValidSubmission) {
      data.push(finalValue);
      localStorage.setItem("studentList", JSON.stringify(data));
      setSuccess({
        status: true,
        message: "Added successfully",
      });
    } else {
      setErrorSubmission("All fields are mandatory");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subheading" component="h4">
          Enter the student informations
        </Typography>
        <Grid onClick={handleClose} sx={{ cursor: "pointer" }}>
          <CloseIcon />
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Container>
          <form noValidate>
            <TextField
              varient="standard"
              label="Name"
              margin="normal"
              id="name"
              required
              fullWidth
              autoComplete="name"
              inputRef={name}
              error={
                errorSubmission !== "" && name.current.value === ""
                  ? true
                  : false
              }
              helperText={
                errorSubmission !== "" &&
                name.current.value === "" &&
                errorSubmission
              }
            />
            <TextField
              varient="standard"
              label="Address"
              margin="normal"
              id="address"
              required
              fullWidth
              autoComplete="address"
              inputRef={address}
              error={
                errorSubmission !== "" && address.current.value === ""
                  ? true
                  : false
              }
              helperText={
                errorSubmission !== "" &&
                address.current.value === "" &&
                errorSubmission
              }
            />
            <TextField
              varient="standard"
              label="City"
              margin="normal"
              id="city"
              required
              fullWidth
              autoComplete="city"
              inputRef={city}
              error={
                errorSubmission !== "" && city.current.value === ""
                  ? true
                  : false
              }
              helperText={
                errorSubmission !== "" &&
                city.current.value === "" &&
                errorSubmission
              }
            />
            <TextField
              varient="standard"
              label="Country"
              margin="normal"
              id="country"
              required
              fullWidth
              autoComplete="country"
              inputRef={country}
              error={
                errorSubmission !== "" && country.current.value === ""
                  ? true
                  : false
              }
              helperText={
                errorSubmission !== "" &&
                country.current.value === "" &&
                errorSubmission
              }
            />
            <TextField
              varient="standard"
              label="Pincode"
              margin="normal"
              id="pincode"
              required
              fullWidth
              autoComplete="pincode"
              inputRef={pincode}
              error={
                errorSubmission !== "" && pincode.current.value === ""
                  ? true
                  : false
              }
              helperText={
                errorSubmission !== "" &&
                pincode.current.value === "" &&
                errorSubmission
              }
            />
            <TextField
              varient="standard"
              label="Score"
              margin="normal"
              id="score"
              required
              fullWidth
              autoComplete="score"
              type="number"
              inputRef={score}
              onChange={(e) =>
                parseInt(e.target.value) > 1600
                  ? setError("Enter value lesser than or equal to 1600")
                  : setError("")
              }
              helperText={
                error || (errorSubmission !== "" && score.current.value === "")
              }
              error={
                error !== "" ||
                (errorSubmission !== "" && score.current.value === "")
                  ? true
                  : false
              }
            />
          </form>
          <p style={{ color: "green" }}>
            {sucess.status && `${sucess.message} !!!`}
          </p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={(event) => handleSubmission(event)}
            style={{ marginTop: "20px" }}
          >
            {"Submit"}
          </Button>
        </Container>
      </DialogContent>
    </Dialog>
  );
}

export default StudentEntryModal;
