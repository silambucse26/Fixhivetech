import React from 'react';
import './Why.css';
import { FaClock, FaShieldAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhyFixhive = () => {
  return (
    <section className="why-fixhive">
      <div className="why-left">
        <h2>Why Choose Fixhive?</h2>
        <ul className="features-list">
          <li>
            <div className="icon-box"><FaClock /></div>
            <div>
              <h4>Fast Response</h4>
              <p>Same-day service available for most requests.</p>
            </div>
          </li>
          <li>
            <div className="icon-box"><FaShieldAlt /></div>
            <div>
              <h4>Trusted Professionals</h4>
              <p>All service providers are vetted and insured.</p>
            </div>
          </li>
          <li>
            <div className="icon-box"><FaStar /></div>
            <div>
              <h4>Quality Guaranteed</h4>
              <p>100% satisfaction guarantee on all services.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="why-right">
        <div className="circle-badge">500+</div>
        <h3>Happy Customers</h3>
        <p>Join hundreds of satisfied customers who trust Fixhive for their service needs.</p>
        <Link to="/services">
        <button className="view-services">View All Services →</button>
        </Link>
      </div>
    </section>
  );
};

export default WhyFixhive;
