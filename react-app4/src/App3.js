// Uncontrolled Component in React

import React,{useRef} from "react";
import "./App.css";

function App3() {
  let inpval1 = useRef(null)
  let inpval2 = useRef(null)
  function load(e){
    e.preventDefault()
    console.log(inpval1.current.value) // using useRerf
    console.log(inpval2.current.value) // using useRef
    let inpval3=document.getElementById("inpval3").value
    console.log(inpval3)  // using javascript directly
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component in React</h1>
      <form onSubmit={load}>
        <input ref={inpval1} type="text" /><br /><br />
        <input ref={inpval2} type="text" /><br /><br />
        <input id="inpval3" type="text" /><br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App3;
