import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import {
  LocationOn as LocationIcon,
  Business as BusinessIcon,
  SupportAgent as SupportIcon,
} from "@mui/icons-material";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "#001333", color: "#fff", pt: 8, pb: 0, borderTop: "2px solid #E91E63" }}>
      <Container maxWidth={false} disableGutters sx={{ px: { xs: 3, md: 6 } }}>
        <Grid 
          container 
          spacing={6} 
          justifyContent="space-between"
          sx={{ "--Grid-columnSpacing": "95px" }}
        >

          {/* Segment 1: About */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                <img src={logo} alt="Logo" style={{ height: "55px", borderRadius: "10px" }} />
                <Typography variant="h5" sx={{ fontWeight: 900, color: "#fff", letterSpacing: 1.5 }}>
                  TRIP TO <span style={{ color: "#E91E63" }}>JAPAN</span>
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ lineHeight: 2, opacity: 0.8, fontSize: "0.95rem", letterSpacing: 0.5 }}>
                <strong>TripToJapan.in</strong><br />
                (Powered by HTC Group of Companies).<br />
                Established in 2016, providing high-quality<br />
                travel services across Japan.
              </Typography>
            </Box>
          </Grid>

          {/* Segment 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#E91E63", mb: 4, fontSize: "1.2rem", position: "relative" }}>
              QUICK LINKS
              <Box sx={{ position: "absolute", bottom: -8, left: 0, width: "30px", height: "3px", bgcolor: "#fff" }} />
            </Typography>
            <Stack spacing={2}>
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Destinations", path: "/destinations" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
                { name: "Cancellation Policy", path: "/cancellation" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                    display: "block"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#E91E63";
                    e.target.style.paddingLeft = "8px";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.65)";
                    e.target.style.paddingLeft = "0";
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Segment 3: Company Details */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#E91E63", mb: 4, fontSize: "1.2rem", position: "relative" }}>
              COMPANY DETAILS
              <Box sx={{ position: "absolute", bottom: -8, left: 0, width: "30px", height: "3px", bgcolor: "#fff" }} />
            </Typography>
            <Stack spacing={3.5}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <BusinessIcon sx={{ color: "#E91E63", fontSize: "1.4rem" }} />
                <Box>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.5, fontWeight: 800, mb: 0.5, letterSpacing: 1 }}>COMPANY</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "1rem" }}>HTC Group of Companies</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <LocationIcon sx={{ color: "#E91E63", fontSize: "1.4rem" }} />
                <Box>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.5, fontWeight: 800, mb: 0.5, letterSpacing: 1 }}>OFFICE</Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.95rem", lineHeight: 1.8 }}>
                    323-0822 Tochigi-Ken,<br />
                    Oyama-shi Eki-Minami Cho,<br />
                    4-13-17, Japan.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <SupportIcon sx={{ color: "#E91E63", fontSize: "1.4rem" }} />
                <Box>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.5, fontWeight: 800, mb: 0.5, letterSpacing: 1 }}>SUPPORT</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "1rem" }}>
                    Support Available 24/7<br />
                    +91 9560439303
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Segment 4: Our Mission */}
          <Grid item xs={12} sm={6} md={3} sx={{ textAlign: { md: "right" } }}>
            <Box sx={{ display: "inline-block", textAlign: "right", mb: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#E91E63", fontSize: "1.2rem", position: "relative" }}>
                OUR MISSION
                <Box sx={{ position: "absolute", bottom: -8, right: 0, width: "40px", height: "3.5px", bgcolor: "#fff", borderRadius: "10px" }} />
              </Typography>
            </Box>
            <Box
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.02)",
                borderRadius: "20px",
                borderRight: "4px solid #E91E63",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                textAlign: "right",
                margin: { md: "0 0 0 auto" },
                maxWidth: "300px"
              }}
            >
              <Typography variant="body2" sx={{ fontStyle: "italic", lineHeight: 1.8, opacity: 0.9, fontSize: "0.95rem", color: "#fff" }}>
                "To provide dependable,<br />
                high-quality travel services<br />
                across Japan with<br />
                professional support."
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* Full Width Copyright Bar */}
      <Box sx={{ bgcolor: "#000d1a", py: 1.5, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <Container maxWidth={false} sx={{ px: { xs: 4, md: 8 } }}>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 0.5 }}>
            <Typography variant="body2" sx={{ opacity: 0.4, fontSize: "0.8rem" }}>
              © {currentYear} TripToJapan.in. All Rights Reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.3, fontSize: "0.75rem", fontWeight: 700 }}>
              POWERED BY HTC GROUP OF COMPANIES
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
