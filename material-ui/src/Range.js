import React, { useState } from "react";
import { Slider } from "@mui/material";

function Rng() {

    // eslint-disable-next-line
    const [val, setVal] = useState([40, 50]);
    
    const set = (e) => {setVal(e.target.value)}

    return (
    <center>
      <div style={{ width: 500 }}>
        <h1>Range Slider</h1>
        <Slider value={val} max={200} valueLabelDisplay="auto" onChange={set} />
      </div>
    </center>
  );
}
export default Rng;
