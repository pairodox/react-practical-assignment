import {Route, Routes} from "react-router";
import {useState} from "react";
import Create_post from "./Create_post";
import Post_pages from "./Post_pages";
import Create_comment from "./Create_comment";
import Search from "./Search";
import Update_post from "./Update_post";
import Delete_post from "./Delete_post";
import {CREATE_COMMENT, CREATE_POST, DELETE_POST, MAIN_URL, SEARCH, UPDATE_POST} from "../utils/const";
import Update_comment from "./Update_comment";
import Delete_comment from "./Delete_comment";
const router_post = require("server/routes/post.js")
const router_comment = require("server/routes/comment.js")

const Main = ({username}) => {
    return(
        <div id={"main"}>
            <p>Welcome, {username}</p>
            <Routes>
                <Route path={MAIN_URL} element={<Main username= {username}/>}/>
                <Route path={CREATE_POST} element={<Create_post username={username}/>}/>
                <Route path={UPDATE_POST} element={<Update_post username={username} post_id={''}/>}/>
                <Route path={DELETE_POST} element={<Delete_post username={username} post_id={''}/>}/>
                {/*<Route path={path from server router} element={<Post_pages login = {login}/>}/>*/}
                <Route path={SEARCH} element={<Search username={username} />}/>
                <Route path={CREATE_COMMENT} element={<Create_comment username={username} post = {''}/>}/>
                <Route path={UPDATE_POST} element={<Update_comment username={username} post_id={''} comment_id={''}/>}/>
                <Route path={DELETE_POST} element={<Delete_comment username={username} post_id={''} comment_id={''}/>}/>
            </Routes>
        </div>
    )
}
export default Main