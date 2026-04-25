import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import QuickInquiryModal from "./QuickInquiryModal";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Tour Packages", path: "/packages" },
    { title: "Our Services", path: "/services" },
    { title: "Transport", path: "/transport" },
    { title: "About Us", path: "/about" },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isMenuOpen, isMobile]);

  return (
    <header style={{ 
      position: "fixed", 
      top: 0, 
      width: "100%", 
      zIndex: 1000,
      height: isMobile ? "85px" : "110px" // Fixed height to prevent jumps
    }}>
      
      {/* 🔝 TOP BAR */}
      <div style={{ 
        background: "#000", 
        color: "#FFD700", 
        borderBottom: "1px solid #222",
        height: "35px",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={containerStyle}>
          <span style={{ fontSize: isMobile ? "9px" : "12px", fontWeight: "600", letterSpacing: "0.5px" }}>
            PREMIUM JAPAN TOUR OPERATOR FOR INDIANS
          </span>
        </div>
      </div>

      {/* 🔻 MAIN NAVBAR */}
      <div style={{ 
        background: "rgba(0, 0, 0, 0.9)", 
        backdropFilter: "blur(15px)", 
        borderBottom: "1px solid rgba(255,215,0,0.1)",
        height: isMobile ? "50px" : "75px",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={containerStyle}>
          
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: isMobile ? "32px" : "45px",
                width: isMobile ? "32px" : "45px",        
                borderRadius: "50%",  
                objectFit: "cover",
                border: "1.5px solid #FFD700"
              }}
            />
            <span style={{ color: "#fff", fontWeight: "800", fontSize: isMobile ? "14px" : "20px", letterSpacing: "-0.5px" }}>
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
                  p: 1,
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

      {/* 📱 MOBILE COMPACT MENU - Floating & Stable */}
      <Collapse 
        in={isMenuOpen} 
        sx={{ 
          position: "fixed", // Changed to fixed for better stability
          top: "90px", 
          right: "15px", 
          width: "calc(100% - 30px)", 
          maxWidth: "300px",
          zIndex: 2001 
        }}
      >
        <Paper 
          elevation={15} 
          sx={{ 
            bgcolor: "rgba(10, 10, 10, 0.98)", 
            backdropFilter: "blur(20px)",
            color: "#fff", 
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(255,215,0,0.3)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.8)"
          }}
        >
          <Box sx={{ p: 1.5 }}>
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.path} 
                style={{
                  display: "block",
                  padding: "15px 20px",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "15px",
                  borderRadius: "10px",
                  transition: "0.2s",
                  marginBottom: "4px"
                }}
                className="mobile-nav-link"
              >
                {link.title}
              </Link>
            ))}
            <Box sx={{ p: 1, mt: 1 }}>
              <button 
                style={{ 
                  ...ctaButtonStyle, 
                  width: "100%", 
                  marginLeft: 0, 
                  padding: "15px",
                  borderRadius: "10px",
                  fontSize: "16px"
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
          background: rgba(255, 215, 0, 0.15);
          color: #FFD700 !important;
          transform: translateX(5px);
        }
      `}</style>

    </header>
  );
};

const containerStyle = {
  maxWidth: "1200px",
  width: "100%",
  margin: "auto",
  padding: "0 20px",
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