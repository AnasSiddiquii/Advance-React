import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="div">
      <ul className="navbar">
        {/* <li><NavLink className="navlink" style={{color:"gray"}} to="/">Home</NavLink></li> */}
        
        <li><NavLink className="navlink"
        style={({isActive})=>{return {backgroundColor:isActive?"lightgreen":"skyblue"}}}
        to="/home">Home</NavLink></li>
        
        <li><NavLink className="navlink"
        style={({isActive})=>{return {backgroundColor:isActive?"lightgreen":"skyblue"}}}
        to="/about">About</NavLink></li>
        
        <li><NavLink className="navlink"
        style={({isActive})=>{return {backgroundColor:isActive?"lightgreen":"skyblue"}}}
        to="/contact">Contact</NavLink></li>

        <li><NavLink className="navlink"
        style={({isActive})=>{return {backgroundColor:isActive?"lightgreen":"skyblue"}}}
        to="/login">Login</NavLink></li>
      
      </ul>

      {/* <br /><br /> */}

      {/* <Link to="/user/Anas">Anas</Link>
      <br />
      <Link to="/user/Ashish">Ashish</Link> */}
    </div>
  );
}
export default Nav;
