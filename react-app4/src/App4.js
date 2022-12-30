// High Order Component in React

import React,{useState} from "react";
import "./App.css";

function App4() {
  return (
    <div className="App">
      <h1>High Order Component in React</h1>
      <HOCred cmp={Counter} />
      <HOCgreen cmp={Counter} />
      <HOCblue cmp={Counter} />
    </div>
  );
}

//   \/\/\/\/\/\/\/\/\/\/\/

function HOCred (props) {
  return (
    <center>
    <h2 style={{backgroundColor:"red",padding:"1px 40px 40px 40px", width:"150px", borderRadius:"30px"}}>
      <h3>Red</h3><props.cmp /></h2>
    </center>
  )
}
function HOCgreen (props) {
  return (
    <center>
    <h2 style={{backgroundColor:"green",padding:"1px 40px 40px 40px", width:"150px", borderRadius:"30px"}}>
    <h3>Green</h3><props.cmp /></h2>
    </center>
  )
}
function HOCblue (props) {
  return (
    <center>
    <h2 style={{backgroundColor:"blue",padding:"1px 40px 40px 40px", width:"150px", borderRadius:"30px"}}>
    <h3>Blue</h3><props.cmp /></h2>
    </center>
  )
}

//   \/\/\/\/\/\/\/\/\/\/\/

function Counter(){
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Click Here</button>
    </div>
  );
}

export default App4;
