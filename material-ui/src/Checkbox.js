import React,{useState} from 'react'
import "./App.css";
import {Checkbox} from '@mui/material'
import { Favorite,FavoriteBorder } from '@mui/icons-material';

function Chkbox() {
    // eslint-disable-next-line 
    const [name,setName]=useState([])
    function alt(e) {
        let data = name
        data.push(e.target.value) 
        console.log('hi')
        console.log(e.target.value)
        console.log(data)
    }

  return (
    <div>
        <h1>CheckBox</h1>
        <Checkbox color='warning' indeterminate checked />
        <Checkbox color='primary' checked />
        <Checkbox color='default' indeterminate checked />
        <Checkbox color='secondary' checked />
        <Checkbox color='success' indeterminate checked />
        <br /><br /><br />

        <Checkbox color='warning' value="anas" onChange={(e)=>{alt(e)}} />
        <Checkbox color='primary' value="iqra" onChange={(e)=>{alt(e)}} />
        <Checkbox color='secondary' value="amaan" onChange={(e)=>{alt(e)}} />
        <br /><br /><br />

        <Checkbox color='success' icon ={<FavoriteBorder />} checkedIcon ={<Favorite />} />
        <br /><br /><br />
    </div>
  );
}

export default Chkbox;