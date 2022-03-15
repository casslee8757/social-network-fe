import "./register.css"
import Topbar from '../../components/topbar/Topbar'

export default function Register() {
    return (
        <div>
            <Topbar />
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">CaseBook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <input placeholder="Password Again" className="loginInput"/>
                        <button className="loginButton"> Sign Up </button>
                        <button className="loginRegisterButton">Log In</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}
