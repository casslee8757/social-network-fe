import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"

export default function Share() {
    return (
        <div className="share">   
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="https://wcc.art/wp-content/uploads/2021/09/Dali-headshot.jpg"/> 
                    <input placeholder="What's in your mine?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText"> Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label className="shareIcon"/>
                            <span className="shareOptionText"> Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room className="shareIcon"/>
                            <span className="shareOptionText"> Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="orange"className="shareIcon"/>
                            <span className="shareOptionText"> Feeling</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
