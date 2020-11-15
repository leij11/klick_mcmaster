import React, { useState, useEffect } from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { Grid } from "semantic-ui-react";
import "../App.css";
import { Container, Select, MenuItem, InputLabel } from "@material-ui/core";
import { Card, Button, Accordion, Form } from "react-bootstrap";
import Match from "./Match";
const Analytics = () => {
  const width = 55;
  const height = 285;

  const users = [
    {
      name: "Jessica",
      chatdate: "2020-11-10",
      location: "Toronto",
      faculty: "Social Science",
      profile: "./Asset/neice1.jpg",
      interest: "Read",
    },
    {
      name: "Jenny",
      chatdate: "2020-11-11",
      location: "Markham",
      faculty: "Engineering",
      profile: "./Asset/neice2.jpg",
      interest: "Skateboard",
    },
    {
      name: "Suri",
      chatdate: "2020-11-12",
      location: "Hamilton",
      faculty: "Commerce",
      profile: "./Asset/neice3.jpg",
      interest: "Photography",
    },
    {
      name: "Andy",
      chatdate: "2020-11-09",
      location: "Mississauga",
      faculty: "Commerce",
      profile: "./Asset/brother.jpg",
      interest: "Ski",
    },
    {
      name: "Emily",
      chatdate: "2020-11-09",
      location: "Hamilton",
      faculty: "Engineering",
      profile: "./Asset/sister.jpg",
      interest: "Cook",
    },
    {
      name: "Simon",
      chatdate: "2020-11-13",
      location: "Waterloo",
      faculty: "Life Science",
      profile: "./Asset/neice3.jpg",
      interest: "Photography",
    },
    {
      name: "Michel",
      chatdate: "2020-11-14",
      location: "Toronto",
      faculty: "Engineering",
      profile: "./Asset/neice3.jpg",
      interest: "Skateboard",
    },
    {
      name: "Bob",
      chatdate: "2020-11-15",
      location: "Hamilton",
      faculty: "Engineering",
      profile: "./Asset/neice3.jpg",
      interest: "Cook",
    },
  ];

  const [location_select, setlocation_select] = React.useState("All");

  const handleLocationChange = (event) => {
    setlocation_select(event.target.value);
  };

  const [match, setmatch] = useState(users);
  useEffect(() => {
    if (location_select !== "All") {
      setmatch(users.filter((post) => post.location === location_select));
    }
    if (location_select === "All") {
      setmatch(users);
    }
  });

  const faculty_temp = [];
  const location_temp = [];
  const date_temp = [];
  const interest_temp = [];
  match.forEach((item) => {
    //console.log(faculty_temp);
    //console.log(location_temp);
    faculty_temp[item.faculty]
      ? (faculty_temp[item.faculty] += 1)
      : (faculty_temp[item.faculty] = 1);

    location_temp[item.location]
      ? (location_temp[item.location] += 1)
      : (location_temp[item.location] = 1);

    date_temp[item.chatdate]
      ? (date_temp[item.chatdate] += 1)
      : (date_temp[item.chatdate] = 1);

    interest_temp[item.interest]
      ? (interest_temp[item.interest] += 1)
      : (interest_temp[item.interest] = 1);
  });

  //console.log(date_temp);
  const list_faculty = [];
  const count_faculty = [];
  for (var key in faculty_temp) {
    list_faculty.push(key);
    count_faculty.push(faculty_temp[key]);
    //console.log(count_faculty);
  }

  const list_location = [];
  const count_location = [];
  for (var item in location_temp) {
    list_location.push(item);
    count_location.push(location_temp[item]);
  }

  const list_date = [];
  const count_date = [];
  for (var date in date_temp) {
    list_date.push(date);
    count_date.push(date_temp[date]);
  }

  const list_interest = [];
  const count_interest = [];
  for (var interest in interest_temp) {
    list_interest.push(interest);
    count_interest.push(interest_temp[interest]);
  }
  //console.log(count_date);
  //console.log(list_date);
  //console.log(list_faculty);
  const faculty_chart = (
    <Doughnut
      width={width}
      height={height}
      data={{
        labels: list_faculty,
        datasets: [
          {
            data: count_faculty,
            label: "Faculty",
            borderColor: "Gray",
            hoverBackgroundColor: "Gray",
            hoverBorderColor: "Gray",
            backgroundColor: [
              "LightSteelBlue",
              "PeachPuff",
              "LemonChiffon",
              "PowderBlue",
              "LavenderBlush",
              "Pink",
              "LightGray",
              "SandyBrown",
              "PaleGoldenRod",
              "LightCoral",
              "PaleVioletRed",
            ],
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: `Number of Chat by Faculty`,
          fontSize: 20,
          fontFamily: "Mono",
          fontColor: "#2F4F4F",
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 34,
            left: 15,
            right: 15,
            bottom: 15,
          },
        },
      }}
    />
  );

  const interest_chart = (
    <Doughnut
      width={width}
      height={height}
      data={{
        labels: list_interest,
        datasets: [
          {
            data: count_interest,
            label: "Faculty",
            borderColor: "Gray",
            hoverBackgroundColor: "Gray",
            hoverBorderColor: "Gray",
            backgroundColor: [
              "LightSteelBlue",
              "PeachPuff",
              "LemonChiffon",
              "PowderBlue",
              "LavenderBlush",
              "Pink",
              "LightGray",
              "SandyBrown",
              "PaleGoldenRod",
              "LightCoral",
              "PaleVioletRed",
            ],
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: `Number of Chat by Interest`,
          fontSize: 20,
          fontFamily: "Mono",
          fontColor: "#2F4F4F",
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 34,
            left: 15,
            right: 15,
            bottom: 15,
          },
        },
      }}
    />
  );

  const location_chart = (
    <Bar
      width={width}
      height={height}
      data={{
        labels: list_location,
        datasets: [
          {
            data: count_location,
            label: "Location by City",
            borderColor: "Gray",
            hoverBackgroundColor: "Gray",
            hoverBorderColor: "Gray",
            backgroundColor: [
              "LightSteelBlue",
              "PeachPuff",
              "LemonChiffon",
              "PowderBlue",
              "LavenderBlush",
              "Pink",
              "LightGray",
              "SandyBrown",
              "PaleGoldenRod",
              "LightCoral",
              "PaleVioletRed",
            ],
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: `Number of Chat by City`,
          fontSize: 20,
          fontFamily: "Mono",
          fontColor: "#2F4F4F",
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 34,
            left: 15,
            right: 15,
            bottom: 15,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: { display: true, min: 0, stepSize: 1 },
              gridLines: {
                display: true,
                drawBorder: false,
              },
            },
          ],
        },
      }}
    />
  );

  const date_chart = (
    <Line
      width={width}
      height={height}
      data={{
        labels: list_date,
        datasets: [
          {
            data: count_date,
            label: "Chat by Date",
            borderColor: "Dark Gray",
            hoverBackgroundColor: "Gray",
            hoverBorderColor: "Gray",
            backgroundColor: ["LightGray"],
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          display: true,
          position: "bottom",
        },
        title: {
          display: true,
          text: `Number of Chat by Date`,
          fontSize: 20,
          fontFamily: "Mono",
          fontColor: "#2F4F4F",
        },
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 34,
            left: 15,
            right: 15,
            bottom: 15,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: { display: true, min: 0, stepSize: 1 },
              gridLines: {
                display: true,
                drawBorder: false,
              },
            },
          ],
        },
      }}
    />
  );
  return (
    <React.Fragment>
      <div className="style">
        <Grid>
          <Container className="chart-style">
            <Accordion defaultActiveKey="0" className="chart-title">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h3> Total Number of Chats</h3>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h2>{match.length} Chats</h2>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location_select}
              onChange={handleLocationChange}
            >
              <MenuItem value={"Toronto"}>Toronto</MenuItem>
              <MenuItem value={"Hamilton"}>Hamilton</MenuItem>
              <MenuItem value={"Markham"}>Markham</MenuItem>
              <MenuItem value={"Waterloo"}>Waterloo</MenuItem>
              <MenuItem value={"Mississauga"}>Mississauga</MenuItem>
              <MenuItem value={"All"}>All</MenuItem>
            </Select>

            <Grid.Column mobile={16} tablet={8} computer={5}>
              {faculty_chart}
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              {location_chart}
            </Grid.Column>

            <Grid.Column mobile={16} tablet={8} computer={5}>
              {date_chart}
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={5}>
              {interest_chart}
            </Grid.Column>
          </Container>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Analytics;
