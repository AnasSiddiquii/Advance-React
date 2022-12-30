import { Switch } from "@mui/material"

function Stch () {
    // const get = (e) => {console.log(e.target.value)}
    const get = (e,val) => {console.log(val)}
    return(
        <div>
            <h1>Stwitch</h1>
            <Switch color="secondary" onChange={get} />
            <Switch color="warning" size="small" />
            <Switch color="primary" size="medium" />
        </div>
    )
}

export default Stch