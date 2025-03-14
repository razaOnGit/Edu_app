import React from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Tab, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTrophy, faCalendarAlt, faGift, 
  faUsers, faImages, faMoneyBillWave 
} from '@fortawesome/free-solid-svg-icons';

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
    <div className="quiz-page py-5 mt-5">
      <Container>
        <h1 className="text-center mb-5">Annual Islamic Quiz Competition</h1>

        <Tab.Container defaultActiveKey="info">
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="info">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                Information
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="results">
                <FontAwesomeIcon icon={faTrophy} className="me-2" />
                Results
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="gallery">
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

      <style jsx>{`
        .quiz-page {
          background-color: #f8f9fa;
        }
        .badge-bronze {
          background-color: #cd7f32;
        }
        .gallery-card img {
          height: 200px;
          object-fit: cover;
        }
        .nav-pills .nav-link {
          border-radius: 25px;
          padding: 10px 20px;
          margin: 0 5px;
        }
        .nav-pills .nav-link.active {
          background-color: #007bff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default Quiz;
