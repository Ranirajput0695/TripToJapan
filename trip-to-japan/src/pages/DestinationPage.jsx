import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Explore as ExploreIcon,
  CameraAlt as CameraIcon
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Placeholder images for destinations (using your existing assets where possible)
import tokyoImg from "../assets/1 img.jpg";
import kyotoImg from "../assets/2 img.jpg";
import fujiImg from "../assets/3 img.jpg";
import osakaImg from "../assets/4 img.jpg";
import naraImg from "../assets/5 img.jpg";
import hokkaidoImg from "../assets/6 img.jpeg";

const destinations = [
  {
    name: "Tokyo",
    tagline: "The Neon Metropolis",
    description: "A dazzling blend of futuristic skyscrapers and ancient temples. Explore Shinjuku's neon lights and Asakusa's traditional charm.",
    image: tokyoImg,
    highlights: ["Shibuya Crossing", "Tokyo Skytree", "Akihabara"],
    color: "#002366"
  },
  {
    name: "Osaka",
    tagline: "The Nation's Kitchen",
    description: "Famous for its vibrant street food, modern architecture, and the legendary Osaka Castle.",
    image: osakaImg,
    highlights: ["Dotonbori", "Universal Studios", "Osaka Castle"],
    color: "#FFB7C5"
  },
  {
    name: "Kyoto",
    tagline: "The Heart of Tradition",
    description: "The cultural soul of Japan, home to thousands of temples, zen gardens, and the mysterious Geisha districts of Gion.",
    image: kyotoImg,
    highlights: ["Fushimi Inari", "Golden Pavilion", "Arashiyama Bamboo"],
    color: "#002366"
  },
  {
    name: "Nara",
    tagline: "Where History Roams Free",
    description: "Ancient capital known for its giant Buddha statue and the friendly deer that wander through Nara Park.",
    image: naraImg,
    highlights: ["Todai-ji Temple", "Nara Park", "Kasuga Taisha"],
    color: "#FFB7C5"
  },
  {
    name: "Mount Fuji",
    tagline: "Japan's Sacred Peak",
    description: "The iconic snow-capped volcano offering breathtaking views, scenic lake cruises, and world-class hiking trails.",
    image: fujiImg,
    highlights: ["Lake Kawaguchi", "5th Station", "Chureito Pagoda"],
    color: "#002366"
  },
  {
    name: "Hakone",
    tagline: "Natural Hot Springs",
    description: "A mountain resort famous for its hot springs, volcanic valleys, and stunning views of Mt. Fuji across Lake Ashi.",
    image: hokkaidoImg, // Reusing Hokkaido image for Hakone
    highlights: ["Hakone Ropeway", "Lake Ashi", "Open Air Museum"],
    color: "#FFB7C5"
  },
  {
    name: "Hiroshima",
    tagline: "Peace and Resilience",
    description: "A city with deep history, beautiful gardens, and the iconic floating Torii gate of Miyajima Island.",
    image: kyotoImg, // Reusing Kyoto for now
    highlights: ["Peace Memorial", "Miyajima", "Shukkeien Garden"],
    color: "#002366"
  },
  {
    name: "Nagoya",
    tagline: "Industrial Innovation",
    description: "The hub of Japanese automotive industry and history, featuring modern museums and the historic Nagoya Castle.",
    image: tokyoImg, // Reusing Tokyo for now
    highlights: ["Nagoya Castle", "SCMAGLEV", "Toyota Museum"],
    color: "#FFB7C5"
  },
  {
    name: "Fukuoka",
    tagline: "Gateway to Kyushu",
    description: "Known for its modern shopping, ancient temples, and the famous Yatai street food stalls by the river.",
    image: osakaImg, // Reusing Osaka for now
    highlights: ["Ohori Park", "Canal City", "Kushida Shrine"],
    color: "#002366"
  },
  {
    name: "Hokkaido",
    tagline: "Northern Wilderness",
    description: "A paradise for nature lovers, offering world-class skiing in winter and stunning flower fields in summer.",
    image: hokkaidoImg,
    highlights: ["Sapporo", "Otaru Canal", "Furano Flowers"],
    color: "#FFB7C5"
  }
];

