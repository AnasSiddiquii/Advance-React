// props

import React, {useState} from 'react'
import "./App.css";
import Student from "./Student";

function App3() {
    let [name,setName] = useState("Anas")
    function update() {
        setName("Amaan")
    }
    return (
        <div className="App">
            <h1>Props in React</h1>
            <Student fname={name} lname={"Sid"} other={{sub:"MCA",sec:"A"}} />
            <button onClick={update}>Update</button>
        </div>
    )
}

export default App3