import React from 'react';
import { Link } from 'react-router-dom';
import Achievements from '../components/Achievements';

const Home = () => {
  const sections = [
    {
      title: "Foundation Course",
      description: "Start your journey with our comprehensive foundation program",
      image: "/src/assets/images/foundation.jpg",
      link: "/foundation",
      color: "primary"
    },
    {
      title: "Target Batch",
      description: "Specialized coaching for advanced learners",
      image: "/src/assets/images/target.jpg",
      link: "/target",
      color: "success"
    },
    {
      title: "Islamic Quiz",
      description: "Test your knowledge with interactive quizzes",
      image: "/src/assets/images/quiz.jpg",
      link: "/quiz",
      color: "warning"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero bg-primary text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4">Welcome to Kalam Academy</h1>
              <p className="lead">Empowering minds through quality education and Islamic knowledge</p>
              <Link to="/contact" className="btn btn-light btn-lg">Get Started</Link>
            </div>
            <div className="col-md-6">
              {/* Add hero image here if needed */}
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
                  <img 
                    src={section.image} 
                    className="card-img-top" 
                    alt={section.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
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