import React from "react";
import axios from "axios";

const api = axios.create({ baseURL: `http://localhost:5000/posts` });

export const List = async ({ posts }) => {
  // console.log(posts);
  posts.map(async (post) => {
    const { data } = await api.post("/", {
      fullname: post.fullname,
      username: post.username,
      email: post.email,
    });
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  });

  const data = await api.get("/");
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      {posts.map((post) => (
        <div>
          <p>{post.fullname}</p>
          <p>{post.username}</p>
          <p>{post.email}</p>
        </div>
      ))}
    </div>
  );
};
