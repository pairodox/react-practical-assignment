//import addPost from "server/controllers/postCtrl.js"

import Post from "./Post";

const Add_post = ({username}) => {
    let date = new Date().toString()
    let id = username + "_" + date
    return(
        <div id={"Add_post"}>
            <input id={}>{this.title}</input>
            <textarea className={"Add_post_text"} placeholder={"Enter your text"}/>
            <button id={"Add_post_pic"}>Add a picture</button>
            <br/>
            <button id={"Finish_post"} onClick={() =>{
                return(
                    <Post username={username} text={document.getElementById(`text_${id}`).value}/>
                )
            }}>Add post</button>
        </div>
    )
}

export default Add_post