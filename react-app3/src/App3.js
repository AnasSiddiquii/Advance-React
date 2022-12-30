// nested list in react

import React from "react";
import "./App.css";

function App3() {
  const students = [
    {
      name: "Anas",
      phone: 12345,
      address: [
        { hn: 10, city: "delhi", country: "india" },
        { hn: 11, city: "kol", country: "india" },
        { hn: 12, city: "lko", country: "india" },
        { hn: 13, city: "lmp", country: "india" },
      ],
    },
    {
      name: "Amaan",
      phone: 23456,
      address: [
        { hn: 14, city: "delhi", country: "india" },
        { hn: 15, city: "kol", country: "india" },
        { hn: 16, city: "lko", country: "india" },
        { hn: 17, city: "lmp", country: "india" },
      ],
    },
    {
      name: "Iqra",
      phone: 345657,
      address: [
        { hn: 18, city: "delhi", country: "india" },
        { hn: 19, city: "kol", country: "india" },
        { hn: 20, city: "lko", country: "india" },
        { hn: 21, city: "lmp", country: "india" },
      ],
    },
  ];

  return (
    <div className="App">
      <h1>App 3</h1>

      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" className="text-danger">
              Name
            </th>
            <th scope="col" className="text-danger">
              Phone
            </th>
            <th scope="col" className="text-danger">
              Adderss
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{data.name}</td>
              <td>{data.phone}</td>

              <td>
                <table className="table table-striped table-dark">
                  <tbody>
                    <tr>
                      <th className="text-primary">House no</th>
                      <th className="text-primary">City</th>
                      <th className="text-primary">Country</th>
                    </tr>
                    {data.address.map((item, j) => (
                      <tr key={j}>
                        <td>{item.hn}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App3;
