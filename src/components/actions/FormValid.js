import React from "react";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
} from "@material-ui/core";

const FormValid = ({ formik }) => {
  return (
    <Grid>
      <Grid item>
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </Grid>
      <Grid item>
        <FormControl style={{ width: "100%", marginTop: "1rem" }}>
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
            <MenuItem value="Work">Life</MenuItem>
            <MenuItem value="Life">Work</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid>
        <TextField
          label="Create Date"
          type="date"
          defaultValue="2020-11-15"
          variant="outlined"
          style={{ widith: "100%", marginTop: "2rem" }}
          InputLabelProps={{ shrink: true }}
          onChange={formik.handleChange}
          name="date"
          value={formik.values.date}
        />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          label="Author"
          name="author"
          onChange={formik.handleChange}
          value={formik.values.author}
        />
      </Grid>
      <Grid item>
        <TextField
          variant="outlined"
          label="Description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </Grid>
    </Grid>
  );
};

export default FormValid;
