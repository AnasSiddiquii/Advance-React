// validation 2

import React from "react";
import "./App.css";
import Usr1 from "./Usr1";
import Usr2 from "./Usr2";

function App9() {
  function getData(){
    alert()
  }
  return (
    <div className="App">
      <Usr1 data={getData} />
      <Usr2 data={getData} />
    </div>
  );
}
export default App9;
