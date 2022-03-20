import "./post.css"
import {MoreVert, Favorite, FavoriteBorder, PanToolSharp} from "@material-ui/icons"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from "timeago.js";
import axios from 'axios'

const BASE_URL = "http://localhost:8000"

export default function Post(props) {

    const [like, setLike] = useState(props.post.likes) 
    const [isLiked, setIsLiked] = useState(false)
    const currentUser = props.post.user

    // useEffect( () => {
    //     setIsLiked(props.post.likes.includes(currentUser._id))
    // }, [currentUser._id, props.post.likes] )
    
    const likeHandler = async () => {
        try {
            const res = await axios.put(`${BASE_URL}/likes`, {postId: props.post._id})
            console.log('likehandler', res);
           
        }catch(err){
            console.log('submithandler', err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
        // console.log('like?', isLiked);
    }

   

      


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${currentUser.username}`}>
                        <img className="postProfileImg" src={currentUser.profilePicture ? currentUser.profilePicture : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGWpazPhczs6kXKWOi1u8rTg2YeHKzCsEAQWd5EuLi4RY0qhEQTqgwBSLzsUpq74hOcU&usqp=CAU`} /> 
                        </Link>
                        <span className="postUsername">{currentUser.username}</span>
                        <span className="postDate">{format(props.post.createdAt)}</span>
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
                       
                        {
                            like
                            ?
                            <Favorite htmlColor="red" onClick={likeHandler}
                            />
                            : 
                            <FavoriteBorder onClick={likeHandler}
                            />
            
                        }
                        
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> 9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
