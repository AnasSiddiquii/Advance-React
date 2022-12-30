// useEffect hooks in react

import React, { useState, useEffect } from "react";
import "./App.css";

function App8() {
  const [count, setCount] = useState(0);

  useEffect(() => console.log("useEffect1"));

  useEffect(() => console.log("useEffect2"));

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default App8;
