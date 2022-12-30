// validation 2

import React, { useState } from "react";
function Login() {
    
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);

  function btn(e) {
    if (userid.length < 3 || password.length < 3) {
      console.log("error");
    } else {
      console.log("all good");
    }
    e.preventDefault();
  }

  function value1(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setError1(true);
    } else {
      setError1(false);
    }
    setUserid(item);
  }

  function value2(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setError2(true);
    } else {
      setError2(false);
    }
    setPassword(item);
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={btn}>

        <input type="text" placeholder="Enter User Id" onChange={value1} />{" "}
        <br /> <br />
        <span>{error1 ? <h3>Error</h3> : ""}</span>
        
        <input type="text" placeholder="Enter Password" onChange={value2} />{" "}
        <br /> <br />
        <span>{error2 ? <h3>Error</h3> : ""}</span>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}
export default Login;
