import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Paper, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Divider,
  Button,
  Chip
} from "@mui/material";
import { 
  FlightTakeoff as AirportIcon, 
  Map as SightseeingIcon, 
  Person as FITIcon, 
  Group as GroupIcon, 
  ConfirmationNumber as TicketIcon,
  Route as CustomIcon,
  CheckCircle as CheckIcon
} from "@mui/icons-material";

// Images removed

const AllServicesPage = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1e293b" }}>
      
      {/* 🚀 HERO HEADER */}
      <Box 
        sx={{ 
          height: { xs: "50vh", md: "60vh" },
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))`,
          bgcolor: "#002366",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          pt: { xs: "105px", md: "145px" },
          px: 2,
          mb: 10
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "800", mb: 2 }}>
          OUR CORE EXPERTISE
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "2.5rem", md: "4.5rem" }, mb: 2 }}>
          Premium Travel <span style={{ color: "#FFB7C5" }}>Services</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.9, fontWeight: "500" }}>
          Comprehensive ground handling and travel solutions across the Land of the Rising Sun.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* ✈️ AIRPORT TRANSFERS */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 4, height: "100%", borderRadius: 5, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <AirportIcon sx={{ color: "#FFB7C5", fontSize: 50, mb: 2 }} />
              <Typography variant="h4" fontWeight="800" gutterBottom>Airport Transfers</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                Comfortable and reliable transfer services from all major airports in Japan.
              </Typography>
              <Divider sx={{ width: "40px", mb: 3, borderColor: "#FFB7C5", borderWidth: 2 }} />
              <Box sx={{ textAlign: "left", width: "100%" }}>
                <Typography variant="subtitle2" fontWeight="800" sx={{ mb: 1, fontSize: "0.75rem", color: "#002366" }}>AVAILABLE AT:</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {["Narita", "Haneda", "Kansai", "Nagoya", "Fukuoka"].map(a => (
                    <Chip key={a} label={a} size="small" sx={{ fontSize: "0.7rem", fontWeight: "700", bgcolor: "#f1f5f9" }} />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* 🏯 SIGHTSEEING */}
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ p: 4, height: "100%", borderRadius: 5, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <SightseeingIcon sx={{ color: "#FFB7C5", fontSize: 50, mb: 2 }} />
              <Typography variant="h4" fontWeight="800" gutterBottom>Sightseeing Tours</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                Explore Japan’s most iconic attractions with our professional drivers.
              </Typography>
              <Divider sx={{ width: "40px", mb: 3, borderColor: "#FFB7C5", borderWidth: 2 }} />
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                {["Tokyo", "Kyoto", "Osaka", "Mt. Fuji", "Nara"].map((c) => (
                  <Chip key={c} label={c} variant="outlined" size="small" sx={{ fontWeight: "700", borderColor: "#FFB7C5", color: "#002366" }} />
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* 👤 FIT SERVICES */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%", borderRadius: 5, bgcolor: "#002366", color: "#fff", textAlign: "center", boxShadow: "0 10px 30px rgba(0,35,102,0.2)" }}>
              <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FITIcon sx={{ color: "#FFB7C5", fontSize: 50, mb: 2 }} />
                <Typography variant="h4" fontWeight="800" gutterBottom>FIT Services</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 3, lineHeight: 1.7 }}>
                  Tailored arrangements for independent travelers seeking premium experiences.
                </Typography>
                <List dense sx={{ width: "100%" }}>
                  {["Hotel Bookings", "Private Transfers", "Activity Tickets"].map((item) => (
                    <ListItem key={item} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 25, color: "#FFB7C5" }}><CheckIcon sx={{ fontSize: 16 }} /></ListItemIcon>
                      <ListItemText primary={item} primaryTypographyProps={{ fontSize: "0.85rem", fontWeight: "600" }} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* 👥 GROUP TOURS */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%", borderRadius: 5, border: "1px solid #e2e8f0", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <GroupIcon sx={{ color: "#FFB7C5", fontSize: 50, mb: 2 }} />
                <Typography variant="h4" fontWeight="800" gutterBottom>Group Tours</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Complete ground management for family, corporate, or student groups.
                </Typography>
                <Box sx={{ bgcolor: "#f8fafc", p: 2, borderRadius: 2, width: "100%" }}>
                  <Typography variant="caption" fontWeight="800" color="#002366">
                    FULL COORDINATION & LOCAL SUPPORT
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* 🎟 TICKETS */}
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: "100%", borderRadius: 5, border: "1px solid #e2e8f0", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <TicketIcon sx={{ color: "#FFB7C5", fontSize: 50, mb: 2 }} />
                <Typography variant="h4" fontWeight="800" gutterBottom>Attractions</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  Skip the line with pre-arranged tickets for Japan's top attractions.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center" }}>
                  {["Disneyland", "USJ", "teamLab"].map((t) => (
                    <Chip key={t} label={t} size="small" sx={{ bgcolor: "#fff0f5", color: "#002366", fontWeight: "700" }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* 📐 CUSTOM PLANNING CTA */}
          <Grid item xs={12} md={6} lg={4}>
             <Paper sx={{ p: 4, height: "100%", borderRadius: 5, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", bgcolor: "#FFB7C5", color: "#002366" }}>
                <CustomIcon sx={{ fontSize: 50, mb: 2 }} />
                <Typography variant="h5" fontWeight="900">Customized Plans</Typography>
                <Typography variant="body2" sx={{ my: 2, fontWeight: "600" }}>
                  Need something unique? We'll build it for you.
                </Typography>
                <Button variant="contained" href="/contact" sx={{ bgcolor: "#002366", color: "#fff", mt: 1, fontWeight: "800", borderRadius: 2 }}>
                  Enquire
                </Button>
             </Paper>
          </Grid>
        </Grid>

        <Paper 
          sx={{ 
            mt: 8, p: 6, borderRadius: 5, 
            backgroundImage: "linear-gradient(135deg, #FFB7C5 0%, #f48fb1 100%)",
            color: "#002366", textAlign: "center"
          }}
        >
          <CustomIcon sx={{ fontSize: 50, mb: 2 }} />
          <Typography variant="h3" fontWeight="800" gutterBottom>Customized Tour Planning</Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            Our team designs customized itineraries based on your travel duration, interests, and budget.
          </Typography>
          <Button variant="contained" href="/contact" sx={{ bgcolor: "#002366", color: "#fff", px: 6, py: 2, fontWeight: "800", borderRadius: 3 }}>
            START PLANNING
          </Button>
        </Paper>

      </Container>
    </Box>
  );
};

export default AllServicesPage;
