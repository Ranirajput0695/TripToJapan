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
  Paper,
  Typography
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, Phone as PhoneIcon, QuestionAnswer as ChatIcon } from "@mui/icons-material";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Destination", path: "/destinations" },
    { title: "Tour Packages", path: "/packages" },
    { title: "Our Services", path: "/services" },
    { title: "Transport", path: "/transport" },
    { title: "About Us", path: "/about" },
  ];

  return (
    <header style={{ 
      position: "fixed", 
      top: 0, 
      width: "100%", 
      zIndex: 1000,
      transition: "box-shadow 0.3s ease",
      boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.15)" : "none"
    }}>
      
      {/* 🔝 TOP BAR (Now Fixed Height to prevent "Hilling") */}
      <div style={{ 
        background: "#002366", 
        color: "#FFB7C5", 
        height: "35px",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(255, 183, 197, 0.1)"
      }}>
        <div style={containerStyle}>
          <span style={{ fontSize: isMobile ? "9px" : "12px", fontWeight: "800", letterSpacing: "1.5px" }}>
            JAPAN'S #1 TRUSTED TOUR OPERATOR
          </span>
          {!isMobile && (
            <span style={{ fontSize: "11px", fontWeight: "700" }}>
              24/7 SUPPORT: +91 9560439303
            </span>
          )}
        </div>
      </div>

      {/* 🔻 MAIN NAVBAR (Fixed Height for Stability) */}
      <div style={{ 
        background: scrolled ? "rgba(255, 183, 197, 0.98)" : "#FFB7C5", 
        backdropFilter: scrolled ? "blur(10px)" : "none",
        height: isMobile ? "75px" : "100px",
        display: "flex",
        alignItems: "center",
        borderBottom: "3px solid #002366", 
        transition: "background 0.3s ease"
      }}>
        <div style={containerStyle}>
          
          {/* Logo & Brand */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: isMobile ? "12px" : "20px", textDecoration: "none" }}>
            <img
              src={logo}
              alt="logo"
              style={{
                height: isMobile ? "60px" : "85px",
                width: isMobile ? "60px" : "85px",        
                borderRadius: "50%",
                objectFit: "cover",
                border: "2.5px solid #002366",
              }}
            />
            <Typography sx={{ 
              color: "#002366", 
              fontWeight: "900", 
              fontSize: isMobile ? "20px" : "28px", 
              letterSpacing: "-0.5px",
              textTransform: "uppercase"
            }}>
              TRIP TO JAPAN
            </Typography>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <nav style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", // Reduced gap to fit all items
              flexWrap: "nowrap" // Prevent wrapping
            }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.path} 
                  style={{
                    ...linkStyle,
                    color: location.pathname === link.path ? "#fff" : "#002366",
                    background: location.pathname === link.path ? "#002366" : "transparent",
                    padding: "8px 12px", // Slightly reduced horizontal padding
                    borderRadius: "8px",
                    whiteSpace: "nowrap", // Ensure text stays on one line
                  }}
                >
                  {link.title}
                </Link>
              ))}
              <button 
                style={{
                  ...ctaButtonStyle,
                  whiteSpace: "nowrap", // Prevent button text wrapping
                  padding: "10px 20px" // Slightly more compact button
                }} 
                onClick={() => setIsModalOpen(true)}
              >
                <PhoneIcon sx={{ fontSize: 18, mr: 1 }} />
                ENQUIRE NOW
              </button>
            </nav>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={() => setIsMenuOpen(!isMenuOpen)} sx={{ color: "#002366" }}>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}

        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <Collapse in={isMenuOpen}>
        <Paper elevation={0} sx={{ bgcolor: "#FFB7C5", borderRadius: 0 }}>
          <Box sx={{ p: 2 }}>
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                to={link.path} 
                style={{
                  display: "block",
                  padding: "15px",
                  color: "#002366",
                  textDecoration: "none",
                  fontWeight: "800",
                  borderBottom: "1px solid rgba(0,35,102,0.1)"
                }}
              >
                {link.title}
              </Link>
            ))}
            <Box sx={{ pt: 2 }}>
              <button 
                style={{ ...ctaButtonStyle, width: "100%", marginLeft: 0, padding: "15px", borderRadius: "12px" }}
                onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              >
                BOOK A CALL
              </button>
            </Box>
          </Box>
        </Paper>
      </Collapse>

      <QuickInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

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
  margin: "0 5px",
  textDecoration: "none",
  fontWeight: "800",
  fontSize: "14px",
  transition: "all 0.3s ease",
  display: "inline-block"
};

const ctaButtonStyle = {
  background: "#002366",
  color: "#fff",
  border: "none",
  padding: "12px 24px",
  borderRadius: "10px",
  fontWeight: "900",
  fontSize: "14px",
  marginLeft: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 15px rgba(0,35,102,0.2)",
  display: "flex",
  alignItems: "center"
};

export default Navbar;