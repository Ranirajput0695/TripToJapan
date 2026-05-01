import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./QuickInquiryModal.css";

const QuickInquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    adults: "1",
    children: "0",
    message: "Quick Inquiry from Header",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setStatus("Thank you! We will contact you soon.");
      setTimeout(() => {
        onClose();
        setFormData({ phone: "", email: "", adults: "1", children: "0", message: "Quick Inquiry from Header" });
        setStatus("");
      }, 2000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Error sending inquiry. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Plan Your <span className="highlight">Japan</span> Trip</h2>
        <p>Fill in your details and our experts will call you back.</p>
        
        <form onSubmit={handleSubmit}>
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

          <div className="form-row">
            <div className="input-group">
              <label>Adults</label>
              <select name="adults" value={formData.adults} onChange={handleChange}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label>Children</label>
              <select name="children" value={formData.children} onChange={handleChange}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit">BOOK A CALL NOW</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </div>
  );
};

export default QuickInquiryModal;
