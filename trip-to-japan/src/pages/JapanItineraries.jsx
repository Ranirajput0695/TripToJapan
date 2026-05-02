import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Stack, 
  Divider,
  Button
} from "@mui/material";
import { 
  FlightLand as ArrivalIcon, 
  Map as SightseeingIcon, 
  DirectionsBus as TourIcon, 
  Train as TrainIcon, 
  FlightTakeoff as DepartureIcon,
  Timeline as TimelineIcon
} from "@mui/icons-material";
import goldenRouteImg from "../assets/golden-route.png";

const itineraries = [
  {
    title: "Japan Golden Route",
    duration: "6 Days",
    route: "Tokyo – Mount Fuji – Kyoto – Osaka",
    image: goldenRouteImg,
    steps: [
      { day: "Day 1", title: "Arrival in Tokyo", desc: "Arrival in Tokyo and airport transfer to hotel." },
      { day: "Day 2", title: "Tokyo Sightseeing", desc: "Tokyo city sightseeing tour." },
      { day: "Day 3", title: "Mt. Fuji & Hakone", desc: "Mount Fuji and Hakone sightseeing." },
      { day: "Day 4", title: "Kyoto via Shinkansen", desc: "Bullet train journey to Kyoto." },
      { day: "Day 5", title: "Kyoto & Nara", desc: "Kyoto and Nara sightseeing." },
      { day: "Day 6", title: "Departure", desc: "Transfer to Osaka airport for departure." }
    ]
  },
  {
    title: "Classic Japan Tour",
    duration: "7 Days",
    route: "Tokyo – Fuji – Kyoto – Osaka",
    image: null, // Will use a placeholder or generic
    steps: [
      { day: "Day 1", title: "Arrival in Tokyo", desc: "Airport transfer and hotel check-in." },
      { day: "Day 2", title: "Tokyo Full Day", desc: "Major sightseeing in Tokyo city." },
      { day: "Day 3", title: "Fuji-Hakone", desc: "Full day Mount Fuji and Hakone tour." },
      { day: "Day 4", title: "To Kyoto", desc: "Travel to Kyoto via Bullet Train." },
      { day: "Day 5", title: "Kyoto Temples", desc: "Exploration of Kyoto's famous temples." },
      { day: "Day 6", title: "Osaka Highlights", desc: "Sightseeing in Osaka city." },
      { day: "Day 7", title: "Departure", desc: "Transfer to airport for return flight." }
    ]
  },
  {
    title: "Japan Family Tour",
    duration: "8 Days",
    route: "Tokyo – Kyoto – Osaka",
    image: null,
    steps: [
      { day: "Day 1", title: "Arrival in Tokyo", desc: "Meet & greet and private hotel transfer." },
      { day: "Day 2", title: "Tokyo Disneyland", desc: "A magical day at the Kingdom of Dreams." },
      { day: "Day 3", title: "Tokyo Family Fun", desc: "Visit teamLab Planets and Skytree." },
      { day: "Day 4", title: "Bullet Train to Kyoto", desc: "Exciting Shinkansen journey for the kids." },
      { day: "Day 5", title: "Kyoto Culture", desc: "Visit Fushimi Inari and Nara Deer Park." },
      { day: "Day 6", title: "To Osaka", desc: "Short transfer to the food capital of Japan." },
      { day: "Day 7", title: "Universal Studios", desc: "Full day at Universal Studios Japan." },
      { day: "Day 8", title: "Departure", desc: "Final transfers for your flight home." }
    ]
  }
];

const JapanItineraries = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1e293b" }}>
      
      {/* 🚀 PAGE HEADER */}
      <Box 
        sx={{ 
          height: { xs: "40vh", md: "50vh" },
          backgroundImage: `linear-gradient(rgba(0,35,102,0.6), rgba(0,35,102,0.8)), url(${goldenRouteImg})`,
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
          Japan Tour <span style={{ color: "#FFB7C5" }}>Itineraries</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.9, fontWeight: "500", mb: 1 }}>
          Sample Japan Tour Itineraries
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.8 }}>
          Below are some of our popular sample tour programs.
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
        
        {itineraries.map((itinerary, i) => (
          <Box key={i} sx={{ mb: i === itineraries.length - 1 ? 8 : 15 }}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={4} alignItems="center" sx={{ mb: 6 }}>
              <TimelineIcon sx={{ fontSize: 40, color: "#FFB7C5" }} />
              <Box>
                <Typography variant="h3" fontWeight="900" color="#002366">
                  {itinerary.title} <span style={{ color: "#FFB7C5" }}>— {itinerary.duration}</span>
                </Typography>
                <Typography variant="h6" color="rgba(0,35,102,0.6)" fontWeight="700">
                  Route: {itinerary.route}
                </Typography>
              </Box>
            </Stack>

            <Grid container spacing={3}>
              {itinerary.steps.map((step, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 3, 
                      height: "100%", 
                      borderRadius: "20px", 
                      bgcolor: "#f8fafc",
                      border: "1px solid rgba(0,35,102,0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        borderColor: "#FFB7C5"
                      }
                    }}
                  >
                    <Typography variant="overline" sx={{ fontWeight: 800, color: "#FFB7C5", letterSpacing: 2, display: "block", mb: 1 }}>
                      {step.day}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#002366", mb: 1, fontSize: "1.1rem" }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
                      {step.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            {i < itineraries.length - 1 && <Divider sx={{ mt: 10, opacity: 0.1 }} />}
          </Box>
        ))}

        {/* 📞 CTA SECTION */}
        <Box 
          sx={{ 
            p: { xs: 4, md: 8 }, 
            bgcolor: "#FFB7C5", 
            borderRadius: "40px", 
            textAlign: "center",
            boxShadow: "0 20px 40px rgba(255, 183, 197, 0.3)"
          }}
        >
          <Typography variant="h3" fontWeight="900" color="#002366" sx={{ mb: 2 }}>
            Love this itinerary?
          </Typography>
          <Typography variant="h6" sx={{ color: "#002366", opacity: 0.8, mb: 4, maxWidth: "700px", mx: "auto" }}>
            Get a personalized quote or customize this route to match your preferences perfectly.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              size="large" 
              href="/contact"
              sx={{ 
                bgcolor: "#002366", 
                color: "#fff", 
                px: 6, 
                py: 2, 
                fontWeight: "800", 
                borderRadius: 3,
                "&:hover": { bgcolor: "#001a4d" }
              }}
            >
              GET A QUOTE
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              href="/contact"
              sx={{ 
                borderColor: "#002366", 
                color: "#002366", 
                px: 6, 
                py: 2, 
                fontWeight: "800", 
                borderRadius: 3,
                borderWidth: 2,
                "&:hover": { borderWidth: 2, borderColor: "#001a4d" }
              }}
            >
              CUSTOMIZE THIS TOUR
            </Button>
          </Stack>
        </Box>

      </Container>
    </Box>
  );
};

export default JapanItineraries;
