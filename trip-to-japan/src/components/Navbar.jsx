import React, { useState } from "react";
import logo from "../assets/Logo.png";
import QuickInquiryModal from "./QuickInquiryModal";
import { Link } from "react-router-dom";
import { 
  IconButton, 
  Box,
  useMediaQuery,
  useTheme,
  Collapse,
  Paper
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Tour Packages", path: "/packages" },
    { title: "Our Services", path: "/services" },
    { title: "Transport", path: "/transport" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      
      {/* 🔝 TOP BAR */}
      <div style={{ background: "#000", color: "#FFD700", borderBottom: "1px solid #222" }}>
        <div style={containerStyle}>
          <span style={{ fontSize: isMobile ? "9px" : "12px", fontWeight: "600", letterSpacing: "0.5px" }}>
            PREMIUM JAPAN TOUR OPERATOR FOR INDIANS
          </span>
        </div>
      </div>

      {/* 🔻 MAIN NAVBAR */}
      <div style={{ background: "rgba(0, 0, 0, 0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,215,0,0.1)" }}>
        <div style={containerStyle}>
          
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: isMobile ? "35px" : "45px",
                width: isMobile ? "35px" : "45px",        
                borderRadius: "50%",  
                objectFit: "cover",
                border: "2px solid #FFD700"
              }}
            />
            <span style={{ color: "#fff", fontWeight: "800", fontSize: isMobile ? "16px" : "20px", letterSpacing: "-0.5px" }}>
              TRIP TO <span style={{ color: "#FFD700" }}>JAPAN</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <nav style={{ display: "flex", alignItems: "center" }}>
              {navLinks.map((link) => (
                <Link key={link.title} to={link.path} style={linkStyle}>{link.title}</Link>
              ))}
              <button style={ctaButtonStyle} onClick={() => setIsModalOpen(true)}>Book A Call</button>
            </nav>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                sx={{ 
                  color: "#FFD700", 
                  bgcolor: "transparent",
                  "&:hover": { bgcolor: "rgba(255,215,0,0.1)" }
                }}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          )}

        </div>
      </div>

      {/* 📱 MOBILE COMPACT MENU - Transparent & Compact */}
      <Collapse in={isMenuOpen} sx={{ position: "absolute", top: "100%", right: "20px", width: "220px", zIndex: 999 }}>
        <Paper 
          elevation={10} 
          sx={{ 
            mt: 1,
            bgcolor: "rgba(0, 0, 0, 0.8)", 
            backdropFilter: "blur(20px)",
            color: "#fff", 
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(255,215,0,0.2)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
          }}
        >
          <Box sx={{ p: 1 }}>
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 20px",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                  borderRadius: "8px",
                  transition: "0.3s",
                }}
                className="mobile-nav-link"
              >
                {link.title}
              </Link>
            ))}
            <Box sx={{ p: 1 }}>
              <button 
                style={{ 
                  ...ctaButtonStyle, 
                  width: "100%", 
                  marginLeft: 0, 
                  padding: "12px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(255,215,0,0.2)" 
                }}
                onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              >
                Book A Call
              </button>
            </Box>
          </Box>
        </Paper>
      </Collapse>

      <QuickInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        .mobile-nav-link:hover {
          background: rgba(255, 215, 0, 0.1);
          color: #FFD700 !important;
        }
      `}</style>
    </header>
  );
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "12px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const linkStyle = {
  margin: "0 15px",
  textDecoration: "none",
  color: "#fff",
  fontWeight: "600",
  fontSize: "14px",
  transition: "color 0.3s ease"
};

const ctaButtonStyle = {
  background: "#FFD700",
  color: "#000",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  fontWeight: "800",
  fontSize: "14px",
  marginLeft: "15px",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

export default Navbar;