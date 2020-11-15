import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Icon, Header, Card } from "semantic-ui-react";
import ItemDetail from "./ItemDetail";

function PostList(props) {
  const [study, setstudy] = useState([]);
  const [work, setwork] = useState([]);
  const [social, setsocial] = useState([]);

  useEffect(() => {
    setstudy(props.posts.filter((post) => post.topic === "Study"));
    setwork(props.posts.filter((post) => post.topic === "Work"));
    setsocial(props.posts.filter((post) => post.topic === "Social"));
  });

  //console.log(study);
  //console.log(work);
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        spacing={5}
        style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
      >
        <Grid item>
          <div style={{ marginTop: "2rem" }}>
            <Header as="h2" icon textAlign="center">
              <Typography variant="h3" gutterBottom>
                Study Section
              </Typography>
              <Icon name="student" circular />
            </Header>
          </div>
          <Card.Group itemsPerRow={2}>
            {study.map((item) => (
              <ItemDetail
                title={item.title}
                author={item.author}
                date={item.date}
                description={item.description}
                id={item.id}
                handleDelete={props.handleDelete}
                handleEditClick={props.handleEditClick}
              />
            ))}
          </Card.Group>

          <div style={{ marginTop: "4rem" }}>
            <Header as="h2" icon textAlign="center">
              <Typography variant="h3" gutterBottom>
                Work Section
              </Typography>
              <Icon name="suitcase" circular />
            </Header>
          </div>
          <Card.Group itemsPerRow={2}>
            {work.map((item) => (
              <ItemDetail
                title={item.title}
                author={item.author}
                date={item.date}
                description={item.description}
                id={item.id}
                handleDelete={props.handleDelete}
                handleEditClick={props.handleEditClick}
              />
            ))}
          </Card.Group>
          <div style={{ marginTop: "3rem" }}>
            <Header as="h2" icon textAlign="center">
              <Typography variant="h3" gutterBottom>
                Social Section
              </Typography>
              <Icon name="street view" circular />
            </Header>
          </div>
          <Card.Group itemsPerRow={2}>
            {social.map((item) => (
              <ItemDetail
                title={item.title}
                author={item.author}
                date={item.date}
                description={item.description}
                id={item.id}
                handleDelete={props.handleDelete}
                handleEditClick={props.handleEditClick}
              />
            ))}
          </Card.Group>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PostList;
