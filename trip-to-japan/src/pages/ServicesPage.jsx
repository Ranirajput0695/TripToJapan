import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from "@mui/material";
import { 
  Schedule as ClockIcon, 
  Map as MapIcon, 
  ArrowForward as ArrowIcon,
  Circle as DotIcon,
  Star as StarIcon
} from "@mui/icons-material";
import goldenRouteImg from "../assets/golden-route.png";
import familyTourImg from "../assets/family-tour.png";

const tourItineraries = [
  {
    title: "Japan Golden Route",
    duration: "6 Days",
    route: "Tokyo – Mount Fuji – Kyoto – Osaka",
    image: goldenRouteImg,
    tag: "Most Popular",
    itinerary: [
      "Day 1: Arrival in Tokyo and airport transfer to hotel",
      "Day 2: Tokyo city sightseeing tour",
      "Day 3: Mount Fuji and Hakone sightseeing",
      "Day 4: Bullet train journey to Kyoto",
      "Day 5: Kyoto and Nara sightseeing",
      "Day 6: Transfer to Osaka airport for departure"
    ]
  },
  {
    title: "Classic Japan Tour",
    duration: "7 Days",
    route: "Tokyo – Fuji – Kyoto – Osaka",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller",
    desc: "Includes major sightseeing in Tokyo, Mount Fuji, Kyoto temples, and Osaka highlights."
  },
  {
    title: "Japan Family Tour",
    duration: "8 Days",
    route: "Tokyo – Kyoto – Osaka",
    image: familyTourImg,
    tag: "Family Special",
    highlights: [
      "Tokyo Disneyland",
      "Universal Studios Japan",
      "Family-friendly sightseeing"
    ]
  },
  {
    title: "Cherry Blossom Japan Tour",
    duration: "Seasonal",
    route: "Tokyo – Kyoto – Osaka",
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80",
    tag: "Spring Special",
    desc: "Available during Sakura season (March–April). Experience Japan under a pink canopy."
  },
  {
    title: "Japan Autumn Tour",
    duration: "Seasonal",
    route: "Kyoto – Tokyo – Nara",
    image: "https://images.unsplash.com/photo-1476917800583-43b82fdf98c8?auto=format&fit=crop&w=800&q=80",
    tag: "Autumn Special",
    desc: "Available during autumn foliage season (October–November). Witness vibrant red maples."
  }
];

const ServicesPage = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 18 }, pb: 10, bgcolor: "#f1f5f9" }}>
      <Container maxWidth="lg">
        
        {/* 📋 HEADER SECTION */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#FFD700", fontWeight: "800", letterSpacing: 2 }}>
            OUR ITINERARIES
          </Typography>
          <Typography variant="h2" fontWeight="800" sx={{ mb: 2 }}>
            Sample Japan <span style={{ color: "#FFD700" }}>Tour Programs</span>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: "700px", mx: "auto" }}>
            Below are some of our popular sample tour programs designed for an unforgettable Japanese experience.
          </Typography>
        </Box>

        {/* 🗺 TOUR CARDS */}
        <Grid container spacing={4}>
          {tourItineraries.map((tour, index) => (
            <Grid item xs={12} md={tour.itinerary ? 12 : 6} lg={tour.itinerary ? 8 : 4} key={index} sx={{ mx: "auto" }}>
              <Card 
                sx={{ 
                  borderRadius: 5, 
                  overflow: "hidden", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: { xs: "column", md: tour.itinerary ? "row" : "column" },
                  height: "100%",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" }
                }}
              >
                <CardMedia
                  component="img"
                  image={tour.image}
                  alt={tour.title}
                  sx={{ 
                    width: { xs: "100%", md: tour.itinerary ? "40%" : "100%" },
                    height: { xs: "250px", md: "auto" }
                  }}
                />
                <CardContent sx={{ p: 4, flex: 1, display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Chip 
                      label={tour.tag} 
                      size="small" 
                      sx={{ bgcolor: "#FFD700", color: "#000", fontWeight: "800", borderRadius: 1 }} 
                    />
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary" }}>
                      <ClockIcon fontSize="small" />
                      <Typography variant="subtitle2" fontWeight="700">{tour.duration}</Typography>
                    </Box>
                  </Box>

                  <Typography variant="h4" fontWeight="800" gutterBottom>
                    {tour.title}
                  </Typography>
                  
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#FFD700", mb: 3 }}>
                    <MapIcon fontSize="small" />
                    <Typography variant="body2" fontWeight="700" sx={{ letterSpacing: 1, textTransform: "uppercase" }}>
                      {tour.route}
                    </Typography>
                  </Box>

                  {tour.itinerary && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight="800" sx={{ mb: 1, color: "#1e293b" }}>
                        DAILY ITINERARY:
                      </Typography>
                      <List dense sx={{ p: 0 }}>
                        {tour.itinerary.map((day, i) => (
                          <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24, color: "#FFD700" }}>
                              <DotIcon sx={{ fontSize: 10 }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={day} 
                              primaryTypographyProps={{ fontSize: "0.9rem", color: "text.secondary" }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}

                  {tour.highlights && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" fontWeight="800" sx={{ mb: 1, color: "#1e293b" }}>
                        INCLUDES:
                      </Typography>
                      <List dense sx={{ p: 0 }}>
                        {tour.highlights.map((item, i) => (
                          <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24, color: "#FFD700" }}>
                              <StarIcon sx={{ fontSize: 16 }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={item} 
                              primaryTypographyProps={{ fontSize: "0.9rem", color: "text.secondary" }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}

                  {tour.desc && (
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                      {tour.desc}
                    </Typography>
                  )}

                  <Button 
                    variant="contained" 
                    fullWidth 
                    href="/contact"
                    sx={{ 
                      mt: "auto",
                      bgcolor: "#1e293b", 
                      color: "#fff", 
                      fontWeight: "700", 
                      py: 1.5,
                      borderRadius: 2,
                      "&:hover": { bgcolor: "#000" }
                    }}
                    endIcon={<ArrowIcon />}
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 📞 CTA SECTION */}
        <Paper 
          sx={{ 
            mt: 12, 
            p: 6, 
            textAlign: "center", 
            borderRadius: 6, 
            bgcolor: "#FFD700",
            color: "#000"
          }}
        >
          <Typography variant="h3" fontWeight="800" gutterBottom>
            Can't Find the Perfect Trip?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
            We specialize in creating custom itineraries tailored to your unique interests and budget.
          </Typography>
          <Button 
            variant="contained" 
            href="/contact"
            sx={{ 
              bgcolor: "#000", 
              color: "#fff", 
              px: 6, 
              py: 2, 
              borderRadius: 3, 
              fontWeight: "800",
              "&:hover": { bgcolor: "#222" }
            }}
          >
            Request Custom Itinerary
          </Button>
        </Paper>

      </Container>
    </Box>
  );
};

export default ServicesPage;