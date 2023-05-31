import {useEffect} from 'react';
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router";
import Body from "./components/Body";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

    useEffect(() => {
        // TEST API, it might be removed
        fetch('http://localhost:8080/live').then(res => res.json()).then(res => {
            console.log('API CONNECTION IS OK');
        }).catch((e) => console.error('API CONNECTION FAILED, PLEASE CHECK SERVER APP AND TRY AGAIN'))
    }, []);

    return (
        <div className="App">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default App;
