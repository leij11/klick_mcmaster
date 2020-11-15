import React from "react";
import {
  Card,
  Feed,
  Icon,
  Header,
  Modal,
  Button,
  Form,
} from "semantic-ui-react";
import CommentPost from "./CommentPost.js";

const ItemDetail = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Card fluid>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label>
              <Icon name="envelope" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Date>{props.date}</Feed.Date>
              <Feed.Summary>
                {props.title} <Feed.User>{props.author}</Feed.User>
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="FullScreen"
            trigger={<Button>Open Post</Button>}
          >
            <Modal.Header>{props.title}</Modal.Header>
            <Modal.Content>{props.description}</Modal.Content>
            <Modal.Actions>
              <CommentPost />
            </Modal.Actions>
          </Modal>
        </Feed>
      </Card.Content>
    </Card>
  );
};

export default ItemDetail;
