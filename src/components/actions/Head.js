import React from "react";

import { Grid, Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function Head({ handleFabClick, name }) {
  return (
    <Grid container alignItems="center" style={{ marginTop: "2rem" }}>
      <Grid item>
        <Fab size="small" color="primary" onClick={handleFabClick}>
          <AddIcon />
        </Fab>
      </Grid>
      <Grid item style={{ marginLeft: "1rem" }}>
        <Typography variant="h6">New Post</Typography>
      </Grid>
    </Grid>
  );
}

export default Head;
