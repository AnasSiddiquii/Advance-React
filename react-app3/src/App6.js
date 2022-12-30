// lifting-up state in react

import React from "react";
import "./App.css";
import Usr from "./Usr";

function App6() {
  function parent(data2){
    return(
      <div>
        <h1>{data2.from} - to parent</h1>
      </div>
    )
  }
  let data1 = {from:"Parent",to:"Child"}
  return(
    <div className="App">
      <Usr data1={data1} parent={parent}/>
    </div>
  )
}
export default App6;