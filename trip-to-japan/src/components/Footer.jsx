import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { Typography } from "@mui/material";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  ArrowForwardIos
} from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo-container">
            <img src={logo} alt="TripToJapan Logo" className="footer-logo" />
            <span className="footer-brand-name">TRIP TO JAPAN</span>
          </Link>
          <p className="footer-description">
            TripToJapan.in is a premium Japan-based travel service platform powered by HTC Group. 
            We provide professional ground travel arrangements, luxury transportation, and curated 
            sightseeing experiences across Japan.
          </p>
          <div className="footer-social">
            <a href="#" className="social-icon-btn"><Facebook fontSize="small" /></a>
            <a href="#" className="social-icon-btn"><Instagram fontSize="small" /></a>
            <a href="#" className="social-icon-btn"><LinkedIn fontSize="small" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Home</Link></li>
            <li><Link to="/packages"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Tour Packages</Link></li>
            <li><Link to="/services"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Our Services</Link></li>
            <li><Link to="/about"><ArrowForwardIos sx={{ fontSize: '10px' }} /> About Us</Link></li>
            <li><Link to="/contact"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/services"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Airport Transfers</Link></li>
            <li><Link to="/services"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Private Tours</Link></li>
            <li><Link to="/services"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Intercity Travel</Link></li>
            <li><Link to="/transport"><ArrowForwardIos sx={{ fontSize: '10px' }} /> Luxury Vehicles</Link></li>
            <li><Link to="/packages"><ArrowForwardIos sx={{ fontSize: '10px' }} /> FIT Arrangements</Link></li>
          </ul>
        </div>

        {/* Global Presence */}
        <div className="footer-section">
          <h3>Global Presence</h3>
          <div className="footer-contact-item">
            <LocationOn className="footer-contact-icon" />
            <div>
              <Typography variant="body2" sx={{ fontWeight: '800', color: '#FFB7C5', mb: 0.5 }}>JAPAN (HQ)</Typography>
              <span>Tochigi-Ken, Oyama-shi, Japan</span>
            </div>
          </div>
          <div className="footer-contact-item">
            <LocationOn className="footer-contact-icon" />
            <div>
              <Typography variant="body2" sx={{ fontWeight: '800', color: '#FFB7C5', mb: 0.5 }}>USA OFFICE</Typography>
              <span>123 Luxury Way, Beverly Hills, CA 90210</span>
            </div>
          </div>
          <div className="footer-contact-item">
            <LocationOn className="footer-contact-icon" />
            <div>
              <Typography variant="body2" sx={{ fontWeight: '800', color: '#FFB7C5', mb: 0.5 }}>UK OFFICE</Typography>
              <span>45 Royal Gardens, Kensington, London</span>
            </div>
          </div>
          <div className="footer-contact-item">
            <LocationOn className="footer-contact-icon" />
            <div>
              <Typography variant="body2" sx={{ fontWeight: '800', color: '#FFB7C5', mb: 0.5 }}>AUSTRALIA OFFICE</Typography>
              <span>78 Harbor View, Sydney, NSW 2000</span>
            </div>
          </div>
          <div className="footer-contact-item">
            <Phone className="footer-contact-icon" />
            <span>+91 9560439303 (Global)</span>
          </div>
          <div className="footer-contact-item">
            <Email className="footer-contact-icon" />
            <span>info@triptojapan.in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            © {currentYear} TripToJapan.in | Powered by HTC Group of Companies. All Rights Reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
