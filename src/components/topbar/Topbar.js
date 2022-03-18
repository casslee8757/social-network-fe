import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom'

export default function Topbar(props) {


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
                <div className="topbarUser">
                    <img src={props.user.profilePicture} alt="" className="topbarImg"/>
                    <span className="userName">{props.user.username}</span>
                </div>
            </div>
        </div>
    )
}
