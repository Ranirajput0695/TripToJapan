import React from "react";
import ContactForm from "../components/Contact";
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Button,
  Stack
} from "@mui/material";
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon, 
  Language as WorldIcon,
  WhatsApp as WhatsAppIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Box sx={{ pt: { xs: 10, md: 15 }, pb: 10, bgcolor: "#f1f5f9", minHeight: "100vh" }}>
      <Container maxWidth="lg">
        
        <Paper 
          elevation={0} 
          sx={{ 
            borderRadius: 6, 
            overflow: "hidden", 
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" }
          }}
        >
          {/* 🌑 LEFT SIDE - COMPANY INFO */}
          <Box 
            sx={{ 
              flex: 1, 
              bgcolor: "#1e293b", 
              color: "#fff", 
              p: { xs: 4, md: 8 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Typography variant="overline" sx={{ color: "#FFD700", fontWeight: "800", letterSpacing: 2 }}>
              CONTACT US
            </Typography>
            <Typography variant="h3" fontWeight="800" sx={{ mt: 1, mb: 3 }}>
              HTC Group of <span style={{ color: "#FFD700" }}>Companies</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "1.1rem" }}>
              We are dedicated to providing the most authentic and premium Japanese travel experiences. Reach out to our experts today.
            </Typography>

            <Stack spacing={4}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Avatar sx={{ bgcolor: "rgba(255,215,0,0.1)", color: "#FFD700" }}>
                  <LocationIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="rgba(255,255,255,0.5)">JAPAN OFFICE</Typography>
                  <Typography variant="body1">323-0822 Tochigi-Ken, Oyama-shi Eki-Minami Cho, 4-13-17</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Avatar sx={{ bgcolor: "rgba(255,215,0,0.1)", color: "#FFD700" }}>
                  <EmailIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="rgba(255,255,255,0.5)">EMAIL US</Typography>
                  <Typography variant="body1">kaahyapraji658@gmail.com</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Avatar sx={{ bgcolor: "rgba(255,215,0,0.1)", color: "#FFD700" }}>
                  <PhoneIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" color="rgba(255,255,255,0.5)">CALL US</Typography>
                  <Typography variant="body1">India: +91 9560439303</Typography>
                  <Typography variant="body1">Japan: +81 9032109839</Typography>
                </Box>
              </Box>
            </Stack>

            <Button 
              variant="contained" 
              startIcon={<WhatsAppIcon />}
              fullWidth
              sx={{ 
                mt: 6, 
                bgcolor: "#25D366", 
                py: 2, 
                borderRadius: 3, 
                fontWeight: "800",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#128C7E", transform: "translateY(-2px)" },
                transition: "all 0.3s"
              }}
              href="https://wa.me/919560439303"
              target="_blank"
            >
              CHAT ON WHATSAPP
            </Button>
          </Box>

          {/* ⚪ RIGHT SIDE - INQUIRY FORM */}
          <Box 
            sx={{ 
              flex: 1.2, 
              bgcolor: "#fff", 
              p: { xs: 4, md: 8 }
            }}
          >
            <Typography variant="h4" fontWeight="800" gutterBottom>
              Send <span style={{ color: "#FFD700" }}>Inquiry</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 5 }}>
              Fill out the form below and we'll get back to you with a custom plan.
            </Typography>
            
            <Box sx={{ ".contact-card": { p: 0, boxShadow: "none" }, ".contact-container": { p: 0, minHeight: "auto", bgcolor: "transparent" } }}>
              <ContactForm />
            </Box>
          </Box>
        </Paper>

      </Container>
    </Box>
  );
};

// Simple Avatar Component for internal use if needed
const Avatar = ({ children, sx }) => (
  <Box 
    sx={{ 
      width: 48, 
      height: 48, 
      borderRadius: "12px", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      ...sx 
    }}
  >
    {children}
  </Box>
);

export default ContactPage;
