import React from "react";
import {
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import FormValid from "./FormValid";
import { Modal } from "react-bootstrap";

const Form = (props) => {
  return (
    <Modal show={props.open} onHide={props.handleClose}>
      <DialogTitle>
        {props.isEdit ? "Update " : "Add "}
        Post
      </DialogTitle>
      <DialogContent>
        <FormValid formik={props.formik} />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.handleSubmit}>
          {props.isEdit ? "Update " : "Add "}
        </Button>
        <Button onClick={props.handleClose}>Cancel</Button>
      </DialogActions>
    </Modal>
  );
};

export default Form;
