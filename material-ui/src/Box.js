import { Box, Button } from "@mui/material"

function Boxes () {
    return(
        <div>
            <h1>Box</h1>
            <Box component="span" style={{color:'red'}} clone m={20} p={10} >
            <Button>Hello</Button>
            </Box>
        </div>
    )
}

export default Boxes