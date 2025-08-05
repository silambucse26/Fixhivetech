import React from 'react';
import './How.css';
import { FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="hiw-container">
        <div className="hiw-left">
          <h2>How <span>Fixhive</span> Works</h2>
          <p>
            We've made it incredibly simple to connect with trusted professionals in your community.
            Here's how we're fixing life, the smart way.
          </p>

          <ul className="features">
            <li>
              <FaCheckCircle /> <strong>Instant Booking</strong>
              <span>Book trusted professionals with just a few taps</span>
            </li>
            <li>
              <FaCheckCircle /> <strong>Real-time Tracking</strong>
              <span>Track your service provider's arrival in real-time</span>
            </li>
            <li>
              <FaCheckCircle /> <strong>Secure Payments</strong>
              <span>Safe and secure payment processing</span>
            </li>
            <li>
              <FaCheckCircle /> <strong>24/7 Support</strong>
              <span>Round-the-clock customer support when you need it</span>
            </li>
          </ul>

          <button className="learn-more">Learn More →</button>
        </div>

        <div className="hiw-right">
          {['Choose Your Service', 'Book a Professional', 'Enjoy the Service'].map((step, i) => (
            <div className="step-box" key={i}>
              <div className="step-number">{i + 1}</div>
              <div>
                <strong>{step}</strong>
                <p>
                  {i === 0 && 'Browse our wide range of services and select what you need'}
                  {i === 1 && 'Select from verified professionals in your area'}
                  {i === 2 && 'Relax while our professional takes care of everything'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="vision-mission">
        <div className="vm-block">
          <h3>Our Vision</h3>
          <p>To empower local communities with reliable digital solutions that connect professionals to those who need them—seamlessly, safely, and affordably.</p>
        </div>
        <div className="vm-block">
          <h3>Our Mission</h3>
          <p>To make everyday services in cities like Hosur smarter and simpler by building trust, delivering quality, and embracing innovation that uplifts local life.</p>
        </div>
      </section>
    </section>
  );
};

export default HowItWorks;
