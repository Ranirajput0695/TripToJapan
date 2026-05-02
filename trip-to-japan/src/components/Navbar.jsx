import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
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
  Verified as VerifiedIcon,
  Person as UserIcon
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

      {/* 🔻 MAIN NAVBAR - Transparent Overlay */}
      <Box sx={{
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        height: isMobile ? "70px" : scrolled ? "85px" : "100px",
        display: "flex",
        alignItems: "center",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none"
      }}>
        <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

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
                  border: scrolled ? "2px solid #002366" : "2px solid rgba(255,255,255,0.8)",
                  transition: "all 0.4s ease",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
              />
            </Box>
            <Box>
              <Typography sx={{
                color: scrolled ? "#002366" : "#ffffff",
                fontWeight: "900",
                fontSize: isMobile ? "18px" : scrolled ? "22px" : "26px",
                lineHeight: 1,
                letterSpacing: "-0.5px",
                textTransform: "uppercase",
                transition: "all 0.4s ease",
                textShadow: !scrolled ? "0 2px 4px rgba(0,0,0,0.3)" : "none"
              }}>
                TRIP TO <span style={{ color: "#E91E63" }}>JAPAN</span>
              </Typography>
              {!isMobile && !scrolled && (
                <Typography sx={{ fontSize: "10px", fontWeight: "700", color: "#ffffff", opacity: 0.9, mt: 0.5, letterSpacing: 1 }}>
                  PREMIUM TRAVEL EXPERIENCES
                </Typography>
              )}
            </Box>
          </Link>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box component="nav" sx={{ display: "flex", alignItems: "center", gap: "25px" }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.title}
                    to={link.path}
                    style={{
                      ...linkStyle,
                      color: isActive ? (scrolled ? "#002366" : "#E91E63") : (scrolled ? "rgba(0,35,102,0.8)" : "#ffffff"),
                      position: "relative",
                    }}
                  >
                    <Box sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      {isActive && (
                        <Box sx={{
                          width: "6px",
                          height: "6px",
                          bgcolor: scrolled ? "#444" : "#ffffff",
                          transform: "rotate(45deg)",
                          position: "absolute",
                          top: "-12px"
                        }} />
                      )}
                      <Typography sx={{
                        fontWeight: isActive ? "700" : "600",
                        fontSize: "15px",
                        textShadow: !scrolled ? "0 1px 2px rgba(0,0,0,0.3)" : "none"
                      }}>
                        {link.title}
                      </Typography>
                      {isActive && (
                        <Box sx={{
                          position: "absolute",
                          bottom: "-6px",
                          width: "24px",
                          height: "2px",
                          bgcolor: "#E91E63",
                          borderRadius: "2px"
                        }} />
                      )}
                    </Box>
                  </Link>
                );
              })}

              <Box sx={{ ml: 2, display: "flex", alignItems: "center", gap: 2.5 }}>
                <button
                  style={{
                    ...ctaButtonStyle,
                    background: "linear-gradient(135deg, #FF1493 0%, #E91E63 100%)",
                    color: "#fff",
                    borderRadius: "50px",
                    padding: scrolled ? "10px 24px" : "12px 28px",
                    fontSize: "14px",
                    boxShadow: "0 6px 20px rgba(233, 30, 99, 0.3)",
                    fontFamily: "'Inter', sans-serif"
                  }}
                  onClick={() => setIsModalOpen(true)}
                >
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
                color: scrolled ? "#002366" : "#ffffff",
                bgcolor: scrolled ? "rgba(0,35,102,0.05)" : "rgba(255,255,255,0.2)",
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
                  background: "#E91E63"
                }}
                onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              >
                ENQUIRE NOW
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