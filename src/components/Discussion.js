import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { Container, Grid } from "semantic-ui-react";
import PostList from "./actions/PostList";
import Form from "./actions/Form";
import Head from "./actions/Head";
import "../App.css";

function Discussion(props) {
  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  };

  const [posts, setposts] = useState([
    {
      id: uuidv4(),
      title: "Cs4hc3 help",
      author: "Jessica",
      description: "Keep having bug in A3.",
      date: "2020-11-11",
      topic: "Study",
    },
    {
      id: uuidv4(),
      title: "Google Interview",
      author: "Jenny",
      description: "Having interview next week",
      date: "2020-11-10",
      topic: "Work",
    },
    {
      id: uuidv4(),
      title: "Compsci 3MI3 Question",
      author: "Suri",
      description: "Cannot solve Compsci 3MI3 Assignment 2. Need help!",
      date: "2020-11-12",
      topic: "Study",
    },
    {
      id: uuidv4(),
      title: "Ski 2020",
      author: "Jackson",
      description: "Anyone going to ski together on Dec 24, 2020?",
      date: "2020-11-11",
      topic: "Social",
    },
    {
      id: uuidv4(),
      title: "Coffee Break",
      author: "Simon",
      description: "Hosting coffee break this week in JHE",
      date: "2020-11-12",
      topic: "Social",
    },
    {
      id: uuidv4(),
      title: "Amazon Onsite Next Week",
      author: "Emily",
      description: "What to prepare for the onsite interview next week",
      date: "2020-11-10",
      topic: "Work",
    },
    {
      id: uuidv4(),
      title: "Cs4hc3 help",
      author: "Jessica",
      description: "Keep having bug in A3.",
      date: "2020-11-11",
      topic: "Study",
    },
    {
      id: uuidv4(),
      title: "Google Interview",
      author: "Jenny",
      description: "Having interview next week",
      date: "2020-11-10",
      topic: "Work",
    },
    {
      id: uuidv4(),
      title: "Compsci 3MI3 Question",
      author: "Suri",
      description: "Cannot solve Compsci 3MI3 Assignment 2. Need help!",
      date: "2020-11-12",
      topic: "Study",
    },
    {
      id: uuidv4(),
      title: "Ski 2020",
      author: "Jackson",
      description: "Anyone going to ski together on Dec 24, 2020?",
      date: "2020-11-11",
      topic: "Social",
    },
    {
      id: uuidv4(),
      title: "Coffee Break",
      author: "Simon",
      description: "Hosting coffee break this week in JHE",
      date: "2020-11-12",
      topic: "Social",
    },
    {
      id: uuidv4(),
      title: "Amazon Onsite Next Week",
      author: "Emily",
      description: "What to prepare for the onsite interview next week",
      date: "2020-11-10",
      topic: "Work",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState({});

  useEffect(() => {
    if (isEdit) {
      formik.values.title = edit.title;
      formik.values.author = edit.author;
      formik.values.date = edit.date;
      formik.values.topic = edit.topic;
      formik.values.description = edit.description;
    } else {
      formik.values.title = "";
      formik.values.author = "";
      formik.values.date = getCurrentDate();
      formik.values.topic = "";
      formik.values.description = "";
    }
  }, [isEdit]);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      date: getCurrentDate(),
      topic: "",
      description: "",
    },
  });

  const handleDiaOpen = () => {
    setIsOpen(true);
  };
  const handleDiaClose = () => {
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    setposts(posts.filter((post) => post.id !== id));
  };

  const handleEditClick = (post) => {
    setIsOpen(true);
    setIsEdit(true);
    setEdit(post);
  };
  const handleSubmit = (e) => {
    const { title, author, date, topic, description } = formik.values;
    if (!isEdit) {
      setposts([
        ...posts,
        {
          id: uuidv4(),
          title: title,
          author: author,
          date: date,
          topic: topic,
          description: description,
        },
      ]);
    } else {
      const newpost = [...posts];
      const t = newpost.find((t) => t.id === edit.id);
      t.title = title;
      t.author = author;
      t.date = date;
      t.topic = topic;
      t.description = description;
      setIsEdit(false);
      setEdit({});
      setposts(newpost);
    }
    setIsOpen(false);
    formik.values.title = "";
    formik.values.author = "";
    formik.values.date = getCurrentDate();
    formik.values.topic = "";
    formik.values.description = "";
  };

  return (
    <React.Fragment>
      <div className="style">
        <Grid>
          <Container className="chart-style">
            <Head handleFabClick={handleDiaOpen} />
            <PostList
              posts={posts}
              handleDelete={handleDelete}
              handleEditClick={handleEditClick}
            />
          </Container>
          <Form
            open={isOpen}
            handleClose={handleDiaClose}
            handleSubmit={handleSubmit}
            formik={formik}
            isEdit={isEdit}
          />
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default Discussion;
