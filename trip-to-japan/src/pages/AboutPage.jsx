import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  Avatar, 
  Divider 
} from "@mui/material";
import { 
  Public as PublicIcon, 
  Group as GroupIcon, 
  Star as StarIcon, 
  CheckCircle as CheckCircleIcon 
} from "@mui/icons-material";
import heroImg from "../assets/about-hero.png";
import teamImg from "../assets/team.png";

const AboutPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a", pb: 10 }}>
      
      {/* 🏔 HERO SECTION */}
      <Box 
        sx={{ 
          height: "60vh", 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          px: 2
        }}
      >
        <Typography variant="h2" fontWeight="800" gutterBottom sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}>
          About TripToJapan
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: "800px", textShadow: "1px 1px 5px rgba(0,0,0,0.5)" }}>
          Your Trusted Partner in Premium Japanese Travel Experiences
        </Typography>
      </Box>

      {/* 📖 OUR STORY SECTION */}
      <Container maxWidth="lg" sx={{ mt: -8 }}>
        <Paper elevation={3} sx={{ p: 6, borderRadius: 4 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline" color="primary" fontWeight="bold">Our Story</Typography>
              <Typography variant="h3" fontWeight="700" gutterBottom>
                Powered by HTC Group
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                TripToJapan.in is a premier travel initiative powered by the **HTC Group of Companies**, 
                which was established in 2016 in the heart of Japan. With over 8 years of excellence, 
                we have dedicated ourselves to bridging the gap between Indian travelers and the 
                enchanting beauty of the Land of the Rising Sun.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
                Our deep-rooted presence in Japan allows us to provide authentic, high-quality, 
                and localized services that most other operators simply cannot match.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src={teamImg} 
                sx={{ 
                  width: "100%", 
                  borderRadius: 4, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
                }} 
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* 🎯 MISSION & VISION */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", p: 4, bgcolor: "#f8f9fa", borderRadius: 4, border: "1px solid #eee" }}>
              <Box sx={{ color: "#FFD700", mb: 2 }}>
                <StarIcon fontSize="large" />
              </Box>
              <Typography variant="h4" fontWeight="700" gutterBottom>Our Mission</Typography>
              <Typography variant="body1" color="text.secondary">
                To provide high-quality, personalized, and seamless travel services across Japan, 
                ensuring that every traveler returns with unforgettable memories and a deep 
                appreciation for Japanese culture.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", p: 4, bgcolor: "#1a1a1a", color: "#fff", borderRadius: 4 }}>
              <Box sx={{ color: "#FFD700", mb: 2 }}>
                <PublicIcon fontSize="large" />
              </Box>
              <Typography variant="h4" fontWeight="700" gutterBottom>Our Vision</Typography>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)" }}>
                To become the world's most trusted global travel partner for Japan, 
                recognized for our innovation, customer-centric approach, and deep 
                cultural expertise.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* ✅ WHY CHOOSE US */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Typography variant="h3" textAlign="center" fontWeight="800" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          We go above and beyond to make your Japanese journey spectacular.
        </Typography>

        <Grid container spacing={4}>
          {[
            { title: "Local Expertise", desc: "Based in Japan since 2016, we know every hidden gem." },
            { title: "Premium Service", desc: "We handle everything from luxury transport to private guides." },
            { title: "Custom Itineraries", desc: "Your trip, your way. We tailor every detail to your needs." },
            { title: "24/7 Support", desc: "Our team is always available to assist you during your travel." }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: "center" }}>
                <CheckCircleIcon sx={{ color: "#FFD700", fontSize: 40, mb: 2 }} />
                <Typography variant="h6" fontWeight="700">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 📞 CALL TO ACTION */}
      <Box sx={{ bgcolor: "#FFD700", mt: 15, py: 10, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="800" color="#000" gutterBottom>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="h6" color="#000" sx={{ opacity: 0.8, mb: 4 }}>
            Let our experts help you plan the perfect trip to Japan.
          </Typography>
          <Box 
            component="a" 
            href="/contact" 
            sx={{ 
              display: "inline-block",
              bgcolor: "#000", 
              color: "#fff", 
              px: 6, 
              py: 2, 
              borderRadius: 2, 
              fontWeight: "700",
              textDecoration: "none",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" }
            }}
          >
            Contact Us Now
          </Box>
        </Container>
      </Box>

    </Box>
  );
};

export default AboutPage;