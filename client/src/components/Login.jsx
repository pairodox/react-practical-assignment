import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";
import {Route, Routes} from "react-router";
import {router as router_1} from "server/routes/post.js"
import Add_post from "./Add_post";
import Post_pages from "./Post_pages";
import Add_comment from "./Add_comment";
import Main from "./Main";

const Login = () => {
    let [login, setLogin] = useState(document.getElementById('login-input').value)
    return(
        <div className={'login-page container'}>
            <Header/>
            <div className={'login-body'}>
                <input id={'login-input'} placeholder={"Enter your login"}/>
                <button id={'login-confirm'} onClick={() => {
                    return(
                        <Routes>
                            <Route path={''} element={<Main login = {login}/>}/>
                            <Route path={/*path from server router*/} element={<Add_post login = {login}/>}/>
                            <Route path={/*path from server router*/} element={<Post_pages login = {login}/>}/>
                            <Route path={/*path from server router*/} element={<Post_pages login = {login}/>}/>
                            <Route path={/*path from server router*/} element={<Add_comment login = {login} post = {}/>}/>
                            <Route path={/*path from server router*/} element={<Post_pages/>}/>
                        </Routes>
                    )
                }}>Login</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Login