import React from "react";
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, CardActionArea } from "@mui/material";

// Import images
import tokyoImg from "../assets/sensoji.png";
import osakaImg from "../assets/dest-osaka.png";
import kyotoImg from "../assets/dest-kyoto.png";
import naraImg from "../assets/dest-nara.png";
import fujiImg from "../assets/hero-bg.png";
import hakoneImg from "../assets/dest-hakone.png";
import hiroshimaImg from "../assets/dest-hiroshima.png";
import nagoyaImg from "../assets/dest-nagoya.png";
import fukuokaImg from "../assets/dest-fukuoka.png";

const destinations = [
  { name: "Tokyo", image: tokyoImg, landmark: "Senso-ji Temple" },
  { name: "Osaka", image: osakaImg, landmark: "Osaka Castle" },
  { name: "Kyoto", image: kyotoImg, landmark: "Kinkaku-ji Temple" },
  { name: "Nara", image: naraImg, landmark: "Nara Park" },
  { name: "Mount Fuji", image: fujiImg, landmark: "Fuji-Kawaguchiko" },
  { name: "Hakone", image: hakoneImg, landmark: "Lake Ashi" },
  { name: "Hiroshima", image: hiroshimaImg, landmark: "Itsukushima Shrine" },
  { name: "Nagoya", image: nagoyaImg, landmark: "Nagoya Castle" },
  { name: "Fukuoka", image: fukuokaImg, landmark: "Canal City" },
];

const DestinationsSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 15 }, bgcolor: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography 
            variant="overline" 
            sx={{ 
              color: "#FFB7C5", 
              fontWeight: 800, 
              letterSpacing: 3,
              display: "block",
              mb: 2
            }}
          >
            EXPLORE THE LAND OF THE RISING SUN
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              color: "#002366",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              mb: 3
            }}
          >
            Popular Japan <span style={{ color: "#FFB7C5" }}>Destinations</span> We Cover
          </Typography>
          <Box 
            sx={{ 
              width: "80px", 
              height: "5px", 
              bgcolor: "#FFB7C5", 
              margin: "0 auto",
              borderRadius: "10px"
            }} 
          />
        </Box>

        <Grid container spacing={3}>
          {destinations.map((dest, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  borderRadius: "20px", 
                  overflow: "hidden", 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                    "& .dest-image": {
                      transform: "scale(1.1)"
                    }
                  }
                }}
              >
                <CardActionArea>
                  <Box sx={{ overflow: "hidden", height: "240px", position: "relative" }}>
                    <CardMedia
                      component="img"
                      image={dest.image}
                      alt={dest.name}
                      className="dest-image"
                      sx={{ 
                        height: "100%", 
                        transition: "transform 0.6s ease-in-out" 
                      }}
                    />
                    <Box 
                      sx={{ 
                        position: "absolute", 
                        bottom: 0, 
                        left: 0, 
                        right: 0, 
                        p: 3, 
                        background: "linear-gradient(transparent, rgba(0,35,102,0.8))",
                        color: "#fff"
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 800, mb: 0.5 }}>
                        {dest.name}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, letterSpacing: 1, fontSize: "0.75rem", textTransform: "uppercase" }}>
                        {dest.landmark}
                      </Typography>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationsSection;
