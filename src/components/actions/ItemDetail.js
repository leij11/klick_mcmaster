import React from "react";
import { Feed, Icon, Header, Modal, Form } from "semantic-ui-react";
import CommentPost from "./CommentPost.js";
import { Card, Button, Media } from "react-bootstrap";
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  makeStyles,
  Paper,
  ButtonBase,
  Typography,
} from "@material-ui/core";
import pic from "../Asset/pic.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
    marginTop: "2rem",
  },
  image: {
    width: 180,
    height: 100,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ItemDetail = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={pic} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5">
                    {props.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {props.author}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" style={{ cursor: "pointer" }}>
                    Open
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{props.date}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;
