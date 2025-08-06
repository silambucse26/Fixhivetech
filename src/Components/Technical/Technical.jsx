import React, { useState } from 'react';
import './Technical.css';
import { FaLaptopCode, FaPaintBrush, FaBullhorn, FaCloud, FaBuilding } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming React Router

const TechnicalServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: <FaLaptopCode size={36} color="#1565c0" />,
      title: 'MERN Stack Web Development',
      description: 'Robust full-stack web applications built with MongoDB, Express, React & Node.js.',
      fullDetail:
        'Build modern web applications using the MERN stack, ensuring scalability, responsiveness, and performance. We specialize in REST APIs, dynamic UIs, and deploying apps for both startups and enterprises.',
    },
    {
      icon: <FaPaintBrush size={36} color="#ff6f00" />,
      title: 'UI/UX Design for All Screens',
      description: 'Responsive and user-centric UI/UX design tailored for mobile, tablet, and desktop.',
      fullDetail:
        'Design systems optimized for any screen size with best practices in user research, wireframing, prototyping, and pixel-perfect UI implementation.',
    },
    {
      icon: <FaBullhorn size={36} color="#6a1b9a" />,
      title: 'Digital Marketing',
      description: 'Effective marketing strategies for industries and shops of all sizes.',
      fullDetail:
        'From SEO to social media, we offer comprehensive marketing plans that increase brand visibility, generate leads, and convert customers for small and large businesses alike.',
    },
    {
      icon: <FaCloud size={36} color="#0277bd" />,
      title: 'Cloud Computing Services',
      description: 'Cloud setup, deployment, and scaling using AWS, Azure, and GCP.',
      fullDetail:
        'We configure cloud infrastructure, CI/CD pipelines, containers, and security layers to ensure your application runs reliably and scales efficiently.',
    },
    {
      icon: <FaBuilding size={36} color="#2e7d32" />,
      title: 'Web Design for Startups & Enterprises',
      description: 'Professional web design for startups and large-scale enterprises.',
      fullDetail:
        'Creative, brand-aligned web designs for businesses at all stages. We craft engaging and modern websites that impress and convert.',
    },
  ];

  const toggleDetail = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="technical-services">
      <h2 className="tech-title">Technical Services</h2>
      <div className="tech-grid">
        {services.map((service, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="tech-link" onClick={() => toggleDetail(index)}>
              {activeIndex === index ? 'Show Less ↑' : 'Learn More →'}
            </button>

            {activeIndex === index && (
              <div className="tech-detail">
                <p>{service.fullDetail}</p>
                <Link to="/contact" className="contact-button">
                  Contact Us →
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalServicesSection;
