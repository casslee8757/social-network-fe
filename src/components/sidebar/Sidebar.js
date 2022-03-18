import "./sidebar.css"
import {RssFeed, Chat, Bookmark, SportsEsports, AccountBox} from "@material-ui/icons"
import { Link } from 'react-router-dom'


export default function Sidebar(props) {
    console.log('props', props);
    return (
        <div className="sidebar">
            <div className="slidebarWrapper">
                <ul className="sidebarList">
                    <Link className= "feedLink" to={'/'}>
                        <li className="sidebarListItem">
                        <RssFeed className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                        </li>
                    </Link>
                    <Link className= "feedLink" to={`/profile/${props.user._id}`}>
                        <li className="sidebarListItem">
                        <AccountBox className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Profile</span>
                        </li>
                    </Link>

                    <li className="sidebarListItem">
                        <Chat className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>

                    <li className="sidebarListItem">
                        <Bookmark className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>

                    <li className="sidebarListItem">
                        <SportsEsports className = "sidebarIcon"/>
                        <span className="sidebarListItemText">Games</span>
                    </li>
                </ul>
                <hr className="sidebarHr"/>
                <h4 className="sidebarTitle">Online Friends</h4>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <div className="sidebarProfileImgContainer">

                            <img className="sidebarFriendImg" src="https://images.theconversation.com/files/433014/original/file-20211121-21-ss333x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
                            <span className="sidebarOnline"></span>

                        </div>
                        <span className="sidebarUsername">Henry Matisse</span>
                    </li>

                    <li className="sidebarFriend">
                        <div className="sidebarProfileImgContainer">

                            <img className="sidebarFriendImg" src="https://images.theconversation.com/files/433014/original/file-20211121-21-ss333x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
                            <span className="sidebarOnline"></span>

                        </div>
                        <span className="sidebarUsername">Henry Matisse</span>
                    </li>

                    <li className="sidebarFriend">
                        <div className="sidebarProfileImgContainer">

                            <img className="sidebarFriendImg" src="https://images.theconversation.com/files/433014/original/file-20211121-21-ss333x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
                            <span className="sidebarOnline"></span>

                        </div>
                        <span className="sidebarUsername">Henry Matisse</span>
                    </li>

                    <li className="sidebarFriend">
                        <div className="sidebarProfileImgContainer">

                            <img className="sidebarFriendImg" src="https://images.theconversation.com/files/433014/original/file-20211121-21-ss333x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
                            <span className="sidebarOnline"></span>

                        </div>
                        <span className="sidebarUsername">Henry Matisse</span>
                    </li>

                    <li className="sidebarFriend">
                        <div className="sidebarProfileImgContainer">

                            <img className="sidebarFriendImg" src="https://images.theconversation.com/files/433014/original/file-20211121-21-ss333x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
                            <span className="sidebarOnline"></span>

                        </div>
                        <span className="sidebarUsername">Henry Matisse</span>
                    </li>

                    <li className="sidebarFriend">
                        <div className="sidebarProfileImgContainer">

                            <img className="sidebarFriendImg" src="https://images.theconversation.com/files/433014/original/file-20211121-21-ss333x.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"/>
                            <span className="sidebarOnline"></span>

                        </div>
                        <span className="sidebarUsername">Henry Matisse</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
