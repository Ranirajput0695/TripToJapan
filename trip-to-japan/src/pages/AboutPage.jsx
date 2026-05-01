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
  Favorite as HeartIcon,
  EmojiEvents as AwardIcon,
  Handshake as PartnerIcon
} from "@mui/icons-material";

// Images removed

const AboutPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a", pb: 10, pt: { xs: "110px", md: "140px" } }}>
      
      {/* 🚀 HERO SECTION */}
      <Box 
        sx={{ 
          height: { xs: "50vh", md: "60vh" },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
          bgcolor: "#002366",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          px: 2,
          mb: 10
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "800", mb: 2 }}>
          OUR STORY
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "2.5rem", md: "4.5rem" }, mb: 2 }}>
          Experience <span style={{ color: "#FFB7C5" }}>Authentic</span> Japan
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.9, fontWeight: "500" }}>
          We are more than just a travel agency. We are your local partners in discovering the soul of Japan.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* 🏛 COMPANY OVERVIEW */}
        <Grid container spacing={8} alignItems="center" sx={{ mb: 15 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="900" gutterBottom>
              Who <span style={{ color: "#FFB7C5" }}>We Are</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}>
              **TripToJapan.in** is a specialized Japan-based travel service platform powered by **HTC Group of Companies**. 
              Operating directly from our headquarters in **Tochigi-Ken, Japan**, we eliminate middlemen to provide 
              authentic, reliable, and premium ground travel arrangements.
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8 }}>
              With over a decade of experience in Japanese tourism and logistics, our team is dedicated to 
              ensuring that every traveler—whether an independent explorer (FIT) or part of a large group—experiences 
              the true essence of Japan with professional local support.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              sx={{ 
                height: "400px", 
                bgcolor: "#002366", 
                borderRadius: 8, 
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                boxShadow: "0 20px 40px rgba(0,35,102,0.2)"
              }}
            >
              <Typography variant="h4" fontWeight="900" color="#FFB7C5">HTC GROUP</Typography>
              <Typography variant="overline" sx={{ letterSpacing: 4 }}>Japan HQ</Typography>
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>323-0822 Tochigi-Ken, Oyama-shi</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Eki-Minami Cho, 4-13-17</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* 🏆 OUR VALUES */}
        <Box sx={{ mb: 15 }}>
          <Typography variant="h3" textAlign="center" fontWeight="900" sx={{ mb: 8 }}>
            Our Core <span style={{ color: "#FFB7C5" }}>Values</span>
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <HeartIcon />, title: "Customer First", desc: "Your safety and satisfaction are our top priorities in every arrangement." },
              { icon: <AwardIcon />, title: "Quality Service", desc: "We maintain high standards for transportation and local coordination." },
              { icon: <PartnerIcon />, title: "Local Expertise", desc: "Direct operation from Japan gives us unmatched local knowledge." }
            ].map((v, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card elevation={0} sx={{ textAlign: "center", p: 4, bgcolor: "#fff1f3", borderRadius: 6 }}>
                  <Box sx={{ color: "#FFB7C5", mb: 2 }}>{v.icon}</Box>
                  <Typography variant="h5" fontWeight="800" gutterBottom>{v.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{v.desc}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 👥 THE TEAM */}
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
             <Box 
              sx={{ 
                height: "400px", 
                bgcolor: "#FFB7C5", 
                borderRadius: 8, 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#002366"
              }}
            >
              <GroupIcon sx={{ fontSize: 80, mb: 2 }} />
              <Typography variant="h4" fontWeight="900">OUR TEAM</Typography>
              <Typography variant="body1" fontWeight="600">Japan & India Experts</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="900" gutterBottom>
              Local <span style={{ color: "#FFB7C5" }}>Ground Support</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.1rem", lineHeight: 1.8, mb: 4 }}>
              Our team consists of Japanese locals and Indian travel experts who understand the unique 
              preferences of global travelers. We bridge the cultural gap to provide a seamless, 
              stress-free vacation.
            </Typography>
            <Divider sx={{ mb: 4, borderColor: "#FFB7C5", width: "100px", borderWidth: 2 }} />
            <Grid container spacing={3}>
              {[
                { label: "24/7 Support", icon: <StarIcon /> },
                { label: "Multilingual Staff", icon: <PublicIcon /> }
              ].map((item, i) => (
                <Grid item xs={6} key={i}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box sx={{ color: "#FFB7C5" }}>{item.icon}</Box>
                    <Typography variant="subtitle1" fontWeight="800">{item.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;