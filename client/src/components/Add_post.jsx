//import addPost from "server/controllers/postCtrl.js"

import Post from "./Post";

const Add_post = ({username}) => {
    let date = new Date().toString()
    let post_id = username + "_" + date
    return(
        <div id={"Add_post"}>
            <input id={"Add_post_title"}/>
            <textarea id={"Add_post_text"} placeholder={"Enter your text"}/>
            <button id={"Add_post_pic_button"}>Add a picture</button>
            {/*add picture upload*/}
            <br/>
            <button id={"Finish_post"} onClick={() =>{
                return(
                    <Post username={username}
                          post_id={post_id}
                          text={document.getElementById("Add_post_text").value}
                          title={document.getElementById("Add_post_title").value}
                          image_src={document.getElementById("Add_post_pic").value}/>
                )
            }}>Add post</button>
        </div>
    )
}

export default Add_post