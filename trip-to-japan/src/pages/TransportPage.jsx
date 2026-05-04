import React from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Chip, Stack, Paper, Button, keyframes
} from "@mui/material";
import {
  DirectionsCar as SedanIcon,
  AirportShuttle as VanIcon,
  DirectionsBus as BusIcon,
  Verified as VerifiedIcon,
  FlightTakeoff as FlightIcon,
  LocationCity as HotelIcon,
  SwapHoriz as IntercityIcon,
  Schedule as ClockIcon,
  EventNote as CalendarIcon
} from "@mui/icons-material";

// 🛸 ANTIGRAVITY ANIMATION
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const vehicles = [
  {
    type: "Sedan",
    capacity: "1–3 Passengers[cite: 1]",
    category: "Standard/Business[cite: 1]",
    features: ["Couples or Solo Travelers", "Air-conditioned", "Space for 2-3 Luggage[cite: 1]"],
    icon: <SedanIcon />,
    tag: "BEST FOR COUPLES"
  },
  {
    type: "Toyota Alphard",
    capacity: "5-6 Passengers[cite: 1]",
    category: "Luxury MPV[cite: 1]",
    features: ["VIP Transfers", "Luxury Leather Seating", "Premium Quiet Ride[cite: 1]"],
    icon: <SedanIcon />,
    tag: "LUXURY CHOICE"
  },
  {
    type: "Toyota Hiace",
    capacity: "7–9 Passengers[cite: 1]",
    category: "Group Van[cite: 1]",
    features: ["Most Popular for Groups", "Large Luggage Capacity", "Ideal for City Tours[cite: 1]"],
    icon: <VanIcon />,
    tag: "MOST POPULAR"
  },
  {
    type: "Coach Bus",
    capacity: "20–45 Passengers[cite: 1]",
    category: "Large Coach[cite: 1]",
    features: ["Professional Captain", "Under-seat Storage", "Ideal for Large Group Tours[cite: 1]"],
    icon: <BusIcon />,
    tag: "LARGE GROUPS"
  }
];

const TransportPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", overflow: "hidden" }}>
      {/* 🎭 HERO SECTION */}
      <Box sx={{
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        bgcolor: "#001333",
        color: "white",
        px: 3
      }}>
        <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>
          JAPAN <span style={{ color: "#E91E63" }}>TRANSPORT</span> SERVICES
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.8 }}>
          Comfortable, reliable, and stress-free private transportation tailored to your needs across all major Japanese cities[cite: 1].
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
        {/* 🚗 VEHICLE GRID WITH ANTIGRAVITY */}
        <Grid container spacing={4} justifyContent="center">
          {vehicles.map((v, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Card sx={{
                borderRadius: 6,
                height: "100%",
                animation: `${float} ${3 + i}s ease-in-out infinite`, // Staggered floating effect
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { animationPlayState: "paused", transform: "scale(1.05)" }
              }}>
                <Box sx={{ bgcolor: "#E91E63", p: 3, textAlign: "center", color: "white" }}>
                  {React.cloneElement(v.icon, { sx: { fontSize: 50 } })}
                </Box>
                <CardContent>
                  <Chip label={v.tag} size="small" sx={{ mb: 1, fontWeight: 900, bgcolor: "rgba(233, 30, 99, 0.1)", color: "#E91E63" }} />
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>{v.type}</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>{v.capacity}</Typography>
                  <Stack spacing={1}>
                    {v.features.map((f, idx) => (
                      <Typography key={idx} variant="caption" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <VerifiedIcon sx={{ fontSize: 14, color: "#E91E63" }} /> {f}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 🛠️ SERVICES SECTION */}
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 900, mt: 15, mb: 8 }}>
          Our Core <span style={{ color: "#E91E63" }}>Solutions</span>
        </Typography>

        <Grid container spacing={3}>
          {[
            { title: "Airport Transfers", icon: <FlightIcon />, desc: "Punctual meet & greet at Narita, Haneda, Kansai, and more[cite: 1]." },
            { title: "Hotel Transfers", icon: <HotelIcon />, desc: "Smooth transitions between hotels and stations[cite: 1]." },
            { title: "Intercity Travel", icon: <IntercityIcon />, desc: "Direct private travel between Tokyo, Kyoto, Osaka, and Fuji[cite: 1]." },
            { title: "Full-Day Hire", icon: <ClockIcon />, desc: "8-12 hour flexible sightseeing with customized routes[cite: 1]." },
            { title: "Multi-Day Tours", icon: <CalendarIcon />, desc: "Dedicated vehicle and driver for your entire Japan journey[cite: 1]." }
          ].map((service, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper elevation={0} sx={{ p: 4, border: "1px solid #eee", borderRadius: 4, textAlign: "center", height: "100%" }}>
                <Box sx={{ color: "#E91E63", mb: 2 }}>{React.cloneElement(service.icon, { sx: { fontSize: 40 } })}</Box>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">{service.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TransportPage;