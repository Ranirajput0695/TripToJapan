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
  CheckCircle as CheckIcon,
  LocalTaxi as TaxiIcon
} from "@mui/icons-material";

const vehicles = [
  { 
    name: "Sedan", 
    capacity: "1–3 Passengers", 
    icon: <SedanIcon sx={{ fontSize: 40 }} />, 
    desc: "Suitable for airport transfers and short city travel. Comfortable and efficient for couples or solo travelers.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
  },
  { 
    name: "Alphard", 
    capacity: "1–5 Passengers", 
    icon: <TaxiIcon sx={{ fontSize: 40 }} />, 
    desc: "Luxury vehicle ideal for families. Features premium interiors and extra legroom for a high-end experience.",
    tag: "Luxury Choice",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80"
  },
  { 
    name: "Hiace Van", 
    capacity: "5–9 Passengers", 
    icon: <VanIcon sx={{ fontSize: 40 }} />, 
    desc: "Comfortable for small groups. Perfect for family outings or small corporate teams with luggage.",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80"
  },
  { 
    name: "Mini Bus", 
    capacity: "10–18 Passengers", 
    icon: <BusIcon sx={{ fontSize: 40 }} />, 
    desc: "Perfect for medium-sized groups. Ideal for group sightseeing and intercity transfers.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
  },
  { 
    name: "Coach Bus", 
    capacity: "20–45 Passengers", 
    icon: <BusIcon sx={{ fontSize: 50 }} />, 
    desc: "Best for large group tours. Full-sized coaches equipped for long-distance travel across Japan.",
    tag: "Large Groups",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80"
  }
];

const TransportPage = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 18 }, pb: 10, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        
        {/* 📋 HEADER */}
        <Box sx={{ mb: 10, textAlign: "center" }}>
          <Typography variant="overline" sx={{ color: "#FFD700", fontWeight: "800", letterSpacing: 2 }}>
            TRANSPORT & LOGISTICS
          </Typography>
          <Typography variant="h2" fontWeight="800" sx={{ mb: 2 }}>
            Private <span style={{ color: "#FFD700" }}>Transportation</span> Services
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: "800px", mx: "auto" }}>
            We provide reliable private transportation services across Japan with professional 
            drivers and well-maintained vehicles for every group size.
          </Typography>
        </Box>

        {/* 🚗 VEHICLE GRID */}
        <Grid container spacing={4}>
          {vehicles.map((v, i) => (
            <Grid item xs={12} md={i < 2 ? 6 : 4} key={v.name}>
              <Card sx={{ height: "100%", borderRadius: 5, overflow: "hidden", border: "1px solid #eee", display: "flex", flexDirection: "column" }}>
                <CardMedia component="img" height="240" image={v.image} alt={v.name} />
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Box sx={{ color: "#FFD700" }}>{v.icon}</Box>
                    {v.tag && <Chip label={v.tag} size="small" sx={{ bgcolor: "#FFD700", color: "#000", fontWeight: "700" }} />}
                  </Box>
                  <Typography variant="h4" fontWeight="800" gutterBottom>{v.name}</Typography>
                  <Typography variant="subtitle1" sx={{ color: "#FFD700", fontWeight: "700", mb: 2 }}>
                    Capacity: {v.capacity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {v.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* 📍 SERVICES LIST */}
        <Box sx={{ mt: 15 }}>
          <Typography variant="h3" textAlign="center" fontWeight="800" sx={{ mb: 8 }}>
            Transfer Services Available
          </Typography>
          <Grid container spacing={3}>
            {["Airport Transfers", "Hotel Transfers", "Intercity Transfers", "Full Day Vehicle Hire", "Multi-Day Transport"].map((s) => (
              <Grid item xs={12} sm={6} md={4} key={s}>
                <Paper sx={{ p: 3, display: "flex", alignItems: "center", gap: 2, borderRadius: 3, bgcolor: "#f8fafc", border: "1px solid #e2e8f0" }}>
                  <CheckIcon sx={{ color: "#FFD700" }} />
                  <Typography variant="h6" fontWeight="700">{s}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 📞 CTA */}
        <Box sx={{ mt: 15, bgcolor: "#1e293b", color: "#fff", p: { xs: 4, md: 8 }, borderRadius: 6, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="800" gutterBottom>Need a Custom Transport Plan?</Typography>
          <Typography variant="h6" sx={{ opacity: 0.7, mb: 5 }}>
            From luxury sedans to 45-seater coaches, we have the right vehicle for your journey.
          </Typography>
          <Button variant="contained" href="/contact" sx={{ bgcolor: "#FFD700", color: "#000", px: 8, py: 2, borderRadius: 3, fontWeight: "800" }}>
            BOOK TRANSPORT NOW
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default TransportPage;
