// state

import React, { Component } from "react";
import "./App.css";

// function App2() {
class App2 extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  apple() {
    // this.setState({ data: "Apple" });
    this.setState({ data: this.state.data+1 });
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    );
  }
}

export default App2;
