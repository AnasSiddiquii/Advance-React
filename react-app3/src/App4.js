// reuse component in react

import React from "react";
import "./App.css";
import Students from './Students'

function App4() {
  const students = [
    { name: "Anas", phone: 12345, email: "abc@gmail.com" },
    { name: "Iqra", phone: 24680, email: "ijk@gmail.com" },
    { name: "Amaan", phone: 12345, email: "xyz@gmail.com" },
  ];
  return (
    <div className="App">
      <h1>App 4</h1>
      {students.map((item,i)=>(
        <div key={i}>
          <Students item={item} />
        </div>
      ))}
    </div>
  );
}

export default App4;