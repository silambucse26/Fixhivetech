import React from 'react';
import './Social.css';

const FixhiveHomeSections = () => {
  return (
    <div className="fixhive-home">

      {/* Social Media Activities */}

      {/* Contact & Booking */}
      <section className="about-contact">
        <h2>About Fixhive</h2>
        <p>
          Fixhive Technologies is a student-driven digital solutions startup based in Hosur. We empower
          local businesses and students through smart services like portfolio building, web/app
          development, career guidance, and startup consultation.
        </p>
        <p>
          Our mission is to build real-world solutions with young talent, serving the future of technology
          and entrepreneurship.
        </p>
        <a href="/contact" className="contact-btn">Go to Contact Page</a>
      </section>
    </div>
  );
};

export default FixhiveHomeSections;
