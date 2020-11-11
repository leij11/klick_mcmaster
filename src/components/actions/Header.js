import React from "react";

import { Grid, Typography, Fab, InputBase } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import { fade, makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: blue,
    "&:hover": {
      backgroundColor: blue,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Header({ handleFabClick, name }) {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" style={{ marginTop: "2rem" }}>
      <Grid>
        <div className={classes.search}>
          <Fab size="small" color="primary" onClick={handleFabClick}>
            <SearchIcon />
          </Fab>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Grid>
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

export default Header;
