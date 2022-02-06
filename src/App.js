import React, { useState } from "react";
import { Home } from "./components/Home/Home";
import { List } from "./components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home posts={posts} setPosts={setPosts} />}
        />
        <Route path="/next" exact element={<List posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
