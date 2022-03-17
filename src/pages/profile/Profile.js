import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"

export default function Profile() {
    return (
        <>
            <div className="profile">
                <div className="sidebar">

                <Sidebar/>
                </div>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src="https://www.moma.org/d/assets/W1siZiIsIjIwMTUvMTAvMjAvOXBxeDR1dG9mMF9tYXRpc3NlY3V0b3V0LmpwZyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4NjY3XiAtZ3Jhdml0eSBDZW50ZXIgLWNyb3AgMjAwMHg2NjcrMCswIl1d/matissecutout.jpg?sha=08f7376b7ca84d59"/>
                        <img className="profileUserImg" src="https://www.lempertz.com/lempertz_api/images/1110-457-Henri-Matisse-Nadia-au-sourir.jpg"/>

                    </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">CassLee</h4>
                            
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
