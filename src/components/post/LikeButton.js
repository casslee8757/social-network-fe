import {MoreVert, Favorite, FavoriteBorder} from "@material-ui/icons"


export default function LikeButton({isLiked, handleLike, handleUnLike}) {
    return (
        <div>
            {
                isLiked
                ?
                <Favorite htmlColor="red" onClick={handleUnLike}/>

                : 
                <FavoriteBorder onClick={handleLike}/>

            }
        </div>
    )
}
