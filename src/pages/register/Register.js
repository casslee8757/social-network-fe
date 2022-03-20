import "./register.css"
import Topbar from '../../components/topbar/Topbar'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


// const BASE_URL = "http://localhost:8000"
const BASE_URL = "https://casebook2022.herokuapp.com"


export default function Register() {
    const navigate = useNavigate()

    const [signup, setSignup] = useState({
        username: '',
        passwordDigest: '',
        email: ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setSignup({ ...signup, [name]: value})
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const {username, passwordDigest, email} = signup
        try{
            const res = await axios.post(`${BASE_URL}/register`, signup)
            navigate('/login')

            if(res.success === true){
                setSignup({username: '', email: '', passwordDigest: ''});
                res.success("Sign up successful")
            }

        }catch(err){
            console.log('register err', err);
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
                            placeholder="Username" 
                            name="username" 
                            type="username" 
                            className="loginInput" 
                            onChange={handleInput}/>
                        <input 
                            placeholder="Email" 
                            name="email" 
                            type="email" 
                            className="loginInput" 
                            onChange={handleInput}/>
                        <input 
                            placeholder="Password" 
                            name="passwordDigest" 
                            type="password" 
                            className="loginInput" 
                            onChange={handleInput}/>
                        <input 
                            placeholder="Password Confirm" 
                            name="password"
                            type="password" 
                            className="loginInput" />
                        <button className="loginButton"> Sign Up </button>
                        
                    </form>
                </div>
            </div>
            
        </div>
        </div>
    )
}
