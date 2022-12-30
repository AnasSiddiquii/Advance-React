// array in react

import React from "react";
import "./App.css";

function App1() {
  // const students = ["Anas", "Amaan", "Iqra"];
  const students = [
    { name: "Anas", phone: 12345, email: "abc@gmail.com" },
    { name: "Iqra", phone: 24680, email: "ijk@gmail.com" },
    { name: "Amaan", phone: 36912, email: "xyz@gmail.com" },
  ];

  // // map function
  // students.map((item) => (console.log("my name is", item)));

  // // normal function
  // for (let i = 0; i < students.length; i++) {
  //   console.log("My name is", students[i]);
  // }

  return (
    <div className="App">
      <h1>App 1</h1>

      {/* map function */}
      <center>
        <table border="1px">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
          {students.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </table>
      </center>

      {/* normal function */}
      {/* will not work in return */}
      {/* {
        for (let i = 0; i < students.length; i++)
        {
        <h1>{students[i]}</h1>
        }
      } */}
    </div>
  );
}

export default App1;
