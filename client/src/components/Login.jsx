import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
    let login = document.getElementById('login-input').value
    return(
        <div className={'login-page container'}>
            <Header/>
            <div className={'login-body'}>
                <input id={'login-input'} placeholder={"Enter your login"}/>
                <button id={'login-confirm'} onClick={() => {

                }}>Login</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Login