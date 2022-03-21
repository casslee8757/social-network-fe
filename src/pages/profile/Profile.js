import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

// const BASE_URL = "http://localhost:8000"
const BASE_URL = "https://casebook2022.herokuapp.com"



export default function Profile(props) {
    const params = useParams();
    
    useEffect( () => {
        console.log(params);
        const fetchUsers = async () => {

            try{
                const res = await axios.get(`${BASE_URL}/users`, {userId: params})
                console.log('res',res);
            }catch(err){
                console.log('fetch user error', err);
            }
        }
        fetchUsers()
    }, []) 


    return (
        <>
            {!props.user._id 
             ?  
            <button className="rightbarFollowButton"></button>
            :
             <p></p>
            }
            <div className="profile">
                <div className="sidebar">

                <Sidebar/>
                </div>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src={props.user.profileCover}/>
                        <img className="profileUserImg" src={props.user.profilePicture}/>

                    </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{props.user.username}</h4>
                            <Link to={`/profile/${props.userId}/edit`}>Edit profile</Link>
                        </div>
                    </div>
                    <div className="profileRightBottom">

                        <Feed/>
                    </div>
                </div>

            </div>
        </>
    )
}
