// pure component state in react

import React from "react";
import "./App.css";

class Count extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>App {this.props.count}</h1>
      </div>
    );
  }
}
export default Count;
