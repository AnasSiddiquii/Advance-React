// forwardRef in React

import React,{useRef} from "react";
import "./App.css";
import Usr from "./Usr";

    function App1(){
      let input=useRef(null)
      function handleinp(){
        input.current.value="1000"
        input.current.style.color="red"
        input.current.style.backgroundColor="black"
        input.current.focus()
        // console.log(input.current.value)
      }
    return (
      <div className="App">
        <h1>forwardRef in React</h1>
        <button onClick={handleinp}>Click Here</button>
        <Usr ref={input} />
      </div>
    );
  }

export default App1;
