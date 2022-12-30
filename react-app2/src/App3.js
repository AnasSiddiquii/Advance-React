// componentDidMount

import React from "react";
import "./App.css";

class App3 extends React.Component{
  constructor(){
    super()
    this.state={
      name:"?"
    }
    console.log("constructor")
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  render(){
    console.log("render")
    return(
      <div className="App">
        <h1>componentDid{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Mount"})}>Click Here</button>
      </div>
    )
  }
}

export default App3;
