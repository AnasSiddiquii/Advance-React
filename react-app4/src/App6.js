// routing in React best practice

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Nopage from "./Nopage";

const App6 = () => {
  return (
      <div className="App">
        <h1>Routing in React</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </div>
  );
};

export default App6;
