import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import "./home.css"


export default function Home(props) {

   

    return (
        <>
    
        <div className="homeContainer">
            <Sidebar userId={props.user._id}/>
            <Feed/>

        </div>

        </>
    )
}
