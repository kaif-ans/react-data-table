import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import { nanoid } from "nanoid";

function App() {
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    completed: "",
  });

  const [modalShow, setModalShow] = React.useState(false);

  const [tableData, setTableData] = React.useState([]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
    },
    {
      name: "Phone No",
      selector: (row) => row.phone,
    },
    {
      name: "Completed",
      selector: (row) => (row.completed ? "True" : "False"),
    },
    {
      // name: "Completed",
      selector: (row) => (
        <>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => deleteTable(row.id)}
          >
            Delete
          </Button>
          &nbsp; &nbsp;
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => handleEdit(row)}
          >
            Edit
          </Button>
        </>
      ),
    },
  ];

  const data = tableData;

  function handleChange(e) {
    const handleName = e.target.name;

    const handleValue =
      handleName === "completed" ? e.target.checked : e.target.value;

    setInput((prev) => ({ ...prev, [handleName]: handleValue }));
  }

  const handleAdd_EditTable = (id) => {
    id
      ? setTableData((prev) => prev.map((el) => (el.id === id ? input : el))) //for editing
      : setTableData((prev) => [...prev, { ...input, id: nanoid() }]); //for adding
    setInput({
      name: "",
      age: "",
      email: "",
      phone: "",
      completed: "",
    });
  };

  const deleteTable = (i) => {
    const deleteData = tableData.filter((td) => td.id !== i);
    setTableData(deleteData);
  };

  function handleEdit(rowData) {
    setInput(rowData);
    setModalShow(true);
  }

  return (
    <div>
      <Modal
        input={input}
        setInput={setInput}
        handleChange={handleChange}
        handleAdd_EditTable={handleAdd_EditTable}
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
      />
    </div>
  );
}

export default App;
