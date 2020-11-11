import React from "react";
import {
  Grid,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CssBaseline,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [location, setlocation] = React.useState("");

  const handleLocationChange = (event) => {
    setlocation(event.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ marginTop: "2rem" }}
        >
          <FormControl className={classes.formControl}>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="llocation"
              value={location}
              onChange={handleLocationChange}
            >
              <MenuItem value="same city">Within same city</MenuItem>
              <MenuItem value="different city">Different City</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
