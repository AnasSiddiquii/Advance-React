// list in react

import React from "react";
import "./App.css";

function App2() {
  const students = [
    { name: "Anas", phone: 12345, email: "abc@gmail.com" },
    { name: "Iqra", phone: 24680, email: "ijk@gmail.com" },
    { name: "Amaan", phone: 12345, email: "xyz@gmail.com" },
  ];

  return (
    <div className="App">
      <h1>App 2</h1>

      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data,i) => (
            data.phone===12345?
            <tr key={i}>
              <th scope="row">{i+1}</th>
              <td>{data.name}</td>
              <td>{data.phone}</td>
              <td>{data.email}</td>
            </tr>:null
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App2;
