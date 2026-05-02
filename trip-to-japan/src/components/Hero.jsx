import React from "react";
import { Box, Container, Typography, Button, Stack, useTheme, useMediaQuery } from "@mui/material";
import heroBg from "../assets/hero-bg.png";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "auto", md: "95vh" },
        minHeight: { xs: "700px", md: "800px" },
        display: "flex",
        alignItems: "center",
        backgroundImage: `linear-gradient(135deg, rgba(0, 35, 102, 0.8) 0%, rgba(0, 35, 102, 0.4) 50%, rgba(233, 30, 99, 0.1) 100%), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
        pt: { xs: "120px", md: "100px" },
        pb: { xs: 8, md: 0 },
        overflow: "hidden"
      }}
    >
      {/* Decorative element */}
      <Box sx={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "40%",
        height: "50%",
        background: "radial-gradient(circle, rgba(255, 183, 197, 0.15) 0%, transparent 70%)",
        zIndex: 1,
        pointerEvents: "none"
      }} />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4} sx={{ maxWidth: "850px" }}>
          <Box
            sx={{
              display: "inline-block",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#FFB7C5",
              px: 3,
              py: 1,
              borderRadius: "50px",
              width: "fit-content",
              fontWeight: "700",
              fontSize: "0.85rem",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              mb: -1,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            Your Trusted Japan Travel Partner
          </Box>
          
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", md: "5.5rem" },
                fontWeight: 900,
                lineHeight: 1.05,
                mb: 3,
                textShadow: "0 10px 30px rgba(0,0,0,0.3)",
                letterSpacing: "-1px"
              }}
            >
              Discover the <br /> 
              Soul of <span style={{ color: "#FFB7C5", position: "relative" }}>
                Japan
                <Box sx={{ 
                  position: "absolute", 
                  bottom: "10px", 
                  left: 0, 
                  width: "100%", 
                  height: "8px", 
                  bgcolor: "rgba(255, 183, 197, 0.3)", 
                  zIndex: -1,
                  borderRadius: "10px"
                }} />
              </span>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.5rem" },
                fontWeight: 400,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.95)",
                maxWidth: "750px",
                mb: 4,
                textShadow: "0 2px 4px rgba(0,0,0,0.2)"
              }}
            >
              Premium travel arrangements powered by <strong>HTC Group</strong>. 
              From bespoke FIT tours to seamless group logistics, we bring Japan closer to you.
            </Typography>

            <Box
              sx={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.85)",
                mb: 6,
                borderLeft: "5px solid #FF1493",
                pl: 4,
                py: 1,
                background: "linear-gradient(to right, rgba(255,255,255,0.05), transparent)",
                maxWidth: "800px"
              }}
            >
              Our Japan-based experts ensure every journey is authentic, 
              from Tokyo's neon pulse to Kyoto's timeless zen.
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(135deg, #FF1493 0%, #E91E63 100%)",
                  color: "#fff",
                  px: 6,
                  py: 2,
                  fontWeight: 800,
                  fontSize: "1rem",
                  borderRadius: "50px",
                  boxShadow: "0 10px 25px rgba(233, 30, 99, 0.4)",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    transform: "translateY(-3px)",
                    boxShadow: "0 15px 35px rgba(233, 30, 99, 0.5)"
                  },
                }}
              >
                EXPLORE PACKAGES
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.5)",
                  px: 6,
                  py: 2,
                  fontWeight: 800,
                  fontSize: "1rem",
                  borderRadius: "50px",
                  backdropFilter: "blur(5px)",
                  borderWidth: "2px",
                  transition: "all 0.3s ease",
                  "&:hover": { 
                    borderWidth: "2px", 
                    borderColor: "#fff", 
                    background: "rgba(255,255,255,0.1)",
                    transform: "translateY(-3px)"
                  },
                }}
              >
                PLAN YOUR TRIP
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>

      {/* Scroll indicator or bottom element */}
      <Box sx={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        animation: "bounce 2s infinite",
        "@keyframes bounce": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0) translateX(-50%)" },
          "40%": { transform: "translateY(-10px) translateX(-50%)" },
          "60%": { transform: "translateY(-5px) translateX(-50%)" },
        },
        opacity: 0.7
      }}>
        <Box sx={{ width: "2px", height: "50px", background: "linear-gradient(to bottom, #FFB7C5, transparent)" }} />
      </Box>
    </Box>
  );
};

export default Hero;
