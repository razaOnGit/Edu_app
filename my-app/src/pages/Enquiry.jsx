import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

// Initialize EmailJS
emailjs.init("YP9va7oWZyO_aeGB-");

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: "12px 20px",
  fontSize: "1rem",
  fontWeight: 500,
  transition: "all 0.3s ease",
  borderRadius: "8px",
  margin: "4px 0",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transform: "translateX(5px)",
  }
}));

const EnquiryTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  background: "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "1.5rem",
  textAlign: "center",
}));

const Enquiry = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  const [enquiryType, setEnquiryType] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const debug = (message, data) => {
    console.log(`[DEBUG] ${message}:`, data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debug('Form submission started', { enquiryType, name, mobile, email, address });
    setIsSubmitting(true);

    if (!enquiryType || !name || !mobile || !email || !address) {
      debug('Validation failed', 'Missing required fields');
      alert("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10,16}$/.test(mobile)) {
      debug('Validation failed', 'Invalid mobile number');
      alert("Please enter a valid mobile number (10-16 digits)");
      setIsSubmitting(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      debug('Validation failed', 'Invalid email');
      alert("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      enquiryType,
      name,
      mobile,
      email,
      address,
      to_email: " "
    };

    try {
      debug('Sending email', templateParams);
      const result = await emailjs.send(
        'service_7bpusae',   //service_7bpusae
        'template_mm9c30h',       // template_mm9c30h
        templateParams, 
        'YP9va7oWZyO_aeGB-'     //YP9va7oWZyO_aeGB-
      );
      
      if (result.status === 200) {
        debug('Email sent successfully', result);
        setShowSuccessMessage(true);
        setEnquiryType("");
        setName("");
        setMobile("");
        setEmail("");
        setAddress("");
      }
    } catch (error) {
      debug('Email sending failed', error);
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccessMessage) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        sx={{
          background: 'linear-gradient(135deg,rgb(31, 78, 148) 0%,rgb(245, 105, 142) 100%)',
        }}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <Box
            sx={{
              textAlign: 'center',
              padding: '3rem 4rem',
              background: 'white',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
              }
            }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TypeAnimation
                sequence={[
                  'Thank you for your enquiry! 🎉',
                  1000,
                  'We appreciate your interest! 🌟',
                  1000,
                  "We'll get back to you soon! 📫",
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
                style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#2e7d32',
                  marginBottom: '1rem'
                }}
              />
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    );
  }

  return (
    <Box
      width={isNotMobile ? "50%" : "95%"}
      p={isNotMobile ? "2.5rem" : "1.5rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <EnquiryTitle variant="h1">Quick Enquiry Form</EnquiryTitle>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Enquiry Type</InputLabel>
          <Select
            value={enquiryType}
            label="Enquiry Type"
            onChange={(e) => setEnquiryType(e.target.value)}
            required
          >
            <StyledMenuItem value="general">🔍 General Enquiry</StyledMenuItem>
            <StyledMenuItem value="crash-course">🚀 Crash Course</StyledMenuItem>
            <StyledMenuItem value="foundation-batch">📚 Foundation Batch</StyledMenuItem>
            <StyledMenuItem value="target-batch">🎯 Target Batch</StyledMenuItem>
            <StyledMenuItem value="admission">🎓 Admission</StyledMenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          sx={{ mb: 2 }}
          inputProps={{ 
            minLength: 10,
            maxLength: 16,
            pattern: "\\d{10,16}",
          }}
          helperText="Enter between 10 to 16 digits"
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Address"
          multiline
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{
            mt: 2,
            background: "linear-gradient(45deg, #FF416C, #FF4B2B)",
            "&:hover": {
              background: "linear-gradient(45deg, #FF4B2B, #FF416C)",
            },
          }}
        >
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </Button>
      </form>
    </Box>
  );
};

export default Enquiry;