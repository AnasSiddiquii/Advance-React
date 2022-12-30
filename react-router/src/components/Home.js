import { Link, useNavigate, useLocation } from "react-router-dom";

function Home () {
    const navigate =useNavigate()
    const navToPage = (url)=>{navigate(url)}
    
    const location = useLocation()
    console.log(location)
    return(
    <div>
        <h1>Home</h1>
        <Link to='/about' state={{name:'Anas'}}>Go to About Page</Link>
        {/* <button onClick={()=>navigate('/about')}>Go to About Page</button> */}
        {/* <button onClick={()=>navigate('/filter')}>Go to Filter Page</button> */}
        <button onClick={()=>navToPage('/about')}>Go to About Page</button>
        <button onClick={()=>navToPage('/filter')}>Go to Filter Page</button>
    </div>
    )
}
export default Home