import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Topbar from './components/topbar/Topbar';

function App() {
  return (

    <Router>
      <Topbar/>
      <Routes>
        
        <Route exact path="/" element= {<Home/>} />
        <Route exact path="/login" element= {<Login/>} />
        <Route exact path="/register" element= {<Register/>} />
        <Route exact path="/profile/:username" element= {<Profile/>} />
        
        </Routes>
    </Router>
    )
}

export default App;
