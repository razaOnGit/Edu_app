import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Achievements = () => {
  const achievements = [
    { 
      number: "1000+", 
      titles: ['Students Enrolled', 1000, 'Learning Together', 1000, 'Growing Strong', 1000],
      color: "#4e54c8",
      sequence: ['0+', 500, '500+', 500, '1000+', 2000]
    },
    { 
      number: "10+", 
      titles: ['Expert Teachers', 1000, 'Dedicated Mentors', 1000, 'Professional Guides', 1000],
      color: "#ff6b6b",
      sequence: ['0+', 500, '5+', 500, '10+', 2000]
    },
    { 
      number: "100%", 
      titles: ['Success Rate', 1000, 'Achievement Rate', 1000, 'Excellence Rate', 1000],
      color: "#4ecdc4",
      sequence: ['0%', 500, '50%', 500, '100%', 2000]
    },
    { 
      number: "20+", 
      titles: ['Awards Won', 1000, 'Recognitions', 1000, 'Achievements', 1000],
      color: "#f1c40f",
      sequence: ['0+', 500, '10+', 500, '20+', 2000]
    }
  ];

  return (
    <section className="achievements py-5">
      <div className="container">
        <motion.div 
          className="title-container"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="achievement-title-main">
            <span className="title-decoration">Our</span> Achievements
          </h2>
          <div className="title-underline"></div>
        </motion.div>
        <div className="row">
          {achievements.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <motion.div 
                className="achievement-box"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <h3 className="achievement-number" style={{ color: item.color }}>
                  <TypeAnimation
                    sequence={item.sequence}
                    wrapper="span"
                    speed={50}
                    repeat={3}
                    cursor={false} // Add this to remove blinking cursor
                    className="number-animation" // Add this class
                  />
                </h3>
                <div className="achievement-title">
                  <TypeAnimation
                    sequence={item.titles}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achievements {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          font-family: 'Poppins', sans-serif;
        }

        .achievement-box {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease-in-out;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .achievement-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .achievement-box:hover::before {
          opacity: 1;
        }

        .achievement-number {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          min-height: 80px; /* Added to prevent layout shift */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible; // Add this
        }

        .achievement-number span {
          background: linear-gradient(135deg, currentColor 0%, rgba(0,0,0,0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
          white-space: nowrap; // Add this
          display: block; // Add this
        }

        .achievement-title {
          font-size: 1.1rem;
          color:rgb(242, 10, 10);
          margin: 0;
          font-weight: 500;
          min-height: 1.5em; /* Added to prevent layout shift */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .achievement-title span {
          text-align: center;
          display: block;
          width: 100%;
        }

        .title-container {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
        }

        .achievement-title-main {
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

        .achievement-title-main:hover {
          transform: translateY(-5px);
          text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .title-decoration {
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, #FF6B6B, #FFB347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          text-shadow: none;
          padding: 0 10px;
          margin-right: 10px;
          animation: glow 2s ease-in-out infinite;
        }

        .title-decoration::before {
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

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(255, 107, 107, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(255, 179, 71, 0.8));
          }
        }

        .achievement-title-main:hover .title-decoration {
          transform: scale(1.05);
          filter: brightness(1.2);
        }

        .achievement-title-main:hover .title-decoration::before {
          opacity: 0.4;
          transform: scale(1) rotate(15deg);
          border-color: #FFB347;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #2193b0, #6dd5ed);
          margin: 1rem auto 0;
          position: relative;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .title-underline::before,
        .title-underline::after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: #2193b0;
          border-radius: 50%;
          top: -2px;
          transition: all 0.3s ease;
        }

        .title-underline::before { left: 0; }
        .title-underline::after { right: 0; }

        .title-container:hover .title-underline {
          width: 200px;
          background: linear-gradient(90deg, #6dd5ed, #2193b0, #6dd5ed);
        }

        .title-container:hover .title-underline::before {
          transform: translateX(-10px);
        }

        .title-container:hover .title-underline::after {
          transform: translateX(10px);
        }

        @media (max-width: 768px) {
          .achievement-box {
            padding: 1.5rem;
          }

          .achievement-number {
            font-size: 2.5rem;
            min-height: 60px; // Reduce height for mobile
            margin-bottom: 0.5rem; // Reduce margin for mobile
          }

          .achievement-title {
            font-size: 1rem;
          }

          .achievement-title-main {
            font-size: 2.5rem;
          }

          .title-underline {
            width: 80px;
          }

          .title-container:hover .title-underline {
            width: 150px;
          }

          .title-decoration {
            font-size: 2.2rem;
          }

          .title-decoration::before {
            width: 35px;
            height: 35px;
            top: -8px;
            left: -12px;
          }
        }

        @media (max-width: 576px) {
          .achievement-number {
            font-size: 2rem; // Further reduce size for smaller screens
            min-height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Achievements;