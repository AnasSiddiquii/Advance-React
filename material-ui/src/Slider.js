import { Slider } from "@mui/material";

function Sldr() {

    const getVal=(e)=>{
        console.log(e.target.value)
    }

    const mark=[
        {value:0,label:'start'},
        {value:100,label:'middle'},
        {value:200,label:'end'}
      ]
  return (
    <center>
      
      <h1>Slider</h1>
      
      <div style={{ width: 500, height:100 }}>
        <Slider color='secondary' defaultValue={50} max={200} step={25} marks={mark} valueLabelDisplay='auto' onChange={getVal} orientation='horizontal' />
      </div>
      
      <div style={{ width: 500, height:400 }}>
        <Slider color='primary' defaultValue={50} max={200} step={25} marks={mark} valueLabelDisplay='auto' onChange={getVal} orientation='vertical' />
      </div>
    
    </center>
  );
}

export default Sldr;
