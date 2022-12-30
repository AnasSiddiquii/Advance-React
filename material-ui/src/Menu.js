import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Menu, MenuItem, Button } from '@mui/material'

const Mnu = () => {

  const [menu,setMenu] =  useState(null)

  const open = (e) => {
    setMenu(e.currentTarget)
  }

  const close = () => {
    setMenu(null)
  }

  return (
    <BrowserRouter>

      <h1>Menu</h1>
      <Button onClick={open}>Menu</Button><br />

      <Menu open={menu} onClose={close} >
        <MenuItem onClick={close} ><Link to='/'>Home</Link></MenuItem>
        <MenuItem onClick={close}><Link to='/about'>About</Link></MenuItem>
      </Menu>

      &nbsp;&nbsp;&nbsp;

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
};

const Home = () => {return(<div><h1>Home</h1></div>)}
const About = () => {return(<div><h1>About</h1></div>)}

export default Mnu;
