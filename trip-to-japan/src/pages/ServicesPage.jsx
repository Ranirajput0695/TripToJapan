import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  Divider
} from "@mui/material";
import {
  Schedule as ClockIcon,
  LocationOn as LocationIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import img1 from "../assets/1 img.jpg";
import img2 from "../assets/2 img.jpg";
import img3 from "../assets/3 img.jpg";
import goldenRouteImg from "../assets/golden-route.png";

const tourItineraries = [
  {
    title: "Tokyo Special!!!",
    duration: "4 Nights / 5 Days",
    category: "Private Tour",
    image: img1,
    description: "A premium private tour experience through the highlights of Tokyo.",
    locations: ["Tokyo", "Yokohama"],
    highlights: ["Disney Resort", "Tokyo Tower", "Private MPV Transfers"],
    price: "₹1,25,000",
    color: "#002366"
  },
  {
    title: "The Golden Route: Tokyo to Kyoto",
    duration: "7 Days / 6 Nights",
    image: img2,
    description: "Experience the perfect blend of modern metropolis and ancient tradition.",
    locations: ["Tokyo", "Mt. Fuji", "Hakone", "Kyoto", "Nara", "Osaka"],
    highlights: ["Shibuya Crossing", "Kinkaku-ji Temple", "Fushimi Inari Shrine"],
    price: "From $1,499",
    color: "#FFB7C5"
  },
  {
    title: "Japan Family Adventure",
    duration: "10 Days / 9 Nights",
    image: img3,
    description: "A fun-filled journey designed for families with children of all ages.",
    locations: ["Tokyo Disneyland", "Osaka USJ", "Nara Deer Park", "Hiroshima"],
    highlights: ["Theme Parks", "Interactive Museums", "Bullet Train Experience"],
    price: "From $2,199",
    color: "#002366"
  },
  {
    title: "8 Day Wonders of Japan: Signature Tour",
    duration: "8 Days / 7 Nights",
    image: goldenRouteImg,
    description: "Our most popular signature tour covering the iconic landmarks of Japan.",
    locations: ["Tokyo", "Mt. Fuji", "Kyoto", "Osaka"],
    highlights: ["Mt. Fuji 5th Station", "Golden Pavilion", "Bullet Train"],
    price: "From $1,899",
    color: "#FFB7C5"
  }
];

const ServicesPage = () => {
  return (
    <>
      {/* 🚀 PAGE BANNER */}
      <Box 
        sx={{ 
          position: 'relative', 
          height: { xs: '350px', md: '550px' }, 
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: '110px', md: '135px' },
          mb: 4,
          borderRadius: { xs: 0, md: '0 0 60px 60px' },
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
      >
        <Box 
          component="img"
          src={img1}
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
          <Typography variant="overline" sx={{ letterSpacing: 6, fontWeight: "800", opacity: 0.9 }}>
            EXPLORE JAPAN
          </Typography>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '3rem', md: '5rem' }, 
            fontWeight: "900", 
            textTransform: 'uppercase',
            mb: 2,
            textShadow: '0 4px 12px rgba(0,0,0,0.3)'
          }}>
            Tour <span style={{ color: "#FFB7C5" }}>Itineraries</span>
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "700px", mx: "auto", fontWeight: '500', opacity: 0.9 }}>
            Discover our handpicked selection of premium Japan travel packages.
          </Typography>
        </Container>
      </Box>

      {/* 🎌 FULL-WIDTH FEATURED HIGHLIGHT SECTION */}
      <Box sx={{ 
        width: '100%', 
        textAlign: 'center', 
        position: 'relative',
        mb: 8,
        py: 4,
        bgcolor: 'transparent'
      }}>
        <Stack spacing={1} alignItems="center">
          <Typography variant="overline" sx={{ letterSpacing: 8, color: "#FFB7C5", fontWeight: "900", display: 'block' }}>
            FEATURED ITINERARY
          </Typography>
          
          <Typography variant="h2" sx={{ 
            fontWeight: '950', 
            fontFamily: '"Times New Roman", serif', 
            color: '#002366',
            fontSize: { xs: '2.5rem', md: '4.5rem' },
            lineHeight: 1,
            textTransform: 'uppercase',
            width: '100%',
            px: 2
          }}>
            Tokyo Special!!!
          </Typography>

          <Typography variant="h3" sx={{ 
            fontWeight: '900', 
            fontFamily: '"Times New Roman", serif', 
            color: '#000',
            fontSize: { xs: '1.8rem', md: '3rem' },
            mt: 1
          }}>
            4 nights / 5 days
          </Typography>

          <Typography variant="h4" sx={{ 
            fontWeight: '900', 
            fontFamily: '"Times New Roman", serif', 
            color: '#555',
            fontSize: { xs: '1.4rem', md: '2.2rem' },
            mt: 1
          }}>
            Package Category: Private tour
          </Typography>
        </Stack>
      </Box>

      {/* 🗓 PREMIUM 50/50 FULL-WIDTH ITINERARY SECTION */}
      <Box sx={{ width: '100%', mb: 12, bgcolor: '#fdfdfd' }}>
        <Grid container alignItems="stretch">
          {/* Left Column (50%): Image + Professional Description */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              borderRight: { md: '1px solid rgba(0, 35, 102, 0.1)' }
            }}>
              <Box 
                component="img"
                src={img2}
                sx={{ 
                  width: '100%', 
                  height: { xs: '300px', md: '450px' }, 
                  objectFit: 'cover',
                  filter: 'brightness(0.95)'
                }}
              />
              <Box sx={{ 
                p: { xs: 4, sm: 6, md: 10 }, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                flexGrow: 1 
              }}>
                <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="h6" sx={{ color: '#FFB7C5', fontWeight: '900', letterSpacing: 2 }}>
                    DAY 01
                  </Typography>
                  <Divider sx={{ flexGrow: 1, borderColor: 'rgba(0, 35, 102, 0.1)' }} />
                </Box>
                
                <Typography variant="h2" sx={{ 
                  fontWeight: '900', 
                  mb: 4, 
                  color: '#002366',
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  lineHeight: 1.1,
                  fontFamily: '"Times New Roman", serif'
                }}>
                  Arrival in <span style={{ color: '#FFB7C5' }}>Tokyo</span>
                </Typography>
                
                <Typography variant="body1" sx={{ 
                  lineHeight: 2, 
                  color: '#444', 
                  fontSize: '1.15rem',
                  textAlign: 'justify',
                  fontWeight: '400',
                  mb: 4
                }}>
                  Upon arrival at Tokyo's Narita or Haneda Airport, meet your driver and transfer to your hotel in central Tokyo. After check-in, begin exploring Tokyo's traditional side with a visit to the Asakusa Senso-ji Temple, one of the oldest temples in the city. Stroll along Nakamise Street, lined with colorful shops offering snacks, toys, and souvenirs. From here, enjoy the view of the Tokyo Skytree – Japan’s tallest structure – before heading back for overnight rest.
                </Typography>

                <Button 
                  variant="contained" 
                  sx={{ 
                    alignSelf: 'flex-start',
                    bgcolor: '#002366',
                    px: 4,
                    py: 1.5,
                    borderRadius: 0,
                    fontWeight: '800',
                    fontSize: '0.9rem',
                    letterSpacing: 2,
                    '&:hover': { bgcolor: '#001a4d' }
                  }}
                >
                  VIEW FULL GALLERY
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Column (50%): Cinematic Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: '100%', minHeight: { xs: '400px', md: '100%' } }}>
              <Box 
                component="img"
                src={img3}
                sx={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              {/* Subtle Overlay for Premium Feel */}
              <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(to bottom, rgba(0,35,102,0.1), transparent 30%, transparent 70%, rgba(0,35,102,0.2))',
                pointerEvents: 'none'
              }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ width: '100%', pb: 15, px: { xs: 2, md: 6 } }}>
        {/* 🗺 ALL ITINERARIES GRID */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h3" fontWeight="900" sx={{ mb: 1, color: '#002366', textTransform: 'uppercase', letterSpacing: 2 }}>
            All <span style={{ color: "#FFB7C5" }}>Tour Packages</span>
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', maxWidth: '800px', mx: 'auto' }}>
            Browse through our complete collection of curated Japanese experiences.
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {tourItineraries.map((tour, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: "100%", 
                  borderRadius: 0, 
                  overflow: "hidden", 
                  boxShadow: "0 15px 45px rgba(0,0,0,0.07)",
                  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                  border: '1px solid rgba(0,0,0,0.05)',
                  "&:hover": { 
                    transform: "translateY(-10px)", 
                    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
                    "& .tour-img": { transform: "scale(1.08)" }
                  }
                }}
              >
                <Box sx={{ position: 'relative', height: "280px", overflow: 'hidden' }}>
                  <Box 
                    className="tour-img"
                    component="img"
                    src={tour.image}
                    sx={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  {tour.title === "Tokyo Special!!!" && (
                    <Box sx={{ 
                      position: 'absolute', 
                      top: 20, 
                      left: 20, 
                      bgcolor: '#FFB7C5', 
                      color: '#fff',
                      px: 2,
                      py: 0.5,
                      fontWeight: '900',
                      fontSize: '0.75rem',
                      letterSpacing: 1
                    }}>
                      FEATURED
                    </Box>
                  )}
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="overline" sx={{ color: '#FFB7C5', fontWeight: '900', letterSpacing: 1 }}>
                    {tour.duration}
                  </Typography>
                  <Typography variant="h4" fontWeight="900" sx={{ mb: 2, color: '#002366', fontSize: '1.5rem' }}>
                    {tour.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4, height: "48px", overflow: "hidden", lineHeight: 1.6 }}>
                    {tour.description}
                  </Typography>
                  
                  <Divider sx={{ mb: 3, opacity: 0.6 }} />
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Box>
                      <Typography variant="caption" display="block" sx={{ fontWeight: '700', color: '#999', textTransform: 'uppercase' }}>Price Starts</Typography>
                      <Typography variant="h6" sx={{ fontWeight: '900', color: '#002366' }}>{tour.price}</Typography>
                    </Box>
                    <Button 
                      component={Link}
                      to="/itinerary-details"
                      variant="text" 
                      endIcon={<ArrowIcon />}
                      sx={{ 
                        fontWeight: "800", 
                        color: "#FFB7C5",
                        "&:hover": { bgcolor: 'transparent', color: "#002366" }
                      }}
                    >
                      VIEW DETAILS
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ServicesPage;