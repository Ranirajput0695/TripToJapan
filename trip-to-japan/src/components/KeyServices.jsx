import React from "react";
import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { CheckCircle as CheckIcon } from "@mui/icons-material";

const services = [
  "Airport Transfers Across Japan",
  "Private Sightseeing Tours",
  "FIT Tour Arrangements",
  "Group Tour Management",
  "Activity & Attraction Tickets",
  "Intercity Transfers",
  "Customized Japan Itineraries"
];

const KeyServices = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            WHAT WE OFFER
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              color: "#002366",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 3
            }}
          >
            Our Key <span style={{ color: "#FFB7C5" }}>Services</span>
          </Typography>
          <Box 
            sx={{ 
              width: "80px", 
              height: "5px", 
              bgcolor: "#FFB7C5", 
              margin: "0 auto",
              borderRadius: "10px"
            }} 
          />
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box 
                sx={{ 
                  p: 3, 
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  bgcolor: "#f8fafc",
                  borderRadius: "16px",
                  border: "1px solid rgba(0, 35, 102, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    bgcolor: "#fff",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    transform: "translateY(-5px)",
                    borderColor: "#FFB7C5"
                  }
                }}
              >
                <CheckIcon sx={{ color: "#FFB7C5", fontSize: "1.8rem" }} />
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontSize: "1.1rem", 
                    fontWeight: 700, 
                    color: "#002366" 
                  }}
                >
                  {service}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography 
          sx={{ 
            textAlign: "center", 
            mt: 8, 
            color: "rgba(0,35,102,0.6)", 
            maxWidth: "700px", 
            margin: "60px auto 0",
            fontSize: "1.1rem",
            lineHeight: 1.8
          }}
        >
          We pride ourselves on providing high-quality, professional travel services 
          across Japan. Our team is dedicated to ensuring your journey is smooth, 
          comfortable, and unforgettable.
        </Typography>
      </Container>
    </Box>
  );
};

export default KeyServices;
