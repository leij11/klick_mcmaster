import React from "react";
import { Card, Feed, Icon } from "semantic-ui-react";

const ItemDetail = (props) => {
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
        </Feed>
      </Card.Content>
    </Card>
  );
};

export default ItemDetail;
