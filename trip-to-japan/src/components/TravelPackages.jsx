import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
  Divider
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  CheckCircle as CheckIcon,
  AutoFixHigh as CustomIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

import img1 from '../assets/1 img.jpg';
import img2 from '../assets/2 img.jpg';
import img3 from '../assets/3 img.jpg';

const packages = [
  {
    title: "Tokyo Special!!!",
    duration: "4 nights / 5 days",
    image: img1,
    cities: "Tokyo, Yokohama",
    price: "₹1,25,000",
    features: ["5-Star Hotels", "Private MPV", "English Guide", "Disney Tickets"],
    popular: true
  },
  {
    title: "Classic Japan Explorer",
    duration: "8 Days / 7 Nights",
    image: img2,
    cities: "Tokyo, Hakone, Kyoto, Osaka",
    price: "₹1,85,000",
    features: ["4-Star Hotels", "Private Transfers", "Local Guides", "Daily Breakfast"],
    popular: false
  },
  {
    title: "Hidden Gems of Japan",
    duration: "12 Days / 11 Nights",
    image: img3,
    cities: "Hiroshima, Miyajima, Kanazawa",
    price: "₹2,10,000",
    features: ["Traditional Ryokan", "Onsen Experience", "Private Tour", "Cultural Workshops"],
    popular: true
  }
];

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TravelPackages = () => {
  return (
    <Box sx={{ pt: 4, pb: 0, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ letterSpacing: 4, color: "#E91E63", fontWeight: "800", display: "block", mb: 1 }}
          >
            HANDPICKED FOR YOU
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: "#002366", fontSize: { xs: "2.5rem", md: "3rem" } }}>
            Japan <span style={{ color: "#E91E63" }}>Packages</span>
          </Typography>
          <Box sx={{ width: "50px", height: "4px", bgcolor: "#E91E63", margin: "15px auto", borderRadius: "10px" }} />
        </Box>

        <Box sx={{
          position: 'relative',
          px: { xs: 0, md: 1 },
          '.swiper-button-next, .swiper-button-prev': {
            color: '#E91E63',
            background: 'rgba(255,255,255,0.9)',
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            '&::after': { fontSize: '1rem', fontWeight: 'bold' }
          },
          '.swiper-pagination-bullet-active': {
            backgroundColor: '#E91E63',
            width: '20px',
            borderRadius: '10px'
          }
        }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}
            style={{ padding: '20px 5px 40px' }}
          >
            {packages.map((pkg, i) => (
              <SwiperSlide key={i}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: "24px",
                    border: "1px solid rgba(0,35,102,0.08)",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    display: 'flex',
                    flexDirection: 'column',
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 20px 40px rgba(0,35,102,0.08)",
                      borderColor: "rgba(233,30,99,0.2)"
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', height: "180px", overflow: 'hidden' }}>
                    <Box
                      component="img"
                      src={pkg.image}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {pkg.popular && (
                      <Chip
                        label="BEST SELLER"
                        sx={{
                          position: 'absolute',
                          top: 15,
                          left: 15,
                          bgcolor: "#E91E63",
                          color: "#fff",
                          fontWeight: "800",
                          borderRadius: "8px",
                          fontSize: "0.6rem",
                          height: "22px"
                        }}
                      />
                    )}
                  </Box>

                  <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#002366", mb: 0.5, fontSize: "1.1rem" }}>
                      {pkg.title}
                    </Typography>

                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ mb: 2, color: "rgba(0,35,102,0.6)" }}>
                      <LocationIcon sx={{ fontSize: 14, color: "#E91E63" }} />
                      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "0.75rem" }}>{pkg.cities}</Typography>
                    </Stack>

                    <Stack spacing={1} sx={{ mb: 3 }}>
                      {pkg.features.slice(0, 4).map((f, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <CheckIcon sx={{ color: "#E91E63", fontSize: 14 }} />
                          <Typography variant="body2" sx={{ fontWeight: 500, color: "rgba(0,35,102,0.7)", fontSize: "0.8rem" }}>{f}</Typography>
                        </Box>
                      ))}
                    </Stack>

                    <Divider sx={{ mb: 2, opacity: 0.6 }} />

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "auto" }}>
                      <Box>
                        <Typography variant="caption" sx={{ color: "rgba(0,35,102,0.5)", fontWeight: 700, display: "block", fontSize: "0.65rem" }}>Starting From</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: "#002366", fontSize: "1.1rem" }}>{pkg.price}</Typography>
                      </Box>
                      <Button
                        variant="contained"
                        href="/contact"
                        sx={{
                          bgcolor: "#002366",
                          color: "#fff",
                          px: 2,
                          py: 0.8,
                          borderRadius: "10px",
                          fontWeight: "800",
                          textTransform: "none",
                          fontSize: "0.8rem",
                          "&:hover": { bgcolor: "#E91E63" }
                        }}
                      >
                        Enquire
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}

            {/* 🎨 4TH CARD: CUSTOM JOURNEY (Compact) */}
            <SwiperSlide>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, #002366 0%, #001a4d 100%)",
                  color: "#fff",
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  minHeight: "380px",
                  border: "1px dashed rgba(233, 30, 99, 0.4)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,35,102,0.2)",
                    borderColor: "#E91E63"
                  }
                }}
              >
                <Box sx={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  bgcolor: "rgba(233,30,99,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 3,
                  border: "1px solid rgba(233,30,99,0.3)"
                }}>
                  <CustomIcon sx={{ fontSize: "2rem", color: "#E91E63" }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, fontSize: "1.4rem" }}>
                  Your Own <br /> <span style={{ color: "#E91E63" }}>Custom</span> Trip
                </Typography>
                <Typography sx={{ mb: 3, opacity: 0.8, fontSize: "0.85rem", lineHeight: 1.6 }}>
                  Let our experts craft a bespoke itinerary just for you.
                </Typography>
                <Button
                  variant="contained"
                  href="/contact"
                  endIcon={<ArrowIcon sx={{ fontSize: "1rem" }} />}
                  sx={{
                    bgcolor: "#E91E63",
                    color: "#fff",
                    px: 3,
                    py: 1.2,
                    borderRadius: "12px",
                    fontWeight: "800",
                    fontSize: "0.85rem",
                    "&:hover": { bgcolor: "#fff", color: "#002366" }
                  }}
                >
                  Build Now
                </Button>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default TravelPackages;
