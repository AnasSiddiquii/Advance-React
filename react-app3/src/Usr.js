import React from "react";

function Usr(props) {
  let data2 = {from:"Child",to:"Parent"}

    return(
        <div>
            <h1>{props.data1.from} - to child</h1>
            <h1>{props.parent(data2)}</h1>
        </div>
    )
}
export default Usr