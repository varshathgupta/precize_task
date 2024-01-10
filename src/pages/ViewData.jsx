import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import StudentEntryModal from "../components/StudentEntryModal";
import DataSection from "../components/DataSection";

function ViewData() {
  const [openStudentForm, setOpenStudentForm] = useState(false);
  return (
    <Grid style={{ margin: "1rem" }}>
      <Grid
        display={"flex"}
        justifyContent={"flex-end"}
        alignItem={"flex-end"}
        margin={"2rem 1rem"}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenStudentForm(true)}
        >
          Add Students
        </Button>
      </Grid>
      <Grid style={{ margin: "2rem  1rem" }}>
        <DataSection />
      </Grid>
      <StudentEntryModal open={openStudentForm} setOpen={setOpenStudentForm} />
    </Grid>
  );
}

export default ViewData;
