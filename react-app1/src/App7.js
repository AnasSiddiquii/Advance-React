// form

import React,{useState} from 'react'
import "./App.css";

function App7(){

    const [name,setName] = useState(null)
    const [sel,setSel] = useState(false)
    const [chk,setChk] = useState(null)
    function getData(e){
        console.log(name,sel,chk)
        e.preventDefault()
    }

     return (
         <div className="App">
   
            <h1>Form in React</h1>
            
            <form onSubmit={getData} style={{border:"3px solid black",borderRadius:"10px",margin:"0px 500px",padding:"30px"}}>
                
                <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" /> <br /> <br />
                
                <select onChange={(e)=>setSel(e.target.value)}>
                    <option>Select</option>
                    <option>Marvel</option>
                    <option>DC</option>
                    <option>Fox</option>
                    <option>Universal</option>
                </select> <br /> <br />
                
                <input type="checkbox"  onChange={(e)=>setChk(e.target.checked)}/>
                <span>Accpet T&C</span> <br /> <br />
                
                <button type="submit">Submit</button>
            
            </form>

            {
                chk?<h1>Hello {name} here are some {sel} updates</h1>:null
            }
   
        </div>
    )
}

export default App7