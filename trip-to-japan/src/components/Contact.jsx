import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    travelDates: "",
    numTravelers: 1,
    services: "Standard Tour",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: serverTimestamp(),
      });

      setStatus({
        submitting: false,
        info: { error: false, msg: "Thank you! Your inquiry has been sent." },
      });

      // Construct WhatsApp Message
      const whatsappMsg = `New Inquiry:
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Travel Dates: ${formData.travelDates}
Travelers: ${formData.numTravelers}
Service: ${formData.services}
Message: ${formData.message}`;
      
      const encodedMsg = encodeURIComponent(whatsappMsg);
      const whatsappURL = `https://wa.me/919560439303?text=${encodedMsg}`;
      
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
      }, 1500);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        travelDates: "",
        numTravelers: 1,
        services: "Standard Tour",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus({
        submitting: false,
        info: { error: true, msg: "Something went wrong. Please try again." },
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Plan Your <span className="highlight">Dream Trip</span></h2>
        <p className="contact-subtitle">Fill out the form below and our experts will get back to you shortly.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Travel Dates</label>
              <input
                type="date"
                name="travelDates"
                value={formData.travelDates}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Number of Travelers</label>
              <input
                type="number"
                name="numTravelers"
                min="1"
                value={formData.numTravelers}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Services Required</label>
            <select name="services" value={formData.services} onChange={handleChange}>
              <option value="Standard Tour">Standard Tour</option>
              <option value="Luxury Tour">Luxury Tour</option>
              <option value="Custom Itinerary">Custom Itinerary</option>
              <option value="Transport Only">Transport Only</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your travel plans..."
            ></textarea>
          </div>

          <button type="submit" disabled={status.submitting} className="submit-btn">
            {status.submitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>

        {status.info.msg && (
          <div className={`status-msg ${status.info.error ? "error" : "success"}`}>
            {status.info.msg}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;