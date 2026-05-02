import React from "react";
import { Box, Container, Typography, Card, CardMedia, CardActionArea } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import images
import tokyoImg from "../assets/sensoji.png";
import osakaImg from "../assets/dest-osaka.png";
import kyotoImg from "../assets/dest-kyoto.png";
import naraImg from "../assets/dest-nara.png";
import fujiImg from "../assets/hero-bg.png";
import hakoneImg from "../assets/dest-hakone.png";
import hiroshimaImg from "../assets/dest-hiroshima.png";
import nagoyaImg from "../assets/dest-nagoya.png";
import fukuokaImg from "../assets/dest-fukuoka.png";

const destinations = [
  { name: "Tokyo", image: tokyoImg, landmark: "Senso-ji Temple" },
  { name: "Osaka", image: osakaImg, landmark: "Osaka Castle" },
  { name: "Kyoto", image: kyotoImg, landmark: "Kinkaku-ji Temple" },
  { name: "Nara", image: naraImg, landmark: "Nara Park" },
  { name: "Mount Fuji", image: fujiImg, landmark: "Fuji-Kawaguchiko" },
  { name: "Hakone", image: hakoneImg, landmark: "Lake Ashi" },
  { name: "Hiroshima", image: hiroshimaImg, landmark: "Itsukushima Shrine" },
  { name: "Nagoya", image: nagoyaImg, landmark: "Nagoya Castle" },
  { name: "Fukuoka", image: fukuokaImg, landmark: "Canal City" },
];

const DestinationsSection = () => {
  return (
    <Box sx={{ pt: 4, pb: 0, bgcolor: "#fff", overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#E91E63",
              fontWeight: 800,
              letterSpacing: 3,
              display: "block",
              mb: 1
            }}
          >
            EXPLORE THE LAND OF THE RISING SUN
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#002366",
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              mb: 2
            }}
          >
            Popular Japan <span style={{ color: "#E91E63" }}>Destinations</span> We Cover
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "4px",
              bgcolor: "#E91E63",
              margin: "0 auto",
              borderRadius: "10px"
            }}
          />
        </Box>

        <Box sx={{ px: { xs: 2, md: 4 } }}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ padding: "20px 0 40px" }}
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(233,30,99,0.15)",
                      "& .dest-image": {
                        transform: "scale(1.1)"
                      }
                    }
                  }}
                >
                  <CardActionArea>
                    <Box sx={{ overflow: "hidden", height: "320px", position: "relative" }}>
                      <CardMedia
                        component="img"
                        image={dest.image}
                        alt={dest.name}
                        className="dest-image"
                        sx={{
                          height: "100%",
                          transition: "transform 0.6s ease-in-out"
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 4,
                          background: "linear-gradient(transparent, rgba(0,35,102,0.9))",
                          color: "#fff"
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5, fontSize: "1.5rem" }}>
                          {dest.name}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9, letterSpacing: 1.5, fontSize: "0.7rem", textTransform: "uppercase", fontWeight: 700 }}>
                          {dest.landmark}
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>

      {/* Global CSS for Swiper Subtle Theme */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .swiper-button-next, .swiper-button-prev {
          color: rgba(0, 35, 102, 0.4) !important;
          background: rgba(255, 255, 255, 0.15) !important;
          backdrop-filter: blur(8px);
          width: 35px !important;
          height: 35px !important;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: none !important;
          transition: all 0.3s ease !important;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.5) !important;
          color: #E91E63 !important;
          border-color: rgba(233, 30, 99, 0.3);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 12px !important;
          font-weight: 400;
        }
        .swiper-pagination-bullet {
          background: rgba(0, 35, 102, 0.2) !important;
        }
        .swiper-pagination-bullet-active {
          background: #E91E63 !important;
          width: 25px !important;
          border-radius: 10px !important;
        }
      ` }} />
    </Box>
  );
};

export default DestinationsSection;
