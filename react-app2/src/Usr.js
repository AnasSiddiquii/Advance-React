import React from "react";

class Usr extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "anas",
    };
  }
  render() {
    console.log(this.state.name);
    return (
      <div>
        <h3>User</h3>
        <button onClick={()=>this.setState({name:"sid"})}>Click</button>
      </div>
    );
  }
}
export default Usr;
