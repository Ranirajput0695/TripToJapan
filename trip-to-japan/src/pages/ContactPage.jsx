import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Stack, 
  TextField, 
  Button, 
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon, 
  LocationOn as LocationIcon, 
  Language as WebIcon,
  Business as CompanyIcon,
  Send as SendIcon,
  SupportAgent as SupportIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import contactHero from "../assets/contact-hero.png";
import { FormControlLabel, Checkbox, CircularProgress, Alert } from "@mui/material";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const services = [
  "Airport Transfers",
  "Sightseeing Tours",
  "FIT Tour Arrangements",
  "Group Tour Management",
  "Activity & Attraction Tickets",
  "Customized Japan Itineraries"
];

const ContactPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDates: "",
    travelers: "",
    service: "",
    message: "",
    agreed: false
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      setStatus({ type: "error", message: "Please agree to the Terms & Conditions." });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        submittedAt: serverTimestamp(),
        source: "Contact Page"
      });

      setStatus({ type: "success", message: "Inquiry sent successfully! Our experts will contact you soon." });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        travelDates: "",
        travelers: "",
        service: "",
        message: "",
        agreed: false
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({ type: "error", message: "Failed to send inquiry. Please try again or contact us directly." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a" }}>
      
      {/* 🚀 PAGE HEADER */}
      <Box 
        sx={{ 
          height: { xs: "35vh", md: "45vh" },
          backgroundImage: `linear-gradient(rgba(0,35,102,0.6), rgba(0,35,102,0.8)), url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          px: 2,
          pt: { xs: "100px", md: "80px" }
        }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: "900", 
            fontSize: { xs: "2.5rem", md: "4.5rem" }, 
            mb: 2,
            textShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}
        >
          Contact <span style={{ color: "#FFB7C5" }}>Us</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.9, fontWeight: "500" }}>
          We are happy to assist you with travel arrangements across Japan.
        </Typography>
        <Box sx={{ width: "80px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px", mt: 4 }} />
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
        <Grid container spacing={8}>
          
          {/* 🏢 COMPANY INFORMATION */}
          <Grid item xs={12} md={5}>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, color: "#002366" }}>
              Get in <span style={{ color: "#FFB7C5" }}>Touch</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.6)", mb: 6, fontSize: "1.1rem", lineHeight: 1.8 }}>
              Whether you're planning a family vacation, a corporate trip, or an independent adventure, 
              our dedicated team in Japan and India is ready to help.
            </Typography>

            <Stack spacing={4}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <CompanyIcon sx={{ color: "#FFB7C5", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="800" sx={{ color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Company Name</Typography>
                  <Typography variant="h6" fontWeight="700" color="#002366">HTC Group of Companies</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <LocationIcon sx={{ color: "#FFB7C5", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="800" sx={{ color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Japan Office Address</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, color: "rgba(0,0,0,0.7)" }}>
                    323-0822 Tochigi-Ken, Oyama-shi Eki-Minami Cho, 4-13-17, Japan
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <PhoneIcon sx={{ color: "#FFB7C5", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="800" sx={{ color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Contact Numbers</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "#002366" }}>Japan: +81 9032109839</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "#002366" }}>India: +91 9560439303</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <EmailIcon sx={{ color: "#FFB7C5", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="800" sx={{ color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Email Address</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "#002366" }}>kaahyapraji658@gmail.com</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <WebIcon sx={{ color: "#FFB7C5", mt: 0.5 }} />
                <Box>
                  <Typography variant="subtitle2" fontWeight="800" sx={{ color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Website</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: "#002366" }}>www.triptojapan.in</Typography>
                </Box>
              </Box>
            </Stack>

            <Box sx={{ mt: 8, p: 4, bgcolor: "#f8fafc", borderRadius: "24px", border: "1px solid rgba(0,35,102,0.05)" }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <SupportIcon sx={{ color: "#FFB7C5", fontSize: 40 }} />
                <Box>
                  <Typography variant="h6" fontWeight="800" color="#002366">24/7 Support</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>We're always available to assist our travelers on the ground.</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* 📝 INQUIRY FORM - Redesigned for Premium Look */}
          <Grid item xs={12} md={7}>
            <Box 
              sx={{ 
                p: { xs: 4, md: 6 }, 
                borderRadius: "32px", 
                bgcolor: "#fff", 
                border: "1px solid rgba(0,35,102,0.08)",
                boxShadow: "0 30px 60px rgba(0,35,102,0.05)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Decorative Accent */}
              <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", bgcolor: "#FFB7C5" }} />

              <Typography variant="h4" sx={{ fontWeight: 900, color: "#002366", mb: 1, fontSize: { xs: "1.8rem", md: "2.4rem" } }}>
                Send <span style={{ color: "#FFB7C5" }}>Inquiry</span>
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.5)", mb: 5, maxWidth: "500px", lineHeight: 1.6 }}>
                Please fill in the details below and our travel experts will get back to you within 24 hours to help plan your perfect trip.
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                {status.message && (
                  <Alert severity={status.type} sx={{ mb: 4, borderRadius: "12px" }}>
                    {status.message}
                  </Alert>
                )}

                <Grid container spacing={3}>
                  {/* Row 1: Full Name */}
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      label="Full Name" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      variant="outlined" 
                      placeholder="Enter your name" 
                      required 
                      sx={premiumInputStyle}
                    />
                  </Grid>
                  
                  {/* Row 2: Email & Phone */}
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label="Email Address" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined" 
                      placeholder="email@example.com" 
                      required 
                      sx={premiumInputStyle}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label="Phone Number" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined" 
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                      sx={premiumInputStyle}
                    />
                  </Grid>
                  
                  {/* Row 3: Travel Dates & Travelers */}
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label="Travel Dates" 
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      variant="outlined" 
                      placeholder="e.g. June 2026" 
                      required 
                      sx={premiumInputStyle}
                    />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField 
                      fullWidth 
                      label="Number of Travelers" 
                      name="travelers"
                      type="number" 
                      value={formData.travelers}
                      onChange={handleChange}
                      variant="outlined" 
                      placeholder="e.g. 4" 
                      required 
                      sx={premiumInputStyle}
                    />
                  </Grid>
                  
                  {/* Row 4: Services Required */}
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      select 
                      label="Services Required" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      variant="outlined" 
                      required
                      sx={premiumInputStyle}
                    >
                      {services.map((option) => (
                        <MenuItem key={option} value={option} sx={{ fontSize: "0.9rem" }}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  
                  {/* Row 5: Message */}
                  <Grid item xs={12}>
                    <TextField 
                      fullWidth 
                      multiline 
                      rows={4} 
                      label="Your Message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined" 
                      placeholder="Tell us more about your trip requirements..." 
                      required 
                      sx={premiumInputStyle}
                    />
                  </Grid>
                  
                  {/* Row 6: T&C */}
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          name="agreed"
                          checked={formData.agreed}
                          onChange={handleChange}
                          required 
                          sx={{ color: "rgba(0,35,102,0.2)", "&.Mui-checked": { color: "#FFB7C5" } }} 
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)", fontSize: "0.85rem" }}>
                          I agree to the <Link to="/terms-and-conditions" style={{ color: "#002366", fontWeight: 700, textDecoration: "none" }}>Terms & Conditions</Link> and <Link to="/cancellation-policy" style={{ color: "#002366", fontWeight: 700, textDecoration: "none" }}>Cancellation Policy</Link>.
                        </Typography>
                      }
                      sx={{ mb: 1 }}
                    />
                  </Grid>
                  
                  {/* Row 7: Submit Button */}
                  <Grid item xs={12}>
                    <Button 
                      type="submit"
                      variant="contained" 
                      size="large"
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                      sx={{ 
                        bgcolor: "#002366", 
                        color: "#fff", 
                        px: { xs: 4, md: 8 },
                        py: 2, 
                        borderRadius: "12px", 
                        fontWeight: 900, 
                        fontSize: "1rem",
                        letterSpacing: "1px",
                        width: { xs: "100%", sm: "auto" },
                        boxShadow: "0 10px 30px rgba(0,35,102,0.2)",
                        "&:hover": { 
                          bgcolor: "#FFB7C5", 
                          color: "#002366",
                          transform: "translateY(-3px)",
                          boxShadow: "0 15px 35px rgba(255,183,197,0.4)"
                        },
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      }}
                    >
                      {loading ? "SENDING..." : "SUBMIT INQUIRY"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const premiumInputStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#f8fafc',
    '& fieldset': {
      borderColor: 'rgba(0,35,102,0.08)',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: '#FFB7C5',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#002366',
      borderWidth: '2px',
    },
    '& input, & .MuiSelect-select, & textarea': {
      fontSize: '0.95rem',
      padding: '16px 20px',
    }
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(0,35,102,0.4)',
    fontSize: '0.9rem',
    ml: 0.5,
    '&.Mui-focused': {
      color: '#002366',
      fontWeight: 700,
    }
  }
};

export default ContactPage;
