import React,{forwardRef} from "react";

function Usr(props,input){
    return(
        <div>
            <h1>Usr Component</h1>
            <input type="text" ref={input} />
        </div>
    )
}
export default forwardRef(Usr)