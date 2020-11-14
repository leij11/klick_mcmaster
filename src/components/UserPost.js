import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

function UserPost(props) {
  console.log(props.props.title);
  return (
    <Grid style={{ width: "100%", marginTop: "1.5rem", marginBottom: "1rem" }}>
      <Header as="h2">
        <Icon name="plug" />
        <Header.Content>{props.props.title}</Header.Content>
      </Header>
    </Grid>
  );
}

export default UserPost;
