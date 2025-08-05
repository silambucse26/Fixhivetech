import React from 'react';
import './Banner.css';
import { FaCalendarCheck, FaFolderOpen, FaComments } from 'react-icons/fa';
import { Link, Links } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Your Complete <span className="highlight">Service Solution</span></h1>
          <p>
            From web design to electrician services, auto pickup to career counselling –
            get professional help exactly when you need it.
          </p>
          
          <div className="cta-buttons">
            <Link to="/services">
            <button className="btn book-now">
              <FaCalendarCheck /> Book Now
            </button>
            </Link>

            <button className="btn get-portfolio">
              <FaFolderOpen /> Get Portfolio
            </button>
            <Link to="/contact">
            <button className="btn talk-to-advisor">
              <FaComments /> Talk to Advisor
            </button>
            </Link>
          </div>
          <div className="features">
            <span>🔵 500+ Happy Clients</span>
            <span>🟡 24/7 Support</span>
            <span>🔵 Same Day Service</span>
          </div>
        </div>

        <div className="hero-image">
          <img src="homepage.jpg" alt="Service Illustration" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;