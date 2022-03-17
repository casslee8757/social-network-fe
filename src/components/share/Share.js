import "./share.css"
import { PermMedia,  EmojiEmotions } from "@material-ui/icons"
import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:8000"


export default function Share() {

    const [user, setUser] = useState([])
    const [file, setFile] = useState(null)
    const [newPost, setNewPost] = useState({ content: "" })

    const handleInput = (e) => {
        console.log('name value',e, name, value);
        const {name, value} = e.target
        setNewPost({
            ...newPost,
            [name]: value
        })
        console.log('new Post', newPost, name, value);
    }

    useEffect( () => {
        const fetchUser = async() => {
            try{
                const res = await axios.get(`${BASE_URL}/user/details`)
                console.log('time response', res);
                setUser(res.data)
    
            } catch(err){
                console.log('err', err);
            }
    
        }
        fetchUser()
    }, [] )

    console.log('user', user);

    

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
                        name="content"
                        onChange={ async() => await handleInput}
                        />
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom" >
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText"> Photo/Video</span>
                            <input 
                                style={{ display: "none" }}
                                type="file" 
                                id="file" 
                                accept=".png, .jpeg, .jpg" 
                                onChange={(e) => setFile(e.target.files[0])  
                            }/>
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
