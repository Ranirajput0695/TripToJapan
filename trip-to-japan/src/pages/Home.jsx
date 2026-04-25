import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  Stack, 
  Paper, 
  Avatar, 
  Divider 
} from "@mui/material";
import { 
  ArrowForward as ArrowIcon, 
  CheckCircle as CheckIcon, 
  FlightTakeoff as FlightIcon, 
  Map as MapIcon, 
  Group as GroupIcon, 
  Star as StarIcon,
  SupportAgent as SupportIcon,
  LocalOffer as PriceIcon
} from "@mui/icons-material";
import heroImg from "../assets/about-hero.png";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1e293b" }}>
      
      {/* 🚀 HERO SECTION */}
      <Box 
        sx={{ 
          height: "90vh", 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          px: 2
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFD700", fontWeight: "800", mb: 2 }}>
          POWERED BY HTC GROUP
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "3rem", md: "5rem" }, mb: 2 }}>
          Your Trusted <span style={{ color: "#FFD700" }}>Japan</span> Travel Partner
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: "800px", mb: 5, opacity: 0.9, lineHeight: 1.6 }}>
          Professional ground travel arrangements, luxury transportation, and curated sightseeing experiences across the Land of the Rising Sun.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
          <Button 
            variant="contained" 
            size="large" 
            href="/services"
            sx={{ 
              bgcolor: "#FFD700", 
              color: "#000", 
              px: 6, 
              py: 2, 
              fontWeight: "800", 
              borderRadius: 2,
              "&:hover": { bgcolor: "#e6c200" }
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
              "&:hover": { borderColor: "#FFD700", color: "#FFD700" }
            }}
          >
            CONTACT US
          </Button>
        </Stack>
      </Box>

      {/* 🏛 WELCOME SECTION */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" fontWeight="800" gutterBottom>
              Welcome to <span style={{ color: "#FFD700" }}>TripToJapan.in</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", fontSize: "1.2rem", lineHeight: 1.8, mb: 4 }}>
              TripToJapan.in is a Japan-based travel service platform powered by **HTC Group of Companies**, 
              providing professional ground travel arrangements across Japan. We specialize in delivering 
              reliable transportation, guided sightseeing, and customized FIT tours.
            </Typography>
            <Stack spacing={2}>
              {[
                "Dedicated operations team based in Japan",
                "Smooth travel experiences for travel agents & families",
                "Professional and timely services",
                "Experienced local ground team"
              ].map((item, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CheckIcon sx={{ color: "#FFD700" }} />
                  <Typography variant="body1" fontWeight="600">{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, bgcolor: "#f8fafc", borderRadius: 6, border: "1px solid #e2e8f0" }}>
              <Typography variant="h4" fontWeight="800" sx={{ mb: 4 }}>
                Key Services
              </Typography>
              <Grid container spacing={3}>
                {[
                  { icon: <FlightIcon />, label: "Airport Transfers" },
                  { icon: <MapIcon />, label: "Sightseeing Tours" },
                  { icon: <StarIcon />, label: "FIT Tour Arrangements" },
                  { icon: <GroupIcon />, label: "Group Tour Management" },
                  { icon: <PriceIcon />, label: "Attraction Tickets" },
                  { icon: <ArrowIcon />, label: "Intercity Transfers" }
                ].map((s, i) => (
                  <Grid item xs={6} key={i}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <Box sx={{ color: "#FFD700" }}>{s.icon}</Box>
                      <Typography variant="subtitle2" fontWeight="700">{s.label}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Button 
                fullWidth 
                variant="contained" 
                sx={{ mt: 5, bgcolor: "#1e293b", py: 1.5, borderRadius: 2 }}
                href="/services"

              >
                VIEW ALL SERVICES
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 🗺 POPULAR DESTINATIONS */}
      <Box sx={{ bgcolor: "#f8fafc", py: 15 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight="800" gutterBottom>
            Popular Japan Destinations
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 8 }}>
            We cover all major destinations with professional ground handling.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {["Tokyo", "Osaka", "Kyoto", "Nara", "Mount Fuji", "Hakone", "Hiroshima", "Nagoya", "Fukuoka"].map((dest) => (
              <Grid item key={dest}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    px: 4, py: 2, borderRadius: 50, border: "1px solid #e2e8f0", 
                    fontWeight: "700", transition: "0.3s",
                    "&:hover": { bgcolor: "#FFD700", borderColor: "#FFD700", transform: "scale(1.1)" }
                  }}
                >
                  {dest}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 🏆 WHY CHOOSE US */}
      <Container maxWidth="lg" sx={{ py: 15 }}>
        <Typography variant="h3" textAlign="center" fontWeight="800" gutterBottom>
          Why Choose <span style={{ color: "#FFD700" }}>TripToJapan.in</span>
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 10 }}>
          The TripToJapan advantage for premium travel.
        </Typography>
        <Grid container spacing={4}>
          {[
            { icon: <MapIcon />, title: "Japan-Based Local Company", desc: "Operating directly from our office in Tochigi-Ken." },
            { icon: <GroupIcon />, title: "Experienced Ground Team", desc: "Professional local staff for seamless coordination." },
            { icon: <ArrowIcon />, title: "Reliable Transportation", desc: "Safe and punctual private vehicles across Japan." },
            { icon: <PriceIcon />, title: "Competitive Pricing", desc: "Transparent rates for premium travel arrangements." },
            { icon: <SupportIcon />, title: "English Support", desc: "24/7 dedicated support for global travelers." },
            { icon: <CheckIcon />, title: "Custom Planning", desc: "Tailored itineraries that fit your unique needs." }
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card elevation={0} sx={{ height: "100%", p: 2, textAlign: "center", "&:hover": { bgcolor: "#fffcf0" } }}>
                <Box sx={{ color: "#FFD700", mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="800" gutterBottom>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 📞 CTA SECTION */}
      <Box sx={{ bgcolor: "#FFD700", py: 10, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="900" gutterBottom>
            Ready to Plan Your Japan Trip?
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 4 }}>
            Talk to our local experts and get a customized travel plan today.
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            href="/contact"
            sx={{ bgcolor: "#000", color: "#fff", px: 8, py: 2, fontWeight: "800", borderRadius: 3 }}
          >
            GET A QUOTE NOW
          </Button>
        </Container>
      </Box>

    </Box>
  );
};

export default Home;