import React from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}>
      
      {/* 🔝 TOP BAR */}
      <div style={{ background: "#000", color: "#FFD700", borderBottom: "1px solid #222" }}>
        <div style={container}>
          <span style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.5px" }}>
            PREMIUM JAPAN TOUR OPERATOR FOR INDIANS
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            <span style={{ fontSize: "12px", cursor: "pointer" }}>Help Center</span>
            <span style={{ fontSize: "12px", cursor: "pointer" }}>Inr ▾</span>
          </div>
        </div>
      </div>

      {/* 🔻 MAIN NAVBAR */}
      <div style={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(10px)", borderBottom: "1px solid #222" }}>
        <div style={container}>
          
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
          </div>

          {/* Menu */}
          <nav style={{ display: "flex", alignItems: "center" }}>
            <a href="/" style={link}>Home</a>
            <a href="/services" style={link}>Tour Packages</a>
            <a href="/tours" style={link}>Inspirations</a>
            <a href="/about" style={link}>About Us</a>
            <button style={ctaButton}>Book A Call</button>
          </nav>
        </div>
      </div>
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

/* 🔗 MENU STYLE */
const link = {
  margin: "0 18px",
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
  borderRadius: "6px",
  fontWeight: "700",
  fontSize: "14px",
  marginLeft: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

export default Navbar;