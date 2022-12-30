// useRef in React

import React,{useRef} from "react";
import "./App.css";

    function App10(){
      let input=useRef(null)
      function handleinp(){
        input.current.style.color="red"
        input.current.style.backgroundColor="black"
        input.current.focus()
        input.current.value="1000"
        console.log(input.current.value)
      }
    return (
      <div className="App">
        <h1>useRef in React</h1>
        <input type="text" ref={input} />
        <button onClick={handleinp} >Click Here</button>
      </div>
    );
  }

export default App10;
