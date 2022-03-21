import "./post.css"
import {MoreVert, Favorite, FavoriteBorder, CommentTwoTone } from "@material-ui/icons"
import {TextField, Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { format } from "timeago.js";
import axios from 'axios'
import Comment from '../comment/Comment';

// const BASE_URL = "http://localhost:8000"
const BASE_URL = "https://casebook2022.herokuapp.com"


export default function Post(props) {

    const [like, setLike] = useState(props.post.likes.length) 
    const [isLiked, setIsLiked] = useState(false)
    const currentUser = props.post.user
    const [userComment, setUserComment] = useState('')
    const [comments, setComments] = useState(props.post.comments)

    useEffect( () => {
        setIsLiked(props.post.likes.includes(currentUser._id))
    }, [currentUser._id, props.post.likes] )

    
    const likeHandler = async () => {
        try {
            const res = await axios.put(`${BASE_URL}/likes`, {postId: props.post._id})
            // console.log('likehandler', res);
           
        }catch(err){
            console.log('submithandler', err);
        }
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked)
        // console.log('like?', isLiked);
    }

   
   

   const handleSubmit = async (e) => {
        
    e.preventDefault();
    try {
        const res = await axios.post(`${BASE_URL}/comment`, {comment: userComment, postId: props.post._id})
        console.log(userComment);
        console.log('handlepost', res.data);
        setComments([...comments, res.data])
    }catch(err){
        console.log('submithandler', err);
    }
}


    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${currentUser.username}`}>
                        <img 
                            className="postProfileImg" 
                            src= {currentUser.profilePicture ? currentUser.profilePicture : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIGWpazPhczs6kXKWOi1u8rTg2YeHKzCsEAQWd5EuLi4RY0qhEQTqgwBSLzsUpq74hOcU&usqp=CAU`} /> 
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
                        
                        <span className="postLikeCounter">
                            {like } people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> {comments.length} comments</span>
                    </div>
                </div>
                <div className="comments">
                    
                     {comments.map( (c) => <Comment key={c._id} comment={c}/>)}
                    
                </div>
                <form className="postForm" onSubmit={handleSubmit}>
                    <TextField
                        labe="add comment"
                        size="small"
                        variant="outlined"
                        className="postInput"
                        placeholder="Add comment"
                        value={userComment}
                        onChange={e => setUserComment(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        size="medium"
                        type="submit"

                    >
                        send
                    </Button>
                </form>
            </div>
        </div>
    )
}
