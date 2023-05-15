import {Route, Routes} from "react-router";
import {useState} from "react";
//import {router as router_1} from "server/routes/post.js"
import Add_post from "./Add_post";
import Post_pages from "./Post_pages";
import Add_comment from "./Add_comment";
import Search from "./Search";
import Edit_post from "./Edit_post";
import Delete_post from "./Delete_post";

const Main = ({username}) => {
    return(
        <div id={"main"}>
            <p>Welcome, {username}</p>
            <Routes>
                <Route path={''} element={<Main login = {username}/>}/>
                {/*<Route path={/*path from server router} element={<Add_post login = {login}/>}/>
                <Route path={/*path from server router} element={<Edit_post login = {login}/>}/>
                <Route path={/*path from server router} element={<Delete_post login = {login}/>}/>
                <Route path={/*path from server router} element={<Post_pages login = {login}/>}/>
                <Route path={/*path from server router} element={<Search login = {login}/>}/>
                <Route path={/*path from server router} element={<Add_comment login = {login} post = {}/>}/>
                <Route path={/*path from server router} element={<Post_pages/>}/>*/}
            </Routes>
        </div>
    )
}
export default Main