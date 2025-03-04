import React from 'react';
import { Tab, Nav, Card, Button, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBook, faGraduationCap, faTrophy, faChalkboardTeacher,
  faUserGraduate, faSchool, faAward
} from '@fortawesome/free-solid-svg-icons';

const Foundation = () => {
  const classes = [
    {
      level: "Primary (5-8)",
      icon: faSchool,
      subjects: {
        "Core": [
          "Mathematics",
          "Science",
          "English",
          "Hindi/Urdu"
        ],
        "Additional": [
          "Social Studies",
          "Computer Basics",
          "Islamic Studies",
          "Moral Education"
        ]
      }
    },
    {
      level: "Secondary (9-10)",
      icon: faUserGraduate,
      subjects: {
        "Science": [
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology"
        ],
        "Arts": [
          "History",
          "Geography",
          "Political Science",
          "Economics"
        ]
      }
    },
    {
      level: "Higher Secondary (11-12)",
      icon: faGraduationCap,
      subjects: {
        "Science": [
          "Physics",
          "Chemistry",
          "Mathematics/Biology",
          "Computer Science"
        ],
        "Arts/Commerce": [
          "Economics",
          "Business Studies",
          "Accountancy",
          "Mathematics"
        ]
      }
    }
  ];

  const features = [
    {
      title: "Expert Faculty",
      icon: faChalkboardTeacher,
      description: "Experienced teachers dedicated to student success"
    },
    {
      title: "Regular Assessment",
      icon: faBook,
      description: "Weekly tests and performance tracking"
    },
    {
      title: "Achievement Programs",
      icon: faAward,
      description: "Recognition and rewards for top performers"
    }
  ];

  const results = [
    {
      year: "2024",
      achievements: [
        { exam: "Class X Board", distinction: 45, firstDiv: 85 },
        { exam: "Class XII Board", distinction: 38, firstDiv: 72 },
        { exam: "Olympiads", winners: 15, participants: 150 }
      ]
    },
    {
      year: "2023",
      achievements: [
        { exam: "Class X Board", distinction: 40, firstDiv: 80 },
        { exam: "Class XII Board", distinction: 35, firstDiv: 70 },
        { exam: "Olympiads", winners: 12, participants: 120 }
      ]
    }
  ];

  return (
    <div className="foundation-page py-5">
      <div className="container">
        <h1 className="text-center mb-5">Foundation Programs</h1>
        
        <Tab.Container defaultActiveKey="classes">
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="classes">
                <FontAwesomeIcon icon={faBook} className="me-2" />
                Classes & Subjects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="features">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2" />
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="results">
                <FontAwesomeIcon icon={faTrophy} className="me-2" />
                Results
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="classes">
              <Row>
                {classes.map((level, index) => (
                  <Col lg={4} key={index} className="mb-4">
                    <Card className="h-100 shadow-sm hover-card">
                      <Card.Header className="bg-primary text-white">
                        <h4 className="mb-0">
                          <FontAwesomeIcon icon={level.icon} className="me-2" />
                          {level.level}
                        </h4>
                      </Card.Header>
                      <Card.Body>
                        {Object.entries(level.subjects).map(([category, subjects]) => (
                          <div key={category} className="mb-4">
                            <h5 className="border-bottom pb-2">{category}</h5>
                            <ul className="list-unstyled">
                              {subjects.map((subject, idx) => (
                                <li key={idx} className="mb-2">
                                  <FontAwesomeIcon icon={faBook} className="me-2 text-primary" />
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Button 
                          variant="outline-primary" 
                          className="w-100 mt-3"
                          href={`#enroll-${level.level.toLowerCase()}`}
                        >
                          Enroll Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="features">
              <Row>
                {features.map((feature, index) => (
                  <Col md={4} key={index}>
                    <Card className="text-center mb-4 shadow-sm hover-card">
                      <Card.Body>
                        <FontAwesomeIcon 
                          icon={feature.icon} 
                          className="display-4 text-primary mb-3"
                        />
                        <h4>{feature.title}</h4>
                        <p className="text-muted">{feature.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="results">
              {results.map((yearData, index) => (
                <Card key={index} className="mb-4 shadow-sm">
                  <Card.Header className="bg-success text-white">
                    <h4 className="mb-0">Academic Year {yearData.year}</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Examination</th>
                          <th>Distinctions</th>
                          <th>First Division</th>
                          <th>Special Achievements</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearData.achievements.map((achievement, idx) => (
                          <tr key={idx}>
                            <td>{achievement.exam}</td>
                            <td>{achievement.distinction}</td>
                            <td>{achievement.firstDiv}</td>
                            <td>
                              {achievement.winners ? 
                                `${achievement.winners} winners out of ${achievement.participants} participants` 
                                : '-'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <style jsx>{`
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          }
          .nav-pills .nav-link {
            border-radius: 25px;
            padding: 10px 20px;
            margin: 0 5px;
            transition: all 0.3s ease;
          }
          .nav-pills .nav-link.active {
            background-color: #007bff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
    </div>
  );
};

export default Foundation;
