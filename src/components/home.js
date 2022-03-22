import React, {useState} from 'react'
import './home.css';
import logo from '../images/logo.png';
import Login from './login';
import {
    Link,
    Route,
  } from "react-router-dom";
  

const Home = () => {
    const [click, setClick] = useState(true);

    const gotologin = () => {
       {<Login />}
    };

    const handleClick = e => {
        setClick(e.target.value);
    };
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo" href="/" />
                        <h3><a>NEX</a></h3>
                    </div>
                    <div className="nav-items">
                        <h4>Home</h4>
                        <h4>Upcoming Events</h4>
                        <h4>My Events</h4>
                        <h4>About Us</h4>
                        <h4>Contact Us</h4>
                        <h4>Add Event</h4>
                    </div>
                    <div className="sign">
                        <a href="/login">
                        Login
                        </a>
                        <a href="/signup">
                           Sign Up
                        </a>
                        <a className="ambassador">Be an Ambassador</a>
                    </div>
                </div>
            </nav>
            <div className="header-image">
                <div className="container">

                </div>
            </div>
        </>
    )
}

export default Home