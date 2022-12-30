// props

import React from 'react'
import "./App.css";
import Student1 from "./Student1";

class App4 extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Anas"
        }
    }
        render() {
    return (
        <div className="App">
            <h1>Props in React</h1>
            <Student1 fname={this.state.name} lname={"Sid"} />
            <button onClick={()=>this.setState({name:"Amaan"})}> Update</button>
        </div>
    )
        }
    }

export default App4