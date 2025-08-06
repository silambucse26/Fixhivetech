import React from 'react';
import './Social.css';

const FixhiveHomeSections = () => {
  return (
    <div className="fixhive-home">

      {/* Social Media Activities */}
      <section className="social-media">
        <h2>Fixhive on Social Media</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/fixhive-technologies/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-card">
            <img src="FixhiveTech.png" alt="LinkedIn Post" />
            <p>Check our latest LinkedIn update</p>
          </a>
          <a href="https://www.instagram.com/fixhivetechnologies/" target="_blank" rel="noopener noreferrer" className="social-card">
            <img src="FixhiveTech.png" alt="Instagram Post" />
            <p>Follow us on Instagram</p>
          </a>
          <a href="https://x.com/FixhiveTech" target="_blank" rel="noopener noreferrer" className="social-card">
            <img src="FixhiveTech.png" alt="X (Twitter) Post" />
            <p>Our latest tweet on X</p>
          </a>
        </div>
      </section>

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
