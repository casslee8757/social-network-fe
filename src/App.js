import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route exact path="/login" element= {<Login/>} />
        <Route exact path="/register" element= {<Register/>} />
        {/* <Route path="/profile/:username">
          <Home />
        </Route> */}
        </Routes>
    </Router>
    )
}

export default App;
