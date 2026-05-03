import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
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
    <Box sx={{ bgcolor: "#fff" }}>
      
      {/* 🎭 CINEMATIC HERO BANNER */}
      <Box 
        sx={{ 
          height: { xs: "55vh", md: "70vh" }, 
          position: "relative", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Parallax */}
        <Box 
          sx={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            backgroundImage: `url('/luxury_japan_transport_banner_1777797505210.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: { xs: "scroll", md: "fixed" },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(0,19,51,0.85) 0%, rgba(0,19,51,0.4) 60%, rgba(255,255,255,1) 100%)"
            }
          }} 
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff", mt: { xs: 5, md: 8 } }}>
          <Typography 
            variant="overline" 
            sx={{ 
              letterSpacing: 8, 
              color: "#E91E63", 
              fontWeight: "900",
              fontSize: { xs: "0.8rem", md: "1.1rem" },
              textShadow: "0 2px 10px rgba(0,0,0,0.3)"
            }}
          >
            PREMIUM FLEET
          </Typography>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 900, 
              fontSize: { xs: "2.5rem", md: "4.8rem" },
              textTransform: "uppercase",
              mt: 1,
              mb: 2,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              lineHeight: 1.1
            }}
          >
            TRANSPORTATION <span style={{ color: "#E91E63" }}>SERVICES</span>
          </Typography>
          <Box sx={{ width: "100px", height: "6px", bgcolor: "#E91E63", mx: "auto", mb: 4, borderRadius: "10px" }} />
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: "850px", 
              mx: "auto", 
              fontWeight: 500, 
              opacity: 0.95,
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "1.3rem" },
              textShadow: "0 2px 5px rgba(0,0,0,0.3)"
            }}
          >
            Experience the pinnacle of Japanese hospitality with our luxury fleet. 
            Reliable, professional, and tailored ground handling across all major cities.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 5, pb: 15 }}>
        {/* 🚗 VEHICLE GRID */}
        <Grid container spacing={4} sx={{ mb: 12, alignItems: "stretch", width: "100%", ml: 0 }}>
          {vehicles.map((v, i) => (
            <Grid 
              item 
              xs={12} 
              sm={4} 
              key={i} 
              sx={{ 
                display: "flex", 
                flex: "1 1 0px", 
                maxWidth: { sm: "33.33%" },
                width: "100%"
              }}
            >
              <Card 
                sx={{ 
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  borderRadius: 8, 
                  boxShadow: "0 15px 35px rgba(0,0,0,0.05)", 
                  overflow: "hidden",
                  border: "1px solid rgba(0,19,51,0.05)",
                  transition: "all 0.4s ease",
                  "&:hover": { transform: "translateY(-10px)", boxShadow: "0 25px 50px rgba(233, 30, 99, 0.12)" }
                }}
              >
                {/* Normalized Header */}
                <Box 
                  sx={{ 
                    height: "170px", 
                    bgcolor: "#001333", 
                    color: "#E91E63", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    flexShrink: 0 
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100px", height: "100px" }}>
                    {React.cloneElement(v.icon, { sx: { fontSize: i === 2 ? 70 : 80, filter: "drop-shadow(0 8px 15px rgba(0,0,0,0.3))" } })}
                  </Box>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5, height: "24px" }}>
                      <Typography variant="caption" sx={{ color: "#E91E63", fontWeight: "900", letterSpacing: 1.2, display: "flex", alignItems: "center" }}>
                        {v.category}
                      </Typography>
                      {v.tag && <Chip label={v.tag} size="small" sx={{ bgcolor: "rgba(233, 30, 99, 0.08)", color: "#E91E63", fontWeight: "800", fontSize: "0.65rem", height: "20px" }} />}
                    </Stack>
                    
                    <Typography variant="h6" sx={{ fontWeight: "900", color: "#001333", mb: 0.5, fontSize: "1.2rem", height: "1.5em", display: "flex", alignItems: "center" }}>
                      {v.type}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ fontWeight: "700", color: "rgba(0,19,51,0.5)", mb: 2.5, height: "20px", display: "flex", alignItems: "center" }}>
                      {v.capacity}
                    </Typography>
                    
                    <Stack spacing={1.2} sx={{ mb: 3 }}>
                      {v.features.map((f, idx) => (
                        <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 0.5 }}>
                          <VerifiedIcon sx={{ color: "#E91E63", fontSize: 16, flexShrink: 0 }} />
                          <Typography variant="caption" sx={{ fontWeight: "600", color: "#001333", opacity: 0.85, fontSize: "0.8rem", lineHeight: 1.2 }}>
                            {f}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  <Button 
                    fullWidth 
                    variant="contained" 
                    href="/contact"
                    sx={{ 
                      mt: "auto",
                      py: 1.5, 
                      borderRadius: 3, 
                      bgcolor: "#001333", 
                      color: "#fff", 
                      fontWeight: "900", 
                      fontSize: "0.9rem",
                      "&:hover": { bgcolor: "#E91E63" },
                      transition: "all 0.3s ease"
                    }}
                  >
                    BOOK NOW
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 🏆 SERVICE TYPES */}
        <Grid container spacing={4} sx={{ mb: 15, alignItems: "stretch", width: "100%", ml: 0 }}>
          {[
            { title: "Airport Transfers", icon: <FlightIcon sx={{ fontSize: 40 }} />, desc: "Punctual meet & greet services at Narita, Haneda, Kansai, and more." },
            { title: "Sightseeing Tours", icon: <MapIcon sx={{ fontSize: 40 }} />, desc: "Full-day private tours with expert drivers in Tokyo, Kyoto, and Osaka." },
            { title: "Group Charters", icon: <GroupIcon sx={{ fontSize: 40 }} />, desc: "Complete logistics for corporate events, weddings, and school trips." }
          ].map((s, i) => (
            <Grid 
              item 
              xs={12} 
              sm={4} 
              key={i} 
              sx={{ 
                display: "flex", 
                flex: "1 1 0px", 
                maxWidth: { sm: "33.33%" },
                width: "100%"
              }}
            >
              <Paper 
                sx={{ 
                  p: { xs: 4, md: 5 }, 
                  textAlign: "center", 
                  width: "100%",
                  height: "100%", 
                  borderRadius: 8, 
                  bgcolor: "#fff",
                  border: "1px solid rgba(0,19,51,0.06)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "4px",
                    bgcolor: "#E91E63",
                    transition: "width 0.3s ease"
                  },
                  "&:hover": { 
                    transform: "translateY(-8px)", 
                    boxShadow: "0 20px 40px rgba(233, 30, 99, 0.08)",
                    borderColor: "rgba(233, 30, 99, 0.2)",
                    "&::before": { width: "100%" }
                  }
                }}
              >
                <Box sx={{ color: "#E91E63", mb: 2, bgcolor: "rgba(233, 30, 99, 0.05)", p: 2, borderRadius: "50%" }}>{s.icon}</Box>
                <Typography variant="h5" sx={{ fontWeight: "900", color: "#001333", mb: 2, fontSize: "1.3rem" }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: "rgba(0,19,51,0.6)", lineHeight: 1.6, fontWeight: 500 }}>{s.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 🛡️ WHY BOOK WITH US (Centered & Clean) */}
        <Box sx={{ mt: 15, pb: 10, textAlign: "center" }}>
           <Typography variant="h3" sx={{ fontWeight: "900", color: "#001333", mb: 3, fontSize: { xs: "2.2rem", md: "3.5rem" }, lineHeight: 1.1 }}>
             Reliable <span style={{ color: "#E91E63" }}>Ground Handling</span>
           </Typography>
           <Typography variant="body1" sx={{ color: "rgba(0,19,51,0.6)", fontSize: "1.2rem", mb: 10, lineHeight: 1.8, maxWidth: "800px", mx: "auto" }}>
             As a Japan-based company, we manage our fleet directly. No middlemen, no confusion—just high-quality service you can trust.
           </Typography>
           
           <Grid container spacing={4} sx={{ mb: 10, justifyContent: "center" }}>
             {[
               { icon: <DriverIcon />, title: "Professional Drivers", desc: "Licensed and courteous English-speaking chauffeurs." },
               { icon: <HistoryIcon />, title: "Real-time Monitoring", desc: "Every vehicle is tracked for safety and punctuality." },
               { icon: <SupportIcon />, title: "24/7 Support", desc: "Dedicated hotline for immediate assistance during travel." }
             ].map((item, i) => (
               <Grid 
                 item 
                 xs={12} 
                 sm={4} 
                 key={i}
                 sx={{ 
                   display: "flex", 
                   flexDirection: "column", 
                   alignItems: "center",
                   flex: "1 1 0px",
                   maxWidth: { sm: "33.33%" }
                 }}
               >
                 <Box sx={{ p: 2, textAlign: "center" }}>
                   <Box sx={{ color: "#E91E63", display: "inline-flex", bgcolor: "rgba(233, 30, 99, 0.05)", p: 2.5, borderRadius: "50%", mb: 3 }}>
                      {React.cloneElement(item.icon, { sx: { fontSize: 35 } })}
                   </Box>
                   <Typography variant="h6" sx={{ fontWeight: "900", color: "#001333", mb: 1.5 }}>{item.title}</Typography>
                   <Typography variant="body2" sx={{ color: "rgba(0,19,51,0.5)", fontWeight: 500, lineHeight: 1.6 }}>{item.desc}</Typography>
                 </Box>
               </Grid>
             ))}
           </Grid>

           <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 6, md: 8 }, 
                borderRadius: 12, 
                bgcolor: "#001333", 
                color: "#fff",
                textAlign: "center",
                maxWidth: "900px",
                mx: "auto",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 30px 60px rgba(0,19,51,0.2)"
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "900", mb: 2 }}>Ready to Book?</Typography>
              <Typography variant="body1" sx={{ mb: 5, color: "rgba(255,255,255,0.7)", fontWeight: 500, fontSize: "1.1rem" }}>Get a customized transport quote for your group within 24 hours.</Typography>
              <Button 
                variant="contained" 
                size="large" 
                href="/contact" 
                sx={{ 
                  bgcolor: "#E91E63", 
                  color: "#fff", 
                  px: 10, 
                  py: 2.5, 
                  borderRadius: 4, 
                  fontWeight: "900",
                  fontSize: "1.2rem",
                  boxShadow: "0 15px 35px rgba(233, 30, 99, 0.4)",
                  "&:hover": { bgcolor: "#c2185b", transform: "translateY(-5px)" },
                  transition: "all 0.3s ease"
                }}
              >
                GET QUOTE NOW
              </Button>
            </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default TransportPage;
