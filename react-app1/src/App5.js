// input

import React,{useState} from 'react'
import "./App.css";

function App5(){
    
    // to change the html
    const [data,setData] = useState(null)
    
    // to show the html
    const [print,setPrint] = useState(false)
    
    function getData(val){
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }

     return (
         <div className="App">
            {/* condition to hide n show data */}
            {print?<h1>{data}</h1>:null}
            <input type="text" onChange={getData} />
            <button onClick={()=>setPrint(true)}>Submit</button>
        </div>
    )
}

export default App5