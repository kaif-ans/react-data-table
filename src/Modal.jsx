import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";

function FormData({ handleChange, input }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={input.name}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Age"
          name="age"
          value={input.age}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={input.email}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone No</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone No"
          name="phone"
          value={input.phone}
          onChange={(e) => handleChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          name="completed"
          checked={input.completed}
          onChange={(e) => handleChange(e)}
          label="Check me out"
        />
      </Form.Group>
    </Form>
  );
}

function MyVerticallyCenteredModal(props) {
  const { handleAdd_EditTable, handleChange, input } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormData handleChange={handleChange} input={input} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            handleAdd_EditTable(input?.id), props.onHide();
          }}
        >
          {input.id ? "Edit" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modal1({
  handleChange,
  handleAdd_EditTable,
  input,
  setInput,
  setModalShow,
  modalShow,
}) {
  return (
    <>
      <Button
        variant="primary"
        className="add-data-btn"
        onClick={() => {
          setModalShow(true),
            setInput({
              name: "",
              age: "",
              email: "",
              phone: "",
              completed: "",
            });
        }}
      >
        Add Data
      </Button>

      <MyVerticallyCenteredModal
        // remaining
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleAdd_EditTable={handleAdd_EditTable}
        handleChange={handleChange}
        input={input}
      />
    </>
  );
}

export default Modal1;
