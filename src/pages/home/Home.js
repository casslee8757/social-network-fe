import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import { useState } from 'react'
import "./home.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const BASE_URL = "http://localhost:8000"



export default function Home() {

    const [currentUser, setCurrentUser] = useState(undefined)
    const navigate = useNavigate()

    const loginUser = async() => {
        try{

        const res = await axios.get( `${BASE_URL}/user/detail`)
        setCurrentUser( res.data )
        console.log('home',res.data);

        } catch(err){
            console.log(err);
        } 
        loginUser()
      }


    return (
        <>
        {
            setCurrentUser !== undefined ?

            (
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>

            </div>

            )

            :
            (    
                navigate('/login')
            )
        }
        </>
    )
}
