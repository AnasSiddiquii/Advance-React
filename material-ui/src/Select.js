import React,{useState} from 'react'
import {Select, MenuItem} from '@mui/material'

function Slct () {
    
    // eslint-disable-next-line
    const [lang,setLang] = useState('')
    
    const set = (e) => {
        setLang(e.target.value)
    }

    return(
        <div>
            <h1>Select</h1>
            <Select value={lang} onChange={set} displayEmpty>
                <MenuItem value='' >Select lang.</MenuItem>
                <MenuItem value={1} >Node</MenuItem>
                <MenuItem value={2}>Laravel</MenuItem>
                <MenuItem value={3}>Django</MenuItem>
            </Select>
        </div>
    )
}

export default Slct