import React from "react";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import { CheckCircle as CheckIcon, ArrowForward as ArrowIcon } from "@mui/icons-material";
import whyUsImg from "../assets/why-us.png";

const benefits = [
  "Japan-Based Local Company",
  "Experienced Ground Handling Team",
  "Reliable Transportation Services",
  "Competitive Pricing",
  "Support for Travel Agents",
  "Custom Tour Planning",
  "English Support Available"
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Decorative Background Element */}
      <Box 
        sx={{ 
          position: "absolute", 
          top: "-10%", 
          right: "-5%", 
          width: "400px", 
          height: "400px", 
          background: "radial-gradient(circle, rgba(255, 183, 197, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: 0
        }} 
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Image */}
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-20px",
                  left: "-20px",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #FFB7C5",
                  borderRadius: "30px",
                  zIndex: -1
                }
              }}
            >
              <img 
                src={whyUsImg} 
                alt="Why Choose Us" 
                style={{ 
                  width: "100%", 
                  borderRadius: "30px", 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                }} 
              />
              <Box 
                sx={{ 
                  position: "absolute", 
                  bottom: "30px", 
                  right: "-20px", 
                  bgcolor: "#002366", 
                  color: "#fff", 
                  p: 3, 
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  display: { xs: "none", sm: "block" }
                }}
              >
                <Typography variant="h4" fontWeight="900" color="#FFB7C5">10+</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Years of Excellence</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Content */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: "#FFB7C5", 
                fontWeight: 800, 
                letterSpacing: 3,
                display: "block",
                mb: 2
              }}
            >
              THE TRIPTOJAPAN ADVANTAGE
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 900, 
                color: "#002366",
                fontSize: { xs: "2.5rem", md: "3.2rem" },
                mb: 4,
                lineHeight: 1.2
              }}
            >
              Why Choose <span style={{ color: "#FFB7C5" }}>TripToJapan.in</span>
            </Typography>

            <Stack spacing={2.5} sx={{ mb: 6 }}>
              {benefits.map((benefit, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CheckIcon sx={{ color: "#FFB7C5", fontSize: "1.5rem" }} />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: "1.1rem", 
                      fontWeight: 600, 
                      color: "rgba(0,35,102,0.8)" 
                    }}
                  >
                    {benefit}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Box 
              sx={{ 
                p: 4, 
                bgcolor: "#f8fafc", 
                borderRadius: "24px", 
                borderLeft: "6px solid #FFB7C5",
                mb: 5
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ 
                  fontStyle: "italic", 
                  color: "rgba(0,35,102,0.7)", 
                  lineHeight: 1.8,
                  fontSize: "1.05rem"
                }}
              >
                "Whether you need airport transfers, sightseeing tours, or complete tour arrangements, 
                our experienced team is ready to assist you with professional and timely services."
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowIcon />}
              href="/contact"
              sx={{
                bgcolor: "#002366",
                color: "#fff",
                px: 6,
                py: 2,
                fontWeight: 800,
                fontSize: "1rem",
                borderRadius: "12px",
                "&:hover": { bgcolor: "#001a4d", transform: "scale(1.05)" },
                transition: "all 0.3s ease"
              }}
            >
              INQUIRY NOW
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
