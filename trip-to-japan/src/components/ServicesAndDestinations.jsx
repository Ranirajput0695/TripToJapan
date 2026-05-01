import React from "react";
import { 
  FiTruck, FiMap, FiUsers, FiTag, FiCalendar, FiCompass,
  FiShield, FiSmile, FiDollarSign, FiMessageCircle, FiHeart
} from "react-icons/fi";

const ServicesAndDestinations = () => {
  const services = [
    { icon: <FiTruck />, title: "Airport Transfers", desc: "Seamless transfers across all major Japanese airports." },
    { icon: <FiMap />, title: "Private Sightseeing", desc: "Expert-guided tours tailored to your interests." },
    { icon: <FiCalendar />, title: "FIT Tour Arrangements", desc: "Customized independent travel experiences." },
    { icon: <FiUsers />, title: "Group Tour Management", desc: "Professional coordination for large groups." },
    { icon: <FiTag />, title: "Activity & Attraction Tickets", desc: "Skip-the-line access to top Japan attractions." },
    { icon: <FiCompass />, title: "Intercity Transfers", desc: "Reliable ground transport between Japan's cities." },
    { icon: <FiHeart />, title: "Customized Itineraries", desc: "Expertly planned Japan travel routes." },
  ];

  const destinations = [
    "Tokyo", "Osaka", "Kyoto", "Nara", "Mount Fuji", "Hakone", "Hiroshima", "Nagoya", "Fukuoka"
  ];

  const whyChooseUs = [
    { icon: <FiShield />, title: "Japan-Based Local Company", desc: "Operating directly from the heart of Japan." },
    { icon: <FiUsers />, title: "Experienced Ground Team", desc: "Professional local staff ensuring smooth operations." },
    { icon: <FiTruck />, title: "Reliable Transportation", desc: "Safe and punctual travel arrangements." },
    { icon: <FiDollarSign />, title: "Competitive Pricing", desc: "Best value for premium travel services." },
    { icon: <FiSmile />, title: "Support for Travel Agents", desc: "Dedicated B2B partnership programs." },
    { icon: <FiCalendar />, title: "Custom Tour Planning", desc: "Personalized service for every traveler." },
    { icon: <FiMessageCircle />, title: "English Support Available", desc: "Easy communication with our global team." },
  ];

  return (
    <section className="services-destinations">
      <div className="container">
        
        {/* KEY SERVICES */}
        <div className="section-block">
          <div className="section-header">
            <span className="subtitle">EXPERIENCE EXCELLENCE</span>
            <h2 className="section-title">Our Key <span className="highlight">Services</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* POPULAR DESTINATIONS */}
        <div className="section-block">
          <div className="section-header">
            <span className="subtitle">EXPLORE THE BEAUTY</span>
            <h2 className="section-title">Popular Japan <span className="highlight">Destinations</span></h2>
          </div>
          <div className="destinations-grid">
            {destinations.map((dest, index) => (
              <div key={index} className="dest-pill">
                <span className="dest-dot"></span>
                {dest}
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <div className="section-block why-us-block">
          <div className="section-header">
            <span className="subtitle">THE TRIPTOJAPAN ADVANTAGE</span>
            <h2 className="section-title">Why Choose <span className="highlight">TripToJapan.in</span></h2>
          </div>
          <div className="why-us-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-us-card">
                <div className="why-us-icon">{item.icon}</div>
                <div className="why-us-content">
                  <h3 className="why-us-card-title">{item.title}</h3>
                  <p className="why-us-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx="true">{`
        .services-destinations {
          padding: 80px 0;
          background-color: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-block {
          margin-bottom: 100px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .subtitle {
          display: block;
          color: #002366;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 12px;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: 36px;
          font-weight: 800;
          color: #1a1a1a;
        }

        .highlight {
          color: #FFB7C5;
          text-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 25px;
        }

        .service-card {
          background: #fdfdfd;
          padding: 40px 30px;
          border-radius: 24px;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #FFB7C5;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .service-icon {
          font-size: 32px;
          color: #FFB7C5;
          margin-bottom: 20px;
        }

        .service-card-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #002366;
        }

        .service-card-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        /* Destinations Grid */
        .destinations-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .dest-pill {
          background: #f8fafc;
          padding: 12px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          color: #002366;
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .dest-pill:hover {
          background: #FFB7C5;
          border-color: #FFB7C5;
          color: #002366;
          transform: scale(1.05);
        }

        .dest-dot {
          width: 8px;
          height: 8px;
          background: #FFB7C5;
          border-radius: 50%;
        }

        /* Why Choose Us Grid */
        .why-us-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .why-us-card {
          display: flex;
          gap: 20px;
          background: #fff;
          padding: 25px;
          border-radius: 20px;
          border: 1px solid #f0f0f0;
          transition: all 0.3s ease;
        }

        .why-us-card:hover {
          background: #fdfdfd;
          border-color: #FFB7C5;
          box-shadow: 0 5px 15px rgba(0,0,0,0.02);
        }

        .why-us-icon {
          font-size: 24px;
          color: #FFB7C5;
          margin-top: 5px;
        }

        .why-us-card-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #002366;
        }

        .why-us-card-desc {
          font-size: 14px;
          color: #666;
          line-height: 1.5;
        }

        .why-us-block {
          background: #f8fafc;
          padding: 60px 40px;
          border-radius: 40px;
          margin-bottom: 0;
          border: 1px solid #e2e8f0;
        }

        @media (max-width: 768px) {
          .section-title { font-size: 28px; }
          .why-us-block { padding: 40px 20px; }
          .why-us-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default ServicesAndDestinations;
