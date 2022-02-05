import React from "react";

export const List = ({ posts }) => {
  console.log(posts);
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
