import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  DialogActions,
  Button,
} from "@material-ui/core";
import FormValid from "./FormValid";
import { Modal } from "semantic-ui-react";

const Form = (props) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Grid container direction="column">
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
      </Grid>
    </Dialog>
  );
};

export default Form;
