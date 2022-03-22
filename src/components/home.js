import React, {useState} from 'react'
import './home.css';
import logo from '../images/logo.png';
import img1 from'../images/1.jpeg';
import img2 from'../images/2.jpeg';
import img3 from'../images/3.jpeg';
import img4 from'../images/4.jpeg';
import img5 from'../images/5.jpeg';
import img6 from'../images/6.jpeg';
import img7 from'../images/7.jpeg';
import img8 from'../images/8.jpeg';
import img9 from'../images/9.jpeg';
import img10 from'../images/10.jpeg';
import Login from './login';
  

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
                        <a className="orange">Be an Ambassador</a>
                    </div>
                </div>
            </nav>
            <div className="maindiv">
        <div className="container"></div>
    </div>

    <div className="search">
        <div className="container">
            <div className="input">
                <input type="text" placeholder="Search for Events" />
            </div>
            <div className="search-btn">
                <button>Search</button>
            </div>
        </div>
    </div>

    <div className="filter">
        <div className="container">
            <div className="text">
                <h3>Search by Filters: </h3>
            </div>
            <div className="filters">
                <button>All</button>
                <button>IIT Bombay</button>
                <button>IIT Delhi</button>
                <button>JECRC Foundation</button>
                <button>Online</button>
                <button>Offline</button>
            </div>
        </div>
    </div>

    <div className="all-events">
        <div className="container">
            <div className="event-card">
                <div className="event-image">
                    <img src={img1} alt="image1" />
                </div>
                <div className="event-details">
                    <h2>RENAISSANCE - A grand event</h2>
                    <h4 className="date">Date: 2/5/2022 - 5/5/2022</h4>
                    <ul>
                        <li>Offline</li>
                        <li>College Fest</li>
                    </ul>
                </div>
            </div>
            <div className="event-card">
                <div className="event-image">
                    <img src={img2} alt="image2" />
                </div>
                <div className="event-details">
                    <h2>Sing Cultural Fest</h2>
                    <h4 className="date">Date: 6/3/2022 - 8/3/2022</h4>
                    <ul>
                        <li>Offline</li>
                        <li>For college Students</li>
                    </ul>
                </div>
            </div>
            <div className="event-card">
                <div className="event-image">
                    <img src={img3} alt="image3" />
                </div>
                <div className="event-details">
                    <h2>Open coding competition - Let's Code</h2>
                    <h4 className="date">Date: 1/3/2022 - 5/3/2022</h4>
                    <ul>
                        <li>Online</li>
                        <li>IIT Bombay</li>
                    </ul>
                </div>
            </div>
            <div className="event-card">
                <div className="event-image">
                    <img src={img4} alt="image4" /> 
                </div>
                <div className="event-details">
                    <h2>Athlon - Sports Competition</h2>
                    <h4 className="date">Date: 6/3/2022 - 8/3/2022</h4>
                    <ul>
                        <li>Offline</li>
                        <li>College Event</li>
                    </ul>
                </div>
            </div>
            <div className="event-card">
                <div className="event-image">
                    <img src={img5} alt="image5" />
                </div>
                <div className="event-details">
                    <h2>Webinar at JECRC</h2>
                    <h4 className="date">Date: 2/4/2022 - 5/4/2022</h4>
                    <ul>
                        <li>Online</li>
                        <li>JECRC Foundation</li>
                    </ul>
                </div>
            </div>
            <div className="event-card">
                <div className="event-image">
                    <img src={img6} alt="image6" />
                </div>
                <div className="event-details">
                    <h2>JU Rhythm 22 - Beats of Imagination</h2>
                    <h4 className="date">Date: 24/3/2022 - 26/3/2022</h4>
                    <ul>
                        <li>Offline</li>
                        <li>College Fest</li>
                    </ul>
                </div>
                </div>
                </div>
                </div>

                <div class="container-btn">
        <button class="all">Watch all events</button>
    </div>

    <div class="gradient">
        <h1 class="text">Featured Events</h1>
        <div class="gradient-flex">
            <div class="special-container">
                <div class="event-card">
                    <div class="event-image">
                        <img src={img7} alt="image7" />
                    </div>
                    <div class="event-details">
                        <h2>Electro Beats - Groove with Beats</h2>
                        <h4 class="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-image">
                        <img src={img8} alt="image8" />
                    </div>
                    <div class="event-details">
                        <h2>Business Summit - For MBA Graduates</h2>
                        <h4 class="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-image">
                        <img src={img9} alt="image9" />
                    </div>
                    <div class="event-details">
                        <h2>SARAS - For music lovers</h2>
                        <h4 class="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
                <div class="event-card">
                    <div class="event-image">
                        <img src={img10} alt="image10" />
                    </div>
                    <div class="event-details">
                        <h2>JU Rhythm 22 - Beats of Imagination</h2>
                        <h4 class="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../js/login.js"></script>
        </>
    )
}

export default Home