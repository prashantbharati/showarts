import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const clear = () => {
    setPostData({ fullname: "", username: "", email: "" });
  };
  // const

  const [postData, setPostData] = useState({
    fullname: "",
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newposts = [...posts, postData];
    clear();
    setPosts(newposts);
    console.log(posts);
  };

  return (
    <div>
      {posts.map((post) => (
        <div>
          <p>{post.fullname}</p>
          <p>{post.username}</p>
          <p>{post.email}</p>
        </div>
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
          Add More
        </Button>

        <Button component={Link} to="/next" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};
