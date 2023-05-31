import {Route, Routes} from "react-router";
import {useState} from "react";
import Create_post from "./Create_post";
import Post_pages from "./Post_pages";
import Create_comment from "./Create_comment";
import Search from "./Search";
import Update_post from "./Update_post";
import Delete_post from "./Delete_post";
import {
    CREATE_COMMENT,
    CREATE_POST, DELETE_COMMENT,
    DELETE_POST,
    LOGGED_IN,
    MAIN_URL,
    SEARCH,
    UPDATE_COMMENT,
    UPDATE_POST
} from "../utils/const";
import Update_comment from "./Update_comment";
import Delete_comment from "./Delete_comment";
import {BrowserRouter as Router} from "react-router-dom";
import Login from "./Login";
import Main from "./Main";
//const router_post = require("../../../server/routes/post.js")
//const router_comment = require("../../../server/routes/comment.js")

const Body = ({username, post_id, comment_id, key_word}) => {
    return(
        <Router>
            <Routes>
                <Route path={''} element={<Login/>}/>
                <Route path={LOGGED_IN(username)} element={<Main username= {username}/>}/>
                <Route path={CREATE_POST} element={<Create_post username={username}/>}/>
                <Route path={UPDATE_POST(username, post_id)} element={<Update_post username={username} post_id={post_id}/>}/>
                <Route path={DELETE_POST(username, post_id)} element={<Delete_post username={username} post_id={post_id}/>}/>
                <Route path={SEARCH(username, key_word)} element={<Search username={username} key_word={key_word} />}/>
                <Route path={CREATE_COMMENT} element={<Create_comment username={username} post = {post_id}/>}/>
                <Route path={UPDATE_COMMENT(username, post_id, comment_id)} element={<Update_comment username={username} post_id={post_id} comment_id={comment_id}/>}/>
                <Route path={DELETE_COMMENT(username, post_id, comment_id)} element={<Delete_comment username={username} post_id={post_id} comment_id={comment_id}/>}/>
            </Routes>
        </Router>
    )
}
export default Body