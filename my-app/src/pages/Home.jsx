import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Achievements from '../components/Achievements';
import CarouselSlider from '../components/CarouselSlider';

const Home = () => {
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
      <CarouselSlider />
      
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
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="/.jpg"
                alt="Education"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections Cards */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Programs</h2>
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
          .card-img-wrapper {
            width: 100%;
            height: 300px;
            overflow: hidden;
            position: relative;
            background:rgb(104, 216, 66);
          }
          
          .card-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: absolute;
            top: 0;
            left: 0;
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
      <section className="features py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-box text-center p-4">
                <div className="feature-icon mb-3">
                  📚
                </div>
                <h4>Quality Education</h4>
                <p>Expert teachers and comprehensive curriculum</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box text-center p-4">
                <div className="feature-icon mb-3">
                  🎯
                </div>
                <h4>Focused Learning</h4>
                <p>Personalized attention and targeted approach</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-box text-center p-4">
                <div className="feature-icon mb-3">
                  🌟
                </div>
                <h4>Islamic Values</h4>
                <p>Strong foundation in Islamic principles</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;