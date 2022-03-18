import "./share.css"
import { PermMedia,  EmojiEmotions } from "@material-ui/icons"
import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:8000"


export default function Share(props) {
    const [user, setUser] = useState([])
    const [image, setImage] = useState([])
    const [post, setPost] = useState('')

    useEffect( () => {
        const fetchUser = async() => {
            try{
                const res = await axios.get(`${BASE_URL}/user/details`)
                // console.log('time response', res);
                setUser(res.data)
    
            } catch(err){
                console.log('err', err);
            }
    
        }
        fetchUser()
    }, [] )

    // console.log('user', user);

    const handleImage = async (e) => {
        const file = e.target.files[0]
        image.push(file)
        console.log('file', file);
        setImage([ ...image])
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault();
       
        try {
            const res = await axios.post(`${BASE_URL}/create/posts`, {content: post, image})
            console.log('handlepost', res.data);
            props.setPosts(posts => [res.data, ...posts ])
        }catch(err){
            console.log('submithandler', err);
        }
    }

 

    // const submitHandler = async (e) => {
    //     e.preventDefault();
        

    //     if(file){
    //         const data = new FormData();
    //         const fileName = Date.now() + file.name
    //         data.append("file", file)
    //         data.append("name", fileName)
    //         newPost.img = fileName
    //         // try{
    //         //     await azio
    //         // }catch{
    //         //     console.log('file', err);
    //         // }
    //     }

    //     try {
    //         const res = await axios.post(`${BASE_URL}/posts`, newPost)
    //     }catch(err){
    //         console.log('submithandler', err);
    //     }


    // }

    return (
        <div className="share">   
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture}/> 
                    <input 
                        placeholder={`What's in your mind ${user.username}?`} className="shareInput" 
                        value={post}
                        onChange={e => setPost(e.target.value)}
                        />
                </div>
                <hr className="shareHr"/>

                {/* <div className="showImage">
                    {
                        <img src={URL.createObjectURL(image)} alt="image"/>
                    }
                </div> */}


                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText"> Photo/Video</span>
                            <input 
                                style={{ display: "none" }}
                                type="file" 
                                name="file"
                                id="file" 
                                multiple accept="image/*"
                                onChange={handleImage}                           
                            />
                        </label>
                        
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="orange"className="shareIcon"/>
                            <span className="shareOptionText"> Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
