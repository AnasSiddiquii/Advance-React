import React, {useState} from 'react'
import {Radio} from '@mui/material'

function Rdo(){
    const [gndr,setGndr] = useState('')
    const gender =(e)=> { console.log(e.target.value); setGndr(e.target.value) }

    return(
        <div>
            <h1>Radio Button</h1>
            
            <span>Male</span>
            <Radio color='primary' value='Male' onChange={gender} checked={gndr==='Male'} />
            
            <span>Female</span>
            <Radio color='secondary' value='Female' onChange={gender} checked={gndr==='Female'} />
            
            <br /><br /><br />

            <Radio color='secondary' disabled checked/>
        </div>
    )
}

export default Rdo