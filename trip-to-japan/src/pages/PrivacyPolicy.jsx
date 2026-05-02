import React from "react";
import { Box, Container, Typography, Stack, Divider, Paper } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a", pt: { xs: "100px", md: "140px" }, pb: 15 }}>
      <Container maxWidth="md">
        
        {/* 🚀 HEADER */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "800" }}>
            LEGAL INFORMATION
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "2.5rem", md: "4rem" }, color: "#002366", mb: 2 }}>
            Privacy <span style={{ color: "#FFB7C5" }}>Policy</span>
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, opacity: 0.6 }}>
            Last Updated: April 2026
          </Typography>
          <Box sx={{ width: "80px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px", mt: 4, mx: "auto" }} />
        </Box>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: "40px", border: "1px solid rgba(0,35,102,0.05)", bgcolor: "#f8fafc" }}>
          <Stack spacing={4}>
            
            {/* 📝 INTRODUCTION */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 2 }}>
                1. Introduction
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                At <strong>TripToJapan.in</strong>, we value your privacy and are committed to protecting your personal information. 
                This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when using our 
                website and travel services.
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                By accessing our website and utilizing our services, you agree to the terms and conditions outlined in 
                this policy. We encourage you to read this document carefully to understand our practices regarding 
                your personal data.
              </Typography>
            </Box>

            {/* 📝 SECTION 2: INFORMATION WE COLLECT */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                2. Information We Collect
              </Typography>
              
              <Stack spacing={3}>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#002366", mb: 1 }}>
                    2.1 Personal Information
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                    We collect personal information necessary to provide reliable transport and travel services in Japan. 
                    During the inquiry or booking process, we may collect: 
                    Full Name, Email Address, Phone/WhatsApp Number, Pickup and Drop Locations, Travel Date and Time, 
                    Flight Details, Hotel Name, Number of Passengers/Luggage, and any Special Requests.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#002366", mb: 1 }}>
                    2.2 Payment Information
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                    For billing purposes, we collect payment confirmation details, transaction references, and billing 
                    information. <strong>Important:</strong> We do NOT store your credit or debit card details on our 
                    servers. All payments are processed through secure, industry-leading third-party payment providers.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#002366", mb: 1 }}>
                    2.3 Website Usage Information
                  </Typography>
                  <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                    We automatically collect certain technical information when you visit our website, including your 
                    IP Address, Browser Type, Device Type, Pages Visited, and Time Spent on the site. This data helps 
                    us analyze trends and improve the overall user experience.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* 📝 SECTION 3: HOW WE USE YOUR INFORMATION */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                3. How We Use Your Information
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                We use the information we collect for various professional purposes, primarily focused on delivering 
                high-quality travel services across Japan:
              </Typography>
              <Stack spacing={1.5} component="ul" sx={{ color: "rgba(0,0,0,0.7)", pl: 2 }}>
                {[
                  "Process and manage your travel bookings and inquiries.",
                  "Arrange professional transportation and ground handling services.",
                  "Communicate booking confirmations and travel updates.",
                  "Send chauffeur/driver details prior to your travel date.",
                  "Provide responsive customer support and emergency assistance.",
                  "Analyze website usage to improve our digital services and user experience.",
                  "Prevent fraudulent transactions and ensure payment security.",
                  "Comply with local Japanese laws and international legal obligations."
                ].map((text, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* 📝 SECTION 4: SHARING YOUR INFORMATION */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                4. Sharing Your Information
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                We share your data only when necessary to fulfill our service obligations. This includes sharing with:
              </Typography>
              <Stack spacing={1.5} component="ul" sx={{ color: "rgba(0,0,0,0.7)", pl: 2, mb: 3 }}>
                {[
                  "Drivers and transportation partners responsible for your transfers.",
                  "Service providers who assist in activity bookings and tour planning.",
                  "Payment processing companies to secure your transactions.",
                  "Government or law enforcement authorities when legally required by Japanese law."
                ].map((text, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                ))}
              </Stack>
              <Typography variant="body1" sx={{ color: "#002366", fontWeight: 700 }}>
                We maintain a strict policy: We do NOT sell or rent your personal data to any third parties for marketing purposes.
              </Typography>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* 📝 SECTION 5: DATA SECURITY */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                5. Data Security
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                We implement robust security measures to protect your information from unauthorized access, alteration, 
                or disclosure:
              </Typography>
              <Stack spacing={1.5} component="ul" sx={{ color: "rgba(0,0,0,0.7)", pl: 2 }}>
                {[
                  "Secure servers with advanced firewall protection.",
                  "Strictly restricted data access limited to essential personnel.",
                  "Encrypted communication channels for all sensitive data transfers.",
                  "Secure, PCI-compliant third-party payment systems."
                ].map((text, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* 📝 SECTION 6: DATA RETENTION */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                6. Data Retention
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it 
                was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. 
                This includes:
              </Typography>
              <Stack spacing={1.5} component="ul" sx={{ color: "rgba(0,0,0,0.7)", pl: 2, mt: 2 }}>
                {[
                  "Successfully completing your travel services and arrangements.",
                  "Maintaining accurate business and financial records.",
                  "Complying with Japanese regulatory and legal data retention obligations.",
                  "Resolving any disputes or enforcing our agreements."
                ].map((text, i) => (
                  <Typography component="li" key={i} variant="body1" sx={{ lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                ))}
              </Stack>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* 📝 SECTION 7: COOKIES POLICY */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                7. Cookies Policy
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                Our website uses cookies to enhance your browsing experience. Cookies help us remember your 
                preferences, improve site functionality, analyze traffic patterns, and optimize performance. 
                You can choose to disable cookies through your browser settings, although this may affect the 
                functionality of certain parts of our website.
              </Typography>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* 📝 SECTION 8: THIRD-PARTY LINKS */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                8. Third-Party Links
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                The TripToJapan.in website may contain links to external websites that are not operated by us. 
                Please be aware that we have no control over the content and practices of these sites, and 
                cannot accept responsibility or liability for their respective privacy policies.
              </Typography>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* 📝 SECTION 9: CONTACT US */}
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366", mb: 3 }}>
                9. Contact Us
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                If you have any questions or concerns about our Privacy Policy or your personal data, please 
                contact us at:
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontWeight: 800, color: "#002366" }}>
                Email: kaahyapraji658@gmail.com
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 800, color: "#002366" }}>
                Address: 323-0822 Tochigi-Ken, Oyama-shi Eki-Minami Cho, 4-13-17, Japan
              </Typography>
            </Box>

          </Stack>
        </Paper>

      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
