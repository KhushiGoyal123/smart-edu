import React from 'react'
import './login.css';

import logo from '../images/logo.png';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';


const Login = () => {

  return (
      
      <div className="main">
        <div className="box">
            <div className="inner-box">
                <div className="forms-wrap">
                    <form action="index.html" autocomplete="off" className="sign-in-form">
                        <div className="logo">
                            <img src={logo} alt="nex" />
                            <h3>NEX</h3>
                        </div>
                        <div className="heading">
                            <h2>Welcome Back</h2>
                            <h6>Not registered yet?</h6>
                            <a href="/signup" className="toggle">Sign Up</a>
                        </div>
                        <div className="actual-form">
                            <div className="input-wrap">
                                <input type="text" minlength="4" autocomplete="off" className="input-field" required />
                                <label>Name</label>
                            </div>
                            <div className="input-wrap">
                                <input type="password" minlength="4" autocomplete="off" className="input-field" required />
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Sign In" className="sign-btn" />
                            <p className="text">Forgot your password or login details? <a href="/">Get Help</a> signing in</p>
                        </div>
                    </form>
                    <form action="index.html" autocomplete="off" className="sign-up-form">
                        <div className="logo">
                            <img src={logo} alt="nex"/>
                            <h3>NEX</h3>
                        </div>
                        <div className="heading">
                            <h2>Get Started</h2>
                            <h6>Already have an Account?</h6>
                            <a href="/signin" className="toggle">Sign In</a>
                        </div>
                        <div className="actual-form">
                            <div className="input-wrap">
                                <input type="text" minlength="4" autocomplete="off" className="input-field" required />
                                <label>Name</label>
                            </div>
                            <div className="input-wrap">
                                <input type="email" minlength="4" autocomplete="off" className="input-field" required />
                                <label>Email</label>
                            </div>
                            <div className="input-wrap">
                                <input type="password" minlength="4" autocomplete="off" className="input-field" required />
                                <label>Password</label>
                            </div>
                            <input type="submit" value="Sign Up" className="sign-btn" />
                            <p className="text">By signing up I agree to the <a href="/">Terms of Services</a> and <a href="/">Privacy Policy</a></p>
                        </div>
                    </form>
                </div>
                <div className="carousel">
                    <div className="images-wrapper">
                        <img src={image1} alt="" className="image img-1 show" />
                        <img src={image2} alt="" className="image img-2" />
                        <img src={image3} alt="" className="image img-3" />
                    </div>
                    <div className="text-slider">
                        <div className="text-wrap">
                            <div className="text-group">
                                <h2>Create Your own courses</h2>
                                <h2>Customize as you like</h2>
                                <h2>Invite students to your class</h2>
                            </div>
                        </div>
                        <div className="bullets">
                            <span className="active" data-value="1"></span>
                            <span data-value="2"></span>
                            <span data-value="3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Login