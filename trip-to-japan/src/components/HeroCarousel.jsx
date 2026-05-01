import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Button, Typography, Box, Stack } from "@mui/material";
import { ArrowForward as ArrowIcon } from "@mui/icons-material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./HeroCarousel.css";

const slides = [
  {
    subtitle: "POWERED BY HTC GROUP",
    title: "Your Trusted Japan Travel Partner",
    description: "Professional ground travel arrangements, luxury transportation, and curated sightseeing experiences across the Land of the Rising Sun.",
  },
  {
    subtitle: "DISCOVER THE GOLDEN ROUTE",
    title: "Experience Ancient & Modern Japan",
    description: "From the neon lights of Tokyo to the serene temples of Kyoto, explore the best of Japan with our local experts.",
  },
  {
    subtitle: "UNFORGETTABLE FAMILY TRIPS",
    title: "Creating Memories That Last A Lifetime",
    description: "Specialized family-friendly itineraries including Disney Resort, Universal Studios, and interactive cultural workshops.",
  }
];

const HeroCarousel = () => {
  return (
    <Box className="hero-carousel">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="placeholder-slide">
            <div className="slide-content">
              <Typography variant="overline" className="slide-subtitle">
                {slide.subtitle}
              </Typography>
              <Typography variant="h1" className="slide-title">
                {slide.title.split("Japan").map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span style={{ color: "#FFB7C5" }}>Japan</span>}
                  </React.Fragment>
                ))}
              </Typography>
              <Typography className="slide-description">
                {slide.description}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" className="slide-actions">
                <Button 
                  variant="contained" 
                  size="large" 
                  href="/packages"
                  sx={{ 
                    bgcolor: "#FFB7C5", 
                    color: "#002366", 
                    px: 6, 
                    py: 2, 
                    fontWeight: "800", 
                    borderRadius: 2,
                    "&:hover": { bgcolor: "#f48fb1", transform: "scale(1.05)" },
                    transition: "all 0.3s ease"
                  }}
                >
                  EXPLORE PACKAGES
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  href="/contact"
                  sx={{ 
                    color: "#fff", 
                    borderColor: "#fff", 
                    px: 6, 
                    py: 2, 
                    fontWeight: "800", 
                    borderRadius: 2,
                    "&:hover": { borderColor: "#FFB7C5", color: "#FFB7C5", transform: "scale(1.05)" },
                    transition: "all 0.3s ease"
                  }}
                >
                  CONTACT US
                </Button>
              </Stack>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroCarousel;

