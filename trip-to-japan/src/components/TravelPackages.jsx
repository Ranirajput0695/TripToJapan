import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Stack, 
  Chip,
  Divider
} from '@mui/material';
import { 
  Schedule as ClockIcon, 
  LocationOn as LocationIcon, 
  CurrencyExchange as PriceIcon,
  Star as StarIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

import img1 from '../assets/1 img.jpg';
import img2 from '../assets/2 img.jpg';
import img3 from '../assets/3 img.jpg';

const packages = [
  {
    title: "Tokyo Special!!!",
    duration: "4 nights / 5 days",
    category: "Private tour",
    image: img1,
    cities: "Tokyo, Yokohama",
    price: "₹1,25,000",
    features: ["5-Star Hotels", "Private MPV", "English Guide", "Disney Tickets"],
    popular: true
  },
  {
    title: "Classic Japan Explorer",
    duration: "8 Days / 7 Nights",
    image: img2,
    cities: "Tokyo, Hakone, Kyoto, Osaka",
    price: "₹1,85,000",
    features: ["4-Star Hotels", "Private Transfers", "Local Guides", "Daily Breakfast"],
    popular: false
  },
  {
    title: "Hidden Gems of Japan",
    duration: "12 Days / 11 Nights",
    image: img3,
    cities: "Hiroshima, Miyajima, Kanazawa",
    price: "₹2,10,000",
    features: ["Traditional Ryokan", "Onsen Experience", "Private Tour", "Cultural Workshops"],
    popular: true
  }
];

const TravelPackages = () => {
  return (
    <Box sx={{ py: 15, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, color: "#002366", fontWeight: "800" }}>
            HANDPICKED FOR YOU
          </Typography>
          <Typography variant="h3" fontWeight="900" sx={{ mt: 1 }}>
            Japan <span style={{ color: "#FFB7C5" }}>Travel Packages</span>
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {packages.map((pkg, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Card 
                elevation={0} 
                sx={{ 
                  height: "100%", 
                  borderRadius: 6, 
                  border: "1px solid #e2e8f0",
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-10px)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }
                }}
              >
                {/* Image Box with Footer Line */}
                <Box sx={{ position: 'relative', height: "250px" }}>
                  <Box 
                    component="img"
                    src={pkg.image}
                    sx={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                  />
                  {/* Footer Line Overlay (Grey bar from screenshot) */}
                  {pkg.title === "Tokyo Special!!!" && (
                    <Box sx={{ 
                      position: 'absolute', 
                      bottom: 0, 
                      left: 0, 
                      right: 0, 
                      bgcolor: 'rgba(211, 211, 211, 0.95)', 
                      py: 1, 
                      textAlign: 'center',
                      color: '#000',
                      borderTop: '1px solid rgba(0,0,0,0.1)'
                    }}>
                      <Typography variant="h6" sx={{ fontWeight: '900', fontSize: '20px', lineHeight: 1.1, fontFamily: 'serif' }}>
                        {pkg.title}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: '900', fontSize: '18px', lineHeight: 1.1, fontFamily: 'serif' }}>
                        {pkg.duration}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: '900', fontSize: '15px', lineHeight: 1.1, fontFamily: 'serif' }}>
                        Package Category: {pkg.category}
                      </Typography>
                    </Box>
                  )}
                </Box>
                
                <CardContent sx={{ p: 4 }}>
                  {pkg.popular && (
                    <Chip 
                      label="MOST POPULAR" 
                      size="small" 
                      sx={{ bgcolor: "#FFB7C5", color: "#002366", fontWeight: "800", mb: 2, borderRadius: 1 }} 
                    />
                  )}
                  <Typography variant="h5" fontWeight="800" gutterBottom>{pkg.title}</Typography>
                  
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, color: "text.secondary" }}>
                    <LocationIcon sx={{ fontSize: 18, color: "#FFB7C5" }} />
                    <Typography variant="body2" fontWeight="600">{pkg.cities}</Typography>
                  </Stack>

                  <Divider sx={{ mb: 3 }} />

                  <Stack spacing={1.5} sx={{ mb: 4 }}>
                    {pkg.features.map((f, idx) => (
                      <Box key={idx} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <CheckIcon sx={{ color: "#FFB7C5", fontSize: 18 }} />
                        <Typography variant="body2" fontWeight="500">{f}</Typography>
                      </Box>
                    ))}
                  </Stack>

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: "auto" }}>
                    <Box>
                      <Typography variant="caption" color="text.secondary">Starting From</Typography>
                      <Typography variant="h5" fontWeight="900" color="#002366">{pkg.price}</Typography>
                    </Box>
                    <Button 
                      variant="contained" 
                      href="/contact"
                      sx={{ 
                        bgcolor: "#002366", 
                        color: "#fff", 
                        px: 3, 
                        py: 1, 
                        borderRadius: 2, 
                        fontWeight: "700",
                        "&:hover": { bgcolor: "#FFB7C5", color: "#002366" }
                      }}
                    >
                      Enquire
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, p: 6, bgcolor: "#f8fafc", borderRadius: 8, textAlign: "center", border: "1px dashed #cbd5e1" }}>
           <Typography variant="h5" fontWeight="800" gutterBottom>Don't see what you're looking for?</Typography>
           <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>We can create a completely custom package tailored to your specific preferences.</Typography>
           <Button variant="outlined" href="/contact" sx={{ borderColor: "#002366", color: "#002366", px: 6, py: 1.5, fontWeight: "800", borderRadius: 2 }}>
             BUILD YOUR OWN TRIP
           </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TravelPackages;
