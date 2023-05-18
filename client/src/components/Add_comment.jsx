//import addComment from "server/controllers/commentCtrl.js"

import Comment from "./Comment";

const Add_comment = ({username, post_id}) => {
    let date = new Date().toString()
    let comment_id = post_id + "_" + date
    let post = document.getElementById(post_id)
    return(
        <div id={"Add_comment"}>
            <p className={"Parent_post_text"}>{post.text}</p>
            <textarea id={"Add_comment_text"} placeholder={"Enter your text"}/>
            <br/>
            <button id={"Finish_comment"} onClick={() =>{
                post.comments.append( <Comment username={username}
                                               post_id={post_id}
                                               comment_id={comment_id}
                                               text={document.getElementById("Add_comment_text").value}/>
                )
                {/*change page*/}
            }}>Add post</button>
        </div>
    )
}

export default Add_comment