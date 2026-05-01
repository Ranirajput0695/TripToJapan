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
  Typography,
  Container
} from "@mui/material";
import { 
  Menu as MenuIcon, 
  Close as CloseIcon, 
  Phone as PhoneIcon, 
  SupportAgent as SupportIcon,
  Verified as VerifiedIcon
} from "@mui/icons-material";

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
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    }}>
      
      {/* 🔝 TOP BAR - Premium Glass Blue */}
      <Box sx={{ 
        background: "rgba(0, 35, 102, 0.95)", 
        color: "#FFB7C5", 
        height: scrolled ? "0px" : "40px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        transition: "all 0.3s ease",
        backdropFilter: "blur(5px)",
        borderBottom: "1px solid rgba(255, 183, 197, 0.1)"
      }}>
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <VerifiedIcon sx={{ fontSize: 14 }} />
            <Typography sx={{ fontSize: isMobile ? "10px" : "11px", fontWeight: "700", letterSpacing: "1px" }}>
              JAPAN'S #1 TRUSTED TOUR OPERATOR
            </Typography>
          </Box>
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <SupportIcon sx={{ fontSize: 14 }} />
                <Typography sx={{ fontSize: "11px", fontWeight: "600" }}>
                  24/7 SUPPORT: +91 9560439303
                </Typography>
              </Box>
            </Box>
          )}
        </Container>
      </Box>

      {/* 🔻 MAIN NAVBAR - Elegant Glassmorphism */}
      <Box sx={{ 
        background: scrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 183, 197, 0.9)", 
        backdropFilter: "blur(20px)",
        height: isMobile ? "70px" : scrolled ? "80px" : "95px",
        display: "flex",
        alignItems: "center",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,35,102,0.05)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }}>
        <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          {/* Logo & Brand */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: isMobile ? "10px" : "15px", textDecoration: "none" }}>
            <Box sx={{ position: "relative" }}>
              <img
                src={logo}
                alt="logo"
                style={{
                  height: isMobile ? "50px" : scrolled ? "60px" : "70px",
                  width: isMobile ? "50px" : scrolled ? "60px" : "70px",        
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: scrolled ? "2px solid #002366" : "2px solid #fff",
                  transition: "all 0.4s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
              />
            </Box>
            <Box>
              <Typography sx={{ 
                color: "#002366", 
                fontWeight: "900", 
                fontSize: isMobile ? "18px" : scrolled ? "22px" : "26px", 
                lineHeight: 1,
                letterSpacing: "-0.5px",
                textTransform: "uppercase",
                transition: "all 0.4s ease"
              }}>
                Trip to <span style={{ color: scrolled ? "#E08E9D" : "#fff" }}>Japan</span>
              </Typography>
              {!isMobile && !scrolled && (
                <Typography sx={{ fontSize: "10px", fontWeight: "700", color: "#002366", opacity: 0.7, mt: 0.5, letterSpacing: 1 }}>
                  PREMIUM TRAVEL EXPERIENCES
                </Typography>
              )}
            </Box>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box component="nav" sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.title} 
                    to={link.path} 
                    style={{
                      ...linkStyle,
                      color: isActive ? "#002366" : "rgba(0,35,102,0.8)",
                      position: "relative",
                      padding: "10px 16px",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Typography sx={{ fontWeight: isActive ? "800" : "600", fontSize: "14px" }}>
                      {link.title}
                    </Typography>
                    {isActive && (
                      <Box sx={{ 
                        position: "absolute", 
                        bottom: "6px", 
                        left: "16px", 
                        right: "16px", 
                        height: "3px", 
                        bgcolor: "#002366", 
                        borderRadius: "10px" 
                      }} />
                    )}
                  </Link>
                );
              })}
              
              <Box sx={{ ml: 2 }}>
                <button 
                  style={{
                    ...ctaButtonStyle,
                    background: "#002366",
                    color: "#fff",
                    borderRadius: "50px",
                    padding: scrolled ? "10px 22px" : "14px 28px",
                    fontSize: "13px",
                    boxShadow: "0 10px 20px rgba(0,35,102,0.2)"
                  }} 
                  onClick={() => setIsModalOpen(true)}
                >
                  <PhoneIcon sx={{ fontSize: 16, mr: 1 }} />
                  ENQUIRE NOW
                </button>
              </Box>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              sx={{ 
                color: "#002366",
                bgcolor: "rgba(0,35,102,0.05)",
                "&:hover": { bgcolor: "rgba(0,35,102,0.1)" }
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}

        </Container>
      </Box>

      {/* 📱 MOBILE MENU */}
      <Collapse in={isMenuOpen}>
        <Paper elevation={10} sx={{ 
          bgcolor: "rgba(255, 255, 255, 0.95)", 
          backdropFilter: "blur(20px)",
          borderRadius: "0 0 30px 30px",
          borderTop: "1px solid rgba(0,35,102,0.05)"
        }}>
          <Box sx={{ p: 3 }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.title} 
                  to={link.path} 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 20px",
                    color: "#002366",
                    textDecoration: "none",
                    fontWeight: isActive ? "800" : "600",
                    borderRadius: "15px",
                    background: isActive ? "rgba(255, 183, 197, 0.2)" : "transparent",
                    marginBottom: "5px"
                  }}
                >
                  {link.title}
                  {isActive && <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#002366" }} />}
                </Link>
              );
            })}
            <Box sx={{ pt: 3 }}>
              <button 
                style={{ 
                  ...ctaButtonStyle, 
                  width: "100%", 
                  marginLeft: 0, 
                  padding: "18px", 
                  borderRadius: "15px",
                  justifyContent: "center",
                  background: "#002366"
                }}
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

const linkStyle = {
  textDecoration: "none",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "inline-block"
};

const ctaButtonStyle = {
  border: "none",
  fontWeight: "800",
  letterSpacing: "0.5px",
  cursor: "pointer",
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  display: "flex",
  alignItems: "center",
  textTransform: "uppercase"
};

export default Navbar;