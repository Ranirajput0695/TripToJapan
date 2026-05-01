import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Stack, 
  Paper,
  Button
} from "@mui/material";
import { 
  DirectionsCar as SedanIcon, 
  AirportShuttle as VanIcon, 
  DirectionsBus as BusIcon,
  Verified as VerifiedIcon,
  Person as DriverIcon,
  History as HistoryIcon,
  SupportAgent as SupportIcon,
  FlightTakeoff as FlightIcon,
  Map as MapIcon,
  Group as GroupIcon
} from "@mui/icons-material";

// Images removed

const vehicles = [
  {
    type: "Toyota Alphard / Vellfire",
    capacity: "5-6 Passengers",
    category: "Luxury MPV",
    features: ["Leather Seats", "Dual AC", "Spacious Legroom", "Free Wi-Fi"],
    icon: <SedanIcon />,
    tag: "MOST POPULAR"
  },
  {
    type: "Toyota Hiace (Grand Cabin)",
    capacity: "9-13 Passengers",
    category: "Small Van",
    features: ["High Roof", "Large Luggage Space", "Premium Audio", "English Speaking Driver"],
    icon: <VanIcon />,
    tag: "BEST FOR FAMILIES"
  },
  {
    type: "Micro Bus / Large Bus",
    capacity: "18-45 Passengers",
    category: "Coach",
    features: ["Group Travel Specialist", "Professional Captain", "Under-seat Storage", "PA System"],
    icon: <BusIcon />,
    tag: "GROUP TRAVEL"
  }
];

const TransportPage = () => {
  return (
    <Box sx={{ pt: { xs: 16, md: 22 }, pb: 10, bgcolor: "#fff0f5" }}>
      
      {/* 🚀 PAGE HEADER */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography variant="overline" sx={{ letterSpacing: 4, color: "#002366", fontWeight: "800" }}>
          PREMIUM FLEET
        </Typography>
        <Typography variant="h2" fontWeight="900" sx={{ mt: 1, mb: 3 }}>
          Transportation <span style={{ color: "#FFB7C5" }}>Services</span>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "700px", mx: "auto", fontSize: "1.1rem" }}>
          Luxury, comfort, and reliability across all major cities in Japan with our professional fleet.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        {/* 🚗 VEHICLE GRID */}
        <Grid container spacing={4} sx={{ mb: 15 }}>
          {vehicles.map((v, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card sx={{ height: "100%", borderRadius: 6, boxShadow: "0 10px 30px rgba(0,0,0,0.05)", overflow: "hidden" }}>
                <Box sx={{ height: "200px", bgcolor: "#002366", color: "#FFB7C5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   {React.cloneElement(v.icon, { sx: { fontSize: 80 } })}
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="#FFB7C5" fontWeight="800">{v.category}</Typography>
                    {v.tag && <Chip label={v.tag} size="small" sx={{ bgcolor: "#FFB7C5", color: "#002366", fontWeight: "700" }} />}
                  </Stack>
                  <Typography variant="h5" fontWeight="800" gutterBottom>{v.type}</Typography>
                  <Typography variant="body1" fontWeight="700" color="text.secondary" sx={{ mb: 3 }}>{v.capacity}</Typography>
                  
                  <Stack spacing={1.5}>
                    {v.features.map((f, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <VerifiedIcon sx={{ color: "#FFB7C5", fontSize: 18 }} />
                        <Typography variant="body2" fontWeight="600">{f}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Button 
                    fullWidth 
                    variant="contained" 
                    href="/contact"
                    sx={{ mt: 4, py: 1.5, borderRadius: 2, bgcolor: "#002366", color: "#fff", fontWeight: "800", "&:hover": { bgcolor: "#1a237e" } }}
                  >
                    BOOK THIS VEHICLE
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 🏆 SERVICE TYPES */}
        <Grid container spacing={4}>
          {[
            { title: "Airport Transfers", icon: <FlightIcon />, desc: "Punctual meet & greet services at Narita, Haneda, Kansai, and more." },
            { title: "Sightseeing", icon: <MapIcon />, desc: "Full-day private tours with expert drivers in Tokyo, Kyoto, and Osaka." },
            { title: "Group Charters", icon: <GroupIcon />, desc: "Complete logistics for corporate events, weddings, and school trips." }
          ].map((s, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Paper sx={{ p: 4, textAlign: "center", height: "100%", borderRadius: 5, border: "1px solid #e2e8f0" }}>
                <Box sx={{ color: "#FFB7C5", mb: 2 }}>{s.icon}</Box>
                <Typography variant="h5" fontWeight="800" gutterBottom>{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 🛡️ WHY BOOK WITH US */}
        <Box sx={{ mt: 15, p: { xs: 4, md: 8 }, bgcolor: "#002366", borderRadius: 8, color: "#fff" }}>
           <Grid container spacing={4} alignItems="center">
             <Grid item xs={12} md={6}>
               <Typography variant="h3" fontWeight="900" gutterBottom>
                 Reliable <span style={{ color: "#FFB7C5" }}>Ground Handling</span>
               </Typography>
               <Typography variant="body1" sx={{ opacity: 0.8, fontSize: "1.1rem", mb: 4 }}>
                 As a Japan-based company, we manage our fleet directly. No middlemen, no confusion—just high-quality service you can trust.
               </Typography>
               <Stack spacing={3}>
                 {[
                   { icon: <DriverIcon />, text: "Professional & Courteous Drivers" },
                   { icon: <HistoryIcon />, text: "Real-time Tracking & Monitoring" },
                   { icon: <SupportIcon />, text: "24/7 Dedicated Support Hotline" }
                 ].map((item, i) => (
                   <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                     <Box sx={{ color: "#FFB7C5" }}>{item.icon}</Box>
                     <Typography variant="subtitle1" fontWeight="700">{item.text}</Typography>
                   </Box>
                 ))}
               </Stack>
             </Grid>
             <Grid item xs={12} md={6}>
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 5, borderRadius: 6, bgcolor: "rgba(255,255,255,0.05)", 
                    border: "1px solid rgba(255,255,255,0.1)", textAlign: "center"
                  }}
                >
                  <Typography variant="h4" fontWeight="800" sx={{ mb: 2 }}>Ready to Book?</Typography>
                  <Typography variant="body1" sx={{ mb: 4, opacity: 0.7 }}>Get a customized transport quote for your group within 24 hours.</Typography>
                  <Button variant="contained" size="large" href="/contact" sx={{ bgcolor: "#FFB7C5", color: "#002366", px: 6, py: 2, borderRadius: 3, fontWeight: "900" }}>
                    GET QUOTE NOW
                  </Button>
                </Paper>
             </Grid>
           </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default TransportPage;
