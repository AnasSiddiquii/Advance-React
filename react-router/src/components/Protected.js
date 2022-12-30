import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Protected(props){
    const {Component} = props
    const navigate = useNavigate()
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if (!login){
            navigate('login')
        }
    })

    return(
        <div>
            <h1>Protected</h1>
            <Component />
        </div>
    )
}
export default Protected