import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Achievements from '../components/Achievements';
import CarouselSlider from '../components/CarouselSlider';
import Enquiry from './Enquiry';

const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const sections = [
    {
      title: "Foundation Course",
      description: "Start your journey with our comprehensive foundation program",
      image: "/foundation.webp",
      link: "/foundation",
      color: "primary"
    },
    {
      title: "Target Batch",
      description: "Specialized coaching for advanced learners",
      image: "/target.webp",
      link: "/target",
      color: "success"
    },
    {
      title: "Islamic Quiz",
      description: "Test your knowledge with interactive quizzes",
      image: "/quiz.webp",
      link: "/quiz",
      color: "warning"
    }
  ];

  return (
    <div className="home-container">
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <CarouselSlider />
        </div>
      </div>

      <section className="hero bg-primary text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-md-start"
              >
                <h1 className="display-4 fw-bold mb-4">
                  Welcome to{' '}
                  <TypeAnimation
                    sequence={[
                      'Kalam Academy',
                      1000,
                      'Excellence in Education',
                      1000,
                      'Islamic Values',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-warning"
                  />
                </h1>
                <p className="lead">Empowering minds through quality education and Islamic knowledge</p>
                <Link to="/foundation" className="btn btn-light btn-lg mt-3">
                  Get Started
                </Link>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                className="logo-circle-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="/logo2.jpg"
                  alt="Education"
                  className="logo-image"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Cards */}
      <section className="programs-section py-5">
        <div className="container">
          <motion.div 
            className="programs-header"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="programs-title">
              <span className="programs-highlight">Our</span> Programs
            </h2>
            <div className="programs-underline"></div>
          </motion.div>
          
          <div className="row">
            {sections.map((section, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm hover-card">
                  <div className="card-img-wrapper">
                    <img 
                      src={section.image} 
                      className="card-img-top" 
                      alt={section.title}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{section.title}</h5>
                    <p className="card-text">{section.description}</p>
                    <Link 
                      to={section.link} 
                      className={`btn btn-${section.color} mt-auto`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .programs-section {
            position: relative;
            padding: 4rem 0;
          }

          .programs-header {
            text-align: center;
            margin-bottom: 4rem;
            position: relative;
          }

          .programs-title {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(45deg, #2193b0, #6dd5ed);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            display: inline-block;
            padding: 0.5rem 2rem;
            transition: all 0.3s ease;
          }

          .programs-highlight {
            position: relative;
            display: inline-block;
            background: linear-gradient(135deg, #FF6B6B, #FFB347);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            padding: 0 10px;
            margin-right: 10px;
            animation: glow 2s ease-in-out infinite;
          }

          .programs-highlight::before {
            content: '';
            position: absolute;
            width: 45px;
            height: 45px;
            border: 4px solid #FF6B6B;
            border-radius: 50%;
            top: -10px;
            left: -15px;
            opacity: 0.2;
            transform: scale(0.8);
            transition: all 0.3s ease;
          }

          .programs-title:hover .programs-highlight::before {
            opacity: 0.4;
            transform: scale(1) rotate(15deg);
            border-color: #FFB347;
          }

          .programs-underline {
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #2193b0, #6dd5ed);
            margin: 1rem auto 0;
            position: relative;
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          .programs-underline::before,
          .programs-underline::after {
            content: '';
            position: absolute;
            width: 8px;
            height: 8px;
            background: #2193b0;
            border-radius: 50%;
            top: -2px;
            transition: all 0.3s ease;
          }

          .programs-underline::before { left: 0; }
          .programs-underline::after { right: 0; }

          .programs-header:hover .programs-underline {
            width: 200px;
            background: linear-gradient(90deg, #6dd5ed, #2193b0, #6dd5ed);
          }

          .programs-header:hover .programs-underline::before {
            transform: translateX(-10px);
          }

          .programs-header:hover .programs-underline::after {
            transform: translateX(10px);
          }

          @keyframes glow {
            0%, 100% {
              filter: drop-shadow(0 0 8px rgba(255, 107, 107, 0.6));
            }
            50% {
              filter: drop-shadow(0 0 12px rgba(255, 179, 71, 0.8));
            }
          }

          @media (max-width: 768px) {
            .programs-title {
              font-size: 2.5rem;
            }

            .programs-highlight::before {
              width: 35px;
              height: 35px;
              top: -8px;
              left: -12px;
            }

            .programs-underline {
              width: 80px;
            }

            .programs-header:hover .programs-underline {
              width: 150px;
            }
          }

          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
          }
        `}</style>
      </section>

      {/* Achievement Section */}
      <Achievements />

      {/* Features Section */}
      <section className="why-choose-us py-5">
        <div className="container">
          <motion.h2 
            className="section-title text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className="row g-4">
            {[
              {
                icon: "📚",
                title: "Quality Education",
                description: "Expert teachers and comprehensive curriculum",
                gradient: "linear-gradient(135deg, #6e8efb, #4759e8)"
              },
              {
                icon: "🎯",
                title: "Focused Learning",
                description: "Personalized attention and targeted approach",
                gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)"
              },
              {
                icon: "🌟",
                title: "Islamic Values",
                description: "Strong foundation in Islamic principles",
                gradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
              },
              {
                icon: "👨🏽‍💼",
                title: "Career Counselling",
                description: "Consulting with expert mentors to secure seats based on your rank",
                gradient: "linear-gradient(135deg, #FF9A9E, #FAD0C4)"
              }
            ].map((feature, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div 
                    className="icon-wrapper"
                    style={{ background: feature.gradient }}
                  >
                    <span className="feature-icon">{feature.icon}</span>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .why-choose-us {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            position: relative;
            overflow: hidden;
            font-family: 'Poppins', sans-serif;
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            color:rgb(6, 20, 145);
            margin-bottom: 3rem;
            position: relative;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #6e8efb, #4759e8);
            border-radius: 2px;
          }

          .feature-card {
            background: white;
            border-radius: 20px;
            padding: 2.5rem 2rem;
            text-align: center;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease-in-out;
            height: 100%;
            position: relative;
            overflow: hidden;
          }

          .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: inherit;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          }

          .feature-card:hover::before {
            opacity: 1;
          }

          .icon-wrapper {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .feature-icon {
            font-size: 2.5rem;
            filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
          }

          .feature-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: #2d3436;
            margin: 1rem 0;
            position: relative;
            padding-bottom: 1rem;
          }

          .feature-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 3px;
            background: currentColor;
            transition: width 0.3s ease;
          }

          .feature-card:hover .feature-title::after {
            width: 60px;
          }

          .feature-description {
            color: #636e72;
            font-size: 1rem;
            line-height: 1.6;
            margin: 0;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
            }

            .feature-card {
              padding: 2rem 1.5rem;
            }

            .icon-wrapper {
              width: 70px;
              height: 70px;
            }

            .feature-icon {
              font-size: 2rem;
            }

            .feature-title {
              font-size: 1.25rem;
            }
          }
        `}</style>
      </section>

      <div className="enquiry-button-container">
        <button 
          className="enquiry-button"
          onClick={() => setShowEnquiry(true)}
        >
          <span>✉️ Quick Enquiry</span>
        </button>
      </div>

      {showEnquiry && (
        <div className="modal-overlay" onClick={() => setShowEnquiry(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowEnquiry(false)}
            >
              ×
            </button>
            <Enquiry />
          </div>
        </div>
      )}

      <style jsx>{`
        .logo-circle-container {
          width: 300px;  /* Reduced size */
          height: 300px;
          border-radius: 50%;
          background: white;
          padding: 10px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          overflow: hidden;
        }

        .logo-image {
          width: 295%;
          height: 85%;
          object-fit: contain;  /* This prevents cropping */
          border-radius: 7%;
        }

        @media (max-width: 768px) {
          .logo-circle-container {
            width: 200px;
            height: 250px;
            margin-top: 20px;
          }
        }

        @media (max-width: 576px) {
          .logo-circle-container {
            width: 180px;
            height: 180px;
          }
        }

        .enquiry-button-container {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
        }

        .enquiry-button {
          background: linear-gradient(135deg, #ff4d4d,rgb(255, 0, 0));
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 26, 255, 0.85);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .enquiry-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(255, 0, 0, 0.3);
        }

        .enquiry-button:active {
          transform: translateY(0);
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1100;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 15px;
          background: white;
        }

        .modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #666;
          z-index: 1;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          background: #f0f0f0;
          color: #333;
        }

        @media (max-width: 768px) {
          .enquiry-button-container {
            bottom: 20px;
            right: 20px;
          }

          .enquiry-button {
            padding: 12px 24px;
            font-size: 1rem;
          }

          .modal-content {
            width: 95%;
            max-height: 85vh;
          }
        }
      `}</style>
   </div>
  );
};

export default Home;