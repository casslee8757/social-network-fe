import "./post.css"
import {MoreVert, Favorite} from "@material-ui/icons"
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Post(props) {

    // const [like, setLike] = useState(like)
    // const [isLiked, isSetLiked] = useState(false)

    // const likeHandler = () => {
    //     setLike( isLiked ? like-1 : like+1 )
    // }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${props.post.user.username}`}>
                        <img className="postProfileImg" src={props.post.user.profilePicture} /> 
                        </Link>
                        <span className="postUsername">{props.post.user.username}</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">{props.post.content}</span>
                    <img className="postImg" src={props.post.img}/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite htmlColor="red" className="likeIcon" /> 
                        <span className="postLikeCounter"> 32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
