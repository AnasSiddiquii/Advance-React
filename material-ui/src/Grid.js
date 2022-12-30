import { Grid } from "@mui/material"

const Grd = () => {
    return (
        <div>
            <Grid xs={12} item container spacing={2}>   {/*  spacing not working */}
                <Grid lg={3} item sm={6} xs={12} ><h1 style={{backgroundColor:'skyblue'}}>Grid1</h1></Grid>
                <Grid lg={3} item sm={6} xs={12} ><h1 style={{backgroundColor:'skyblue'}}>Grid2</h1></Grid>
                <Grid lg={3} item sm={6} xs={12} ><h1 style={{backgroundColor:'skyblue'}}>Grid3</h1></Grid>
                <Grid lg={3} item sm={6} xs={12} ><h1 style={{backgroundColor:'skyblue'}}>Grid4</h1></Grid>
            </Grid>
        </div>
    )
}

export default Grd