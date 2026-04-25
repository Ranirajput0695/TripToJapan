import React, { useState } from "react";
import axios from "axios";
import "./QuickInquiryModal.css";

const QuickInquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "Quick Inquiry from Header",
  });

  const [status, setStatus] = useState({ submitting: false, msg: "" });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, msg: "" });

    try {
      await axios.post("http://localhost:5000/api/inquiries", formData);
      setStatus({ submitting: false, msg: "Success! We will call you back." });
      setTimeout(() => {
        onClose();
        setStatus({ submitting: false, msg: "" });
        setFormData({ fullName: "", phone: "", email: "", message: "Quick Inquiry from Header" });
      }, 2000);
    } catch (error) {
      setStatus({ submitting: false, msg: "Error. Please try again." });
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h3>Connect With Us</h3>
        <p>Choose how you'd like to reach our experts:</p>

        <div className="contact-options">
          <a href="tel:+919560439303" className="contact-btn india-call">
            <span className="btn-label">Call India</span>
            <span className="btn-number">+91 9560439303</span>
          </a>
          <a href="tel:+819032109839" className="contact-btn japan-call">
            <span className="btn-label">Call Japan</span>
            <span className="btn-number">+81 9032109839</span>
          </a>
          <a href="https://wa.me/919560439303" className="contact-btn whatsapp-btn" target="_blank" rel="noreferrer">
            <span className="btn-label">WhatsApp Us</span>
            <span className="btn-number">Chat Now</span>
          </a>
        </div>

        <div className="divider"><span>OR SEND AN INQUIRY</span></div>
        
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="fullName"
            placeholder="Your Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={status.submitting}>
            {status.submitting ? "Sending..." : "Submit"}
          </button>
        </form>
        {status.msg && <p className="status-message">{status.msg}</p>}
      </div>
    </div>
  );
};

export default QuickInquiryModal;
