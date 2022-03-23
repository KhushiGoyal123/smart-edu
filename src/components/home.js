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

import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {
   
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
    }
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo" href="/" />
                        <h3><a>NEX</a></h3>
                    </div>
                    <div className="nav-items">
                        <a href="/"><h4>Home</h4> </a>  
                        <a href="#upcoming"><h4>Upcoming Events</h4></a>
                        <a href="/calendar"><h4>My Events</h4></a>
                        <a href="/about"><h4>About Us</h4></a>
                        <a href="/contact"><h4>Contact Us</h4></a>
                        <a href="/add-event"><h4>Add Event</h4></a>
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
                <input type="text" placeholder="Search for Events" onChange={(e) => searchItems(e.target.value)}/>
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

    <div className="all-events" id="upcoming">
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

                <div className="container-btn">
        <button className="all">Watch all events</button>
    </div>

    <div className="gradient">
        <h1 className="text">Featured Events</h1>
        <div className="gradient-flex">
            <div className="special-container">
                <div className="event-card">
                    <div className="event-image">
                        <img src={img7} alt="image7" />
                    </div>
                    <div className="event-details">
                        <h2>Electro Beats - Groove with Beats</h2>
                        <h4 className="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-image">
                        <img src={img8} alt="image8" />
                    </div>
                    <div className="event-details">
                        <h2>Business Summit - For MBA Graduates</h2>
                        <h4 className="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-image">
                        <img src={img9} alt="image9" />
                    </div>
                    <div className="event-details">
                        <h2>SARAS - For music lovers</h2>
                        <h4 className="date">Date: 24/3/2022 - 26/3/2022</h4>
                        <ul>
                            <li>Offline</li>
                            <li>College Fest</li>
                        </ul>
                    </div>
                </div>
                <div className="event-card">
                    <div className="event-image">
                        <img src={img10} alt="image10" />
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
    </div>
    <footer>
        <div className="footer">
        <div className="first">
            <button>NEX</button>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
        </div>
        <div className="second">
            <h3>LINKS OF INTEREST</h3>
            <a href="#"><p>FAQ</p></a>
            <a href="#"><p>Twitter</p></a>
            <a href="#"><p>Facebook</p></a>
            <a href="#"><p>Youtube</p></a>
        </div>
        <div className="third">
            <h3>Copyright Nex.dev &copy; 2022 </h3>
            <h4>contact@nex.dev</h4>
        </div>
        </div>
    </footer>

    <script src="../js/login.js"></script>
        </>
    )
}

export default Home