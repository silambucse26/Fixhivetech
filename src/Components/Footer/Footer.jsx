import React from 'react';
import './Footer.css';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Company Info */}
                <div className="footer-col">
                    <h2 className="logo">
                        <span className="fix">Fixhive</span>
                        <span className="tech">Technologies</span>
                    </h2>
                    <p>Your trusted partner for professional services. From digital solutions to home services, we're here to make your life easier.</p>
                    <ul className="contact-info">
                        <li><FaMapMarkerAlt /> Hosur, Krishnagiri-635109, Tamil Nadu</li>
                        <li><FaPhone /> +91 8667262585</li>
                        <li><FaEnvelope />fixhivetechnologies@gmail.com</li>
                        <li><FaClock /> 24/7 Emergency Services Available</li>
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li>Web Design & Development</li>
                        <li>Electrician Services</li>
                        <li>Auto Pickup & Delivery</li>
                        <li>Career Counselling</li>
                        <li>UI/UX Designer</li>
                        <li>Digital Marketing For All Shops</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>About Us</li>
                        <li>How It Works</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* CTA and Social */}
                <div className="footer-col">
                    <h4>Get Started Today</h4>
                    <p>Ready to experience the Fixhive difference? Book your first service now.</p>
                    <Link to="/services">
                        <button className="book-now">Book Now →</button>
                    </Link>
                    <h5>Follow Us</h5>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/fixhivetechnologies" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF className="icon" />
                        </a>

                        <a href="https://x.com/FixhiveTech" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="icon" />
                        </a>

                        <a href="https://www.instagram.com/fixhivetechnologies/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="icon" />
                        </a>

                        <a href="https://www.linkedin.com/company/fixhive-technologies/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="icon" />
                        </a>

                        <a href="mailto:fixhivetechnologies@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope className="icon" />
                        </a>


                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2024 Fixhive Technologies. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Service</a>
                    <a href="/">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
