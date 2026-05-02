import React from "react";
import { Box, Container, Typography, Grid, Button, Stack } from "@mui/material";
import { 
  CheckCircle as CheckIcon, 
  ArrowForward as ArrowIcon,
} from "@mui/icons-material";

const benefits = [
  "Japan-Based Local Company",
  "Experienced Ground Handling Team",
  "Reliable Transportation Services",
  "Competitive & Transparent Pricing",
  "Professional Support for Travel Agents",
  "Bespoke Custom Tour Planning",
  "24/7 English Language Support"
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ pt: 4, pb: 10, bgcolor: "#fff", position: "relative" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography 
            variant="overline" 
            sx={{ color: "#E91E63", fontWeight: 800, letterSpacing: 4, display: "block", mb: 1 }}
          >
            THE TRIPTOJAPAN ADVANTAGE
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              color: "#002366", 
              fontSize: { xs: "2rem", md: "3.2rem" },
              lineHeight: 1.2
            }}
          >
            Why Choose <span style={{ color: "#E91E63" }}>TripToJapan.in</span>?
          </Typography>
          <Box sx={{ width: "60px", height: "4px", bgcolor: "#E91E63", margin: "20px auto", borderRadius: "10px" }} />
        </Box>

        {/* Benefits Cluster - Centered & No Overlap */}
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 2, mb: 8 }}>
          {benefits.map((benefit, index) => (
            <Box
              key={index}
              sx={{
                px: 3,
                py: 1.8,
                borderRadius: "50px",
                bgcolor: "#fff",
                border: "1px solid rgba(0, 35, 102, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                "&:hover": {
                  transform: "translateY(-3px)",
                  borderColor: "#E91E63",
                  boxShadow: "0 10px 25px rgba(233,30,99,0.1)",
                }
              }}
            >
              <CheckIcon sx={{ color: "#E91E63", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 700, color: "#002366", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                {benefit}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Premium Testimonial Card */}
        <Box 
          sx={{ 
            p: { xs: 4, md: 6 }, 
            bgcolor: "#002366", 
            borderRadius: "40px", 
            textAlign: "center",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,35,102,0.2)"
          }}
        >
          {/* Subtle decoration */}
          <Box 
            sx={{ 
              position: "absolute", 
              top: -20, 
              right: -20, 
              width: "150px", 
              height: "150px", 
              borderRadius: "50%", 
              background: "radial-gradient(circle, rgba(233, 30, 99, 0.1) 0%, transparent 70%)" 
            }} 
          />
          
          <Typography 
            variant="h5" 
            sx={{ 
              fontStyle: "italic", 
              mb: 5, 
              lineHeight: 1.6, 
              fontWeight: 500,
              fontSize: { xs: "1.1rem", md: "1.4rem" },
              maxWidth: "800px",
              margin: "0 auto 40px"
            }}
          >
            "Whether you need airport transfers, sightseeing tours, or complete tour arrangements, 
            our experienced team is ready to assist you with professional and timely services."
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowIcon />}
            href="/contact"
            sx={{
              bgcolor: "#E91E63",
              color: "#fff",
              px: 6,
              py: 2,
              fontWeight: 800,
              fontSize: "1rem",
              borderRadius: "15px",
              textTransform: "none",
              "&:hover": { bgcolor: "#fff", color: "#002366", transform: "scale(1.05)" },
              transition: "all 0.3s ease"
            }}
          >
            Get Expert Assistance Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
