import React, { useState, useEffect } from "react";
import { Form, Grid, Container, Card, Icon } from "semantic-ui-react";
import { CssBaseline } from "@material-ui/core";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import Andy from "./Asset/Andy.jpg";
import Paul from "./Asset/Paul.jpeg";
import Peter from "./Asset/Peter.jpg";
import Jeff from "./Asset/Jeff.jpeg";
import Jason from "./Asset/Jason.jpeg";
import Simon from "./Asset/Simon.jpeg";
import Bob from "./Asset/Bob.jpeg";
import Michel from "./Asset/Michel.jpeg";

const Profile = () => {
  const users = [
    {
      name: "Peter",
      location: "Toronto",
      faculty: "Social Science",
      profile: Peter,
      interest: "Read",
    },
    {
      name: "Jason",
      location: "Markham",
      faculty: "Engineering",
      profile: Andy,
      interest: "Skateboard",
    },
    {
      name: "Jeff",
      location: "Hamilton",
      faculty: "Commerce",
      profile: Jason,
      interest: "Photography",
    },
    {
      name: "Andy",
      location: "Mississauga",
      faculty: "Commerce",
      profile: Andy,
      interest: "Ski",
    },
    {
      name: "Paul",
      location: "Hamilton",
      faculty: "Engineering",
      profile: Peter,
      interest: "Cook",
    },
    {
      name: "Simon",
      location: "Waterloo",
      faculty: "Life Science",
      profile: Jason,
      interest: "Photography",
    },
    {
      name: "Michel",
      location: "Toronto",
      faculty: "Engineering",
      profile: Peter,
      interest: "Skateboard",
    },
    {
      name: "Bob",
      location: "Hamilton",
      faculty: "Engineering",
      profile: Andy,
      interest: "Cook",
    },
  ];

  const [faculty_select, setfaculty_select] = useState("");
  const [match, setmatch] = useState([]);
  useEffect(() => {
    setmatch(users.filter((post) => post.faculty === faculty_select));
  });
  return (
    <div className="style">
      <CssBaseline />

      <Grid>
        <Container className="chart-style">
          <Form.Group inline>
            <h6>Select Match with Faculty Preference</h6>
            <Form.Radio
              label="Engineering"
              checked={faculty_select === "Engineering"}
              value="Engineering"
              onClick={() => setfaculty_select("Engineering")}
            />
            <Form.Radio
              label="Commerce"
              checked={faculty_select === "Commerce"}
              value="Commerce"
              onClick={() => setfaculty_select("Commerce")}
            />
            <Form.Radio
              label="Life Science"
              checked={faculty_select === "Life Science"}
              value="Life Science"
              onClick={() => setfaculty_select("Life Science")}
            />
            <Form.Radio
              label="Social Science"
              checked={faculty_select === "Social Science"}
              value="Social Science"
              onClick={() => setfaculty_select("Social Science")}
            />
          </Form.Group>

          <Carousel>
            {match.map((item) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.profile}
                  alt="First slide"
                />
                <Card
                  fluid
                  centered
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>{item.location}</Card.Meta>
                    <Card.Description>
                      {item.name} is a {item.faculty} student living in{" "}
                      {item.location}. He likes to {item.interest} in his spare
                      time.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="chat" />
                      Chat Now
                    </a>
                  </Card.Content>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </Grid>
    </div>
  );
};

export default Profile;
