import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col, ProgressBar, Alert, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faEnvelope, faPhone, faCalendar, 
  faSchool, faIdCard, faQrcode, faMobileAlt,
  faCreditCard
} from '@fortawesome/free-solid-svg-icons';

const EnrollmentForm = ({ show, handleClose, program }) => {
  // Form state management
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('qr_code'); // Default to QR code
  const [upiId, setUpiId] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    parentName: '',
    parentContact: '',
    address: '',
    educationLevel: '',
    preferredSchedule: '',
    agreeTerms: false
  });

  // Reset form completely when modal closes
  const resetForm = () => {
    setStep(1);
    setPaymentMethod('qr_code');
    setUpiId('');
    setIsVerified(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      parentName: '',
      parentContact: '',
      address: '',
      educationLevel: '',
      preferredSchedule: '',
      agreeTerms: false
    });
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Form navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Verify UPI ID (mock implementation)
  const verifyUpiId = () => {
    // In a real app, you would validate the UPI ID format
    if (upiId.includes('@')) {
      setIsVerified(true);
      return true;
    }
    setIsVerified(false);
    return false;
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate UPI ID if that payment method is selected
    if (paymentMethod === 'upi' && !verifyUpiId()) {
      return;
    }

    // Prepare final submission data
    const submissionData = {
      ...formData,
      paymentMethod,
      upiId: paymentMethod === 'upi' ? upiId : null
    };

    // Handle form submission (API call, etc.)
    console.log('Form submitted:', submissionData);
    handleClose();
    // Here you would typically show a success message
  };

  return (
    <Modal 
      show={show} 
      onHide={handleClose} 
      onExited={resetForm}
      size="lg" 
      centered 
      backdrop="static"
      className="enrollment-modal"
    >
      <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="w-100 text-center">
          <h3 className="fw-bold mb-0">Enroll in {program}</h3>
          <ProgressBar now={(step / 3) * 100} className="mt-3" style={{ height: '6px' }} />
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="pt-0">
        <Form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="animate-slide-in">
              <h5 className="text-muted mb-4">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Personal Information
              </h5>
              
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </Form.Group>
                </Col>
                
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@email.com"
                    />
                  </Form.Group>
                </Col>
                
                <Col md={6}>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765432109"
                      pattern="[0-9]{10}"
                    />
                  </Form.Group>
                </Col>
                
                <Col md={6}>
                  <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                      max={new Date().toISOString().split('T')[0]}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          )}
          
          {/* Step 2: Educational Details */}
          {step === 2 && (
            <div className="animate-slide-in">
              <h5 className="text-muted mb-4">
                <FontAwesomeIcon icon={faSchool} className="me-2" />
                Educational Details
              </h5>
              
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="educationLevel">
                    <Form.Label>Current Education Level</Form.Label>
                    <Form.Select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your level</option>
                      <option value="primary">Primary (5-8)</option>
                      <option value="secondary">Secondary (9-10)</option>
                      <option value="higher_secondary">Higher Secondary (11-12)</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                
                <Col md={6}>
                  <Form.Group controlId="preferredSchedule">
                    <Form.Label>Preferred Schedule</Form.Label>
                    <Form.Select
                      name="preferredSchedule"
                      value={formData.preferredSchedule}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select schedule</option>
                      <option value="morning">Morning (8AM-12PM)</option>
                      <option value="afternoon">Afternoon (12PM-4PM)</option>
                      <option value="evening">Evening (4PM-8PM)</option>
                      <option value="weekend">Weekend Batch</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                
                <Col md={12}>
                  <Form.Group controlId="previousSchool">
                    <Form.Label>Previous School/College</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="Name of your current school/college"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          )}
          
          {/* Step 3: Payment & Confirmation */}
          {step === 3 && (
            <div className="animate-slide-in">
              <h5 className="text-muted mb-4">
                <FontAwesomeIcon icon={faIdCard} className="me-2" />
                Payment & Confirmation
              </h5>
              
              <Alert variant="info" className="mb-4">
                <strong>Program Fee:</strong> ₹8,500 per month<br />
                <small>First month payment required to confirm enrollment</small>
              </Alert>
              
              <Row className="g-3">
                <Col md={12}>
                  <Form.Group controlId="paymentMethod">
                    <Form.Label>Payment Method</Form.Label>
                    <div className="payment-options">
                      <Button
                        variant={paymentMethod === 'qr_code' ? 'primary' : 'outline-primary'}
                        className="payment-option"
                        onClick={() => setPaymentMethod('qr_code')}
                      >
                        <FontAwesomeIcon icon={faQrcode} className="me-2" />
                        Pay via QR Code
                      </Button>
                      
                      <Button
                        variant={paymentMethod === 'upi' ? 'primary' : 'outline-primary'}
                        className="payment-option"
                        onClick={() => setPaymentMethod('upi')}
                      >
                        <FontAwesomeIcon icon={faMobileAlt} className="me-2" />
                        UPI Payment
                      </Button>
                      
                      <Button
                        variant={paymentMethod === 'credit_card' ? 'primary' : 'outline-primary'}
                        className="payment-option"
                        onClick={() => setPaymentMethod('credit_card')}
                      >
                        <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                        Credit Card
                      </Button>
                    </div>
                  </Form.Group>
                </Col>
                
                {/* QR Code Payment */}
                {paymentMethod === 'qr_code' && (
                  <Col md={12} className="text-center">
                    <div className="qr-container p-4">
                      <Image
                        src="\QR.jpg" // Replace with your actual QR code
                        alt="Payment QR Code"
                        className="qr-code-image mb-3"
                        fluid
                      />
                      <p className="text-muted">
                        Scan this QR code using any UPI app to make the payment
                      </p>
                      <small className="d-block text-muted">
                        Amount: ₹8,500
                      </small>
                    </div>
                  </Col>
                )}
                
                {/* UPI Payment */}
                {paymentMethod === 'upi' && (
                  <Col md={12}>
                    <Form.Group controlId="upiId">
                      <Form.Label>Enter UPI ID</Form.Label>
                      <div className="d-flex align-items-center">
                        <Form.Control
                          type="text"
                          placeholder="yourname@upi"
                          value={upiId}
                          onChange={(e) => {
                            setUpiId(e.target.value);
                            setIsVerified(false);
                          }}
                          required
                          className="me-2"
                        />
                        <Button 
                          variant={isVerified ? 'success' : 'primary'}
                          onClick={verifyUpiId}
                          disabled={!upiId.includes('@')}
                        >
                          {isVerified ? 'Verified' : 'Verify'}
                        </Button>
                      </div>
                      {isVerified && (
                        <small className="text-success">
                          UPI ID verified successfully
                        </small>
                      )}
                    </Form.Group>
                  </Col>
                )}
                
                {/* Credit Card Payment */}

                {paymentMethod === 'credit_card' && (
                  <>
                    <Col md={12}>
                      <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          pattern="[0-9]{16}"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="expiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="MM/YY"
                          pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="123"
                          pattern="[0-9]{3}"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group controlId="cardName">
                        <Form.Label>Cardholder Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Name on card"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </>
                )}
                
                <Col md={12}>
                  <Form.Group controlId="agreeTerms" className="mt-3">
                    <Form.Check
                      type="checkbox"
                      label={
                        <>
                          I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and 
                          <a href="/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy</a>
                        </>
                      }
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          )}
          
          <div className="d-flex justify-content-between mt-4">
            {step > 1 ? (
              <Button variant="outline-secondary" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button variant="primary" onClick={nextStep}>
                Continue
              </Button>
            ) : (
              <Button 
                variant="success" 
                type="submit"
                disabled={paymentMethod === 'upi' && !isVerified}
              >
                Complete Enrollment
              </Button>
            )}
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EnrollmentForm;