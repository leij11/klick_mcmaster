import { Icon, Header } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
function Forum({ posts }) {
  const [study, setstudy] = useState([]);
  const [work, setwork] = useState([]);
  const [social, setsocial] = useState([]);

  useEffect(() => {
    setstudy(posts.filter((post) => post.topic === "Study"));
    setwork(posts.filter((post) => post.topic === "Work"));
    setsocial(posts.filter((post) => post.topic === "Social"));
  }, []);

  return (
    <React.Fragment>
      <div style={{ marginTop: "2rem" }}>
        <Header as="h2" icon textAlign="center">
          <Icon name="student" circular />
          <Header.Content>Study Section</Header.Content>
        </Header>
      </div>
      {study.map((item) => (
        <ItemDetail title={item.title} author={item.author} date={item.date} />
      ))}

      <div style={{ marginTop: "2rem" }}>
        <Header as="h2" icon textAlign="center">
          <Icon name="suitcase" circular />
          <Header.Content>Work Section</Header.Content>
        </Header>
      </div>
      {work.map((item) => (
        <ItemDetail title={item.title} author={item.author} date={item.date} />
      ))}

      <div style={{ marginTop: "2rem" }}>
        <Header as="h2" icon textAlign="center">
          <Icon name="street view" circular />
          <Header.Content>Social Section</Header.Content>
        </Header>
      </div>
      {social.map((item) => (
        <ItemDetail title={item.title} author={item.author} date={item.date} />
      ))}
    </React.Fragment>
  );
}

export default Forum;
