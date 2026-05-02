import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Button, Typography, Box, Stack, Container, useTheme, useMediaQuery } from "@mui/material";
import {
  ArrowForward as ArrowIcon,
  Explore as ExploreIcon,
  Phone as PhoneIcon
} from "@mui/icons-material";
import heroBg from "../assets/hero-bg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./HeroCarousel.css";

const slides = [
  {
    badge: "YOUR TRUSTED JAPAN TRAVEL PARTNER",
    title: "Discover the Soul of Japan",
    highlight: "Japan",
    description: "Premium travel arrangements powered by HTC Group. From bespoke FIT tours to seamless group logistics, we bring Japan closer to you.",
    line: "Our Japan-based experts ensure every journey is authentic and stress-free.",
    image: heroBg
  },
  {
    badge: "DISCOVER THE GOLDEN ROUTE",
    title: "Experience Ancient & Modern Japan",
    highlight: "Japan",
    description: "From the neon lights of Tokyo to the serene temples of Kyoto, explore the best of Japan with our local experts.",
    line: "Luxury transportation and private guided tours tailored to your preferences.",
    image: heroBg
  },
  {
    badge: "UNFORGETTABLE FAMILY TRIPS",
    title: "Memories That Last A Lifetime in Japan",
    highlight: "Japan",
    description: "Specialized family itineraries including Disney Resort and interactive cultural workshops designed for all ages.",
    line: "Tailor-made experiences creating bonds through unique Japanese adventures.",
    image: heroBg
  }
];

const HeroCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{
      width: "100%",
      height: { xs: "auto", md: "100vh" },
      minHeight: { xs: "700px", md: "800px" },
      position: "relative",
      overflow: "hidden",
      bgcolor: "#002366"
    }}>
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "auto", md: "100vh" },
                minHeight: { xs: "700px", md: "800px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundImage: `linear-gradient(135deg, rgba(0, 35, 102, 0.85) 0%, rgba(0, 35, 102, 0.45) 50%, rgba(233, 30, 99, 0.15) 100%), url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                color: "#fff",
                pt: { xs: "100px", md: "40px" }, // Reduced padding to give more room for buttons
              }}
            >
              <Container maxWidth="xl">
                <Stack spacing={3} sx={{ maxWidth: "850px" }}>
                  <Box
                    sx={{
                      display: "inline-block",
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      color: "#E91E63",
                      px: 2.5,
                      py: 0.7,
                      borderRadius: "50px",
                      width: "fit-content",
                      fontWeight: "700",
                      fontSize: "0.75rem",
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {slide.badge}
                  </Box>

                  <Box>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: "2.5rem", md: "4.5rem" }, // Slightly smaller to prevent overflow
                        fontWeight: 900,
                        lineHeight: 1.1,
                        mb: 2,
                        textShadow: "0 10px 30px rgba(0,0,0,0.4)",
                      }}
                    >
                      {slide.title.split(slide.highlight).map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span style={{ color: "#E91E63", position: "relative" }}>
                              {slide.highlight}
                              <Box sx={{
                                position: "absolute",
                                bottom: "8px",
                                left: 0,
                                width: "100%",
                                height: "8px",
                                bgcolor: "rgba(255, 183, 197, 0.3)",
                                zIndex: -1,
                                borderRadius: "10px"
                              }} />
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.25rem" },
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.9)",
                        maxWidth: "650px",
                        mb: 4,
                      }}
                    >
                      {slide.description}
                    </Typography>

                    <Box
                      sx={{
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.75)",
                        mb: 5,
                        borderLeft: "3px solid #FF1493",
                        pl: 3,
                        py: 0.5,
                        background: "linear-gradient(to right, rgba(255,255,255,0.05), transparent)",
                        maxWidth: "600px"
                      }}
                    >
                      {slide.line}
                    </Box>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                      <Button
                        variant="contained"
                        size="large"
                        href="/packages"
                        startIcon={<ExploreIcon />}
                        sx={{
                          background: "linear-gradient(135deg, #FF1493 0%, #E91E63 100%)",
                          color: "#fff",
                          px: { xs: 4, md: 5 },
                          py: 1.8,
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          borderRadius: "12px", // Modern rounded look
                          boxShadow: "0 10px 25px rgba(233, 30, 99, 0.4)",
                          transition: "all 0.3s ease",
                          textTransform: "none",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: "0 15px 35px rgba(233, 30, 99, 0.5)",
                          },
                        }}
                      >
                        Explore Packages
                      </Button>
                      <Button
                        variant="outlined"
                        size="large"
                        href="/contact"
                        startIcon={<PhoneIcon />}
                        sx={{
                          color: "#fff",
                          borderColor: "rgba(255,255,255,0.6)",
                          px: { xs: 4, md: 5 },
                          py: 1.8,
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          borderRadius: "12px",
                          backdropFilter: "blur(5px)",
                          borderWidth: "2px",
                          transition: "all 0.3s ease",
                          textTransform: "none",
                          "&:hover": {
                            borderWidth: "2px",
                            borderColor: "#fff",
                            background: "rgba(255,255,255,0.1)",
                            transform: "scale(1.05)"
                          },
                        }}
                      >
                        Contact An Expert
                      </Button>
                    </Stack>
                  </Box>
                </Stack>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator - Only for desktop */}
      {!isMobile && (
        <Box sx={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          zIndex: 3,
          opacity: 0.5,
          pointerEvents: "none"
        }}>
          <Box sx={{ width: "2px", height: "40px", background: "linear-gradient(to bottom, #FFB7C5, transparent)" }} />
        </Box>
      )}
    </Box>
  );
};

export default HeroCarousel;
