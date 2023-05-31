import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import {BrowserRouter as Router, useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router";


const Login = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('');
    return(
        <div className={'login_container'}>
                <input type={"text"} id={'login_input'} placeholder={"Enter your login"}/>
                <button id={'login_confirm'} onClick={handleClick
                    /*() => {
                    return(

                            <Routes>
                                <Route path={''} element={<Body username= {document.getElementById('login_input').value}/>}/>
                            </Routes>

                    )
                }*/}>Login</button>
        </div>
    )
}

export default Login