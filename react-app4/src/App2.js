// Controlled Component in React

import React,{useState} from "react";
import "./App.css";

    function App2(){
      const [val,setVal]=useState(100)
    return (
      <div className="App">
        <h1>Controlled Component in React {val}</h1>
        <input type ="text" value={val} onChange={(e)=>setVal(e.target.value)} />
      </div>
    );
    }
export default App2;
