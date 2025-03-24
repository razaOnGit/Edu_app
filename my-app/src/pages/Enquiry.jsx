import React, { useState, useEffect } from "react";
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
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Initialize EmailJS at the start of your file, after imports
emailjs.init("YP9va7oWZyO_aeGB-");

// Add custom styled components
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
  },
  "& .MuiListItemIcon-root": {
    minWidth: 40,
  },
}));

const EnquiryTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  background: "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "1.5rem",
  textAlign: "center",
  position: "relative",
  padding: "0.5rem 0",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "4px",
    background: "linear-gradient(45deg, #FF6B6B 30%, #FF8E53 90%)",
    borderRadius: "2px",
  },
}));

const Enquiry = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  // State for form fields
  const [enquiryType, setEnquiryType] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add validation
    if (!enquiryType || !name || !mobile || !email || !address) {
      alert("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate mobile number
    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      enquiryType: enquiryType,
      name: name,
      mobile: mobile,
      email: email,
      address: address,
      to_email: "kumailakhtar0786@gmail.com" // Fixed email typo
    };

    try {
      console.log('Sending email with params:', templateParams);
      const result = await emailjs.send(
        'service_7bpusae',
        'template_mm9c30h',
        templateParams,
        'YP9va7oWZyO_aeGB-'
      );

      console.log('Email sent successfully:', result);
      
      if (result.status === 200) {
        setOpenSnackbar(true);
        // Reset form
        setEnquiryType("");
        setName("");
        setMobile("");
        setEmail("");
        setAddress("");
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email error details:', {
        message: error.message,
        status: error?.status,
        text: error?.text
      });
      alert("Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <InputLabel id="enquiry-type-label"
            sx={{
              fontWeight: 500,
              color: theme.palette.primary.main,
            }}
          >
            Enquiry Type
          </InputLabel>
          <Select
            labelId="enquiry-type-label"
            id="enquiry-type"
            value={enquiryType}
            label="Enquiry Type"
            onChange={(e) => setEnquiryType(e.target.value)}
            required
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.light,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            }}
          >
            <StyledMenuItem value="general">🔍 General Enquiry</StyledMenuItem>
            <StyledMenuItem value="crash-course">🚀 Crash Course Enquiry</StyledMenuItem>
            <StyledMenuItem value="foundation-batch">📚 Foundation Batch Enquiry</StyledMenuItem>
            <StyledMenuItem value="target-batch">🎯 Target Batch Enquiry</StyledMenuItem>
            <StyledMenuItem value="admission">🎓 Admission Enquiry</StyledMenuItem>
          </Select>
        </FormControl>

        {/* Name Field */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        {/* Mobile Number Field */}
        <TextField
          fullWidth
          label="Mobile Number"
          variant="outlined"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          sx={{ mb: 2 }}
          inputProps={{ 
            pattern: "[0-9]{10}", 
            title: "Please enter a valid 10-digit mobile number" 
          }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        {/* Address Field */}
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          multiline
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          sx={{ mb: 2 }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{
            color: "white",
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            width: '100%',
            bgcolor: '#2e7d32',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white'
            },
            fontWeight: 800,
            fontSize: '1.2rem',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          Thank you for your enquiry! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Enquiry;