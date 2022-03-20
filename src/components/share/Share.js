import "./share.css"
import { PermMedia,  EmojiEmotions } from "@material-ui/icons"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Picker from 'emoji-picker-react'

const BASE_URL = "http://localhost:8000"


export default function Share(props) {
    const [user, setUser] = useState([])
    const [image, setImage] = useState('')
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

   

    const handleSubmit = async (e) => {
        
        e.preventDefault();
       
        try {
            const res = await axios.post(`${BASE_URL}/create/posts`, {content: post, img: image})
            console.log('handlepost', res.data);
            props.setPosts(posts => [res.data, ...posts ])
        }catch(err){
            console.log('submithandler', err);
        }
    }

  
    const uploadImage = () => {
        
        const myWidget = window.cloudinary.createUploadWidget({
            cloudName: `dddy1dyjj`, 
            uploadPreset: `rohudcue`}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info); 
                setImage(result.info.secure_url)
              }
            }
        )
        myWidget.open()
    }
    
   

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

                <form className="shareBottom" onSubmit={handleSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText"> Photo/Video</span>
                            <input 
                                style={{ display: "none" }}
                                // type="file" 
                                name="file"
                                id="file" 
                                value={image}
                                onClick={uploadImage}
                                                          
                            />
                           
                        </label>
                        
                        
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
