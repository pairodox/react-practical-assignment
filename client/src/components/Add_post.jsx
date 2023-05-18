//import addPost from "server/controllers/postCtrl.js"

import Post from "./Post";

const Add_post = ({username}) => {
    let date = new Date().toString()
    let post_id = username + "_" + date
    let post_pages = document.getElementById("Post_pages")
    return(
        <div id={"Add_post"}>
            <input type={"text"} id={"Add_post_title"}/>
            <textarea id={"Add_post_text"} placeholder={"Enter your text"}/>
            <input type={"file"} name="Browse" onChange={}/>
            <br/>
            <button id={"Finish_post"} onClick={() =>{
                return(
                    <Post username={username}
                          post_id={post_id}
                          text={document.getElementById("Add_post_text").value}
                          title={document.getElementById("Add_post_title").value}
                          image_src={document.getElementById("Add_post_pic").value}/>
                )
                {/*change page*/}
            }}>Add post</button>
        </div>
    )
}

export default Add_post