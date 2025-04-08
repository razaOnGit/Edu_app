import React, { useState } from 'react';
import { Tab, Nav, Card, Button, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook, faGraduationCap, faTrophy, faChalkboardTeacher,
  faUserGraduate, faSchool, faAward, faLaptopCode, faClock, faUsers
} from '@fortawesome/free-solid-svg-icons';
import EnrollmentForm from '../components/EnrollmentForm';

const Foundation = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const handleEnrollClick = (program) => {
    try {
      setSelectedProgram(program);
      setShowEnrollment(true);
    } catch (error) {
      console.error('Error in handleEnrollClick:', error);
    }
  };

  const classes = [
    {
      level: "Primary (5-8)",
      icon: faSchool,
      subjects: {
        "Core": ["Mathematics", "Science", "English", "Hindi/Urdu"],
        "Additional": ["Social Studies", "Computer Basics", " Studies", "Moral Education"]
      }
    },
    {
      level: "Secondary (9-10)",
      icon: faUserGraduate,
      subjects: {
        "Science": ["Mathematics", "Physics", "Chemistry", "Biology"],
        "Arts": ["History", "Geography", "Political Science", "Economics"]
      }
    },
    {
      level: "Higher Secondary (11-12)",
      icon: faGraduationCap,
      subjects: {
        "Science": ["Physics", "Chemistry", "Mathematics/Biology", "Computer Science"],
        "Arts/Commerce": ["Economics", "Business Studies", "Accountancy", "Mathematics"]
      }
    }
  ];

  const features = [
    { title: "Expert Faculty", icon: faChalkboardTeacher, description: "Experienced teachers dedicated to student success" },
    { title: "Regular Assessment", icon: faBook, description: "Weekly tests and performance tracking" },
    { title: "Achievement Programs", icon: faAward, description: "Recognition and rewards for top performers" },
    { title: "Technology Integration", icon: faLaptopCode, description: "Smart classes & online study resources" },
    { title: "Flexible Learning", icon: faClock, description: "Weekend & evening batches available" },
    { title: "Interactive Classes", icon: faUsers, description: "Group discussions, quizzes & workshops" }
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
    <div className="target-page py-5">
      <div className="container">
        <h1 className="target-heading text-center mb-5"> Foundation Programs </h1>

        <Tab.Container defaultActiveKey="classes">
          <Nav variant="pills" className="nav-pills-custom mb-4">
            <Nav.Item className="nav-item-wrapper">
              <Nav.Link eventKey="classes" className="nav-link-fancy">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faBook} className="nav-icon" />
                </div>
                <span className="nav-text">Classes & Subjects</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-wrapper">
              <Nav.Link eventKey="features" className="nav-link-fancy">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="nav-icon" />
                </div>
                <span className="nav-text">Features</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-wrapper">
              <Nav.Link eventKey="results" className="nav-link-fancy">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faTrophy} className="nav-icon" />
                </div>
                <span className="nav-text">Results</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* Classes & Subjects Section */}
            <Tab.Pane eventKey="classes">
              <Row>
                {classes.map((level, index) => (
                  <Col lg={4} key={index} className="mb-4">
                    <Card className="h-100 shadow-sm hover-card">
                      <Card.Header className="bg-dark text-white">
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
                                  <FontAwesomeIcon icon={faBook} className="me-2 text-dark" />
                                  {subject}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        <Button
                          variant="outline-dark"
                          className="w-100 mt-3"
                          onClick={() => handleEnrollClick(level.level)}
                        >
                          Enroll Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            {/* Features Section */}
            <Tab.Pane eventKey="features">
              <Row>
                {features.map((feature, index) => (
                  <Col md={4} key={index}>
                    <Card className="text-center mb-4 shadow-sm hover-card">
                      <Card.Body>
                        <FontAwesomeIcon icon={feature.icon} className="display-4 text-warning mb-3" />
                        <h4>{feature.title}</h4>
                        <p className="text-muted">{feature.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            {/* Results Section */}
            <Tab.Pane eventKey="results">
              {results.map((yearData, index) => (
                <Card key={index} className="mb-4 shadow-sm hover-card">
                  <Card.Header className="results-header">
                    <h4 className="mb-0">
                      <FontAwesomeIcon icon={faTrophy} className="me-2" />
                      Academic Year {yearData.year}
                    </h4>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <div className="table-responsive">
                      <Table className="results-table mb-0">
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
                              <td data-label="Examination">
                                <div className="d-flex align-items-center">
                                  <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
                                  <span>{achievement.exam}</span>
                                </div>
                              </td>
                              <td data-label="Distinctions" className="text-success fw-bold">
                                {achievement.distinction}
                              </td>
                              <td data-label="First Division" className="text-primary fw-bold">
                                {achievement.firstDiv}
                              </td>
                              <td data-label="Special Achievements">
                                {achievement.winners ? (
                                  <div className="achievement-text">
                                    <FontAwesomeIcon icon={faTrophy} className="me-2 text-warning" />
                                    <span>{achievement.winners} winners out of {achievement.participants} participants</span>
                                  </div>
                                ) : '-'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <EnrollmentForm
          show={showEnrollment}
          handleClose={() => setShowEnrollment(false)}
          program={selectedProgram}
        />

        <style jsx>{`
          /* Navigation Styles */
          .nav-pills-custom {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            padding: 1.2rem;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .nav-item-wrapper {
            flex: 1;
            max-width: 220px;
          }

          .nav-link-fancy {
            display: flex;
            align-items: center;
            padding: 1rem 1.5rem;
            border-radius: 12px !important;
            background: linear-gradient(145deg, #ffffff, #e6e6e6);
            box-shadow: 5px 5px 10px #d1d1d1;
            transition: all 0.3s ease;
            border: none !important;
            color: #666 !important;
          }

          .icon-wrapper {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            margin-right: 12px;
            transition: all 0.3s ease;
          }

          .nav-icon {
            font-size: 1.2rem;
            transition: all 0.3s ease;
          }

          .nav-text {
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.5px;
          }

          /* Active States */
          .nav-link-fancy.active {
            background: linear-gradient(145deg, rgba(20, 158, 218, 0.88), rgb(207, 19, 198));
            color: white !important;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .nav-link-fancy:nth-child(2).active {
            background: linear-gradient(145deg, #ff9800, #e65100);
          }

          .nav-link-fancy:nth-child(3).active {
            background: linear-gradient(145deg, #28a745, #1e7e34);
          }

          /* Effects */
          .nav-link-fancy:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          }

          .nav-link-fancy:hover .icon-wrapper {
            transform: scale(1.1) rotate(5deg);
          }

          .nav-link-fancy:hover .nav-icon {
            transform: scale(1.1);
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .nav-pills-custom {
              flex-direction: column;
              gap: 1rem;
              padding: 1rem;
            }

            .nav-item-wrapper {
              max-width: 100%;
            }

            .nav-link-fancy {
              padding: 0.8rem 1.2rem;
              justify-content: center;
            }

            .icon-wrapper {
              width: 32px;
              height: 32px;
            }

            .nav-text {
              font-size: 0.9rem;
            }

            .nav-link-fancy.active {
              transform: translateY(0);
              box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
            }

            .nav-link-fancy.active::after {
              content: '';
              position: absolute;
              bottom: 5px;
              left: 50%;
              width: 40%;
              height: 3px;
              background: rgba(255, 255, 255, 0.5);
              transform: translateX(-50%);
              border-radius: 2px;
            }
          }

          /* Card Styles */
          .hover-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 15px;
            overflow: hidden;
          }

          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          }

          /* Heading Styles */
          .target-heading {
            font-size: 3rem;
            font-weight: 700;
            text-transform: uppercase;
            background: linear-gradient(135deg, rgb(3, 7, 131), rgb(247, 38, 38));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
            display: inline-block;
            padding-bottom: 10px;
            border-bottom: 4px solid rgb(249, 7, 7);
            animation: fadeInUp 1s ease-in-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Enrollment Form Animations */
          .animate-slide-in {
            animation: slideIn 0.3s ease-out forwards;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* Modern Form Styles */
          :global(.modal-content) {
            border-radius: 15px;
            border: none;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            background: var(--bg-primary, #ffffff);
          }

          :global(.form-control), 
          :global(.form-select) {
            padding: 12px 15px;
            border-radius: 10px;
            border: 1px solid #e0e0e0;
            transition: all 0.3s;
            background: var(--bg-secondary, #f8f9fa);
            color: var(--text-primary, #333333);
          }

          :global(.form-control:focus), 
          :global(.form-select:focus) {
            border-color: #4a90e2;
            box-shadow: 0 0 0 0.25rem rgba(74, 144, 226, 0.25);
          }

          /* Payment Method Styles */
          :global(.form-check-input:checked) {
            background-color: #4a90e2;
            border-color: #4a90e2;
          }

          /* Progress Bar */
          :global(.progress) {
            height: 6px;
            border-radius: 3px;
            background-color: var(--bg-secondary, #f8f9fa);
          }

          :global(.progress-bar) {
            background-color: #4a90e2;
          }

        

          /* Results Section Styles */
          .hover-card {
            transition: all 0.3s ease;
            border: none;
            border-radius: 15px;
            overflow: hidden;
          }

          .hover-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          .results-header {
            background: linear-gradient(145deg, #28a745, #1e7e34);
            color: white;
            padding: 1.5rem;
            border: none;
          }

          :global(.results-table) {
            margin: 0;
            border: none;
          }

          :global(.results-table th) {
            background: var(--bg-secondary, #f8f9fa);
            padding: 1rem;
            font-weight: 600;
            border-bottom: 2px solid #dee2e6;
          }

          :global(.results-table td) {
            padding: 1rem;
            vertical-align: middle;
            border-color: #dee2e6;
          }

          .achievement-text {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .table-responsive {
            border-radius: 0 0 15px 15px;
            overflow: hidden;
          }

       

            /* Ensure consistent card styling */
            .hover-card {
              margin-bottom: 1rem;
              border: none;
              border-radius: 15px;
              overflow: hidden;
            }

            /* Ensure table fits within card */
            .hover-card .card-body {
              padding: 0;
            }
          }

         
        `}</style>
      </div>
    </div>
  );
};

export default Foundation;
