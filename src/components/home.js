import React from 'react'
import './home.css';
import logo from '../images/logo.png';
import Login from './login';
import {
    Link,
    Route,
  } from "react-router-dom";
  

const Home = () => {

    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h3>NEX</h3>
                    </div>
                    <div className="nav-items">
                        {/* <h4><Link to="/">Home</Link></h4>
                        <h4><Link to="/">Upcoming Events</Link></h4> */}
                        <h4>Home</h4>
                        <h4>Upcoming Events</h4>
                        <h4>My Events</h4>
                        <h4>About Us</h4>
                        <h4>Contact Us</h4>
                        <h4>Add Event</h4>
                    </div>
                    <div className="sign">
                        <button>
                        Login
                        </button>
                        <button>
                                Sign Up
                        </button>
                        <button className="ambassador">Be an Ambassador</button>
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