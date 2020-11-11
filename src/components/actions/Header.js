import React from "react";

import { Grid, Typography, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
function Header({ handleFabClick, name }) {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      style={{ marginTop: "2rem" }}
    >
      <Grid item>
        <Typography variant="h3">{name}</Typography>
      </Grid>
      <Grid item>
        <Fab size="medium" color="primary" onClick={handleFabClick}>
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}

export default Header;
