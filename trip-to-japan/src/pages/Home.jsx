import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Button
} from "@mui/material";
import Hero from "../components/Hero";
import KeyServices from "../components/KeyServices";
import DestinationsSection from "../components/DestinationsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import TravelPackages from "../components/TravelPackages";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1e293b" }}>
      
      {/* 🚀 HERO SECTION */}
      <Hero />

      {/* ✨ KEY SERVICES SECTION */}
      <KeyServices />

      {/* 🏯 POPULAR DESTINATIONS SECTION */}
      <DestinationsSection />

      {/* 🤔 WHY CHOOSE US SECTION */}
      <WhyChooseUs />

      {/* 📦 TRAVEL PACKAGES SECTION */}
      <TravelPackages />

      {/* 📞 CTA SECTION */}
      <Box sx={{ bgcolor: "#FFB7C5", py: 10, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="900" color="#002366" gutterBottom>
            Ready to Plan Your Japan Trip?
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 4, color: "#002366" }}>
            Talk to our local experts and get a customized travel plan today.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            href="/contact"
            sx={{ bgcolor: "#002366", color: "#fff", px: 8, py: 2, fontWeight: "800", borderRadius: 3 }}
          >
            GET A QUOTE NOW
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default Home;