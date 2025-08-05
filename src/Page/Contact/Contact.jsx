import React, { useState, useRef } from 'react';
import './Contact.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(); // for sending the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const services = [
    'UI/UX Design',
    'Web Development',
    'Mobile App Development',
    'Social Media Marketing',
    'Career Guidance',
    'Electrician Services',
    'Tutor Booking',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_romro1j',      // from EmailJS
        'template_jimqdf5',     // from EmailJS
        formRef.current,
        'NB2-SszxqieGnX-rF'       // from EmailJS
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="contact-form-box">
          <h2>Contact Us</h2>
          <p>We’re excited to work with you! Fill the form and we’ll get back to you soon.</p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="">-- Select a Service --</option>
              {services.map((service, i) => (
                <option key={i} value={service}>
                  {service}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
