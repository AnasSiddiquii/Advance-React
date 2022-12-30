// dynamic routing in React best practice

import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./Users"

const App7 = () => {
  let users = [
    { id: 1, name: "Anas", email: "anas@test.com" },
    { id: 2, name: "Amaan", email: "amaan@test.com" },
    { id: 3, name: "Iqra", email: "iqra@test.com" },
  ];
  return (
    
    <div className="App">
      
      <h1>Dynamic Routing in React</h1>
      
      {
        users.map((item, i)=>
        <div key = {i}>
          <Link to={"/users/"+item.id} > <h3>{item.name}</h3> </Link>
        </div>
        )  
      }
      
      <Routes>
          <Route path="/users/:id" element={<Users users={users} />} />
      </Routes>
        
    </div>

  );
};

    

export default App7;
