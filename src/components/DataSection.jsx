import { Box } from "@mui/material";
import MaterialTable from "@material-table/core";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const tableColumns = [
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Score",
    field: "score",
  },
  {
    title: "Status",
    field: "isPass",

    render: (rowData) => (
      <p style={{ color: rowData.isPass === "Pass" ? "green" : "red" }}>
        {rowData.isPass}
      </p>
    ),
  },
  {
    title: "Address",
    field: "address",
  },
  {
    title: "City",
    field: "city",
  },
  {
    title: "Pincode",
    field: "pincode",
  },
  {
    title: "Country",
    field: "country",
  },
];

function DataSection() {
  const data = JSON.parse(localStorage.getItem("studentList")) || [];
  return (
    <MaterialTable
      title="Student List"
      columns={tableColumns}
      data={data}
      options={{
        padding: "dense",
        toolbar: true,
        paging: true,
        draggable: false,
        search: true,
        paginationPosition: "top",
        emptyRowsWhenPaging: false,
        tableLayout: "auto",
        selection: false,
        headerStyle: {
          position: "sticky",
          top: 0,
          zIndex: 1,
          fontWeight: "bold",
        },
        maxBodyHeight: "500px",
        // overflowX: "scroll",
        // overflowY: "visible",
        actionsColumnIndex: -1,
      }}
      actions={[
        {
          icon: EditIcon,
          tooltip: "Edit User",
          onClick: (event, rowData) => {
            // Do save operation
          },
        },
        {
          icon: DeleteIcon,
          tooltip: "Delete User",
          onClick: (event, rowData) => {
            // Do save operation
          },
        },
      ]}
    />
  );
}

export default DataSection;
