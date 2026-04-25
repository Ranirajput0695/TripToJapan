import React, { useState } from "react";
import logo from "../assets/Logo.png";
import QuickInquiryModal from "./QuickInquiryModal";
import { Link } from "react-router-dom";
import { 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Box,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Tour Packages", path: "/packages" },
    { title: "Our Services", path: "/services" },
    { title: "Transport", path: "/transport" },
    { title: "About Us", path: "/about" },
  ];

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      
      {/* 🔝 TOP BAR */}
      <div style={{ background: "#000", color: "#FFD700", borderBottom: "1px solid #222" }}>
        <div style={container}>
          <span style={{ fontSize: "10px", md: "12px", fontWeight: "600", letterSpacing: "0.5px" }}>
            PREMIUM JAPAN TOUR OPERATOR FOR INDIANS
          </span>
        </div>
      </div>

      {/* 🔻 MAIN NAVBAR */}
      <div style={{ background: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid #222" }}>
        <div style={container}>
          
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
              <button style={ctaButton} onClick={() => setIsModalOpen(true)}>Book A Call</button>
            </nav>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <button 
                style={{ ...ctaButton, padding: "6px 12px", fontSize: "12px", marginLeft: 0 }} 
                onClick={() => setIsModalOpen(true)}
              >
                Book
              </button>
              <IconButton 
                onClick={toggleDrawer(true)} 
                sx={{ color: "#FFD700" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { bgcolor: "#111", color: "#fff", width: "250px" }
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={toggleDrawer(false)} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 0 }}>
          {navLinks.map((link) => (
            <ListItem 
              button 
              key={link.title} 
              component={Link} 
              to={link.path} 
              onClick={toggleDrawer(false)}
              sx={{ borderBottom: "1px solid #222", py: 2 }}
            >
              <ListItemText 
                primary={link.title} 
                primaryTypographyProps={{ fontWeight: "700", fontSize: "1.1rem" }} 
              />
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2 }}>
            <Button 
              fullWidth 
              variant="contained" 
              sx={{ bgcolor: "#FFD700", color: "#000", fontWeight: "800" }}
              onClick={() => { setIsModalOpen(true); setIsDrawerOpen(false); }}
            >
              Book A Call
            </Button>
          </ListItem>
        </List>
      </Drawer>

      <QuickInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

const container = {
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

const ctaButton = {
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

const Button = ({ children, sx, onClick, fullWidth }) => (
  <button 
    onClick={onClick}
    style={{ 
      width: fullWidth ? "100%" : "auto",
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      ...sx
    }}
  >
    {children}
  </button>
);

export default Navbar;