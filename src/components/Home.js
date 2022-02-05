import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

export const Home = () => {
  const posts = [];

  const [postData, setPostData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    posts.push(postData);
    console.log(posts);
  };

  return (
    <div>
      {posts.map((post) => (
        <div></div>
      ))}

      <form onSubmit={handleSubmit}>
        <TextField
          name="fullname"
          variant="outlined"
          label="Full name"
          value={postData.fullname}
          onChange={(e) =>
            setPostData({ ...postData, fullname: e.target.value })
          }
        />

        <TextField
          name="username"
          variant="outlined"
          label="Username"
          value={postData.username}
          onChange={(e) =>
            setPostData({ ...postData, username: e.target.value })
          }
        />

        <TextField
          name="email"
          variant="outlined"
          label="Email"
          value={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />

        <Button variant="contained" color="primary" size="large" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
