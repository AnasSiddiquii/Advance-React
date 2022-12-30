import React, { useState, useEffect } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((resp) => {
        resp.json().then((result) => {
          console.log("result", result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((error) => {
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
        setMode("offline");
      });
  }, []);

  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <h2>Users Page</h2>
      </div>

      <div>
        {mode === "offline" ?
          <div className="text-center alert alert-danger" role="alert">
            No Internet Connection
          </div>
          :null}

      </div>

      <div>
        <table className="table table-secondary table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
