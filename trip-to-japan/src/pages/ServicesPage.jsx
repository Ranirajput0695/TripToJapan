import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Stack, 
  Paper,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { 
  FlightTakeoff as AirportIcon, 
  DirectionsCar as PrivateTourIcon, 
  Person as FitIcon, 
  Groups as GroupIcon, 
  LocalActivity as TicketIcon, 
  Map as IntercityIcon, 
  AutoFixHigh as CustomIcon,
  CheckCircle as CheckIcon,
  SupportAgent as SupportIcon,
  Verified as VerifiedIcon
} from "@mui/icons-material";
import servicesHero from "../assets/services-hero.png";

const servicesList = [
  {
    title: "Airport Transfers Across Japan",
    icon: <AirportIcon sx={{ fontSize: 40 }} />,
    description: "Comfortable and reliable transfer services from all major airports in Japan. We ensure a seamless transition from the terminal to your destination with professional meet-and-greet support.",
    features: ["Narita, Haneda, Kansai, Nagoya & Fukuoka", "Arrival & Departure Transfers", "Private & Group Transfers", "24/7 Professional Chauffeurs"]
  },
  {
    title: "Private Sightseeing Tours",
    icon: <PrivateTourIcon sx={{ fontSize: 40 }} />,
    description: "Explore Japan’s most popular attractions with our well-planned sightseeing services, featuring professional drivers and carefully planned routes.",
    features: ["Tokyo, Kyoto, Osaka & Nara", "Mount Fuji & Hakone", "Hiroshima & Major Landmarks", "Professional Local Drivers"]
  },
  {
    title: "FIT Tour Arrangements",
    icon: <FitIcon sx={{ fontSize: 40 }} />,
    description: "Specialized FIT (Free Independent Traveler) tour arrangements tailored to individual preferences. We provide end-to-end support for independent travelers seeking a personalized experience.",
    features: ["Hotel & Accommodation Bookings", "Private Ground Transfers", "Sightseeing & Activity Tickets", "Professional Tour Planning"]
  },
  {
    title: "Group Tour Management",
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    description: "Complete travel arrangements for group tours of all sizes, including transportation, sightseeing, and full travel coordination across Japan.",
    features: ["Student & Corporate Groups", "Leisure & Family Groups", "Full Coordination Support", "Custom Group Logistics"]
  },
  {
    title: "Activity & Attraction Tickets",
    icon: <TicketIcon sx={{ fontSize: 40 }} />,
    description: "Ticket arrangements for popular attractions and activities across Japan. Skip the queues and secure your entry to the most sought-after experiences.",
    features: ["Tokyo Disneyland & USJ", "TeamLab Planets Tokyo", "Mount Fuji Sightseeing Tours", "Cultural & Theme Park Tickets"]
  },
  {
    title: "Intercity Transfers",
    icon: <IntercityIcon sx={{ fontSize: 40 }} />,
    description: "Safe and punctual long-distance transfers between major Japanese cities. A comfortable alternative to public transport, especially for families and groups with luggage.",
    features: ["Door-to-Door Service", "Comfortable Seating", "Refreshments Provided", "Punctual Delivery"]
  },
  {
    title: "Customized Tour Planning",
    icon: <CustomIcon sx={{ fontSize: 40 }} />,
    description: "Our team designs customized itineraries based on your travel duration, interests, and budget. We create balanced schedules that maximize your time in Japan.",
    features: ["Personalized Itineraries", "Interest-Based Planning", "Budget Optimization", "Expert Route Suggestions"]
  }
];

const ServicesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a" }}>
      
      {/* 🚀 PAGE HEADER */}
      <Box 
        sx={{ 
          height: { xs: "40vh", md: "50vh" },
          backgroundImage: `linear-gradient(rgba(0,35,102,0.6), rgba(0,35,102,0.8)), url(${servicesHero})`,
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
          Our <span style={{ color: "#FFB7C5" }}>Services</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.9, fontWeight: "500" }}>
          We provide a complete range of travel services across Japan designed to meet the needs 
          of both individual travelers and group tours.
        </Typography>
        <Box sx={{ width: "100px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px", mt: 4 }} />
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 15 } }}>
        
        {/* ✨ SERVICES GRID */}
        <Grid container spacing={4}>
          {servicesList.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4, 
                  height: "100%", 
                  borderRadius: "24px", 
                  bgcolor: "#f8fafc",
                  border: "1px solid rgba(0,35,102,0.05)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                    borderColor: "#FFB7C5"
                  }
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: "#fff", 
                    color: "#FFB7C5", 
                    p: 2, 
                    borderRadius: "16px", 
                    width: "fit-content",
                    mb: 3,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.6)", lineHeight: 1.7, mb: 3, flexGrow: 1 }}>
                  {service.description}
                </Typography>
                <Stack spacing={1} sx={{ mt: "auto" }}>
                  {service.features.map((feature, idx) => (
                    <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                      <CheckIcon sx={{ color: "#FFB7C5", fontSize: "1.1rem" }} />
                      <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "0.85rem", color: "#002366" }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* 🌟 WHY CHOOSE US CALLOUT */}
        <Box 
          sx={{ 
            mt: 15, 
            p: { xs: 4, md: 8 }, 
            bgcolor: "#002366", 
            borderRadius: "40px", 
            color: "#fff",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <Box 
            sx={{ 
              position: "absolute", 
              top: "-50px", 
              right: "-50px", 
              width: "200px", 
              height: "200px", 
              bgcolor: "rgba(255,183,197,0.1)", 
              borderRadius: "50%" 
            }} 
          />
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h3" sx={{ fontWeight: 900, mb: 3 }}>
                Premium <span style={{ color: "#FFB7C5" }}>Ground Support</span>
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.8, fontSize: "1.1rem", mb: 4 }}>
                Our dedicated operations team based in Japan ensures smooth travel experiences for 
                travel agents, families, corporate groups, and individual travelers. From the 
                moment you arrive until your departure, we are your local experts on the ground.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <VerifiedIcon sx={{ color: "#FFB7C5" }} />
                  <Typography fontWeight="700">Japan-Based Team</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <SupportIcon sx={{ color: "#FFB7C5" }} />
                  <Typography fontWeight="700">24/7 Support</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
              <Button 
                variant="contained" 
                size="large"
                href="/contact"
                sx={{ 
                  bgcolor: "#FFB7C5", 
                  color: "#002366", 
                  px: 6, 
                  py: 2, 
                  fontWeight: 900, 
                  fontSize: "1.1rem",
                  borderRadius: "15px",
                  "&:hover": { bgcolor: "#fca5b7", transform: "scale(1.05)" },
                  transition: "all 0.3s ease"
                }}
              >
                BOOK A SERVICE
              </Button>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default ServicesPage;