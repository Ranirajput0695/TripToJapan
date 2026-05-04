import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Stack, 
  Button, 
  Chip,
  Divider,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  LocationOn as LocationIcon, 
  Restaurant as FoodIcon, 
  Nightlife as NightIcon, 
  HistoryEdu as CultureIcon, 
  Explore as ExploreIcon,
  Star as StarIcon,
  ArrowForward as ArrowIcon
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import tokyoSkyline from "../assets/tokyo-skyline.png";
import shibuyaCrossing from "../assets/shibuya-crossing.png";
import sensoji from "../assets/sensoji.png";
import osakaCastle from "../assets/osaka-castle.png";
import osakaGlico from "../assets/osaka-glico.png";
import naraDest from "../assets/dest-nara.png";
import fujiImg from "../assets/3 img.jpg";
import hakoneDest from "../assets/dest-hakone.png";
import hiroshimaDest from "../assets/dest-hiroshima.png";
import nagoyaDest from "../assets/dest-nagoya.png";
import fukuokaDest from "../assets/dest-fukuoka.png";

const DestinationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a" }}>
      
      {/* 🚀 PAGE HEADER */}
      <Box 
        sx={{ 
          height: { xs: "40vh", md: "50vh" },
          backgroundImage: `linear-gradient(rgba(0,35,102,0.6), rgba(0,35,102,0.8)), url(${tokyoSkyline})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            fontSize: { xs: "2.5rem", md: "4.5rem" }, 
            mb: 2,
            textShadow: "0 4px 15px rgba(0,0,0,0.3)"
          }}
        >
          Popular Japan <span style={{ color: "#FFB7C5" }}>Destinations</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "850px", opacity: 0.9, fontWeight: "500", lineHeight: 1.6 }}>
          We cover all major destinations with professional ground handling across Japan. 
          Explore Japan’s most famous cities and scenic regions with comfortable private transfers and guided services.
        </Typography>
        <Box sx={{ width: "100px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px", mt: 4 }} />
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
        
        {/* 🗼 TOKYO SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                THE VIBRANT CAPITAL
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Tokyo
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                Tokyo offers a mix of futuristic technology, traditional culture, and vibrant city life. 
                From neon-lit crossings to serene historical temples, it is a city of endless discovery.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Key Attractions</Typography>
                <Grid container spacing={1}>
                  {[
                    "Shibuya Crossing", "Sensō-ji Temple", "Tokyo Tower", 
                    "Meiji Shrine", "Shinjuku", "Ginza", "Akihabara"
                  ].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Shopping", "Nightlife", "Culture", "Modern Attractions", "Theme Parks"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(255,183,197,0.1)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  "&:hover": { bgcolor: "#001a4d" }
                }}
              >
                Inquire for Tokyo
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3500 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {[tokyoSkyline, shibuyaCrossing, sensoji].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Tokyo" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 10, opacity: 0.1 }} />

        {/* ⛩️ FUKUOKA SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center" direction={{ xs: "column-reverse", md: "row" }}>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[fukuokaDest, tokyoSkyline, osakaCastle].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Fukuoka" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                GATEWAY TO SOUTHERN JAPAN
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Fukuoka
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                A dynamic gateway to Kyushu known for its delicious street food (Yatai), 
                modern waterfront attractions, and relaxed coastal atmosphere.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Main Attractions</Typography>
                <Grid container spacing={1}>
                  {["Canal City Hakata", "Ohori Park", "Yatai Food Stalls"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Food Lovers", "Relaxed Travel", "Coastal Experiences"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(0,35,102,0.05)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="outlined" 
                size="large"
                href="/contact"
                sx={{ 
                  borderColor: "#002366", color: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  borderWidth: 2, "&:hover": { borderWidth: 2, borderColor: "#001a4d" }
                }}
              >
                Inquire for Fukuoka
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* 🚗 NAGOYA SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                INDUSTRIAL & CULTURAL HUB
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Nagoya
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                An important industrial stop between Tokyo and Kyoto. Nagoya offers a unique mix of 
                automotive innovation, modern commerce, and traditional samurai history.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Main Attractions</Typography>
                <Grid container spacing={1}>
                  {["Nagoya Castle", "Toyota Museum of Tech", "Osu Kannon Arcade"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Industry Tours", "Culture", "Shopping"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(255,183,197,0.1)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  "&:hover": { bgcolor: "#001a4d" }
                }}
              >
                Inquire for Nagoya
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3600 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[nagoyaDest, tokyoSkyline, shibuyaCrossing].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Nagoya" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* 🕊️ HIROSHIMA SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center" direction={{ xs: "column-reverse", md: "row" }}>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4200 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[hiroshimaDest, sensoji, osakaCastle].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Hiroshima" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                A CITY OF PEACE & HISTORY
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Hiroshima
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                Internationally recognized as a symbol of peace and resilience. Hiroshima offers a 
                profound mix of tragic history and vibrant, modern urban recovery.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Main Attractions</Typography>
                <Grid container spacing={1}>
                  {["Peace Memorial Park", "Itsukushima Shrine", "A-Bomb Dome"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["History", "Education", "Cultural Tourism"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(0,35,102,0.05)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="outlined" 
                size="large"
                href="/contact"
                sx={{ 
                  borderColor: "#002366", color: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  borderWidth: 2, "&:hover": { borderWidth: 2, borderColor: "#001a4d" }
                }}
              >
                Inquire for Hiroshima
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* ♨️ HAKONE SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                HOT SPRINGS & SCENIC BEAUTY
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Hakone
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                A popular resort destination near Tokyo ideal for relaxation and hot springs. 
                Hakone is famous for its volcanic activity and stunning views across Lake Ashi.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Main Attractions</Typography>
                <Grid container spacing={1}>
                  {["Lake Ashi", "Owakudani Valley", "Hakone Open-Air Museum"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Relaxation", "Hot Springs", "Scenic Sightseeing"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(255,183,197,0.1)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  "&:hover": { bgcolor: "#001a4d" }
                }}
              >
                Inquire for Hakone
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3900 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[hakoneDest, fujiImg, tokyoSkyline].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Hakone" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* 🗻 MOUNT FUJI SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center" direction={{ xs: "column-reverse", md: "row" }}>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4500 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[fujiImg, hakoneDest, sensoji].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Mount Fuji" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                JAPAN'S ICONIC LANDMARK
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Mount Fuji
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                Standing at 3,776 meters, it is the highest mountain in Japan and a global symbol 
                of beauty and spiritual significance.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Primary Viewing Spots</Typography>
                <Grid container spacing={1}>
                  {["Lake Kawaguchi", "Chureito Pagoda", "Hakone Ropeway"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Nature Lovers", "Photography", "Scenic Tours"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(0,35,102,0.05)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="outlined" 
                size="large"
                href="/contact"
                sx={{ 
                  borderColor: "#002366", color: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  borderWidth: 2, "&:hover": { borderWidth: 2, borderColor: "#001a4d" }
                }}
              >
                Inquire for Mt. Fuji
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* 🦌 NARA SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                THE CITY OF SACRED DEER
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Nara
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                A charming city near Kyoto and Osaka known for its deep historical significance and a 
                peaceful, spiritual atmosphere. Nara was Japan's first permanent capital.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Main Attractions</Typography>
                <Grid container spacing={1}>
                  {["Nara Park", "Tōdai-ji Temple", "Kasuga Taisha Shrine"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Nature", "History", "Family-Friendly Sightseeing"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(255,183,197,0.1)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  "&:hover": { bgcolor: "#001a4d" }
                }}
              >
                Inquire for Nara
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3700 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[naraDest, osakaCastle, shibuyaCrossing].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Nara" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* 🥘 OSAKA SECTION */}
        <Box sx={{ mb: 15 }}>
          <Grid container spacing={6} alignItems="center" direction={{ xs: "column-reverse", md: "row" }}>
            <Grid item xs={12} md={7}>
              <Box sx={swiperContainerStyle}>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={15}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3800 }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                  }}
                >
                  {[osakaGlico, osakaCastle, sensoji].map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <Box sx={galleryImageStyle}>
                        <img src={img} alt="Osaka" style={imageStyle} />
                      </Box>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "900" }}>
                FOOD & ENTERTAINMENT CAPITAL
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, color: "#002366", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
                Osaka
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                Known as "Japan’s kitchen," Osaka is famous for its lively atmosphere and street food 
                specialties like takoyaki and okonomiyaki. It is the heart of entertainment and family fun.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 1.5, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Main Attractions</Typography>
                <Grid container spacing={1}>
                  {["Osaka Castle", "Dotonbori", "Universal Studios Japan"].map((attr) => (
                    <Grid item key={attr}>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: "#002366", bgcolor: "#f1f5f9", px: 2, py: 0.5, borderRadius: 2 }}>
                        {attr}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, color: "rgba(0,0,0,0.4)", textTransform: "uppercase" }}>Best For</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1.5 }}>
                  {["Food Lovers", "Shopping", "Nightlife", "Family Entertainment"].map((label, i) => (
                    <Chip 
                      key={i} 
                      label={label} 
                      sx={{ 
                        bgcolor: "rgba(0,35,102,0.05)", 
                        color: "#002366", 
                        fontWeight: "800"
                      }} 
                    />
                  ))}
                </Stack>
              </Box>

              <Button 
                variant="outlined" 
                size="large"
                href="/contact"
                sx={{ 
                  borderColor: "#002366", color: "#002366", px: 4, py: 1.5, borderRadius: "12px", fontWeight: "800",
                  borderWidth: 2, "&:hover": { borderWidth: 2, borderColor: "#001a4d" }
                }}
              >
                Inquire for Osaka
              </Button>
            </Grid>
          </Grid>
        </Box>

      </Container>
      
      {/* 🌟 COVERAGE CALLOUT */}
      <Box sx={{ bgcolor: "#002366", py: 10, color: "#fff" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="h3" fontWeight="900" sx={{ mb: 3 }}>
            All Japan <span style={{ color: "#FFB7C5" }}>Coverage</span>
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 6, maxWidth: "700px", mx: "auto" }}>
            Beyond Tokyo and Osaka, we provide professional ground handling in Kyoto, Nara, Mt. Fuji, 
            Hakone, Hiroshima, Nagoya, Fukuoka, and more.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {["Kyoto", "Nara", "Mt. Fuji", "Hakone", "Hiroshima", "Nagoya", "Fukuoka"].map((city) => (
              <Grid item key={city}>
                <Typography variant="button" sx={{ px: 3, py: 1, border: "1px solid rgba(255,183,197,0.3)", borderRadius: "20px", display: "inline-block" }}>
                  {city}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

const swiperContainerStyle = {
  width: '100%',
  '.swiper-button-next, .swiper-button-prev': {
    color: '#002366',
    background: 'rgba(255, 255, 255, 0.8)',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    '&::after': { fontSize: '1rem', fontWeight: 'bold' },
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': { background: '#FFB7C5', color: '#002366' }
  },
  '.swiper-pagination-bullet-active': {
    background: '#FFB7C5',
    width: '20px',
    borderRadius: '10px'
  }
};

const galleryImageStyle = {
  borderRadius: "20px", 
  overflow: "hidden", 
  height: { xs: "250px", sm: "300px", md: "400px" },
  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
  border: "1px solid rgba(0,35,102,0.05)"
};

const imageStyle = {
  width: "100%", 
  height: "100%", 
  objectFit: "cover"
};

export default DestinationPage;
