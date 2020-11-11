import React from "react";
import {
  Chip,
  Grid,
  Paper,
  Typography,
  IconButton,
  ButtonGroup,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function PostList(props) {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        spacing={4}
        style={{ marginTop: "1.5rem" }}
      >
        {props.posts.map((post) => {
          return (
            <Grid item key={post.id}>
              <Paper style={{ padding: "1rem" }}>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                    <Typography variant="h5">{post.title}</Typography>
                  </Grid>
                  <Grid>
                    <Chip color="primary" label={post.topic} size="medium" />
                  </Grid>
                </Grid>
                <Typography variant="body2">{post.author}</Typography>
                <ButtonGroup>
                  <IconButton onClick={() => props.handleDelete(post.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      props.handleEditClick(post);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </ButtonGroup>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default PostList;
