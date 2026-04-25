import React, { useState } from "react";
import logo from "../assets/Logo.png";
import QuickInquiryModal from "./QuickInquiryModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      
      {/* 🔝 TOP BAR */}
      <div style={{ background: "#000", color: "#FFD700", borderBottom: "1px solid #222" }}>
        <div style={container}>
          <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.5px" }}>
            PREMIUM JAPAN TOUR OPERATOR FOR INDIANS
          </span>
          {/* Currency/Help removed */}
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
                height: "45px",
                width: "45px",        
                borderRadius: "50%",  
                objectFit: "cover",
                border: "2px solid #FFD700"
              }}
            />
            <span style={{ color: "#fff", fontWeight: "800", fontSize: "20px", letterSpacing: "-0.5px" }}>
              TRIP TO <span style={{ color: "#FFD700" }}>JAPAN</span>
            </span>
          </Link>

          {/* Menu */}
          <nav style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/packages" style={linkStyle}>Tour Packages</Link>
            <Link to="/services" style={linkStyle}>Our Services</Link>
            <Link to="/transport" style={linkStyle}>Transport</Link>
            <Link to="/about" style={linkStyle}>About Us</Link>
            <button style={ctaButton} onClick={() => setIsModalOpen(true)}>Book A Call</button>
          </nav>

        </div>
      </div>

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

export default Navbar;