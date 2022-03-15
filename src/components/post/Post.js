import "./post.css"
import {MoreVert, Favorite} from "@material-ui/icons"
import { useState } from 'react'

export default function Post() {

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
                        <img className="postProfileImg" src="https://www.lempertz.com/lempertz_api/images/1110-457-Henri-Matisse-Nadia-au-sourir.jpg" /> 
                        <span className="postUsername">David Hockney</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">Hey! it's my first post</span>
                    <img className="postImg" src="https://artsy-media-uploads.s3.amazonaws.com/1yNRKmk8Yil-Cx2jpIWa3A%2Fcustom-Custom_Size___Hockney+2.jpg"/>
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
