import React,{useState} from 'react'
import { Tabs, Tab, Box } from "@mui/material"

const Tbs = () => {

    const [value, setValue] = useState('') 

    const items = (e,val) => {
        console.log(val)
        setValue(val)
    }
    
    return (
        <div>
            <h1>Tabs</h1>
            <Box style={{backgroundColor:'skyblue'}}>
            {/* <AppBar position="static;"> */}
                <Tabs value={value} onChange={items}>
                    <Tab label="Item-1" />
                    <Tab label="Item-2" />
                    <Tab label="Item-3" />
                </Tabs>
            {/* </AppBar> */}
            </Box>
            <TabPanel value={value} index={0} >Item One Details</TabPanel>
            <TabPanel value={value} index={1} >Item Two Details</TabPanel>
            <TabPanel value={value} index={2} >Item Three Details</TabPanel>
        </div>
    )
}

const TabPanel = (props) => {
    const {children,value,index}=props
    return (
        <div>
            {
                value===index && <h1>{children}</h1>
            }
        </div>
    )
}

export default Tbs