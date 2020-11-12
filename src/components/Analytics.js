import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Grid } from "semantic-ui-react";
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

  const faculty_temp = [];
  const location_temp = [];
  users.forEach((item) => {
    //console.log(faculty_temp);
    //console.log(location_temp);
    faculty_temp[item.faculty]
      ? (faculty_temp[item.faculty] += 1)
      : (faculty_temp[item.faculty] = 1);

    location_temp[item.location]
      ? (location_temp[item.location] += 1)
      : (location_temp[item.location] = 1);
  });

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
  console.log(count_location);
  console.log(list_location);
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

  const location_chart = (
    <Bar
      width={width}
      height={height}
      data={{
        labels: list_location,
        datasets: [
          {
            data: count_location,
            label: list_faculty,
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
      }}
    />
  );

  return (
    <React.Fragment>
      <Grid>
        <Grid.Row centered columns={2}>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            {faculty_chart}
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={5}>
            {location_chart}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default Analytics;
