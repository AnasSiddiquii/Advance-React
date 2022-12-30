// routing in React

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App5() {
  return (
    <div className="App">
      <h1>Routing in React</h1>
      <BrowserRouter>
        <Link to="/home">Home Page</Link>
        <br />
        <Link to="/about">About Page</Link>
        <Routes>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default App5;
