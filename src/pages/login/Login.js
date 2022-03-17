import "./login.css"
import Topbar from '../../components/topbar/Topbar'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const API_BASE_URL = "http://localhost:8000"

export default function Login() {
    
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "", 
        password: ""
    })

    const handleInput = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.post(`${API_BASE_URL}/login`, user)
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
            console.log('res', res);
            localStorage.setItem('jwt', res.data.token)
            navigate('/')

        }catch(err){
            console.log('login err',err);
        }
    }


    return (
        <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">CaseBook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input 
                            placeholder="Email" 
                            name="email" 
                            className="loginInput" 
                            onChange={handleInput}/>
                        <input 
                            placeholder="Password" 
                            name="password" 
                            type="password" 
                            className="loginInput" 
                            onChange={handleInput}/>
                        <button className="loginButton"> Log In </button>
                        <button className="loginRegisterButton" onClick={ () => {navigate('/register')}}>Sign Up</button>
                    </form>
                </div>
            </div>
            
        </div>
        </div>
    )
}
