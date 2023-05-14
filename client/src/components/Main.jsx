import {Route, Routes} from "react-router";

const Main = ({user_id}) => {
    return(
        <div id={"main"}>
            <p>Welcome, {user_id}</p>
            <Routes>
                <Route path={''} element={<Main login = {user_id}/>}/>
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