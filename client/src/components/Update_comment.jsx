import editComment from "server/controllers/commentCtrl.js"

import Comment from "./Comment";

const Update_comment = ({username, post_id, comment_id}) => {
    let comment = document.getElementById(comment_id)
    return(
        <div id={"Update_comment"}>
            <textarea id={"Edit_comment_text"} value={comment.text}/>
            <button onClick={() => {
                editComment()
               //comment = <Comment username = {username} post_id={post_id} comment_id={comment_id} text={document.getElementById("Edit_comment_text").value}/>
            }}>Edit</button>
        </div>
    )
}

export default Update_comment