import { useState } from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import axios from 'axios';

// const BASE_URL = "http://localhost:8000"
const BASE_URL = "https://casebook2022.herokuapp.com"


export default function Topbar(props) {

    const [search, setSearch] = useState('')
    const [userDetails, setUserDetails] = useState([])

    const searchUsers = async (query) => {
        setSearch(query)
        try{
            const res = await axios.post(`${BASE_URL}/search`, {query})
            console.log(res);

            if(query === ""){
                setUserDetails([])
            }else{
                setUserDetails(res.data.user)
            }
        }catch(err){
            console.log('search err', err);
        }
    }
 
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
                    <input 
                        placeholder="Search for friends" className="searchInput"
                        type="text"
                        name="search"
                        value={search}
                        onChange={ e => searchUsers( e.target.value ) }
                    />
                    { userDetails.length !== 0 && (
                    <div className="inputResults">
                        {userDetails.map( item => {
                            return (
                                <a className="inputResultsList" 
                                    href={`/profile/${item._id}`}>
                                    <p>{item.username}</p>
                                </a>
                            )
                        })}
                    </div>
                    )}
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
                    <Link to={`/profile/${props.user._id}`}>
                    <img src={props.user.profilePicture ? props.user.profilePicture : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGWpazPhczs6kXKWOi1u8rTg2YeHKzCsEAQWd5EuLi4RY0qhEQTqgwBSLzsUpq74hOcU&usqp=CAU`} alt="" className="topbarImg"/>
                    </Link>
                    <span className="userName">{props.user.username}</span>
                </div>
            </div>
        </div>
    )
}


