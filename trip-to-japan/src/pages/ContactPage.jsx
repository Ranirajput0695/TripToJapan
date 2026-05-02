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
import { FormControlLabel, Checkbox } from "@mui/material";

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

          {/* 📝 INQUIRY FORM */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 8 }, 
                borderRadius: "40px", 
                bgcolor: "#fff", 
                border: "1px solid rgba(0,35,102,0.1)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.05)"
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 900, color: "#002366", mb: 1 }}>
                Send <span style={{ color: "#FFB7C5" }}>Inquiry</span>
              </Typography>
              <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.5)", mb: 6 }}>
                Please fill in the details below and our experts will get back to you within 24 hours.
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Full Name" variant="outlined" placeholder="Enter your name" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" variant="outlined" placeholder="email@example.com" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" variant="outlined" placeholder="+91 XXXXX XXXXX" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Travel Dates" type="text" variant="outlined" placeholder="e.g. June 2026" required />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Number of Travelers" type="number" variant="outlined" placeholder="e.g. 4" required />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth select label="Services Required" variant="outlined" defaultValue="">
                    {services.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={4} label="Your Message" variant="outlined" placeholder="Tell us more about your trip requirements..." required />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox required sx={{ color: "#002366", "&.Mui-checked": { color: "#FFB7C5" } }} />}
                    label={
                      <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)" }}>
                        I agree to the <Link to="/terms-and-conditions" style={{ color: "#002366", fontWeight: 700 }}>Terms & Conditions</Link> and <Link to="/cancellation-policy" style={{ color: "#002366", fontWeight: 700 }}>Cancellation Policy</Link>.
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ 
                      bgcolor: "#002366", 
                      color: "#fff", 
                      py: 2.5, 
                      borderRadius: "15px", 
                      fontWeight: 900, 
                      fontSize: "1.1rem",
                      mt: 2,
                      "&:hover": { bgcolor: "#001a4d", transform: "scale(1.02)" },
                      transition: "all 0.3s ease"
                    }}
                  >
                    SUBMIT INQUIRY
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
