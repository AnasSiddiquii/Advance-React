// shouldComponentUpdate

import React from "react";
import "./App.css";

class App5 extends React.Component{
  constructor(){
    super()
    this.state={
      count:0
    }
    console.log("constructor")
  }
  shouldComponentUpdate(){
    // console.log("shouldComponentUpdate",this.state.count)
    // ***** return false by default *****
    // ***** state update only in condition *****
    if(this.state.count>=5 && this.state.count<=10){
      return true
    }
  }
  render(){
    console.log("render")
    return(
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click Here</button>
      </div>
    )
  }
}

export default App5;
