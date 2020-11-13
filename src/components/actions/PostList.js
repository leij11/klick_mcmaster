import React, { useState, useEffect } from "react";
import {
  Chip,
  Grid,
  Paper,
  Typography,
  IconButton,
  ButtonGroup,
} from "@material-ui/core";
import { Icon, Header } from "semantic-ui-react";
import ItemDetail from "./ItemDetail";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function PostList(props) {
  const [study, setstudy] = useState([]);
  const [work, setwork] = useState([]);
  const [social, setsocial] = useState([]);

  useEffect(() => {
    setstudy(props.posts.filter((post) => post.topic === "Study"));
    setwork(props.posts.filter((post) => post.topic === "Work"));
    setsocial(props.posts.filter((post) => post.topic === "Social"));
  }, []);

  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        spacing={4}
        style={{ marginTop: "1.5rem" }}
      >
        <Grid item>
          <Paper style={{ padding: "1rem" }}>
            <div style={{ marginTop: "2rem" }}>
              <Header as="h2" icon textAlign="center">
                <Icon name="student" circular />
                <Header.Content>Study Section</Header.Content>
              </Header>
            </div>
            {study.map((item) => (
              <ItemDetail
                title={item.title}
                author={item.author}
                date={item.date}
              />
            ))}
            <div style={{ marginTop: "2rem" }}>
              <Header as="h2" icon textAlign="center">
                <Icon name="suitcase" circular />
                <Header.Content>Work Section</Header.Content>
              </Header>
            </div>
            {work.map((item) => (
              <ItemDetail
                title={item.title}
                author={item.author}
                date={item.date}
              />
            ))}

            <div style={{ marginTop: "2rem" }}>
              <Header as="h2" icon textAlign="center">
                <Icon name="street view" circular />
                <Header.Content>Social Section</Header.Content>
              </Header>
            </div>
            {social.map((item) => (
              <ItemDetail
                title={item.title}
                author={item.author}
                date={item.date}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PostList;
