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
        height: { xs: "auto", md: "85vh" },
        minHeight: { xs: "600px", md: "700px" },
        display: "flex",
        alignItems: "center",
        backgroundImage: `linear-gradient(rgba(0, 35, 102, 0.4), rgba(0, 35, 102, 0.6)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        pt: { xs: "120px", md: "180px" },
        pb: { xs: 8, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ maxWidth: "800px" }}>
          <Box
            sx={{
              display: "inline-block",
              bgcolor: "rgba(255, 183, 197, 0.9)",
              color: "#002366",
              px: 2,
              py: 1,
              borderRadius: "50px",
              width: "fit-content",
              fontWeight: "800",
              fontSize: "0.8rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              mb: -2,
              boxShadow: "0 4px 15px rgba(255, 183, 197, 0.3)",
            }}
          >
            Your Trusted Japan Travel Partner
          </Box>
          
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.8rem", md: "4.5rem" },
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 2,
                textShadow: "2px 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              Welcome to <span style={{ color: "#FFB7C5" }}>TripToJapan.in</span>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.1rem", md: "1.4rem" },
                fontWeight: 500,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
                maxWidth: "700px",
                mb: 4,
              }}
            >
              Japan-based travel service platform powered by <strong>'HTC Group of Companies'</strong>. 
              We provide professional ground travel arrangements across Japan, specializing in reliable transportation, 
              guided sightseeing, customized FIT tours, and group travel services.
            </Typography>

            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                mb: 5,
                borderLeft: "4px solid #FFB7C5",
                pl: 3,
              }}
            >
              Our dedicated operations team based in Japan ensures smooth and memorable experiences for travel agents, 
              families, corporate groups, and individual travelers. From the bustling streets of Tokyo to the 
              tranquil temples of Kyoto, we are your local experts on the ground.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#FFB7C5",
                  color: "#002366",
                  px: 5,
                  py: 1.8,
                  fontWeight: 800,
                  fontSize: "1rem",
                  borderRadius: "12px",
                  "&:hover": { bgcolor: "#fca5b7" },
                }}
              >
                EXPLORE SERVICES
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  px: 5,
                  py: 1.8,
                  fontWeight: 800,
                  fontSize: "1rem",
                  borderRadius: "12px",
                  borderWidth: "2px",
                  "&:hover": { borderWidth: "2px", borderColor: "#FFB7C5", color: "#FFB7C5" },
                }}
              >
                CONTACT AN EXPERT
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
