import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import {
  FlightTakeoff as AirportIcon,
  Map as SightseeingIcon,
  Person as FitIcon,
  Groups as GroupIcon,
  ConfirmationNumber as TicketIcon,
  DirectionsCar as TransferIcon
} from "@mui/icons-material";

const services = [
  {
    title: "Airport Transfers",
    description: "Seamless door-to-door transfers across Japan.",
    icon: <AirportIcon sx={{ fontSize: "1.8rem" }} />,
  },
  {
    title: "Private Sightseeing",
    description: "Discover hidden gems with local experts.",
    icon: <SightseeingIcon sx={{ fontSize: "1.8rem" }} />,
  },
  {
    title: "FIT Tour Arrangements",
    description: "Tailor-made itineraries for full flexibility.",
    icon: <FitIcon sx={{ fontSize: "1.8rem" }} />,
  },
  {
    title: "Group Management",
    description: "Logistics and management for groups.",
    icon: <GroupIcon sx={{ fontSize: "1.8rem" }} />,
  },
  {
    title: "Activity & Tickets",
    description: "Skip-the-line access to top attractions.",
    icon: <TicketIcon sx={{ fontSize: "1.8rem" }} />,
  },
  {
    title: "Intercity Transfers",
    description: "Reliable transport between all cities.",
    icon: <TransferIcon sx={{ fontSize: "1.8rem" }} />,
  }
];

const KeyServices = () => {
  return (
    <Box sx={{ pt: 4, pb: 4, bgcolor: "#fff", overflow: "hidden" }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: "#E91E63", fontWeight: 800, letterSpacing: 3, display: "block", mb: 1, fontSize: "0.8rem" }}
          >
            EXPERIENCE EXCELLENCE
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 900, color: "#002366", fontSize: { xs: "2.2rem", md: "3rem" }, mb: 1.5, letterSpacing: "-1px" }}
          >
            Our Key <span style={{ color: "#E91E63" }}>Services</span>
          </Typography>
          <Box sx={{ width: "50px", height: "4px", bgcolor: "#E91E63", margin: "0 auto", borderRadius: "10px" }} />
        </Box>

        {/* 🛠️ FLEXBOX LAYOUT - Guaranteed 3 Cards per row on desktop */}
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          justifyContent: "center",
          width: "100%"
        }}>
          {services.map((service, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 3,
                width: {
                  xs: "100%",
                  sm: "calc(50% - 24px)",
                  md: "calc(33.33% - 24px)"
                },
                minWidth: { md: "300px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                bgcolor: "#fcfcfc",
                borderRadius: "16px",
                border: "1px solid rgba(0, 35, 102, 0.1)",
                transition: "all 0.3s ease",
                boxSizing: "border-box", // Essential to prevent overlap
                "&:hover": {
                  borderColor: "#E91E63",
                  bgcolor: "#fff",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                  transform: "translateY(-5px)"
                }
              }}
            >
              <Box sx={{
                mb: 2,
                p: 1.5,
                borderRadius: "50%",
                bgcolor: "rgba(233, 30, 99, 0.05)",
                color: "#E91E63",
                display: "flex"
              }}>
                {service.icon}
              </Box>
              <Typography variant="h6" sx={{ fontSize: "1.1rem", fontWeight: 800, color: "#002366", mb: 1 }}>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "rgba(0,35,102,0.7)", lineHeight: 1.5 }}>
                {service.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default KeyServices;
