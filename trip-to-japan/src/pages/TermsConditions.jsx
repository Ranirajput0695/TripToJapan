import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Paper, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails 
} from "@mui/material";
import { 
  ExpandMore as ExpandMoreIcon,
  Schedule as WaitingIcon,
  Luggage as LuggageIcon,
  Commute as VehicleIcon,
  ReceiptLong as ChargesIcon,
  Warning as ForceMajeureIcon,
  CheckCircle as BookingIcon,
  Person as PassengerIcon
} from "@mui/icons-material";

const TermsConditions = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a", pt: { xs: "100px", md: "140px" }, pb: 15 }}>
      <Container maxWidth="md">
        
        {/* 🚀 HEADER */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "800" }}>
            SERVICE AGREEMENT
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "2.5rem", md: "4rem" }, color: "#002366", mb: 2 }}>
            Terms & <span style={{ color: "#FFB7C5" }}>Conditions</span>
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, opacity: 0.6 }}>
            Last Updated: April 2026
          </Typography>
          <Box sx={{ width: "80px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px", mt: 4, mx: "auto" }} />
        </Box>

        <Paper elevation={0} sx={{ borderRadius: "40px", overflow: "hidden", border: "1px solid rgba(0,35,102,0.1)" }}>
          
          {/* SECTION 1: BOOKING CONFIRMATION */}
          <Accordion elevation={0} defaultExpanded sx={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <BookingIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">1. Booking Confirmation</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                All bookings made through TripToJapan.in are subject to availability. A booking is only 
                considered officially confirmed after you have received a written confirmation from our 
                team and, where applicable, we have received the required advance payment.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* SECTION 2: PASSENGER RESPONSIBILITY */}
          <Accordion elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <PassengerIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">2. Passenger Responsibility</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                Passengers are responsible for providing accurate and up-to-date information at the time 
                of booking, including arrival time, flight number, pickup/drop locations, and passenger/luggage counts.
              </Typography>
              <Typography variant="body1" sx={{ color: "#d32f2f", fontWeight: 700, p: 2, bgcolor: "rgba(211, 47, 47, 0.05)", borderRadius: 2 }}>
                Note: Incorrect or incomplete information may result in service delays, missed transfers, or additional charges.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* SECTION 3: WAITING TIME POLICY */}
          <Accordion elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <WaitingIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">3. Waiting Time Policy</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Stack spacing={2}>
                <Box>
                  <Typography variant="subtitle1" fontWeight="800" color="#002366">Airport Pickups</Typography>
                  <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)" }}>60 minutes free waiting time from the actual flight arrival time.</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle1" fontWeight="800" color="#002366">Hotel & City Pickups</Typography>
                  <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)" }}>15 minutes free waiting time from the scheduled pickup time.</Typography>
                </Box>
                <Typography variant="body2" sx={{ fontStyle: "italic", opacity: 0.6 }}>
                  * Additional waiting time beyond these periods may be charged based on the vehicle type.
                </Typography>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* SECTION 4: LUGGAGE & CHILD SAFETY */}
          <Accordion elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LuggageIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">4. Luggage & Child Safety</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                Passengers must accurately declare the quantity of luggage at the time of booking. 
                Excess luggage may require a larger vehicle at an additional cost.
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                Child seats are available upon request and must be booked in advance. Extra charges may apply 
                depending on the service and vehicle type.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* SECTION 5: SERVICE HOURS & VEHICLE ALLOCATION */}
          <Accordion elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <VehicleIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">5. Service Hours & Vehicles</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                Our ground operations in Japan are available 24/7 to ensure seamless travel across all time zones.
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                While we strive to provide the exact vehicle requested, a similar or upgraded vehicle model 
                may be allocated based on fleet availability at the time of service.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* SECTION 6: ADDITIONAL CHARGES */}
          <Accordion elevation={0} sx={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <ChargesIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">6. Additional Charges</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", mb: 2 }}>
                Additional fees may apply in the following circumstances:
              </Typography>
              <Stack spacing={1} component="ul" sx={{ color: "rgba(0,0,0,0.7)", pl: 2 }}>
                {[
                  "Extra stops or detours during the journey.",
                  "Extended waiting time beyond the free periods.",
                  "Night service surcharges (usually between 22:00 and 05:00).",
                  "Special vehicle equipment or customization requests.",
                  "Transfers to or from remote areas outside standard city zones."
                ].map((text, i) => (
                  <Typography component="li" key={i} variant="body1">{text}</Typography>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* SECTION 7: FORCE MAJEURE */}
          <Accordion elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ py: 2, px: 4 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <ForceMajeureIcon sx={{ color: "#002366" }} />
                <Typography variant="h6" fontWeight="800">7. Force Majeure</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 4, pb: 4 }}>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                TripToJapan.in and our partners shall not be liable for delays or service failures caused 
                by circumstances beyond our reasonable control, including but not limited to: 
                heavy traffic, extreme weather conditions, natural disasters, sudden government restrictions, 
                and major public events or road closures.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </Paper>

      </Container>
    </Box>
  );
};

export default TermsConditions;
