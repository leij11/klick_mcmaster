import React, { useState } from "react";
import { Feed, Icon, Header, Form } from "semantic-ui-react";
import CommentPost from "./CommentPost.js";
import { Card, Button, Media, Modal } from "react-bootstrap";
import {
  Grid,
  makeStyles,
  Paper,
  ButtonBase,
  Typography,
  IconButton,
} from "@material-ui/core";
import pic from "../Asset/pic.png";
import DeleteIcon from "@material-ui/icons/Delete";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">{props.date}</Typography>
              </Grid>
              <Button variant="primary" onClick={handleShow}>
                Open to View Post
              </Button>
              <IconButton onClick={() => props.handleDelete(props.id)}>
                <DeleteIcon />
              </IconButton>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Typography variant="h5">Description</Typography>
                <Modal.Body>{props.description}</Modal.Body>
                <Typography variant="h5">Comment</Typography>
                <CommentPost />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default ItemDetail;
