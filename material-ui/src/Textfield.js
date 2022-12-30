import { TextField } from "@mui/material";

function Txtfld () {
    
    const val = (e) => {
        console.log(e.target.value)
    }
    return(
        <div>
            <h1>Text Field</h1>
            
            <TextField label="Enter Name" color='warning' variant="standard" type='text' onChange={val} />
            <br /><br /><br />
            
            <TextField label="Enter Number" color='primary' variant="outlined" type='number' />
            <br /><br /><br />
            
            <TextField label="Password" color='secondary' variant="filled" type='password' />
            <br /><br /><br />
        </div>
    )
}

export default Txtfld