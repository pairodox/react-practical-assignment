//import addPost from "../../../server/controllers/postCtrl.js"
//import postSchema from "../../../server/models/index.js"
import Post from "./Post";
import {Route, Routes} from "react-router";
import {MAIN_URL} from "../utils/const";

const Create_post = ({username}) => {
    let date = new Date().toString()
    let post_id = username + "_" + date
    let post_pages = document.getElementById("Post_pages")
    return(
        <div id={"Create_post"}>
            <input type={"text"} id={"Add_post_title"}/>
            <textarea id={"Add_post_text"} placeholder={"Enter your text"}/>
            <input type={"file"} id = {"Add_post_pic"} name="Browse"/>
            <br/>
            <button id={"Finish_post"} onClick={() =>{
                return(
                    <Routes>
                        <Route path={MAIN_URL} element={<Post className={"Post"} username={username}
                                              post_id={post_id}
                                              text={document.getElementById("Add_post_text").value}
                                              title={document.getElementById("Add_post_title").value}
                                              image_src={document.getElementById("Add_post_pic").value}/>}/>
                    </Routes>
                )
                {/*change page*/}
            }}>Add post</button>
        </div>
    )
}

export default Create_post