import React from "react";
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Paper, 
  Stack, 
  IconButton, 
  Button, 
  Divider,
  TextField,
  MenuItem
} from "@mui/material";
import { 
  Phone as PhoneIcon, 
  Email as EmailIcon, 
  LocationOn as LocationIcon, 
  WhatsApp as WhatsAppIcon,
  SupportAgent as SupportIcon,
  Business as OfficeIcon,
  Send as SendIcon
} from "@mui/icons-material";

const ContactPage = () => {
  return (
    <Box sx={{ pb: 10, bgcolor: "#fff", pt: { xs: "110px", md: "140px" } }}>
      
      {/* 🚀 HERO SECTION */}
      <Box 
        sx={{ 
          height: { xs: "40vh", md: "50vh" },
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
          px: 2,
          mb: 10
        }}
      >
        <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "800", mb: 2 }}>
          GET IN TOUCH
        </Typography>
        <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "2.5rem", md: "4.5rem" }, mb: 2 }}>
          We're Here to <span style={{ color: "#FFB7C5" }}>Help</span>
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: "800px", opacity: 0.9, fontWeight: "500" }}>
          Have questions about your Japan trip? Our experts are ready to assist you.
        </Typography>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={8}>
          
          {/* 📞 CONTACT INFO */}
          <Grid item xs={12} md={5}>
            <Typography variant="h3" fontWeight="900" sx={{ mb: 4 }}>
              Contact <span style={{ color: "#FFB7C5" }}>Information</span>
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: "1.1rem" }}>
              Reach out to our Japan headquarters or our India support team for quick assistance.
            </Typography>

            <Stack spacing={4}>
              {[
                { icon: <OfficeIcon />, title: "Japan Office (HQ)", detail: "323-0822 Tochigi-Ken, Oyama-shi, Eki-Minami Cho, 4-13-17", color: "#002366" },
                { icon: <OfficeIcon />, title: "India Office", detail: "Sector 18, Gurugram, Haryana - 122015", color: "#002366" },
                { icon: <PhoneIcon />, title: "Call Us", detail: "+81 80 1234 5678 / +91 98765 43210", color: "#FFB7C5" },
                { icon: <EmailIcon />, title: "Email Us", detail: "info@triptojapan.in / bookings@triptojapan.in", color: "#FFB7C5" }
              ].map((item, i) => (
                <Box key={i} sx={{ display: "flex", gap: 3 }}>
                  <Box sx={{ color: item.color }}>{item.icon}</Box>
                  <Box>
                    <Typography variant="subtitle1" fontWeight="800" color={item.color}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{item.detail}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            {/* Social Connect */}
            <Box sx={{ mt: 8, p: 4, bgcolor: "#f8fafc", borderRadius: 4, border: "1px solid #e2e8f0" }}>
              <Typography variant="subtitle1" fontWeight="800" gutterBottom>Connect With Us</Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                {[<WhatsAppIcon />, <SupportIcon />].map((icon, i) => (
                  <IconButton key={i} sx={{ bgcolor: "#002366", color: "#fff", "&:hover": { bgcolor: "#FFB7C5" } }}>
                    {icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* 📝 CONTACT FORM */}
          <Grid item xs={12} md={7}>
            <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 8, border: "1px solid #e2e8f0", bgcolor: "#fff" }}>
              <Typography variant="h4" fontWeight="800" sx={{ mb: 1 }}>Send a <span style={{ color: "#FFB7C5" }}>Message</span></Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>Fields marked with * are required.</Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Full Name *" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address *" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number *" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth select label="Travel Interest" defaultValue="Tour Packages" variant="outlined">
                    {["Tour Packages", "Transportation", "FIT Arrangements", "Visa Support", "Other"].map((opt) => (
                      <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={4} label="How can we help you? *" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    fullWidth 
                    variant="contained" 
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{ bgcolor: "#002366", py: 2, borderRadius: 3, fontWeight: "800", fontSize: "1.1rem" }}
                  >
                    SEND INQUIRY
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 📍 MAP PLACEHOLDER */}
      <Container maxWidth="lg" sx={{ mt: 15 }}>
        <Box 
          sx={{ 
            height: "450px", 
            bgcolor: "#f1f5f9", 
            borderRadius: 8, 
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center",
            border: "1px solid #e2e8f0"
          }}
        >
          <LocationIcon sx={{ fontSize: 60, color: "#FFB7C5", mb: 2 }} />
          <Typography variant="h5" fontWeight="800" color="#002366">Japan Headquarters</Typography>
          <Typography variant="body2" color="text.secondary">Google Maps Integration Coming Soon</Typography>
        </Box>
      </Container>

    </Box>
  );
};

export default ContactPage;
