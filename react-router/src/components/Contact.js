import {  Link, Outlet } from "react-router-dom";

function Contact () {
    return(
    <div>
        <h1>Contact</h1>
        <Link to='company'>Company</Link>
        <Link to='channel'> &nbsp; Channel &nbsp; </Link>
        <Link to='other'>Other</Link>
        <Outlet />
    </div>
    )
}
export default Contact