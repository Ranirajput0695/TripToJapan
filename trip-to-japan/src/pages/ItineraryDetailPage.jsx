import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  Stack,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip
} from "@mui/material";
import {
  AccessTime as ClockIcon,
  LocationOn as LocationIcon,
  CheckCircle as CheckIcon,
  Cancel as CrossIcon,
  ArrowBack as BackIcon,
  PhotoLibrary as GalleryIcon
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { japanItinerary } from "../data/itineraryData";

// Assets for Hero
import goldenRouteImg from "../assets/golden-route.png";

const ItineraryDetailPage = () => {
  const itineraryData = japanItinerary;

  const inclusions = [
    "2 Nights in Tokyo, 2 in Kyoto, 2 in Hiroshima, 1 in Osaka",
    "Bullet Train (Ordinary Class Reserved Seat)",
    "Daily Breakfast except arrival date",
    "Private MPV Transfers throughout the trip",
    "English Speaking Professional Guide",
    "Entrance fees to all mentioned attractions",
    "Miyajima Ferry tickets",
    "Pocket Wi-Fi for use during the trip"
  ];

  const exclusions = [
    "International airfares & Visa Fee",
    "Travel insurance (compulsory)",
    "Personal expenses (Laundry, Telephone, etc.)",
    "Lunch and Dinner (unless specified)",
    "Tips for guides and drivers"
  ];

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh" }}>
      {/* 🚀 HERO SECTION */}
      <Box 
        sx={{ 
          height: { xs: "60vh", md: "70vh" },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          overflow: "hidden"
        }}
      >
        <Box 
          component="img"
          src={goldenRouteImg}
          sx={{ 
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.5)"
          }}
        />
        <Container sx={{ position: "relative", zIndex: 1, textAlign: "center", pt: 10 }}>
          <Typography variant="overline" sx={{ letterSpacing: 6, fontWeight: "900", color: "#FFB7C5", mb: 2, display: "block" }}>
            EXCLUSIVELY CURATED
          </Typography>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: "2.5rem", md: "5rem" }, 
            fontWeight: "950", 
            textTransform: "uppercase",
            fontFamily: '"Times New Roman", serif',
            mb: 2,
            textShadow: "0 10px 30px rgba(0,0,0,0.5)"
          }}>
            7 Nights / 8 Days <br />
            <span style={{ color: "#FFB7C5" }}>Japan Highlights Express</span>
          </Typography>
          <Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 4 }}>
            <Chip icon={<ClockIcon style={{ color: "#FFB7C5" }} />} label="8 Days" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: "700", border: "1px solid rgba(255,183,197,0.3)" }} />
            <Chip icon={<LocationIcon style={{ color: "#FFB7C5" }} />} label="Tokyo - Kyoto - Osaka" sx={{ bgcolor: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: "700", border: "1px solid rgba(255,183,197,0.3)" }} />
          </Stack>
        </Container>
      </Box>

      {/* 🏛 ITINERARY TIMELINE */}
      <Container maxWidth="lg" sx={{ py: 12 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h3" sx={{ fontWeight: "900", color: "#002366", mb: 2 }}>
            Your <span style={{ color: "#FFB7C5" }}>Journey</span> Day by Day
          </Typography>
          <Divider sx={{ width: "80px", mx: "auto", borderColor: "#FFB7C5", borderWidth: 2 }} />
        </Box>

        <Stack spacing={8}>
          {itineraryData.map((day, index) => (
            <Grid container spacing={6} key={day.day} alignItems="center" flexDirection={index % 2 === 0 ? "row" : "row-reverse"}>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", overflow: "hidden", borderRadius: 4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                  <Box 
                    component="img"
                    src={day.image}
                    sx={{ 
                      width: "100%", 
                      height: "400px", 
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                  />
                  <Box sx={{ position: "absolute", top: 20, left: 20, bgcolor: "#002366", color: "#fff", px: 2, py: 1, fontWeight: "900" }}>
                    DAY {day.day}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="overline" sx={{ color: "#FFB7C5", fontWeight: "900", letterSpacing: 2 }}>
                    {day.location}
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "800", color: "#002366", mb: 3, fontSize: "2.2rem" }}>
                    {day.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555", lineHeight: 2, fontSize: "1.1rem", textAlign: "justify", mb: 3 }}>
                    {day.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                    {day.highlights.map((highlight, hIndex) => (
                      <Chip 
                        key={hIndex} 
                        label={highlight} 
                        size="small" 
                        sx={{ bgcolor: "#fff0f5", color: "#002366", fontWeight: "700", border: "1px solid rgba(0,35,102,0.1)" }} 
                      />
                    ))}
                  </Stack>
                  <Button 
                    startIcon={<GalleryIcon />}
                    sx={{ mt: 3, color: "#FFB7C5", fontWeight: "800", "&:hover": { bgcolor: "transparent", color: "#002366" } }}
                  >
                    View Photos
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Container>

      {/* 📋 INCLUSIONS & EXCLUSIONS TABLE */}
      <Box sx={{ bgcolor: "#f8fafc", py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 5, borderRadius: 5, height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                <Typography variant="h4" sx={{ fontWeight: "900", color: "#002366", mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
                  <CheckIcon sx={{ color: "#4caf50", fontSize: 35 }} /> Inclusions
                </Typography>
                <Stack spacing={2}>
                  {inclusions.map((item, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <CheckIcon sx={{ color: "#FFB7C5", fontSize: 20, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ fontWeight: "600", color: "#444" }}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 5, borderRadius: 5, height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                <Typography variant="h4" sx={{ fontWeight: "900", color: "#002366", mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
                  <CrossIcon sx={{ color: "#f44336", fontSize: 35 }} /> Exclusions
                </Typography>
                <Stack spacing={2}>
                  {exclusions.map((item, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                      <CrossIcon sx={{ color: "#FFB7C5", fontSize: 20, mt: 0.5 }} />
                      <Typography variant="body1" sx={{ fontWeight: "600", color: "#444" }}>{item}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ mt: 10, textAlign: "center" }}>
            <Button 
              component={Link}
              to="/contact"
              variant="contained" 
              sx={{ 
                bgcolor: "#002366", 
                color: "#fff", 
                px: 8, 
                py: 2.5, 
                borderRadius: 2, 
                fontWeight: "900", 
                fontSize: "1.1rem",
                letterSpacing: 2,
                "&:hover": { bgcolor: "#FFB7C5", color: "#002366" }
              }}
            >
              ENQUIRE ABOUT THIS TRIP
            </Button>
            <Box sx={{ mt: 4 }}>
              <Button 
                component={Link}
                to="/packages"
                startIcon={<BackIcon />}
                sx={{ color: "#666", fontWeight: "700" }}
              >
                Back to All Packages
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ItineraryDetailPage;
