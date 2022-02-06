import React, { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "./table";
import { CircularProgress } from "@material-ui/core";
const api = axios.create({ baseURL: `http://localhost:5000/posts` });

export const List = ({ posts, setPosts }) => {
  console.log(posts);
  const [data1, setdata1] = useState([]);

  const performpost = () => {
    posts.map(async (post) => {
      const { data } = await api.post("/", {
        fullname: post.fullname,
        username: post.username,
        email: post.email,
      });
      try {
        console.log(data, "post");
      } catch (error) {
        console.log(error);
      }
    });
  };

  const perform = async () => {
    const res = await api.get("/");
    setdata1(res.data);
    try {
      console.log(data1, "get");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    performpost();
    perform();
    setPosts([]);
  }, []);

  return !data1.length ? (
    <CircularProgress />
  ) : (
    <div>
      <BasicTable data1={data1} />

      {/* {data1.map((data) => (
        <div>
          <p>{data.fullname}</p>
          <p>{data.username}</p>
          <p>{data.email}</p>
        </div>
      ))} */}
    </div>
  );
};
