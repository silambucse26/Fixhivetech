import React from 'react';
import './About.css';
import { FaHeart, FaStar, FaGlobe, FaUserGraduate, FaFileAlt, FaCar, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import TechnicalServicesSection from '../../Components/Technical/Technical';


const Home = () => {
    return (
        <div>
            <Navbar />
        <div className="home">
            <header className="hero">
                <p className="welcome">Welcome to Fixhive!</p>
                <h1><span className="highlight">Where Creativity Meets</span> Technology</h1>
                <p className="desc">We're a passionate team of final-year engineering students empowering people like you with smart, beautiful, and affordable tech solutions.</p>
                <div className="hero-buttons">
                    <Link to="/services">
                    <button className="btn-primary">Explore Our Services</button>
                    </Link>
                    <Link to="/contact">
                    <button className="btn-secondary">Get In Touch</button>
                    </Link>
                </div>
                <div className="categories">
                    <div>
                        <FaFileAlt />
                        <p>Technical Services</p>
                        <small>Websites, UI/UX, AI Chatbots</small>
                    </div>
                    <div>
                        <FaLightbulb />
                        <p>Non-Technical</p>
                        <small>Career Guidance, Resume Help</small>
                    </div>
                    <div>
                        <FaUserFriends />
                        <p>Local Support</p>
                        <small>Business Tips, Local Services</small>
                    </div>
                </div>
            </header>

            <section className="why">
                <h5>Why We Do This</h5>
                <h2>Because your <span className="highlight">dream</span> matters</h2>
                <p className="desc">We're not here to just sell services. We're here to walk with you, support your growth, and build a more connected world—starting right here in Hosur.</p>
                <div className="reasons">
                    <div className="card">
                        <FaHeart className="icon blue" />
                        <h3>Because your dream matters</h3>
                        <p>Every aspiration, no matter how big or small, deserves the right support and tools to flourish.</p>
                    </div>
                    <div className="card">
                        <FaStar className="icon orange" />
                        <h3>Because your work deserves a spotlight</h3>
                        <p>Your talents and services should be seen and celebrated. We help you shine in the digital world.</p>
                    </div>
                    <div className="card">
                        <FaGlobe className="icon violet" />
                        <h3>Because tech should feel like a friend</h3>
                        <p>Technology shouldn't be intimidating. It should be accessible, friendly, and empowering for everyone.</p>
                    </div>
                </div>
            </section>
            <div>
                <TechnicalServicesSection />
            </div>

            <section className="non-tech">
                <h5>Non-Technical Services</h5>
                <div className="services">
                    <div className="service">
                        <FaUserGraduate className="icon blue" />
                        <h4>Career Guidance (10th/12th Students, You're Seen!)</h4>
                        <p>Personalized guidance to help students make informed career decisions</p>
                        <a href="#">Learn More →</a>
                    </div>
                    <div className="service">
                        <FaFileAlt className="icon violet" />
                        <h4>Resume, SOP & Interview Prep</h4>
                        <p>Professional documents and preparation that get you noticed</p>
                        <a href="#">Learn More →</a>
                    </div>
                    <div className="service">
                        <FaCar className="icon orange" />
                        <h4>Auto Driver Booking for School Safety</h4>
                        <p>Safe and reliable transportation solutions for students</p>
                        <a href="#">Learn More →</a>
                    </div>
                    <div className="service">
                        <FaLightbulb className="icon violet" />
                        <h4>Business Tips for Local Shop Owners</h4>
                        <p>Practical advice to grow your local business effectively</p>
                        <a href="#">Learn More →</a>
                    </div>
                    <div className="service">
                        <FaUserFriends className="icon orange" />
                        <h4>Tutor & Electrician Listings in Your Area</h4>
                        <p>Connect with trusted local service providers in Hosur</p>
                        <a href="#">Learn More →</a>
                    </div>
                </div>
            </section>

            <section className="who">
                <h5>Who Are We?</h5>
                <h2>We're <span className="highlight">Fixhive</span></h2>
                <p className="desc">A young, passionate team of final-year engineering students with one goal: To empower people like you with smart, beautiful, and affordable tech solutions.</p>
                <div className="values">
                    <div className="card">
                        <FaHeart className="icon blue" />
                        <h3>We Care</h3>
                        <p>Your dream matters to us. We don't just code, we care about your success.</p>
                    </div>
                    <div className="card">
                        <FaStar className="icon orange" />
                        <h3>We Focus</h3>
                        <p>From portfolio websites to career guidance, we focus on what you need most.</p>
                    </div>
                    <div className="card">
                        <FaLightbulb className="icon violet" />
                        <h3>We Innovate</h3>
                        <p>Every idea, no matter how small, gets a chance to grow with us.</p>
                    </div>
                    <div className="card">
                        <FaUserFriends className="icon orange" />
                        <h3>We Connect</h3>
                        <p>Building a more connected world, starting right here in Hosur.</p>
                    </div>
                </div>
            </section>

        </div>
        <Footer />
        </div>
    );
};

export default Home;
