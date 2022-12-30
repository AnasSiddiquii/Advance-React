import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <button>
      <Link to="/">Home Page</Link>
      </button>
      &nbsp; &nbsp; &nbsp;
      <button>
      <Link to="/about">About Page</Link>
      </button>
    </div>
  );
}
export default Nav;
