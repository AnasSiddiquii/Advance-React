//  useState hooks in react

import React,{useState} from "react";
import "./App.css";

function App7(){
  const [data,setData]=useState("Anas")
    return (
      <div className="App">
        <h1>{data}</h1>
        <button onClick={()=>setData("Sid")}>Click</button>
      </div>
    );
}

export default App7;
