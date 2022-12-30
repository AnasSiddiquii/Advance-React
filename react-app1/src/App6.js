// toggle

import React,{useState} from 'react'
import "./App.css";

function App6(){

    const [status,setStatus] = useState(true)
    
     return (
         <div className="App">
            {status?<h1>Hello World</h1>:<h1>______ ______</h1>}
            {/* <button onClick={()=>setStatus(false)}>Hide</button>
            <span>------------</span>
            <button onClick={()=>setStatus(true)}>Show</button> */}

            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default App6