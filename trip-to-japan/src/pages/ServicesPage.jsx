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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import {
  Schedule as ClockIcon,
  LocationOn as LocationIcon,
  ArrowForward as ArrowIcon,
  Star as StarIcon,
  Hotel as HotelIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  AttachMoney as MoneyIcon,
  Groups as GroupsIcon,
  ChildCare as ChildIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import img1 from "../assets/1 img.jpg";
import img2 from "../assets/2 img.jpg";
import img3 from "../assets/3 img.jpg";
import img4 from "../assets/4 img.jpg";
import img5 from "../assets/5 img.jpg";
import img6 from "../assets/6 img.jpeg";
import goldenRouteImg from "../assets/golden-route.png";

const kidsSpecialItinerary = [
  {
    day: "Day 01",
    title: "Arrival in Tokyo – Welcome to Japan!",
    description: "Upon arrival at Tokyo's Narita or Haneda Airport, meet your driver and transfer to your hotel in central Tokyo. After check-in, begin exploring Tokyo's traditional side with a visit to the Asakusa Senso-ji Temple, one of the oldest temples in the city. Stroll along Nakamise Street, lined with colorful shops offering snacks, toys, and souvenirs. From here, enjoy the view of the Tokyo Skytree – Japan's tallest structure – before heading back for overnight rest.",
    image: img2
  },
  {
    day: "Day 02",
    title: "Tokyo City Highlights + team Lab Planets",
    description: "Today is dedicated to exploring modern and cultural Tokyo. Begin with a visit to the peaceful Meiji Shrine, hidden within a lush forest. Then head to Shibuya Crossing, the world's busiest pedestrian crossing, and snap a photo with the famous Hachiko Statue. In the afternoon, visit the futuristic digital art museum teamLab Planets, where kids will be immersed in light, sound, and interactive displays. End the day in Odaiba, where you can see the life-size Unicorn Gundam statue and explore family-friendly attractions.",
    image: img3
  },
  {
    day: "Day 03",
    title: "Mt. Fuji & Hakone Day Trip",
    description: "After breakfast, head out for a full-day scenic tour to Mount Fuji and Hakone. First, drive to the 5th Station of Mt. Fuji (weather permitting) for a close-up view and family photo opportunity. Continue to Lake Ashi for a short cruise surrounded by forested mountains. Ride the Hakone Ropeway, offering aerial views of the volcanic Owakudani Valley, known for its sulfur springs and black eggs. Return to Tokyo by evening for overnight stay.",
    image: img6
  },
  {
    day: "Day 04",
    title: "Tokyo Disneyland – Magical Kingdom for Kids",
    description: "Today is all about fun and imagination at Tokyo Disneyland. Explore different lands such as Fantasyland, Adventureland, Toontown, and Tomorrowland. Enjoy classic rides like 'It's a Small World', meet Disney characters, and watch lively parades and shows. Plenty of kid-friendly food and souvenir shops are available. It's a magical day your kids will never forget.",
    image: img4
  },
  {
    day: "Day 05",
    title: "Sanrio Puroland + Departure",
    description: "After breakfast and check-out, make a final fun stop at Sanrio Puroland, an indoor Hello Kitty-themed Park. Kids can enjoy shows, mini rides, themed cafes, and meet characters like My Melody and Cinnamoroll. Later, transfer to the airport for your return flight, marking the end of an unforgettable family adventure in Japan.",
    image: img5
  }
];

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

      {/* 🎡 TOKYO KIDS SPECIAL SLIDER */}
      <Box sx={{ width: '100%', mb: 10, bgcolor: '#fdfdfd', py: 8 }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
              FAMILY SPECIAL
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: '950', color: '#002366', textTransform: 'uppercase' }}>
              Tokyo <span style={{ color: "#FFB7C5" }}>Kids</span> Special
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', mt: 1 }}>
              4 Nights / 5 Days - The Ultimate Family Adventure
            </Typography>
          </Box>

          <Box sx={{ 
            borderRadius: { xs: 0, md: 8 }, 
            overflow: 'hidden', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
            position: 'relative'
          }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              speed={1000}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation
              pagination={{ clickable: true }}
              style={{ height: '600px' }}
            >
              {kidsSpecialItinerary.map((step, index) => (
                <SwiperSlide key={index}>
                  <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
                    <Box 
                      component="img"
                      src={step.image}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%', 
                      background: 'linear-gradient(to top, rgba(0,35,102,0.9) 0%, rgba(0,35,102,0.4) 40%, transparent 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: { xs: 4, md: 10 },
                      color: '#fff'
                    }}>
                      <Typography variant="h6" sx={{ color: '#FFB7C5', fontWeight: '900', mb: 1 }}>
                        {step.day}
                      </Typography>
                      <Typography variant="h3" sx={{ fontWeight: '900', mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body1" sx={{ maxWidth: '800px', fontSize: '1.2rem', opacity: 0.9, lineHeight: 1.8 }}>
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Container>

        {/* 🏆 ULTRA-PREMIUM PACKAGE DETAILS SECTION */}
        <Container maxWidth="lg" sx={{ mt: 15, pb: 20 }}>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 12 }}>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, bgcolor: 'rgba(255,183,197,0.1)', px: 3, py: 1, borderRadius: 10, mb: 3 }}>
              <StarIcon sx={{ color: '#FFB7C5', fontSize: '1rem' }} />
              <Typography variant="overline" sx={{ fontWeight: '900', color: '#002366', letterSpacing: 2 }}>ALL-INCLUSIVE DETAILS</Typography>
            </Box>
            <Typography variant="h2" sx={{ fontWeight: '1000', color: '#002366', mb: 2 }}>Package <span style={{ color: '#FFB7C5' }}>Summary</span></Typography>
            <Typography variant="h6" sx={{ color: '#64748b', maxWidth: '700px', mx: 'auto', fontWeight: '500' }}>
              Every detail of your family journey, meticulously planned for maximum comfort and unforgettable memories.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {/* 💰 HIGH-FIDELITY PRICING GRID */}
            <Grid item xs={12}>
              <Grid container spacing={4} justifyContent="center">
                {[
                  { 
                    tier: 'SILVER', stars: 3, 
                    price2: '3,300', price4: '4,852', price6: '6,042', child: '990',
                    gradient: 'linear-gradient(135deg, #94a3b8 0%, #64748b 100%)',
                    icon: <HotelIcon />, hotel: 'APA Villa Hotel Akasaka'
                  },
                  { 
                    tier: 'GOLD', stars: 4, featured: true,
                    price2: '3,552', price4: '5,352', price6: '6,792', child: '1,065',
                    gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
                    icon: <HotelIcon />, hotel: 'Hotel Mystays Premier'
                  },
                  { 
                    tier: 'DIAMOND', stars: 5,
                    price2: '4,423', price4: '7,092', price6: '9,402', child: '1,326',
                    gradient: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)',
                    icon: <HotelIcon />, hotel: 'Sheraton Miyako Tokyo'
                  }
                ].map((pkg, i) => (
                  <Grid item xs={12} md={4} key={i}>
                    <Paper 
                      elevation={0}
                      sx={{ 
                        borderRadius: 10, 
                        overflow: 'hidden', 
                        height: '100%',
                        background: '#fff',
                        boxShadow: pkg.featured ? '0 50px 100px -20px rgba(0,35,102,0.15)' : '0 20px 50px -10px rgba(0,0,0,0.05)',
                        border: pkg.featured ? '3px solid #FFB7C5' : '1px solid rgba(0,0,0,0.04)',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        '&:hover': { transform: 'translateY(-20px)' }
                      }}
                    >
                      <Box sx={{ p: 4, background: pkg.gradient, color: '#fff', textAlign: 'center', position: 'relative' }}>
                        <Typography variant="h6" sx={{ fontWeight: '1000', letterSpacing: 4, mb: 1, opacity: 0.9 }}>{pkg.tier}</Typography>
                        <Stack direction="row" justifyContent="center" spacing={0.5} sx={{ mb: 2 }}>
                          {[...Array(pkg.stars)].map((_, s) => <StarIcon key={s} sx={{ fontSize: '1.2rem', color: '#fff' }} />)}
                        </Stack>
                        <Typography variant="body2" sx={{ opacity: 0.8, fontWeight: '700' }}>{pkg.hotel}</Typography>
                      </Box>

                      <Box sx={{ p: 5 }}>
                        <Stack spacing={4}>
                          {[
                            { label: '2 Persons', price: pkg.price2, icon: <GroupsIcon sx={{ color: '#002366' }} /> },
                            { label: '4 Persons', price: pkg.price4, icon: <GroupsIcon sx={{ color: '#002366' }} /> },
                            { label: '6 Persons', price: pkg.price6, icon: <GroupsIcon sx={{ color: '#002366' }} /> }
                          ].map((item, idx) => (
                            <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Stack direction="row" spacing={2} alignItems="center">
                                <Box sx={{ p: 1, bgcolor: 'rgba(0,35,102,0.05)', borderRadius: 2 }}>{item.icon}</Box>
                                <Typography sx={{ fontWeight: '800', color: '#64748b' }}>{item.label}</Typography>
                              </Stack>
                              <Typography sx={{ fontWeight: '1000', color: '#002366', fontSize: '1.4rem' }}>${item.price}</Typography>
                            </Box>
                          ))}
                          
                          <Box sx={{ 
                            mt: 2, p: 3, borderRadius: 6, 
                            background: 'rgba(255,183,197,0.08)',
                            border: '1px dashed rgba(255,183,197,0.5)',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                          }}>
                            <Stack direction="row" spacing={2} alignItems="center">
                              <ChildIcon sx={{ color: '#FFB7C5' }} />
                              <Typography sx={{ fontWeight: '900', color: '#FFB7C5', fontSize: '0.85rem' }}>CHILD / EXTRA BED</Typography>
                            </Stack>
                            <Typography sx={{ fontWeight: '1000', color: '#002366', fontSize: '1.2rem' }}>${pkg.child}</Typography>
                          </Box>
                        </Stack>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* 📋 INCLUSIONS & VISAS IN SLEEK HORIZONTAL LAYOUT */}
            <Grid item xs={12} md={7} sx={{ mt: 8 }}>
              <Paper sx={{ p: 6, borderRadius: 10, bgcolor: '#fff', border: '1px solid rgba(0,0,0,0.04)', boxShadow: '0 30px 60px rgba(0,0,0,0.03)' }}>
                <Typography variant="h4" sx={{ fontWeight: '1000', color: '#002366', mb: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CheckIcon sx={{ color: '#4caf50', fontSize: '2.5rem' }} /> What's <span style={{ color: '#FFB7C5' }}>Included</span>
                </Typography>
                <Grid container spacing={3}>
                  {[
                    "Luxury Stay in Central Tokyo", "Daily Artisan Breakfasts", "Private Chauffeur-led Tours",
                    "Mt. Fuji Private Experience", "Disney Island Family Pass", "TeamLab & Skytree Entry",
                    "VIP Airport Meet & Greet", "Personal Concierge Support"
                  ].map((text, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <CheckIcon sx={{ color: '#4caf50', fontSize: '1.2rem' }} />
                        <Typography sx={{ fontWeight: '700', color: '#64748b' }}>{text}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
                
                <Divider sx={{ my: 6, opacity: 0.1 }} />

                <Typography variant="h4" sx={{ fontWeight: '1000', color: '#002366', mb: 5, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CancelIcon sx={{ color: '#f44336', fontSize: '2.5rem' }} /> Exclusions
                </Typography>
                <Grid container spacing={3}>
                  {[
                    "International Flight Tickets", "Personal Visa Fees", "Travel Insurance",
                    "Personal Gratuities & Tipping"
                  ].map((text, i) => (
                    <Grid item xs={12} sm={6} key={i}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <CancelIcon sx={{ color: '#f44336', fontSize: '1.2rem' }} />
                        <Typography sx={{ fontWeight: '700', color: '#64748b' }}>{text}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            {/* 🛂 COMPACT VISA CHECKLIST CARD */}
            <Grid item xs={12} md={5} sx={{ mt: 8 }}>
              <Box sx={{ 
                p: 6, borderRadius: 10, 
                background: 'linear-gradient(135deg, #002366 0%, #001540 100%)',
                color: '#fff',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: 'rgba(255,183,197,0.1)', borderRadius: '50%' }} />
                
                <Typography variant="h4" sx={{ fontWeight: '1000', color: '#FFB7C5', mb: 4 }}>Visa <span style={{ color: '#fff' }}>Checklist</span></Typography>
                <Stack spacing={3}>
                  {[
                    { label: "Valid Passport", sub: "6 months validity + old passports" },
                    { label: "04 Photographs", sub: "2x2 inch, Matte, White background" },
                    { label: "Bank Statement", sub: "6 months (Signed & Stamped)" },
                    { label: "IT Returns", sub: "Last 3 years IT Filing / Form 16" },
                    { label: "Work Proof", sub: "Salary certificate or NOC Letter" }
                  ].map((item, i) => (
                    <Box key={i}>
                      <Typography variant="subtitle1" sx={{ fontWeight: '900', color: '#fff' }}>{item.label}</Typography>
                      <Typography variant="body2" sx={{ color: '#FFB7C5', opacity: 0.8, fontWeight: '600' }}>{item.sub}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Box sx={{ mt: 8, p: 3, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Typography variant="body2" sx={{ fontWeight: '700', textAlign: 'center' }}>
                    Process Time: <span style={{ color: '#FFB7C5' }}>09 - 10 Working Days</span>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* 💎 CALL TO ACTION */}
            <Grid item xs={12}>
              <Box sx={{ 
                mt: 10, p: 8, borderRadius: 12, 
                background: 'linear-gradient(to right, rgba(255,183,197,0.05), rgba(0,35,102,0.05))',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.04)'
              }}>
                <Typography variant="h2" sx={{ fontWeight: '1000', color: '#002366', mb: 3 }}>Ready for the <span style={{ color: '#FFB7C5' }}>Journey?</span></Typography>
                <Typography variant="h5" sx={{ color: '#64748b', mb: 6, fontWeight: '500' }}>Speak to our Japan experts and customize your family adventure.</Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      bgcolor: '#002366', px: 8, py: 2.5, borderRadius: 4, fontWeight: '900', fontSize: '1.2rem',
                      '&:hover': { bgcolor: '#001a4d' }
                    }}
                  >
                    BOOK NOW
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: '#002366', color: '#002366', px: 8, py: 2.5, borderRadius: 4, fontWeight: '900', fontSize: '1.2rem',
                      borderWidth: 2, '&:hover': { borderWidth: 2, borderColor: '#001a4d' }
                    }}
                  >
                    +91-84370-00178
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ServicesPage;