import "./login.css"
import Topbar from '../../components/topbar/Topbar'

export default function Login() {
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
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="Password" className="loginInput"/>
                        <button className="loginButton"> Log In </button>
                        <button className="loginRegisterButton">Sign Up</button>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}
