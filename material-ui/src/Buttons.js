import React,{useState} from 'react'
import {Button, ButtonGroup} from '@mui/material'
import { Delete } from '@mui/icons-material';

function Buttons() {
  const [size,setSize]=useState('large')
  const [color,setColor]=useState('warning')
  const [color1,setColor1]=useState('primary')
  const [dsb,setdsb]=useState(false)
  function sizz(){
    setSize('small')
  }
  function disabled(){
    setdsb(true)
  }
  function clr(){
    setColor1('secondary')
  }
  function alt(){
    alert('function')
  }
  return (
    <div>

      <Button color='secondary'>Hello </Button>
      <br /><br /><br />

      <Button variant='contained' onClick={()=>{alert('direct')}}> Direct </Button>
      <Button variant='outlined'> Bordered </Button>
      <Button variant='contained' onClick={alt}> Function </Button>
      <br /><br /><br />
            
      
      <Button color={color} onClick={()=>{setColor('primary')}}> text1 </Button>
      <Button color={color1} onClick={clr}> text2 </Button>
      <Button color={color1} onClick={disabled} disabled={dsb}> text3 </Button>
      <br /><br /><br />

      <Button variant='contained' size='medium'> Medium </Button>
      <Button variant='contained' size='large'> Large </Button>
      <Button variant='contained' size='small'> Small </Button>
      <br /><br /><br />

      <Button variant='contained' color='secondary' startIcon={<Delete />} onClick={sizz} size={size}> {size} </Button>

      <br /><br /><br />

      <ButtonGroup color='warning' variant='outlined' disabled orientation='vertical'>
        <Button variant='contained' size='medium'> Medium </Button>
        <Button variant='contained' size='large'> Large </Button>
        <Button variant='contained' size='small'> Small </Button>
      </ButtonGroup>
      <br /><br /><br />

    </div>
  );
}

export default Buttons;
