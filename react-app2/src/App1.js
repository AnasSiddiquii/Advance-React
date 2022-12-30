import React from "react";
import "./App.css";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Anas",
    };
    console.warn("hello1");
  }
  render() {
    console.log("hello2");
    return (
      <div className="App">
        <h1>Hello {this.state.data}</h1>
      </div>
    );
  }
}

export default App1;
