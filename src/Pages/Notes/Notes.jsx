import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import axios from "axios";

export default function Notes() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: addNote,
  });

  async function addNote(values) {
    try {
      let { data } = await axios.post(
        "https://note-sigma-black.vercel.app/api/v1/notes",
        values,
        {
          headers: { token: localStorage.getItem("userToken") },
        }
      );
      console.log(data);

      // if (data.msg == "done") {
      //   values.title = "";
      //   values.content = "";
      //   handleClose();
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form action="" onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                type="text"
                name="title"
                id="title"
                class="form-control"
                placeholder="Title"
                aria-describedby="helpId"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mt-3">
              <textarea
                name="content"
                id="content"
                cols={60}
                rows={4}
                placeholder="content"
                value={formik.values.content}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Add Note
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
