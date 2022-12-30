// useEffect hooks in react with props

import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./User";

function App9() {
  const [data, setData] = useState(10);

  const [count, setCount] = useState(100);

  useEffect(() => console.log("useEffect1"), [data]);

  useEffect(() => console.log("useEffect2"), [count]);

  return (
    <div className="App">
      <User count={count} data={data} />

      <button onClick={() => setData(data + 1)}>Button 1</button>

      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>Button 2</button>
    </div>
  );
}

export default App9;
