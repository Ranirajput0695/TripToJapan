import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Stack, Divider } from "@mui/material";
import { 
  LocationOn as LocationIcon, 
  Business as BusinessIcon, 
  SupportAgent as SupportIcon,
  Flag as MissionIcon 
} from "@mui/icons-material";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "#002366", color: "#fff", pt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ mb: 8 }}>
          
          {/* Column 1: About Us (Brief) */}
          <Grid item xs={12} md={3}>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img src={logo} alt="Logo" style={{ height: "45px", borderRadius: "50%" }} />
                <Typography variant="h6" fontWeight="900" color="#FFB7C5" sx={{ letterSpacing: 1 }}>
                  TRIP TO JAPAN
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 1.8, opacity: 0.8, fontSize: "0.95rem" }}>
                <strong>TripToJapan.in</strong> (Powered by HTC Group of Companies). 
                Established in 2016, providing high-quality travel services across Japan.
              </Typography>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="800" color="#FFB7C5" sx={{ mb: 3, fontSize: "1.1rem" }}>
              QUICK LINKS
            </Typography>
            <Stack spacing={1.5}>
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Destinations", path: "/destinations" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms-and-conditions" },
                { name: "Cancellation Policy", path: "/cancellation-policy" }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  style={{ 
                    color: "rgba(255,255,255,0.7)", 
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "color 0.3s ease"
                  }}
                  onMouseOver={(e) => e.target.style.color = "#FFB7C5"}
                  onMouseOut={(e) => e.target.style.color = "rgba(255,255,255,0.7)"}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Contact/Company Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="800" color="#FFB7C5" sx={{ mb: 3, fontSize: "1.1rem" }}>
              COMPANY DETAILS
            </Typography>
            <Stack spacing={2.5}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <BusinessIcon sx={{ color: "#FFB7C5", fontSize: "1.2rem", mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.6, fontWeight: 700 }}>COMPANY</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>HTC Group of Companies</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocationIcon sx={{ color: "#FFB7C5", fontSize: "1.2rem", mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.6, fontWeight: 700 }}>OFFICE</Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.85rem", lineHeight: 1.5 }}>
                    323-0822 Tochigi-Ken, Oyama-shi Eki-Minami Cho, 4-13-17, Japan.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <SupportIcon sx={{ color: "#FFB7C5", fontSize: "1.2rem", mt: 0.5 }} />
                <Box>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.6, fontWeight: 700 }}>SUPPORT</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>English Support Available</Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Column 4: Mission */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="800" color="#FFB7C5" sx={{ mb: 3, fontSize: "1.1rem" }}>
              OUR MISSION
            </Typography>
            <Box sx={{ position: "relative", pl: 3, borderLeft: "3px solid #FFB7C5" }}>
              <Typography variant="body2" sx={{ fontStyle: "italic", lineHeight: 1.8, opacity: 0.8 }}>
                "To provide dependable, high-quality travel services across Japan with professional support."
              </Typography>
              <MissionIcon sx={{ position: "absolute", top: -10, left: -10, color: "rgba(255,183,197,0.1)", fontSize: "3rem" }} />
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box sx={{ bgcolor: "#001a4d", py: 3, borderTop: "1px solid rgba(255,183,197,0.1)" }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.6, fontSize: "0.85rem" }}>
            © {currentYear} <strong>TripToJapan.in</strong>. All Rights Reserved. Powered by <strong>HTC Group of Companies</strong>.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
