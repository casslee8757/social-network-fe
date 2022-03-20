import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Topbar from './components/topbar/Topbar';
import Profile from './pages/profile/Profile'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = "https://casebook2022.herokuapp.com"
// const BASE_URL = "http://localhost:8000"


const ProtectedRoute = ({ user, children }) => {
  if (!user.username) {
    console.log('failed user authentication', user);
    return <Navigate to="/login" replace />;
  }
  console.log('successful user authentication', user);
  
  return children;
};

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [userIsLoaded, setUserIsloaded] = useState(false)

  useEffect( () => {
    const token = localStorage.getItem('jwt')
    if (token){
      console.log('token found', token );
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      loginUser()
    }else{
      setUserIsloaded(true); // user is not logged in, stop showing loading message
    }
      
  }, [] ) 
  console.log('currentUser', currentUser);

  const loginUser = async() => {
    try{

    const res = await axios.get( `${BASE_URL}/user/details`)
    setCurrentUser( res.data )
    console.log('home',res.data);
    setUserIsloaded(true);

    } catch(err){
        console.log(err);
    } 
}
  return (

    <Router>
      <div className="container">

            <Topbar user={currentUser}/>
              {
                userIsLoaded ?

              <Routes>

                <Route exact path="/" element={
                  <ProtectedRoute user={currentUser}>
                    <Home user={currentUser}/>
                  </ProtectedRoute>
                }/>         
                <Route exact path="/login" element= {<Login setCurrentUser={setCurrentUser}/>} />
                <Route exact path="/register" element= {<Register/>} />
                <Route exact path="/profile/:id" element= {<Profile user={currentUser}/>} />
                  
                </Routes>

                : 
                
                  <Login/>
                
              }
          
        </div>
    </Router>

    )
}

export default App;
