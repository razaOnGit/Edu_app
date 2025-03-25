import React from 'react';
import { Tab, Nav, Card, Button, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, faTrophy, faBook, faGraduationCap, 
  faAtom, faPalette, faCalculator, faCog, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

const Target = () => {
  const universities = [
    {
      name: "AMU",
      fullName: "Aligarh Muslim University",
      description: "Leading central university known for its academic excellence",
      syllabusLinks: {
        "VI": {
          "General": {
            title: "Class VI - AMU",
            subjects: [
              "Mathematics: Basic Arithmetic, Geometry",
              "Science: General Science",
              "Social Studies: History, Geography",
              "Languages: English, Hindi/Urdu"
            ],
            pdfLink: "/syllabi/amu/class6.pdf"
          }
        },
        "IX": {
          "General": {
            title: "Class IX Science - AMU",
            subjects: [
              "Physics: Motion, Force, Energy",
              "Chemistry: Matter, Atoms, Elements",
              "Biology: Living Systems, Environment",
              "Mathematics: Algebra, Geometry"
            ],
            pdfLink: "/syllabi/amu/class9_science.pdf"
          }
        },
        "XI": {
          "Science/Diploma Engineering": {
            title: "Class XI Science - AMU",
            subjects: [
              "Physics: Mechanics, Thermodynamics",
              "Chemistry: Organic Chemistry, Chemical Bonding",
              "Biology: Human Physiology, Genetics",
              "Mathematics: Calculus, Trigonometry"
            ],
            pdfLink: "/syllabi/amu/class11_science.pdf"
          }
        },
        "XI Arts/Commerce": {
          "Arts/Commerce": {
            title: "Class XI Arts/Commerce - AMU",
            subjects: [
              "History: Ancient History",
              "Geography: Physical Geography",
              "Political Science: Democratic Politics",
              "Languages: English, Hindi/Urdu"
            ],
            pdfLink: "/syllabi/amu/class11_arts.pdf"
          }
        }
      }
    },
    {
      name: "JMI",
      fullName: "Jamia Millia Islamia",
      description: "Renowned central university focusing on modern education",
      syllabusLinks: {
        "VI": {
          "General": {
            title: "Class VI - JMI",
            subjects: [
              "Mathematics: Basic Concepts",
              "Science: Introduction to Science",
              "Social Studies: History, Civics",
              "Languages: English, Hindi/Urdu"
            ],
            pdfLink: "/syllabi/jmi/class6.pdf"
          }
        },
        "IX": {
          "General": {
            title: "Class IX Science - JMI",
            subjects: [
              "Physics: Basic Physics",
              "Chemistry: Basic Chemistry",
              "Biology: Life Science",
              "Mathematics: Basic Mathematics"
            ],
            pdfLink: "/syllabi/jmi/class9_science.pdf"
          }
        },
        "XI": {
          "Science/Humanities": {
            title: "Class XI Science - JMI",
            subjects: [
              "Physics: Waves, Optics",
              "Chemistry: Physical Chemistry, Inorganic Chemistry",
              "Biology: Plant Physiology, Ecology",
              "Mathematics: Algebra, Coordinate Geometry"
            ],
            pdfLink: "/syllabi/jmi/class11_science.pdf"
          }
        },
        "XI Arts/Commerce": {
          "Arts/Commerce": {
            title: "Class XI Arts/Commerce - JMI",
            subjects: [
              "History: Ancient History",
              "Geography: Physical Geography",
              "Political Science: Democratic Politics",
              "Languages: English, Hindi/Urdu"
            ],
            pdfLink: "/syllabi/jmi/class11_arts.pdf"
          }
        }
      }
    },
    {
      name: "BHU",
      fullName: "Banaras Hindu University",
      description: "Historic institution known for holistic education",
      syllabusLinks: {
        "VI": {
          "General": {
            title: "Class VI - BHU",
            subjects: [
              "Mathematics: Fundamentals",
              "Science: General Science",
              "Social Studies: History, Geography",
              "Languages: English, Hindi/Sanskrit"
            ],
            pdfLink: "/syllabi/bhu/class6.pdf"
          }
        },
        "IX": {
          "General": {
            title: "Class IX Science - BHU",
            subjects: [
              "Physics: Mechanics & Properties",
              "Chemistry: Chemical Reactions",
              "Biology: Plant & Animal Life",
              "Mathematics: Number System"
            ],
            pdfLink: "/syllabi/bhu/class9_science.pdf"
          }
        },
        "XI": {
        "Science": {
          title: "Class XI Science - BHU",
          subjects: [
            "Physics: Mechanics, Thermodynamics",
            "Chemistry: Organic Chemistry, Chemical Bonding",
            "Biology: Human Physiology, Genetics",
            "Mathematics: Calculus, Trigonometry"
          ],
          pdfLink: "/syllabi/bhu/class11_science.pdf"
        }
      },
        "XI Arts/Commerce": {
          "Arts/Commerce": {
            title: "Class XI Arts/Commerce - BHU",
            subjects: [
              "History: Ancient History",
              "Geography: Physical Geography",
              "Political Science: Democratic Politics",
              "Languages: English, Hindi/Sanskrit"
            ],
            pdfLink: "/syllabi/bhu/class11_arts.pdf"
          }
        }
      }
    }
  ];

  const pastResults = [
    {
      year: "2024",
      results: [
        { university: "AMU", selected: 25, topRank: 5 },
        { university: "JMI", selected: 18, topRank: 3 },
        { university: "BHU", selected: 15, topRank: 7 }
      ]
    },
    {
      year: "2023",
      results: [
        { university: "AMU", selected: 22, topRank: 8 },
        { university: "JMI", selected: 15, topRank: 4 },
        { university: "BHU", selected: 12, topRank: 9 }
      ]
    }
  ];

  return (
    <div className="target-page py-5">
      <div className="container">
        <h1 className="target-heading text-center mb-5">Target Batch Programs</h1>

        <Tab.Container defaultActiveKey="streams">
          <Nav variant="pills" className="nav-pills-custom mb-4">
            <Nav.Item className="nav-item-wrapper">
              <Nav.Link eventKey="streams" className="nav-link-fancy">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faBook} className="nav-icon" />
                </div>
                <span className="nav-text">Streams & Classes</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-wrapper">
              <Nav.Link eventKey="universities" className="nav-link-fancy">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faGraduationCap} className="nav-icon" />
                </div>
                <span className="nav-text">Universities</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item-wrapper">
              <Nav.Link eventKey="results" className="nav-link-fancy">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faTrophy} className="nav-icon" />
                </div>
                <span className="nav-text">Past Results</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="streams">
              <div className="university-streams-container">
                {/* AMU Section */}
                <Card className="mb-4 shadow-sm university-card">
                  <Card.Header className="amu-header">
                    <h3>Aligarh Muslim University (AMU)</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {/* Class VI */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class VI</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class IX */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class IX</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class XI - Science */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class XI - Science/Diploma Engineering</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* JMI Section */}
                <Card className="mb-4 shadow-sm university-card">
                  <Card.Header className="jmi-header">
                    <h3>Jamia Millia Islamia (JMI)</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {/* Class VI */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class VI</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check JMI subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class IX */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class IX</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class XI - Science */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class XI - Science/Humanities</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                {/* BHU Section */}
                <Card className="mb-4 shadow-sm university-card">
                  <Card.Header className="bhu-header">
                    <h3>Banaras Hindu University (BHU)</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {/* Class VI */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class VI</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class IX */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class IX</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class XI - Science */}
                      <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class XI - Science</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* Class XI - Commerce */}
                      {/* <Col md={6} className="mb-4">
                        <div className="class-card">
                          <h4>Class XI - Commerce</h4>
                          <p className="info-text">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                            Check subjects and syllabus in University tab before enrolling
                          </p>
                          <Button variant="primary" className="enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col> */}
                      
                    </Row>
                  </Card.Body>
                </Card>

                {/* Commerce Section for Class XI */}
                <Card className="mt-4 shadow-sm commerce-card">
                  <Card.Header className="commerce-header">
                    <h3>Commerce for Class XI</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {/* AMU Commerce */}
                      <Col md={4} className="mb-4">
                        <div className="commerce-option">
                          <h5>AMU Commerce</h5>
                          <Button variant="outline-primary" className="w-100 enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* JMI Commerce */}
                      <Col md={4} className="mb-4">
                        <div className="commerce-option">
                          <h5>JMI Commerce</h5>
                          <Button variant="outline-primary" className="w-100 enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>

                      {/* BHU Commerce */}
                      <Col md={4} className="mb-4">
                        <div className="commerce-option">
                          <h5>BHU Commerce</h5>
                          <Button variant="outline-primary" className="w-100 enroll-btn">
                            Enroll Now
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="universities">
              {universities.map((uni, index) => (
                <Card key={index} className="mb-4 shadow-sm">
                  <Card.Header className="bg-primary text-white">
                    <h4 className="mb-0">{uni.fullName}</h4>
                    <p className="mb-0 small">{uni.description}</p>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {Object.entries(uni.syllabusLinks).map(([className, streams]) => (
                        <Col md={6} key={className} className="mb-4">
                          <h5 className="border-bottom pb-2 mb-3">Class {className}</h5>
                          {Object.entries(streams).map(([streamName, data]) => (
                            <div key={streamName} className="mb-4">
                              <h6 className="text-primary mb-3">{data.title}</h6>
                              <ul className="list-unstyled mb-3">
                                {data.subjects.map((subject, idx) => (
                                  <li key={idx} className="mb-2">
                                    <FontAwesomeIcon 
                                      icon={faGraduationCap} 
                                      className="me-2 text-primary"
                                    />
                                    {subject}
                                  </li>
                                ))}
                              </ul>
                              <Button 
                                variant="outline-primary" 
                                href={data.pdfLink}
                                className="w-100"
                                size="sm"
                              >
                                <FontAwesomeIcon icon={faDownload} className="me-2" />
                                Download {streamName.replace('_', ' & ')} Syllabus
                              </Button>
                            </div>
                          ))}
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Tab.Pane>

            <Tab.Pane eventKey="results">
              {pastResults.map((yearData, index) => (
                <Card key={index} className="mb-4 shadow-sm">
                  <Card.Header className="bg-success text-white">
                    <h4 className="mb-0">Results {yearData.year}</h4>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>University</th>
                          <th>Selected Students</th>
                          <th>Top Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        {yearData.results.map((result, idx) => (
                          <tr key={idx}>
                            <td>{result.university}</td>
                            <td>{result.selected}</td>
                            <td>{result.topRank}</td>
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
      </div>

      <style jsx>{`
        .target-page { 
          background: rgb(255, 255, 255); 
        }

        .nav-pills-custom {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding: 1.2rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
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
          box-shadow: 5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff;
          transition: all 0.3s ease;
          border: none !important;
          color: #666 !important;
          position: relative;
          overflow: hidden;
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

        /* Active States with your colors */
        .nav-link-fancy.active {
          background: linear-gradient(135deg, rgb(223, 13, 13), rgb(212, 22, 22));
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .nav-item-wrapper:nth-child(2) .nav-link-fancy.active {
          background: linear-gradient(135deg, #ff9800, #e65100);
        }

        .nav-item-wrapper:nth-child(3) .nav-link-fancy.active {
          background: linear-gradient(135deg, #28a745, #1e7e34);
        }

        /* Hover Effects */
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

        .hover-card {
          transition: all 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
        }

        .hover-card .card-header {
          padding: 1.5rem;
          border: none;
          position: relative;
          background: linear-gradient(145deg, #4e54c8, #8f94fb);
        }

        .hover-card .card-body {
          padding: 1.5rem;
        }

        .hover-card .btn {
          border-radius: 25px;
          padding: 12px 24px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          background: linear-gradient(145deg,rgba(67, 54, 185, 0.42), #e6e6e6);
          border: none;
          color: #333;
          box-shadow: 5px 5px 10px #d1d1d1,
                      -5px -5px 10px #ffffff;
        }

        .hover-card .btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          color: #4e54c8;
          box-shadow: 7px 7px 14px #d1d1d1,
                      -7px -7px 14px #ffffff;
        }

        .hover-card .btn:active {
          transform: translateY(1px);
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: inset 5px 5px 10px #d1d1d1,
                      inset -5px -5px 10px #ffffff;
        }

        .table {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 0 15px rgba(0,0,0,0.05);
        }

        .table thead th {
          background: #f8f9fa;
          border-bottom: 2px solid #dee2e6;
          padding: 1rem;
        }

        .card {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .card-header {
          padding: 1.5rem;
          border: none;
        }

        @media (max-width: 768px) {
          .tab-button {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          
          .hover-card .card-header,
          .hover-card .card-body {
            padding: 1rem;
          }
        }

        .target-heading {
          font-size: 3rem;
          font-weight: 700;
          text-transform: uppercase;
          background: linear-gradient(135deg, #ff9800, #e65100);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
          display: inline-block;
          padding-bottom: 10px;
          border-bottom: 4px solid #ff9800;
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

        .nav-pills-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tab-button {
          border: none;
          padding: 12px 24px;
          font-weight: 500;
          transition: all 0.3s ease;
          color: white !important;
          border-radius: 30px !important;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .nav-pills-container {
            flex-direction: column;
            gap: 15px;
            padding: 0 15px;
          }

          .tab-button {
            margin: 0;
            padding: 12px 20px;
            font-size: 1rem;
            width: 100%;
            text-align: center;
            border-radius: 12px !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          }

          .tab-button:active {
            transform: scale(0.98);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }

          .tab-button svg {
            font-size: 1.2rem;
            margin-right: 10px;
          }
        }

        @media (max-width: 576px) {
          .nav-pills-container {
            gap: 12px;
            padding: 0 10px;
          }

          .tab-button {
            padding: 10px 16px;
          }
        }

        /* Streams & Classes Tab Styles */
        .university-streams-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .university-card {
          border-radius: 12px;
          overflow: hidden;
        }
        
        .amu-header {
          background: linear-gradient(135deg, #8e0e00, #1f1c18);
          color: white;
        }
        
        .jmi-header {
          background: linear-gradient(135deg, #1a2980, #26d0ce);
          color: white;
        }
        
        .bhu-header {
          background: linear-gradient(135deg, #0f2027, #2c5364);
          color: white;
        }
        
        .commerce-header {
          background: linear-gradient(135deg, #11998e, #38ef7d);
          color: white;
        }
        
        .class-card {
          padding: 20px;
          border-radius: 10px;
          background: #f8f9fa;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .info-text {
          font-size: 0.9rem;
          color: #6c757d;
          margin: 15px 0;
          flex-grow: 1;
        }
        
        .enroll-btn {
          border-radius: 25px;
          padding: 10px 20px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .commerce-option {
          text-align: center;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 10px;
          height: 100%;
        }
        
        @media (max-width: 768px) {
          .class-card, .commerce-option {
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Target;