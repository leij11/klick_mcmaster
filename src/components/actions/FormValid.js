import React from "react";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Form } from "semantic-ui-react";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 160,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const FormValid = ({ formik }) => {
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Title"
          placeholder="Title"
          onChange={formik.handleChange}
          value={formik.values.title}
          name="title"
        />
        <Form.Input
          fluid
          label="Author"
          placeholder="Author"
          onChange={formik.handleChange}
          value={formik.values.author}
          name="author"
        />
      </Form.Group>
      <Form.Input
        fluid
        label="Create Date"
        placeholder="2020-11-12"
        onChange={formik.handleChange}
        value={formik.values.date}
        name="date"
      />

      <FormControl
        style={{ width: "100%", marginTop: "0.5rem", marginBottom: "1rem" }}
      >
        <InputLabel style={{ marginLeft: "1rem" }}>Topic</InputLabel>
        <Select
          labelId="topic-label"
          label="topic"
          name="topic"
          onChange={formik.handleChange}
          value={formik.values.topic}
          variant="outlined"
          style={{ width: "100%" }}
        >
          <MenuItem value="Study">Study</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Social">Social</MenuItem>
        </Select>
      </FormControl>

      <Form.TextArea
        label="Description"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
        name="description"
        style={{ minHeight: 400 }}
      />
    </Form>
  );
};

export default FormValid;
