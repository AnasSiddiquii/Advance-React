// eslint-disable-next-line
import React,{useState} from "react";
import "./App.css";
import Usr from "./Usr";

function App2(){
  // const[name,setName]=useState("Anas")

    return (
      <div className="App">
        {/* <h1>Hello {this.state.data}</h1> */}
        <h1>App</h1>
        {/* <User name={name} /> */}
        <Usr />
        {/* <button onClick={()=>setName("Sidhu")}>Click here</button> */}
      </div>
    );
  }

export default App2;
