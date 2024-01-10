import MaterialTable from "@material-table/core";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import StudentEntryModal from "./StudentEntryModal";
import DeleteModal from "./DeleteModal";
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
  const [editData, setEditData] = useState({
    status: false,
    data: "",
    index: "",
  });
  const [deleteData, setDeleteData] = useState({
    status: false,
    index: "",
  });
  return (
    <>
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
              setEditData({
                status: true,
                data: rowData,
                index: rowData.tableData.id,
              });
            },
          },
          {
            icon: DeleteIcon,
            tooltip: "Delete User",
            onClick: (event, rowData) => {
              setDeleteData({
                status: true,
                index: rowData.tableData.id,
              });
            },
          },
        ]}
      />
      <StudentEntryModal
        open={editData.status}
        setOpen={setEditData}
        data={editData.data}
        index={editData.index}
        type={"edit"}
      />
      <DeleteModal
        open={deleteData.status}
        setOpen={setDeleteData}
        index={deleteData.index}
      />
    </>
  );
}

export default DataSection;
