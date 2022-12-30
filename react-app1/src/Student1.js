// props
import React from "react";

class Student1 extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <h3 style={{backgroundColor:"skyblue" ,padding:"20px"}}>{this.props.fname} {this.props.lname}</h3>
      </div>
    );
  }
}
export default Student1;
