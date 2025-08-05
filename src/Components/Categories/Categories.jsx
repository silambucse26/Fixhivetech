import React, { useState } from 'react';
import './Categories.css';
import {
  FaCode,
  FaBolt,
  FaCar,
  FaGraduationCap,
  FaBriefcase,
  FaPalette
} from 'react-icons/fa';

const services = [
  {
    title: 'Web Design & Development',
    icon: <FaCode />,
    color: '#e0f3ff',
    points: ['Custom Design', 'Mobile-First', 'SEO Optimized'],
    detail: 'We create stunning, responsive websites that convert visitors into loyal customers. Perfect for local businesses in Hosur.',
  },
   {
    title: 'UI/UX Design Services',
    icon: <FaPalette />,
    color: '#ffe6f0',
    points: ['Figma Prototypes', 'User Research', 'App & Web Design'],
    detail: 'We deliver clean, intuitive, and engaging designs using tools like Figma. Perfect for startups and businesses needing modern design.',
  },
  {
    title: 'Electrician Services',
    icon: <FaBolt />,
    color: '#fff6dd',
    points: ['24/7 Emergency', 'Licensed Pros', 'Safety First'],
    detail: 'Get reliable and licensed electricians for all types of repairs and installations. Serving Hosur homes and shops quickly.',
  },
  {
    title: 'Auto Pickup & Delivery',
    icon: <FaCar />,
    color: '#e7fff1',
    points: ['School Drop', 'Insured Drivers', 'Monthly Booking Available'],
    detail: 'We ensure your child’s safety with reliable school pick-up and drop auto drivers. Verified drivers with monthly plans in Hosur.',
  },
  {
    title: 'Career Counselling',
    icon: <FaGraduationCap />,
    color: '#f3e9ff',
    points: ['1-on-1 Sessions', 'Career Planning', 'Local Expert Support'],
    detail: 'Get expert career advice for 10th & 12th students. Personalized sessions to guide your next move.',
  },
  {
    title: 'Business Consultation',
    icon: <FaBriefcase />,
    color: '#fff0f0',
    points: ['Business Plan Review', 'Growth Strategy', 'Startup Advice'],
    detail: 'Helping small business owners in Hosur launch and grow with strategic guidance and hands-on planning.',
  },
 
];

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="services-section">
      <h2 className="section-title">
        Services That <span>Transform</span>
      </h2>
      <p className="section-subtitle">
        Professional services designed to make your life easier and your business better.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div
              className="service-icon"
              style={{ backgroundColor: service.color }}
            >
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <ul>
              {service.points.map((pt, i) => (
                <li key={i}>• {pt}</li>
              ))}
            </ul>

            <button
              className="learn-more"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              Learn More →
            </button>

            {activeIndex === index && (
              <p className="service-detail">{service.detail}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
