//import editPost from "server/controllers/postCtrl.js"
import Post from "./Post";

const Edit_post = ({username, post_id}) => {
    let post = document.getElementById(post_id)
    return(
        <div id={"Edit_post"}>
            <input type={"text"} id={"Edit_post_title"} value={post.title}/>
            <textarea id={"Edit_post_text"} value={post.text}/>
            <button onClick={() => {
                post = <Post username = {username} post_id={post_id} text={document.getElementById("Edit_post_text").value}/>
            }}>Edit</button>
        </div>
    )
}

export default Edit_post