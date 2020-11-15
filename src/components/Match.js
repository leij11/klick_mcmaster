import React, { useState, useEffect } from "react";
import {
  Carousel,
  Card,
  Button,
  Container,
  Jumbotron,
  ProgressBar,
} from "react-bootstrap";
import { Grid } from "@material-ui/core";
import "../App.css";
import Andy from "./Asset/Andy.jpg";
import Paul from "./Asset/brother.jpg";
import Peter from "./Asset/Peter.jpg";
import Jeff from "./Asset/neice1.jpg";
import Jason from "./Asset/neice2.jpg";
import Simon from "./Asset/neice3.jpg";
import Bob from "./Asset/grandchild2.jpg";
import Michel from "./Asset/sister.jpg";

const Match = () => {
  const users = [
    {
      name: "Peter",
      location: "Toronto",
      faculty: "Science",
      profile: Peter,
      interest: "Read",
      score: 86,
    },
    {
      name: "Jason",
      location: "Markham",
      faculty: "Engineering",
      profile: Jeff,
      interest: "Skateboard",
      score: 93,
    },
    {
      name: "Jeff",
      location: "Hamilton",
      faculty: "Commerce",
      profile: Jason,
      interest: "Photography",
      score: 74,
    },
    {
      name: "Andy",
      location: "Mississauga",
      faculty: "Commerce",
      profile: Paul,
      interest: "Ski",
      score: 53,
    },
    {
      name: "Paul",
      location: "Hamilton",
      faculty: "Engineering",
      profile: Simon,
      interest: "Cook",
      score: 93,
    },
    {
      name: "Simon",
      location: "Waterloo",
      faculty: "Science",
      profile: Andy,
      interest: "Photography",
      score: 70,
    },
    {
      name: "Michel",
      location: "Toronto",
      faculty: "Engineering",
      profile: Bob,
      interest: "Skateboard",
      score: 60,
    },
    {
      name: "Bob",
      location: "Hamilton",
      faculty: "Engineering",
      profile: Michel,
      interest: "Cook",
      score: 83,
    },
  ];

  const [Engineering, setEngineering] = useState(true);
  const [Commerce, setCommerce] = useState(true);
  const [Science, setScience] = useState(true);

  const handleEngineerChange = () => setEngineering(!Engineering);
  const handleCommerceChange = () => setCommerce(!Commerce);
  const handleScienceChange = () => setScience(!Science);

  const [match, setmatch] = useState(users);
  useEffect(() => {
    if (!Engineering) {
      setmatch(users.filter((post) => post.faculty !== "Engineering"));
    }
    if (!Commerce) {
      setmatch(users.filter((post) => post.faculty !== "Commerce"));
    }
    if (!Science) {
      setmatch(users.filter((post) => post.faculty !== "Science"));
    }

    if (Engineering & Commerce & Science) {
      setmatch(users);
    }
  });

  const [matchscore, setmatchscore] = useState(false);
  const showprogress = () => {
    setmatchscore(!matchscore);
  };
  //console.log(Engineering);
  //console.log(match);
  return (
    <React.Fragment>
      <div className="style">
        <Grid>
          <Container className="chart-style">
            <Jumbotron fluid className="Match-Header">
              <label className="Match-Label">Faculty Select</label>
              <input
                onClick={handleEngineerChange}
                checked={Engineering}
                type="checkbox"
              />
              <label>Engineer</label>
              <input
                onClick={handleCommerceChange}
                checked={Commerce}
                type="checkbox"
              />
              <label>Commerce</label>
              <input
                onClick={handleScienceChange}
                checked={Science}
                type="checkbox"
              />
              <label>Science</label>
            </Jumbotron>
            <Carousel className="Match-Card">
              {match.map((item) => (
                <Carousel.Item>
                  <Card>
                    <Card.Header>{item.location}</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        {item.name} is a {item.faculty} student living in{" "}
                        {item.location}. He likes to {item.interest} in his
                        spare time.
                      </Card.Text>
                      <Button variant="success" onClick={showprogress}>
                        Check Matching%
                      </Button>
                      {matchscore && <h3> Matching Score : {item.score}</h3>}
                      {matchscore && <ProgressBar now={item.score} />}
                    </Card.Body>
                  </Card>
                  <img
                    className="d-block w-100"
                    src={item.profile}
                    alt="First slide"
                  />
                  <Button variant="primary" className="Match-Button">
                    Chat
                  </Button>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Match;
