// useEffect hooks in react

import React from "react";
import "./App10.css";
import style from "./Custom.module.css";

function App10() {

  return (
    <div className="App">
      <h1 className="style1">App 10 Style 1</h1>
      <h1 style={{backgroundColor: "red", color: "black", padding: "10px"}}>App 10 Style 2</h1>
      <h1 className= {style.style3}>App 10 Style 1</h1>
    </div>
  );
}

export default App10;