const DestinationPage = () => {
  return (
    <Box sx={{ bgcolor: "#fdfdfd", minHeight: "100vh" }}>
      {/* 🚀 HERO SECTION */}
      <Box 
        sx={{ 
          position: 'relative', 
          height: { xs: '350px', md: '500px' }, 
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: '110px', md: '135px' },
          mb: 8,
          borderRadius: { xs: 0, md: '0 0 60px 60px' },
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
      >
        <Box 
          component="img"
          src={tokyoImg}
          sx={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 35, 102, 0.4)',
            zIndex: 1
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
          <Typography variant="overline" sx={{ letterSpacing: 8, fontWeight: "900", opacity: 0.9, fontSize: { xs: '0.8rem', md: '1rem' } }}>
            DREAM DESTINATIONS
          </Typography>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '3rem', md: '6rem' }, 
            fontWeight: "1000", 
            textTransform: 'uppercase',
            mb: 2,
            textShadow: '0 4px 20px rgba(0,0,0,0.4)'
          }}>
            Explore <span style={{ color: "#FFB7C5" }}>Japan</span>
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "800px", mx: "auto", fontWeight: '500', opacity: 0.9, fontSize: { xs: '1rem', md: '1.4rem' } }}>
            From the neon lights of Tokyo to the serene temples of Kyoto, find your perfect Japanese adventure.
          </Typography>
        </Container>
      </Box>

      {/* 🗺️ DESTINATION SLIDER */}
      <Container maxWidth="xl" sx={{ pb: 15 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: '#FFB7C5', fontWeight: '900', letterSpacing: 4 }}>EXPLORE THE BEAUTY</Typography>
          <Typography variant="h2" sx={{ fontWeight: '1000', color: '#002366' }}>Popular Japan <span style={{ color: '#FFB7C5' }}>Destinations</span></Typography>
        </Box>

        <Box sx={{ 
          position: 'relative',
          '.swiper-button-next, .swiper-button-prev': {
            color: '#FFB7C5',
            '&::after': { fontSize: '1.5rem', fontWeight: 'bold' }
          },
          '.swiper-pagination-bullet-active': {
            backgroundColor: '#FFB7C5'
          },
          px: { xs: 0, md: 4 }
        }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1200: { slidesPerView: 3, spaceBetween: 40 }
            }}
            style={{ padding: '40px 20px 80px' }}
          >
            {destinations.map((dest, index) => (
              <SwiperSlide key={index} style={{ width: 'auto', maxWidth: '450px' }}>
                <Card 
                  sx={{ 
                    borderRadius: 8, 
                    overflow: 'hidden', 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(0,0,0,0.04)',
                    bgcolor: '#fff'
                  }}
                >
                  <Box sx={{ position: 'relative', height: '300px' }}>
                    <Box 
                      component="img"
                      src={dest.image}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box 
                      sx={{ 
                        position: 'absolute', 
                        top: 20, 
                        left: 20,
                        bgcolor: 'rgba(255,255,255,0.95)',
                        px: 2, py: 0.5, borderRadius: 2,
                        display: 'flex', alignItems: 'center', gap: 1,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                      }}
                    >
                      <LocationIcon sx={{ color: dest.color, fontSize: '1rem' }} />
                      <Typography variant="caption" sx={{ fontWeight: '900', color: '#002366' }}>{dest.name}</Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: '900', color: '#002366', mb: 1 }}>{dest.name}</Typography>
                    <Typography variant="subtitle2" sx={{ color: dest.color, fontWeight: '800', mb: 2, letterSpacing: 1 }}>{dest.tagline}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', mb: 4, lineHeight: 1.7, fontSize: '0.95rem' }}>{dest.description}</Typography>
                    
                    <Box>
                      <Typography variant="caption" sx={{ fontWeight: '900', color: '#94a3b8', mb: 1.5, display: 'block', letterSpacing: 1 }}>TOP HIGHLIGHTS</Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {dest.highlights.map((tag, i) => (
                          <Chip 
                            key={i} 
                            label={tag} 
                            size="small" 
                            sx={{ 
                              bgcolor: 'rgba(0,35,102,0.03)', 
                              color: '#002366', 
                              fontWeight: '700',
                              border: '1px solid rgba(0,35,102,0.08)'
                            }} 
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>
                  
                  <Box sx={{ p: 4, pt: 0 }}>
                    <Button 
                      fullWidth 
                      variant="outlined" 
                      endIcon={<ExploreIcon />}
                      sx={{ 
                        borderRadius: 3, 
                        py: 1.5, 
                        fontWeight: '900', 
                        borderColor: dest.color, 
                        color: dest.color,
                        borderWidth: 2,
                        '&:hover': { borderWidth: 2, bgcolor: dest.color, color: '#fff', borderColor: dest.color }
                      }}
                    >
                      VIEW PACKAGES
                    </Button>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* 📸 PHOTOGRAPHY CALLOUT */}
        <Box 
          sx={{ 
            mt: 15, p: { xs: 6, md: 10 }, 
            borderRadius: 12, 
            background: 'linear-gradient(135deg, #002366 0%, #001540 100%)',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'center'
          }}
        >
          <CameraIcon sx={{ fontSize: '5rem', opacity: 0.1, position: 'absolute', top: -20, left: -20 }} />
          <Typography variant="h3" sx={{ fontWeight: '1000', mb: 3 }}>Capture the <span style={{ color: '#FFB7C5' }}>Moment</span></Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, maxWidth: '800px', mx: 'auto', mb: 6, fontWeight: '500' }}>
            Japan is a photographer's dream. Every street corner, every temple gate, and every mountain vista tells a story waiting to be told.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              bgcolor: '#FFB7C5', color: '#002366', px: 8, py: 2, borderRadius: 4, fontWeight: '900', fontSize: '1.2rem',
              '&:hover': { bgcolor: '#fff' }
            }}
          >
            START PLANNING
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default DestinationPage;
