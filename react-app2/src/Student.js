import React from "react";
class Student extends React.Component {
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }
  render() {
    return (
      <div>
        <h1>Student</h1>
      </div>
    );
  }
}
export default Student;
