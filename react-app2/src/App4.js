// componentDidUpdate

import React from "react";
import "./App.css";

class App4 extends React.Component{
  constructor(){
    super()
    this.state={
      // name:"?"
      count:0
    }
    console.log("constructor")
  }
  componentDidUpdate(preProps,preState,snapshot){
    console.log("componentDidUpdate",preState.count,this.state.count)
    // ***** state update only in condition *****
    if(preState.count===this.state.count){
      alert()
    }
  }
  render(){
    console.log("render")
    return(
      <div className="App">
        {/* <h1>componentDid{this.state.name}</h1> */}
        <h1>componentDid{this.state.count}</h1>
        {/* <button onClick={()=>this.setState({name:"Update"})}>Click Here</button> */}
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click Here</button>
      </div>
    )
  }
}

export default App4;
