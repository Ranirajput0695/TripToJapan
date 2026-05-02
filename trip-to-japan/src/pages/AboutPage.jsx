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
          height: { xs: "50vh", md: "65vh" },
          backgroundImage: `linear-gradient(rgba(0,19,51,0.6), rgba(0,19,51,0.8)), url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
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
            fontSize: { xs: "2.8rem", md: "5rem" }, 
            mb: 2,
            lineHeight: 1.1,
            textShadow: "0 10px 30px rgba(0,0,0,0.5)",
            letterSpacing: "-1px"
          }}
        >
          About <span style={{ color: "#E91E63", position: "relative" }}>
            TripToJapan.in
            <Box sx={{ 
              position: "absolute", 
              bottom: "10px", 
              left: 0, 
              width: "100%", 
              height: "8px", 
              bgcolor: "rgba(233, 30, 99, 0.2)", 
              zIndex: -1,
              borderRadius: "10px"
            }} />
          </span>
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            opacity: 0.8, 
            fontWeight: 500, 
            maxWidth: "600px", 
            fontSize: "1.1rem",
            letterSpacing: "1px",
            textTransform: "uppercase"
          }}
        >
          Crafting Premium Travel Experiences Since 2016
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
        
        {/* 🏛 2. INTRODUCTION */}
        <Box sx={{ mb: 4, textAlign: "center", maxWidth: "1000px", mx: "auto" }}>
          <Typography 
            variant="h4" 
            sx={{ 
              color: "#001333", 
              fontWeight: 900, 
              mb: 3,
              fontSize: { xs: "2rem", md: "2.8rem" },
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
          >
            Your Local Partner in <span style={{ color: "#E91E63" }}>Japan</span>
          </Typography>
          <Box sx={{ width: "60px", height: "4px", bgcolor: "#E91E63", mx: "auto", mb: 5, borderRadius: "10px" }} />
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: "1.15rem", 
              lineHeight: 2, 
              color: "rgba(0,19,51,0.7)",
              fontWeight: 500,
              textAlign: "center"
            }}
          >
            <strong style={{ color: "#001333" }}>TripToJapan.in</strong> is a dedicated Japan travel service platform operated under 
            <strong style={{ color: "#E91E63" }}> HTC Group of Companies</strong>, established in 2016 in Japan. 
            We provide complete ground travel services across Japan including airport transfers, 
            sightseeing tours, activity bookings, FIT tours, and group travel arrangements.
          </Typography>
        </Box>

        {/* 🎯 3. MISSION & VISION (Fixed Width Equality via Stack) */}
        <Stack 
          direction={{ xs: "column", md: "row" }} 
          spacing={4} 
          sx={{ mb: 10, width: "100%", alignItems: "stretch" }}
        >
          <Box 
            sx={{ 
              p: { xs: 4, md: 5 }, 
              flex: 1,
              width: "100%",
              bgcolor: "#fff", 
              borderRadius: "30px",
              border: "1px solid rgba(0,19,51,0.1)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-5px)", boxShadow: "0 20px 40px rgba(233, 30, 99, 0.1)" }
            }}
          >
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 2,
              bgcolor: "rgba(233, 30, 99, 0.05)",
              p: 1.2,
              borderRadius: "15px",
              width: "fit-content"
            }}>
              <Box sx={{ 
                width: "45px", 
                height: "45px", 
                bgcolor: "#E91E63", 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#fff"
              }}>
                <MissionIcon />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#001333" }}>Our Mission</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "rgba(0,19,51,0.7)", lineHeight: 1.7, fontSize: "1.05rem" }}>
              To provide dependable, high-quality travel services across Japan with professional 
              support, efficient planning, and personalized solutions.
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              p: { xs: 4, md: 5 }, 
              flex: 1,
              width: "100%",
              bgcolor: "#001333", 
              color: "#fff",
              borderRadius: "30px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-5px)", boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }
            }}
          >
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 2,
              bgcolor: "rgba(255, 255, 255, 0.08)",
              p: 1.2,
              borderRadius: "15px",
              width: "fit-content"
            }}>
              <Box sx={{ 
                width: "45px", 
                height: "45px", 
                bgcolor: "#fff", 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "#001333"
              }}>
                <VisionIcon />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, color: "#fff" }}>Our Vision</Typography>
            </Box>
            <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "1.05rem" }}>
              To become the most trusted Japan travel service provider, setting industry 
              benchmarks for global travel companies.
            </Typography>
          </Box>
        </Stack>

        {/* 💪 4. CORE STRENGTHS (Modernized UI) */}
        <Box sx={{ mb: 12 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              textAlign: "center", 
              fontWeight: 900, 
              mb: 2, 
              color: "#001333",
              textTransform: "uppercase",
              fontSize: { xs: "2rem", md: "2.8rem" }
            }}
          >
            Our Core <span style={{ color: "#E91E63" }}>Strengths</span>
          </Typography>
          <Box sx={{ width: "60px", height: "4px", bgcolor: "#E91E63", mx: "auto", mb: 8, borderRadius: "10px" }} />
          
          <Grid container spacing={3}>
            {strengths.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box 
                  sx={{ 
                    p: 3.5, 
                    bgcolor: "#fff", 
                    borderRadius: "20px", 
                    boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                    borderLeft: "5px solid #E91E63",
                    border: "1px solid rgba(0,19,51,0.05)",
                    borderLeftWidth: "6px",
                    display: "flex",
                    alignItems: "center",
                    gap: 2.5,
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      transform: "translateY(-8px)", 
                      boxShadow: "0 20px 40px rgba(233, 30, 99, 0.1)",
                      borderColor: "rgba(233, 30, 99, 0.2)"
                    }
                  }}
                >
                  <Box sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    color: "#E91E63",
                    bgcolor: "rgba(233, 30, 99, 0.05)",
                    p: 1,
                    borderRadius: "10px"
                  }}>
                    <CheckIcon fontSize="small" />
                  </Box>
                  <Typography sx={{ fontWeight: 800, color: "#001333", fontSize: "1rem" }}>{item}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
              {/* 🏢 5. COMPANY DETAILS (Modern Clean Section) */}
        <Box sx={{ mt: 8 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 900, 
              mb: 2, 
              color: "#001333", 
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: { xs: "1.8rem", md: "2.5rem" }
            }}
          >
            Official Company <span style={{ color: "#E91E63" }}>Details</span>
          </Typography>
          <Box sx={{ width: "60px", height: "4px", bgcolor: "#E91E63", mx: "auto", mb: 8, borderRadius: "10px" }} />

          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <BusinessIcon />, label: "Company Name", value: "HTC Group of Companies" },
              { icon: <EventIcon />, label: "Established Since", value: "2016" },
              { 
                icon: <LocationIcon />, 
                label: "Japan Headquarters", 
                value: (
                  <>
                    323-0822 Tochigi-Ken, Oyama-shi<br />
                    Eki-Minami Cho, 4-13-17, Japan.
                  </>
                )
              }
            ].map((detail, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Box 
                  sx={{ 
                    p: { xs: 3, md: 4 }, 
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2.5,
                    bgcolor: "rgba(0,19,51,0.02)",
                    borderRadius: "25px",
                    border: "1px solid rgba(0,19,51,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                      bgcolor: "#fff", 
                      boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                      borderColor: "#E91E63",
                      transform: "translateY(-5px)"
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      p: 1.5, 
                      bgcolor: "#001333", 
                      borderRadius: "15px", 
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 16px rgba(0,19,51,0.2)",
                      flexShrink: 0
                    }}
                  >
                    {detail.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="overline" 
                      sx={{ 
                        color: "#E91E63", 
                        fontWeight: 900, 
                        letterSpacing: "1.5px",
                        lineHeight: 1,
                        fontSize: "0.7rem"
                      }}
                    >
                      {detail.label}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: "#001333", 
                        fontWeight: 800, 
                        fontSize: "1rem",
                        mt: 0.8,
                        lineHeight: 1.4
                      }}
                    >
                      {detail.value}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
       </Box>

      </Container>
    </Box>
  );
};

export default AboutPage;