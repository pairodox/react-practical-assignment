import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";
import {Route, Routes} from "react-router";
//import {router as router_1} from "server/routes/post.js"
import Add_post from "./Add_post";
import Post_pages from "./Post_pages";
import Add_comment from "./Add_comment";
import Main from "./Main";
import Search from "./Search";
import Edit_post from "./Edit_post";
import Delete_post from "./Delete_post";

const Login = () => {
    return(
        <div className={'login_container'}>
            <Header/>
            <div className={'login_body'}>
                <input id={'login_input'} placeholder={"Enter your login"}/>
                <button id={'login_confirm'} onClick={() => {
                    return(
                        <Main user_id={document.getElementById('login_input').value}/>
                    )
                }}>Login</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Login