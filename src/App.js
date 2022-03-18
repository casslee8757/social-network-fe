import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Topbar from './components/topbar/Topbar';
import Profile from './pages/profile/Profile'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import {  } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


const BASE_URL = "http://localhost:8000"


function App() {

  const [currentUser, setCurrentUser] = useState({})
  // const navigate = useNavigate()

  useEffect( () => {

      const loginUser = async() => {
          try{
  
          const res = await axios.get( `${BASE_URL}/user/details`)
          setCurrentUser( res.data )
          console.log('home',res.data);
  
          } catch(err){
              console.log(err);
          } 
      }
      loginUser()
  }, [] ) 
  console.log('currentUser', currentUser);


  return (

    <Router>
      <div className="container">
        { !currentUser ? (

          <Login/>

        ) : (
          <>

            <Topbar user={currentUser}/>
              <Routes>

                <Route exact path="/" element={<Home user={currentUser}/>}/>         
                <Route exact path="/login" element= {<Login/>} />
                <Route exact path="/register" element= {<Register/>} />
                <Route exact path="/profile/:id" element= {<Profile user={currentUser}/>} />
                  
                </Routes>
          </>
        )}
      </div>
    </Router>

    )
}

export default App;
