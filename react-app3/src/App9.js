// Ref in React

import React,{createRef} from "react";
import "./App.css";

class App9 extends React.Component {
  constructor(){
    super()
    this.input=createRef()
  }
  componentDidMount(){
    // console.log(this.input.current.value="1000")
  }
  getVal(){
    console.log(this.input.current.value)
    this.input.current.style.color="red"
    this.input.current.style.backgroundColor="black"
  }
  render() {
    return (
      <div className="App">
        <h1>Ref in React</h1>
        <input type="text" ref={this.input} />
        <button onClick={()=>this.getVal()} >Click Here</button>
      </div>
    );
  }
}

export default App9;
