import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import FormValid from "./FormValid";
import { Modal } from "semantic-ui-react";

const Form = (props) => {
  return (
    <Modal onOpen={props.open} onClose={props.handleClose} open={props.open}>
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
