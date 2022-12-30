import React from "react";
import "./Students.css"
function Students(props) {
  return (
    <div>
      <span>{props.item.name}</span>
      <span>{props.item.phone}</span>
      <span>{props.item.email}</span>
    </div>
  );
}

export default Students;
