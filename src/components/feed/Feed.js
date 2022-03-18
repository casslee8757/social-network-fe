import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:8000"

export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect( () => {
        const fetchPosts = async() => {

            try{
                const res = await axios.get(`${BASE_URL}/timeline`)
                console.log('time response', res);
                setPosts(res.data)

            } catch(err){
                console.log('err', err);
            }

        }
        fetchPosts()
    }, [] )
    console.log('posts', posts);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share post= {posts} setPosts={setPosts} />
                 {posts.map( (p) => (
                     <Post key={p._id} post={p}/>
                 ) )}
            </div>
        </div>
    )
}
