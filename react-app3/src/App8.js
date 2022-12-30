// useMemo state in react

import React, { useState, useMemo } from "react";
import "./App.css";
function App8() {
  const [item, setItem] = useState(0);
  const [data, setData] = useState(1);
  
  const multiCount = useMemo(function multi(){
    console.log("multi")
    return item*5
  },[item])

  return (
    <div className="App">
      <h1>useMemo Hook in React</h1>
      <h2>Count 1 : {item}</h2>
      <h2>Count 2 : {data}</h2>
      <h2>Count 1 : {multiCount} (x5)</h2>
      <button onClick={() => setItem(item + 1)}>Click Here</button>
      <button onClick={() => setData(data * 10)}>Click Here</button>
    </div>
  );
}
export default App8;
