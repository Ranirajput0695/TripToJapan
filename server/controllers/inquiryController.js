const { db, admin } = require("../config/firebaseAdmin");
const nodemailer = require("nodemailer");

// Email Transporter (Advise user to use App Passwords for Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASS || "your-app-password",
  },
});

const submitInquiry = async (req, res) => {
  console.log("📩 Received Inquiry Request:", req.body);
  try {

    const {
      fullName,
      email,
      phone,
      travelDates,
      numTravelers,
      services,
      message,
    } = req.body;

    // Simple validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Full Name, Email, and Phone Number are required.",
      });
    }

    const inquiryData = {
      fullName,
      email,
      phone,
      travelDates: travelDates || "Not specified",
      numTravelers: numTravelers || 1,
      services: services || "General Inquiry",
      message: message || "",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection("inquiries").add(inquiryData);

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kaahyapraji658@gmail.com", // Admin Email
      subject: `New Inquiry from ${fullName} - TripToJapan`,
      text: `
        New Inquiry Details:
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Travel Dates: ${travelDates}
        Travelers: ${numTravelers}
        Service: ${services}
        Message: ${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email Error:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully!",
      id: docRef.id,
    });
  } catch (error) {

    console.error("Error saving inquiry:", error);
    res.status(500).json({
      success: false,
      message: `Server Error: ${error.message}. Please check if Firestore is enabled in your Firebase console.`,
      error: error.message,
    });

  }
};

module.exports = { submitInquiry };
