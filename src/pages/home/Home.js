import Sidebar from '../../components/sidebar/Sidebar'
import Feed from "../../components/feed/Feed"
import "./home.css"


export default function Home(props) {

   

    return (
        <>
    
        <div className="homeContainer">
            <Sidebar user={props}/>
            <Feed/>

        </div>

        </>
    )
}
