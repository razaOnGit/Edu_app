import React from 'react';
import { Tab, Nav, Card, Button, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, faTrophy, faBook, faGraduationCap, 
  faAtom, faPalette, faCalculator, faCog 
} from '@fortawesome/free-solid-svg-icons';

const Target = () => {
  const streams = [
    {
      name: "Science",
      icon: faAtom,
      classes: {
        "IX": ["Physics", "Chemistry", "Biology", "Mathematics"],
        "XI": ["Physics", "Chemistry", "Mathematics", "Computer Science/Biology"]
      }
    },
    {
      name: "Arts",
      icon: faPalette,
      classes: {
        "IX(S.St)": ["History", "Geography", "Political Science", "Languages"],
        "XI": ["History", "Political Science", "Economics", "Psychology"]
      }
    },
    {
      name: "Commerce",
      icon: faCalculator,
      classes: {
        "IX(S.St)": ["Mathematics", "Social Studies", "Economics", "Business Studies"],
        "XI": ["Accountancy", "Business Studies", "Economics", "Mathematics"]
      }
    },
    {
      name: "Diploma Engineering",
      icon: faCog,
      classes: {
        "XI": ["Mathematics", "Physics", "Chemistry", "Engineering Drawing"]
      }
    }
  ];

  const universities = [
    {
      name: "AMU",
      fullName: "Aligarh Muslim University",
      description: "Leading central university known for its academic excellence",
      syllabusLinks: {
        "IX": {
          "Science": {
            title: "Class IX Science - AMU",
            subjects: [
              "Physics: Motion, Force, Energy",
              "Chemistry: Matter, Atoms, Elements",
              "Biology: Living Systems, Environment",
              "Mathematics: Algebra, Geometry"
            ],
            pdfLink: "/syllabi/amu/class9_science.pdf"
          },
         
        },
        "XI": {
          "Science": {
            title: "Class XI Science - AMU",
            subjects: [
              "Physics: Mechanics, Thermodynamics",
              "Chemistry: Organic Chemistry, Atomic Structure",
              "Mathematics: Calculus, Trigonometry",
              "Biology: Cell Biology, Genetics (Optional)"
            ],
            pdfLink: "/syllabi/amu/class11_science.pdf"
          },
          "Arts_Commerce": {
            title: "Class XI Arts & Commerce - AMU",
            subjects: [
              "Economics: Microeconomics",
              "Business Studies: Business Organization",
              "Accountancy: Basic Accounting",
              "Mathematics: Statistics (Optional)"
            ],
            pdfLink: "/syllabi/amu/class11_arts_commerce.pdf"
          }
        }
      }
    },
    {
      name: "JMI",
      fullName: "Jamia Millia Islamia",
      description: "Renowned central university focusing on modern education",
      syllabusLinks: {
        "IX": {
          "Science": {
            title: "Class IX Science - JMI",
            subjects: [
              "Physics: Basic Physics",
              "Chemistry: Basic Chemistry",
              "Biology: Life Science",
              "Mathematics: Basic Mathematics"
            ],
            pdfLink: "/syllabi/jmi/class9_science.pdf"
          },
         
        },
        "XI": {
          "Science": {
            title: "Class XI Science - JMI",
            subjects: [
              "Physics: Advanced Mechanics",
              "Chemistry: Chemical Bonding",
              "Mathematics: Advanced Algebra",
              "Computer Science (Optional)"
            ],
            pdfLink: "/syllabi/jmi/class11_science.pdf"
          },
          "Arts_Commerce": {
            title: "Class XI Arts & Commerce - JMI",
            subjects: [
              "Economics: Indian Economy",
              "Business Studies: Management",
              "Accountancy: Financial Accounting",
              "Political Science (Optional)"
            ],
            pdfLink: "/syllabi/jmi/class11_arts_commerce.pdf"
          }
        }
      }
    },
    {
      name: "BHU",
      fullName: "Banaras Hindu University",
      description: "Historic institution known for holistic education",
      syllabusLinks: {
        "IX": {
          "Science": {
            title: "Class IX Science - BHU",
            subjects: [
              "Physics: Mechanics & Properties",
              "Chemistry: Chemical Reactions",
              "Biology: Plant & Animal Life",
              "Mathematics: Number System"
            ],
            pdfLink: "/syllabi/bhu/class9_science.pdf"
          },
      
        },
        "XI": {
          "Science": {
            title: "Class XI Science - BHU",
            subjects: [
              "Physics: Classical Mechanics",
              "Chemistry: Organic Chemistry",
              "Mathematics: Coordinate Geometry",
              "Biology: Zoology & Botany (Optional)"
            ],
            pdfLink: "/syllabi/bhu/class11_science.pdf"
          },
          "Arts_Commerce": {
            title: "Class XI Arts & Commerce - BHU",
            subjects: [
              "Economics: Macro Economics",
              "Business Studies: Enterprise",
              "Accountancy: Company Accounts",
              "Mathematics: Business Math (Optional)"
            ],
            pdfLink: "/syllabi/bhu/class11_arts_commerce.pdf"
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
        <h1 className="text-center mb-5">Target Batch Programs</h1>
        
        <Tab.Container defaultActiveKey="streams">
          <Nav variant="pills" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="streams">
                <FontAwesomeIcon icon={faBook} className="me-2" />
                Streams & Classes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="universities">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                Universities
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="results">
                <FontAwesomeIcon icon={faTrophy} className="me-2" />
                Past Results
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="streams">
              <Row>
                {streams.map((stream, index) => (
                  <Col lg={6} key={index} className="mb-4">
                    <Card className="h-100 shadow-sm hover-card">
                      <Card.Header className="bg-primary text-white">
                        <h4 className="mb-0">
                          <FontAwesomeIcon icon={stream.icon} className="me-2" />
                          {stream.name}
                        </h4>
                      </Card.Header>
                      <Card.Body>
                        {Object.entries(stream.classes).map(([className, subjects]) => (
                          <div key={className} className="mb-4">
                            <h5 className="border-bottom pb-2">Class {className}</h5>
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
                          href={`#enroll-${stream.name.toLowerCase()}`}
                        >
                          Enroll Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
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
  );
};

export default Target;
