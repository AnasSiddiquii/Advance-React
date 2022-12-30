import { Container } from "@mui/system"

function Cntr(){
    return(
        <div>
            <Container fixed style={{backgroundColor:"skyblue"}} >
            <h1>Container</h1>
            </Container>

            <Container maxWidth="xl" style={{backgroundColor:"skyblue"}} >
            <h1>Container</h1>
            </Container>

            <Container maxWidth="lg" style={{backgroundColor:"skyblue"}} >
            <h1>Container</h1>
            </Container>
            
            <Container maxWidth="md" style={{backgroundColor:"skyblue"}} >
            <h1>Container</h1>
            </Container>
            
            <Container maxWidth="sm" style={{backgroundColor:"skyblue"}} >
            <h1>Container</h1>
            </Container>

            <Container maxWidth="xs" style={{backgroundColor:"skyblue"}} >
            <h1>Container</h1>
            </Container>
        </div>
    )
}

export default Cntr