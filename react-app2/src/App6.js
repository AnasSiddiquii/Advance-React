// shouldComponentUpdate

import React from "react";
import "./App.css";
import Student from "./Student";

class App6 extends React.Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        {this.state.show?<Student />:<h1>Removed</h1>}
        <button onClick={()=>this.setState({show:!this.state.show})}>Click Here</button>
      </div>
    );
  }
}

export default App6;
