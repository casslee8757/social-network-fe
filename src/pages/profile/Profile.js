import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"

export default function Profile(props) {
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
