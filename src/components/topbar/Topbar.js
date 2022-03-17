import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const BASE_URL = "http://localhost:8000"

export default function Topbar() {

    const [user, setUser] = useState([])

    useEffect( () => {
        const fetchUser = async() => {
            try{
                const res = await axios.get(`${BASE_URL}/user/details`)
                console.log('time response', res);
                setUser(res.data)
    
            } catch(err){
                console.log('err', err);
            }
    
        }
        fetchUser()
    }, [] )
    console.log('user', user);

    return (
        <div className = "topbarContainer">
            <div className = "topbarLeft">
                <Link className="linkToHome" to="/">
                <span className="logo">CaseBOOK</span>
                </Link>
            </div>
            <div className = "topbarCenter">
                <div className = "searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friends" className="searchInput"/>
                </div>
            </div>
            <div className = "topbarRight">
                
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src={user.profilePicture} alt="" className="topbarImg"/>
            </div>
        </div>
    )
}
