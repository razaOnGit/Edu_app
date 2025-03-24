import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, faCalendarAlt, faGift, 
  faUsers, faImages, faMoneyBillWave 
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Quiz = () => {
  const quizResults = [
    {
      year: "2024",
      participants: 150,
      toppers: [
        { rank: 1, name: "Sebu", score: 95, prize: "₹10,000 + Gold Medal" },
        { rank: 2, name: "Fatima Ali", score: 92, prize: "₹7,000 + Silver Medal" },
        { rank: 3, name: "Usman", score: 90, prize: "₹5,000 + Bronze Medal" }
      ]
    },
    {
      year: "2023",
      participants: 120,
      toppers: [
        { rank: 1, name: "Ahmed", score: 94, prize: "₹10,000 + Gold Medal" },
        { rank: 2, name: "sebu", score: 91, prize: "₹7,000 + Silver Medal" },
        { rank: 3, name: " kumail Khan", score: 89, prize: "₹5,000 + Bronze Medal" }
      ]
    }
  ];

  const galleryImages = [
    { url: "/quiz/2024.jpg", caption: "Quiz Competition 2024" },
    { url: "/quiz/2023.jpg", caption: "Prize Distribution 2024" },
    { url: "/quiz/2021.jpg", caption: "Quiz Competition 2023" },
    { url: "/quiz/2020.jpg", caption: "Winners 2023" },
    { url: "/quiz/2020_prize.jpg", caption: "Prize Distribution 2020" }
  ];

  return (
    <div className="quiz-page">
      <div className="hero-section">
        <Container>
          <motion.div 
            className="title-container text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="main-title">
              <TypeAnimation
                sequence={[
                  'Annual Islamic Quiz',
                  1000,
                  'Test Your Knowledge',
                  1000,
                  'Win Amazing Prizes',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <div className="title-decoration"></div>
          </motion.div>
        </Container>
      </div>

      <div className="content-section py-5">
        <Container>
          <h1 className="text-center mb-5">Annual Islamic Quiz Competition</h1>

          <Tab.Container defaultActiveKey="info">
            <Nav variant="pills" className="justify-content-center mb-4">
              <Nav.Item>
                <Nav.Link eventKey="info" className="tab-button tab-blue">
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                  Information
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="results" className="tab-button tab-orange">
                  <FontAwesomeIcon icon={faTrophy} className="me-2" />
                  Results
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="gallery" className="tab-button tab-green">
                  <FontAwesomeIcon icon={faImages} className="me-2" />
                  Gallery
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="info">
                <Row>
                  <Col md={8} className="mx-auto">
                    <Card className="shadow-sm mb-4">
                      <Card.Body>
                        <h3 className="mb-4">Quiz Details</h3>
                        <Row>
                          <Col md={6}>
                            <div className="mb-4">
                              <FontAwesomeIcon icon={faCalendarAlt} className="text-primary me-2" />
                              <strong>Date:</strong> March 15, 2025
                            </div>
                            <div className="mb-4">
                              <FontAwesomeIcon icon={faMoneyBillWave} className="text-success me-2" />
                              <strong>Entry Fee:</strong> ₹100 only
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="mb-4">
                              <FontAwesomeIcon icon={faUsers} className="text-info me-2" />
                              <strong>Eligibility:</strong> All Students
                            </div>
                            <div className="mb-4">
                              <FontAwesomeIcon icon={faGift} className="text-warning me-2" />
                              <strong>Prizes Worth:</strong> ₹50,000+
                            </div>
                          </Col>
                        </Row>
                        <Button variant="primary" className="w-100">Register Now</Button>
                      </Card.Body>
                    </Card>

                    <Card className="shadow-sm">
                      <Card.Body>
                        <h4>Rewards & Recognition</h4>
                        <ul className="list-unstyled">
                          <li className="mb-3">🥇 First Prize: ₹10,000 + Gold Medal + Certificate</li>
                          <li className="mb-3">🥈 Second Prize: ₹7,000 + Silver Medal + Certificate</li>
                          <li className="mb-3">🥉 Third Prize: ₹5,000 + Bronze Medal + Certificate</li>
                          <li className="mb-3">🎯 Top 10: Special Goodies + Merit Certificate</li>
                          <li>🌟 All Participants: Participation Certificate</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="results">
                {quizResults.map((year, index) => (
                  <Card key={index} className="mb-4 shadow-sm">
                    <Card.Header className="bg-primary text-white">
                      <h4 className="mb-0">Quiz Results {year.year}</h4>
                    </Card.Header>
                    <Card.Body>
                      <p className="text-muted mb-4">
                        Total Participants: {year.participants}
                      </p>
                      <Table striped bordered hover responsive>
                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Prize</th>
                          </tr>
                        </thead>
                        <tbody>
                          {year.toppers.map((topper, idx) => (
                            <tr key={idx}>
                              <td>
                                <Badge bg={
                                  idx === 0 ? "warning" : 
                                  idx === 1 ? "secondary" : "bronze"
                                }>
                                  {topper.rank}
                                </Badge>
                              </td>
                              <td>{topper.name}</td>
                              <td>{topper.score}%</td>
                              <td>{topper.prize}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </Card.Body>
                  </Card>
                ))}
              </Tab.Pane>

              <Tab.Pane eventKey="gallery">
                <Row>
                  {galleryImages.map((image, index) => (
                    <Col md={6} lg={4} key={index} className="mb-4">
                      <Card className="gallery-card shadow-sm h-100">
                        <Card.Img 
                          variant="top" 
                          src={image.url} 
                          alt={image.caption}
                        />
                        <Card.Body>
                          <Card.Text className="text-center">
                            {image.caption}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </div>

      <style jsx>{`
        .quiz-page {
          background: linear-gradient(135deg, #f6f9fc 0%, #f1f4f9 100%);
          min-height: 100vh;
        }

        .hero-section {
          background: linear-gradient(135deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
          padding: 120px 0 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/path-to-pattern.svg') center/cover;
          opacity: 0.1;
          animation: float 20s linear infinite;
        }

        .main-title {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          margin-bottom: 2rem;
        }

        .title-decoration {
          width: 150px;
          height: 4px;
          background: white;
          margin: 0 auto;
          position: relative;
          border-radius: 2px;
        }

        .title-decoration::before,
        .title-decoration::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          top: -4px;
          animation: pulse 2s infinite;
        }

        .title-decoration::before { left: 0; }
        .title-decoration::after { right: 0; }

        .content-section {
          position: relative;
          margin-top: -50px;
        }

        .tab-button {
          background: white;
          border: none;
          padding: 15px 30px;
          border-radius: 15px;
          font-weight: 600;
          color: #4158D0 !important;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          margin: 0 10px;
          position: relative;
          overflow: hidden;
        }

        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: 0.5s;
        }

        .tab-button:hover::before {
          left: 100%;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #4158D0, #C850C0);
          color: white !important;
          transform: translateY(-3px);
        }

        .card {
          border: none;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .gallery-card img {
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.05);
        }

        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(-100%) rotate(360deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }

          .tab-button {
            padding: 10px 20px;
            margin: 5px;
            font-size: 0.9rem;
          }

          .hero-section {
            padding: 100px 0 60px;
          }
        }
      `}</style>
    </div>
  );
};

export default Quiz;
