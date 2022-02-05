import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

export const Home = ({ posts, setPosts }) => {
  const clear = () => {
    setPostData({ fullname: "", username: "", email: "" });
  };
  // const

  const [postData, setPostData] = useState({
    fullname: "",
    username: "",
    email: "",
    nameError: "",
    emailError: "",
  });

  const validate = () => {
    // let passwordError = "";
    let ne = false,
      ee = false;
    if (postData.fullname.length < 4) {
      ne = true;
      setPostData({
        ...postData,
        nameError: "name should be more than 3 characters",
      });
      console.log(postData.nameError);
    }

    if (!postData.email.includes("@")) {
      ee = true;
      setPostData({ ...postData, emailError: "invalid email" });
      console.log(postData.emailError);
    }
    console.log(ee, ne);
    if (ne || ee) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate() === true) {
      const newposts = [...posts, postData];
      clear();
      setPosts(newposts);
    }
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
        <div style={{ fontSize: 12, color: "red" }}>{postData.nameError}</div>

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
          required
          variant="outlined"
          label="Email"
          value={postData.email}
          onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        />
        <div style={{ fontSize: 12, color: "red" }}>{postData.emailError}</div>
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
