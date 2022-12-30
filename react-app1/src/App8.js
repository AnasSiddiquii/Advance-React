// validation

import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile";

function App8() {
  const [login, setLogin] = useState(1);
  function btn() {
    setLogin(!login);
  }

  return (
    <div className="App">
      <Profile />
      {/* eslint-disable-next-line  */}
      {login==1 ? <h1>Welcome Anas</h1> : login==2 ? <h1>Welcome Amaan</h1> : <h1>Welcome Iqra</h1>}
      <button onClick={btn}>Click Me</button>
    </div>
  );
}
export default App8;
