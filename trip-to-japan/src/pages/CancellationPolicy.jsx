import React from "react";
import { 
  Box, 
  Container, 
  Typography, 
  Stack, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Divider
} from "@mui/material";
import { 
  AssignmentReturn as RefundIcon,
  Update as ModificationIcon,
  FlightTakeoff as DelayIcon,
  CreditCard as PaymentIcon,
  ReportProblem as WarningIcon
} from "@mui/icons-material";

const CancellationPolicy = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#1a1a1a", pt: { xs: "100px", md: "140px" }, pb: 15 }}>
      <Container maxWidth="md">
        
        {/* 🚀 HEADER */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography variant="overline" sx={{ letterSpacing: 4, color: "#FFB7C5", fontWeight: "800" }}>
            REFUND GUIDELINES
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: "900", fontSize: { xs: "2.5rem", md: "4rem" }, color: "#002366", mb: 2 }}>
            Cancellation <span style={{ color: "#FFB7C5" }}>& Refund</span>
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700, opacity: 0.6 }}>
            Last Updated: April 2026
          </Typography>
          <Box sx={{ width: "80px", height: "4px", bgcolor: "#FFB7C5", borderRadius: "10px", mt: 4, mx: "auto" }} />
        </Box>

        {/* 📊 CANCELLATION TIERS TABLE */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#002366", mb: 4, textAlign: "center" }}>
            Standard Cancellation <span style={{ color: "#FFB7C5" }}>Tiers</span>
          </Typography>
          <TableContainer component={Paper} elevation={0} sx={{ borderRadius: "20px", border: "1px solid rgba(0,35,102,0.1)", overflow: "hidden" }}>
            <Table>
              <TableHead sx={{ bgcolor: "#002366" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 800, py: 3 }}>Cancellation Window</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 800, py: 3 }} align="center">Refund Amount</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 800, py: 3 }} align="right">Policy</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ "&:hover": { bgcolor: "rgba(255,183,197,0.05)" } }}>
                  <TableCell sx={{ fontWeight: 700, py: 4 }}>More than 48 hours before pickup</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 900, color: "#2e7d32", fontSize: "1.2rem" }}>100%</TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>Full Refund</TableCell>
                </TableRow>
                <TableRow sx={{ "&:hover": { bgcolor: "rgba(255,183,197,0.05)" } }}>
                  <TableCell sx={{ fontWeight: 700, py: 4 }}>24 – 48 hours before pickup</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 900, color: "#ed6c02", fontSize: "1.2rem" }}>50%</TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>50% Cancellation Fee</TableCell>
                </TableRow>
                <TableRow sx={{ bgcolor: "rgba(211, 47, 47, 0.02)", "&:hover": { bgcolor: "rgba(211, 47, 47, 0.05)" } }}>
                  <TableCell sx={{ fontWeight: 700, py: 4 }}>Less than 24 hours before pickup</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 900, color: "#d32f2f", fontSize: "1.2rem" }}>0%</TableCell>
                  <TableCell align="right" sx={{ color: "text.secondary" }}>100% Cancellation Fee</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Paper elevation={0} sx={{ p: { xs: 4, md: 8 }, borderRadius: "40px", border: "1px solid rgba(0,35,102,0.05)", bgcolor: "#f8fafc" }}>
          <Stack spacing={6}>
            
            {/* 🛑 NO-SHOW & DELAYS */}
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <WarningIcon sx={{ color: "#FFB7C5" }} />
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366" }}>No-Show & Delays</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                <strong>No-Show Policy:</strong> Failure to appear at the designated pickup location within the 
                standard waiting time (60 mins for airports, 15 mins for city) without prior notice will result 
                in the booking being marked as a "No-Show" and no refund will be issued.
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                <strong>Significant Flight Delays:</strong> We understand that flight schedules can change. 
                In cases of significant, verifiable flight delays, cancellation or rescheduling charges may be 
                waived or modified at our discretion.
              </Typography>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* 💳 REFUND LOGISTICS */}
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <PaymentIcon sx={{ color: "#FFB7C5" }} />
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366" }}>Refund Logistics</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8, mb: 2 }}>
                <strong>Processing Time:</strong> Once approved, refunds are typically processed within 
                <strong> 7 – 14 business days</strong>.
              </Typography>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                <strong>Method:</strong> Refunds will only be issued back to the <strong>original payment method</strong> 
                used during the booking process.
              </Typography>
            </Box>

            <Divider sx={{ opacity: 0.1 }} />

            {/* 🔄 MODIFICATION POLICY */}
            <Box>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <ModificationIcon sx={{ color: "#FFB7C5" }} />
                <Typography variant="h5" sx={{ fontWeight: 800, color: "#002366" }}>Modification Policy</Typography>
              </Stack>
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.7)", lineHeight: 1.8 }}>
                We allow changes to your pickup time, location, or vehicle type up to <strong>24 hours before 
                the scheduled service</strong>. All modifications are subject to vehicle availability and 
                may result in price adjustments.
              </Typography>
            </Box>

          </Stack>
        </Paper>

      </Container>
    </Box>
  );
};

export default CancellationPolicy;
