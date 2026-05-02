import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Stack,
  Divider,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  CheckCircle as CheckIcon, 
  Business as BusinessIcon, 
  Event as EventIcon, 
  LocationOn as LocationIcon,
  Flag as MissionIcon,
  Visibility as VisionIcon
} from "@mui/icons-material";
import aboutHero from "../assets/about-hero-new.png";

const strengths = [
  "Japan-Based Operations",
  "Professional Transport Network",
  "Flexible Travel Solutions",
  "FIT & Group Handling",
  "Multi-city Tour Planning",
  "Reliable Customer Support"
];

const AboutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a" }}>
      
      {/* 🚀 1. HEADER SECTION */}
      <Box 
        sx={{ 
          height: { xs: "40vh", md: "50vh" },
          backgroundImage: `linear-gradient(rgba(0,35,102,0.5), rgba(0,35,102,0.7)), url(${aboutHero})`,
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
            fontSize: { xs: "2.5rem", md: "4rem" }, 
            mb: 2,
            textShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}
        >
          About <span style={{ color: "#FFB7C5" }}>TripToJapan.in</span>
        </Typography>
        <Box sx={{ width: "100px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px" }} />
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        
        {/* 🏛 2. INTRODUCTION */}
        <Box sx={{ mb: 12, textAlign: "center", maxWidth: "900px", mx: "auto" }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: "#002366", 
              fontWeight: 800, 
              mb: 4,
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            Your Local Partner in Japan
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: "1.2rem", 
              lineHeight: 1.8, 
              color: "rgba(0,0,0,0.7)",
              fontWeight: 500
            }}
          >
            **TripToJapan.in** is a dedicated Japan travel service platform operated under 
            <strong> HTC Group of Companies</strong>, established in 2016 in Japan. 
            We provide complete ground travel services across Japan including airport transfers, 
            sightseeing tours, activity bookings, FIT tours, and group travel arrangements.
          </Typography>
        </Box>

        {/* 🎯 3. MISSION & VISION */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 5, 
                height: "100%", 
                bgcolor: "#f8fafc", 
                borderRadius: "30px",
                border: "1px solid rgba(0,35,102,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}
            >
              <Box sx={{ color: "#FFB7C5", display: "flex", alignItems: "center", gap: 2 }}>
                <MissionIcon fontSize="large" />
                <Typography variant="h5" fontWeight="900" color="#002366">Our Mission</Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.7, fontSize: "1.1rem" }}>
                To provide dependable, high-quality travel services across Japan with professional 
                support and efficient planning.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 5, 
                height: "100%", 
                bgcolor: "#002366", 
                color: "#fff",
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}
            >
              <Box sx={{ color: "#FFB7C5", display: "flex", alignItems: "center", gap: 2 }}>
                <VisionIcon fontSize="large" />
                <Typography variant="h5" fontWeight="900" color="#fff">Our Vision</Typography>
              </Box>
              <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "1.1rem" }}>
                To become a trusted and recognized Japan travel service provider for travel companies 
                and individual travelers worldwide.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* 💪 4. CORE STRENGTHS */}
        <Box sx={{ mb: 12 }}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 900, mb: 8, color: "#002366" }}>
            Our Core <span style={{ color: "#FFB7C5" }}>Strengths</span>
          </Typography>
          <Grid container spacing={3}>
            {strengths.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box 
                  sx={{ 
                    p: 3, 
                    bgcolor: "#fff", 
                    borderRadius: "15px", 
                    boxShadow: "0 5px 15px rgba(0,0,0,0.02)",
                    border: "1px solid #f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-5px)", borderColor: "#FFB7C5" }
                  }}
                >
                  <CheckIcon sx={{ color: "#FFB7C5" }} />
                  <Typography fontWeight="700" color="#002366">{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 🏢 5. COMPANY DETAILS */}
        <Box 
          sx={{ 
            bgcolor: "#f8fafc", 
            p: { xs: 4, md: 8 }, 
            borderRadius: "40px", 
            border: "1px solid rgba(0,35,102,0.05)" 
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 900, mb: 6, color: "#002366", textAlign: "center" }}>
            Official Company <span style={{ color: "#FFB7C5" }}>Details</span>
          </Typography>
          <Grid container spacing={4}>
            {[
              { icon: <BusinessIcon />, label: "Company Name", value: "HTC Group of Companies" },
              { icon: <EventIcon />, label: "Established", value: "2016" },
              { icon: <LocationIcon />, label: "Office Address", value: "323-0822 Tochigi-Ken, Oyama-shi Eki-Minami Cho, 4-13-17, Japan." }
            ].map((detail, i) => (
              <Grid item xs={12} md={i === 2 ? 12 : 6} key={i}>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box 
                    sx={{ 
                      p: 2, 
                      bgcolor: "#fff", 
                      borderRadius: "15px", 
                      color: "#FFB7C5",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
                    }}
                  >
                    {detail.icon}
                  </Box>
                  <Box>
                    <Typography variant="overline" sx={{ color: "rgba(0,0,0,0.5)", fontWeight: 800 }}>
                      {detail.label}
                    </Typography>
                    <Typography variant="h6" sx={{ color: "#002366", fontWeight: 700 }}>
                      {detail.value}
                    </Typography>
                  </Box>
                </Stack>
                {i < 2 && <Divider sx={{ my: 3, display: { md: "none" } }} />}
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default AboutPage;