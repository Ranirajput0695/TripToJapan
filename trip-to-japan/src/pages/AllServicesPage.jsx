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
  Button
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

const AllServicesPage = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 18 }, pb: 10, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        
        {/* 📋 HEADER */}
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#FFD700", fontWeight: "800", letterSpacing: 2 }}>
            OUR EXPERTISE
          </Typography>
          <Typography variant="h2" fontWeight="800" sx={{ mb: 2 }}>
            Complete Travel <span style={{ color: "#FFD700" }}>Services</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
            We provide a complete range of travel services across Japan designed to meet the needs 
            of both individual travelers and group tours.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* ✈️ AIRPORT TRANSFERS */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: "100%", borderRadius: 4 }}>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <AirportIcon sx={{ color: "#FFD700", fontSize: 40 }} />
                <Typography variant="h4" fontWeight="800">Airport Transfers</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                We provide comfortable and reliable airport transfer services from all major airports in Japan.
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" fontWeight="800">AVAILABLE AIRPORTS:</Typography>
                  <List dense>
                    {["Tokyo Narita", "Tokyo Haneda", "Osaka Kansai", "Nagoya Airport", "Fukuoka Airport"].map((a) => (
                      <ListItem key={a} sx={{ p: 0 }}>
                        <ListItemIcon sx={{ minWidth: 25, color: "#FFD700" }}><CheckIcon sx={{ fontSize: 14 }} /></ListItemIcon>
                        <ListItemText primary={a} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" fontWeight="800">TRANSFER TYPES:</Typography>
                  <List dense>
                    {["Arrival Transfers", "Departure Transfers", "Private Transfers", "Group Transfers"].map((t) => (
                      <ListItem key={t} sx={{ p: 0 }}>
                        <ListItemIcon sx={{ minWidth: 25, color: "#FFD700" }}><CheckIcon sx={{ fontSize: 14 }} /></ListItemIcon>
                        <ListItemText primary={t} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* 🏯 SIGHTSEEING */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: "100%", borderRadius: 4 }}>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <SightseeingIcon sx={{ color: "#FFD700", fontSize: 40 }} />
                <Typography variant="h4" fontWeight="800">Sightseeing Tours</Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Explore Japan’s most popular attractions with our well-planned sightseeing services.
              </Typography>
              <Typography variant="subtitle2" fontWeight="800">POPULAR CITIES:</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 2 }}>
                {["Tokyo", "Kyoto", "Osaka", "Nara", "Mount Fuji", "Hakone", "Hiroshima"].map((c) => (
                  <Paper key={c} sx={{ px: 2, py: 1, bgcolor: "#f1f5f9", borderRadius: 2, fontSize: "0.9rem", fontWeight: "600" }}>{c}</Paper>
                ))}
              </Box>
              <Typography variant="body2" sx={{ mt: 3, fontStyle: "italic" }}>
                * Our sightseeing tours include professional drivers and carefully planned routes.
              </Typography>
            </Paper>
          </Grid>

          {/* 👤 FIT SERVICES */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", borderRadius: 4, bgcolor: "#1e293b", color: "#fff" }}>
              <CardContent sx={{ p: 4 }}>
                <FITIcon sx={{ color: "#FFD700", fontSize: 40, mb: 2 }} />
                <Typography variant="h5" fontWeight="800" gutterBottom>FIT Tour Services</Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, mb: 3 }}>
                  Specialized FIT (Free Independent Traveler) arrangements tailored to individual preferences.
                </Typography>
                <List dense>
                  {["Hotel Bookings", "Private Transfers", "Sightseeing Plans", "Activity Tickets"].map((item) => (
                    <ListItem key={item} sx={{ p: 0 }}>
                      <ListItemIcon sx={{ minWidth: 30, color: "#FFD700" }}><CheckIcon sx={{ fontSize: 16 }} /></ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* 👥 GROUP TOURS */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", borderRadius: 4, border: "1px solid #e2e8f0" }}>
              <CardContent sx={{ p: 4 }}>
                <GroupIcon sx={{ color: "#FFD700", fontSize: 40, mb: 2 }} />
                <Typography variant="h5" fontWeight="800" gutterBottom>Group Tour Services</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Manage complete travel arrangements for groups of all sizes (Student, Corporate, Family).
                </Typography>
                <Typography variant="subtitle2" fontWeight="800">SERVICES INCLUDE:</Typography>
                <Typography variant="body2" color="text.secondary">
                  Full transportation, sightseeing coordination, and dedicated on-ground travel support.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 🎟 TICKETS */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%", borderRadius: 4, border: "1px solid #e2e8f0" }}>
              <CardContent sx={{ p: 4 }}>
                <TicketIcon sx={{ color: "#FFD700", fontSize: 40, mb: 2 }} />
                <Typography variant="h5" fontWeight="800" gutterBottom>Activity Tickets</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Arrange tickets for popular attractions across Japan.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {["Disneyland", "USJ", "teamLab", "Theme Parks"].map((t) => (
                    <Paper key={t} sx={{ px: 1.5, py: 0.5, bgcolor: "#fffcf0", color: "#856404", fontSize: "0.8rem", fontWeight: "700" }}>{t}</Paper>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 📐 CUSTOM PLANNING */}
        <Paper 
          sx={{ 
            mt: 8, p: 6, borderRadius: 5, 
            backgroundImage: "linear-gradient(135deg, #FFD700 0%, #e6c200 100%)",
            color: "#000", textAlign: "center"
          }}
        >
          <CustomIcon sx={{ fontSize: 50, mb: 2 }} />
          <Typography variant="h3" fontWeight="800" gutterBottom>Customized Tour Planning</Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            Our team designs customized itineraries based on your travel duration, interests, and budget.
          </Typography>
          <Button variant="contained" href="/contact" sx={{ bgcolor: "#000", color: "#fff", px: 6, py: 2, fontWeight: "800", borderRadius: 3 }}>
            START PLANNING
          </Button>
        </Paper>

      </Container>
    </Box>
  );
};

export default AllServicesPage;
