// pure component state in react

import React from "react";
import "./App.css";
import Count from "./Count"

class App7 extends React.PureComponent {
  constructor(){
    super()
    this.state={
      count:1
    }
  }
  render() {
    console.log("render")
    return (
      <div className="App">
        <Count count={this.state.count} />
        <button onClick={()=>this.setState({count:this.state.count})}>Click Here</button>
      </div>
    );
  }
}
export default App7;
