import React from "react"

function Usr1(props){
    return(
        <div>
            <h1>Usr1 Component</h1>
            <button onClick={props.data}>call fun from app</button>
        </div>
    )

}
export default Usr1