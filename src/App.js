import React from "react";
import { Home } from "../components/Home";
import { List } from "../components/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/next" exact element={<List />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
