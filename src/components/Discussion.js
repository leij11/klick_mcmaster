import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { CssBaseline, Container } from "@material-ui/core";

import PostList from "./actions/PostList";
import Form from "./actions/Form";
import Header from "./actions/Header";

function Discussion(props) {
  const [posts, setposts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState({});

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10);
  };

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
      <CssBaseline />
      <Container>
        <Header handleFabClick={handleDiaOpen} />
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
    </React.Fragment>
  );
}

export default Discussion;
