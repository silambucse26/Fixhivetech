import React, { useState } from 'react';
import './ServiceList.css';
import { FaPaintBrush, FaLaptopCode, FaMobileAlt, FaBullhorn, FaChartLine, FaGraduationCap, FaTaxi, FaPlug } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const services = [
  {
    title: "UI/UX Design",
    short: "Creative user-centered design for apps and websites.",
    full: "Creative user-centered design for apps and websites. We craft engaging experiences with wireframes, prototypes, and clean UI aligned with your brand.",
    icon: <FaPaintBrush />
  },
  {
    title: "Web Development",
    short: "Build secure, scalable websites using modern technologies.",
    full: "Build secure, scalable websites using modern technologies. From static websites to full-stack web apps with SEO optimization.",
    icon: <FaLaptopCode />
  },
  {
    title: "App Development",
    short: "Cross-platform mobile apps using React Native and Flutter.",
    full: "Cross-platform mobile apps using React Native and Flutter. Optimized for performance, clean UI, and app store deployment support.",
    icon: <FaMobileAlt />
  },
  {
    title: "Digital Marketing",
    short: "Boost your business with SEO and social media marketing.",
    full: "Boost your business with SEO and social media marketing. Grow your audience, improve conversion, and build your brand online.",
    icon: <FaBullhorn />
  },
  {
    title: "Business Consulting",
    short: "Startup growth strategies and business planning.",
    full: "Startup growth strategies and business planning. Tailored support for decision-making, planning, and execution of business ideas.",
    icon: <FaChartLine />
  },
  {
    title: "Career Guidance",
    short: "Support for students and job seekers to succeed.",
    full: "Support for students and job seekers to choose the right path, craft resumes, prepare for interviews, and career counseling.",
    icon: <FaGraduationCap />
  },
  {
    title: "Auto Driver Booking (Hosur)",
    short: "Book safe, verified auto drivers for school and local travel.",
    full: "Book verified auto drivers for safe school-to-home transport for children or local travel needs in and around Hosur.",
    icon: <FaTaxi />
  },
  {
    title: "Electrician Booking (Hosur)",
    short: "Reliable on-demand electrician services for all repairs.",
    full: "Reliable on-demand electrician services for homes, offices, and repairs. Verified, skilled, and available anytime in Hosur.",
    icon: <FaPlug />
  }
];

const Services = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <div>
      <Navbar />
    <div className="services-page">
      <h2 className="title">Our Services</h2>
      <p className="subtitle">Explore what we offer to grow your business</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{expanded[index] ? service.full : service.short}</p>
            <div className="card-actions">
              <button onClick={() => toggleExpand(index)} className="learn-more">
                {expanded[index] ? 'Show Less' : 'Learn More'}
              </button>
              <button className="book-now" onClick={() => navigate('/contact')}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Services;
