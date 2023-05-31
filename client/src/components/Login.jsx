import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import {Link, Router} from "react-router-dom";
import {Route, Routes} from "react-router";


const Login = () => {
    return(
        <div className={'login_container'}>
            <Header/>
            {/*<Router>*/}
                <div className={'login_body'}>
                    <input type={"text"} id={'login_input'} placeholder={"Enter your login"}/>
                    {/*<Link to={``}>*/}
                        <button id={'login_confirm'} onClick={() => {
                            return(
                                <Routes>
                                    <Route path={''} element={<Main username= {document.getElementById('login_input').value}/>}/>
                                </Routes>
                                //<Main username={document.getElementById('login_input').value}/>
                            )
                        }}>Login</button>
                    {/*</Link to={``}>*/}
                </div>
            {/*}</Router>*/}
            <Footer/>
        </div>
    )
}

export default Login