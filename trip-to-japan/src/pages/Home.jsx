import React from "react";
import FilterBar from "../components/FilterBar";
import IntroductionSection from "../components/IntroductionSection";
import ServicesAndDestinations from "../components/ServicesAndDestinations";
import TravelPackages from "../components/TravelPackages";

const Home = () => {
  const japanTours = [
    { id: 1, title: "Tokyo & Kyoto Explorer", locations: "TOKYO • HAKONE • KYOTO", price: "$2,499", duration: "10 Days" },
    { id: 2, title: "Hokkaido Winter Wonderland", locations: "SAPPORO • OTARU • NISEKO", price: "$2,999", duration: "8 Days" },
    { id: 3, title: "Southern Japan Heritage", locations: "OSAKA • HIROSHIMA • FUKUOKA", price: "$2,299", duration: "12 Days" },
    { id: 4, title: "Japan Alpine Route", locations: "NAGOYA • TAKAYAMA • KANAZAWA", price: "$2,699", duration: "9 Days" },
    { id: 5, title: "Mt. Fuji & Onsen Retreat", locations: "TOKYO • MT. FUJI • IZU", price: "$1,899", duration: "6 Days" },
    { id: 6, title: "Hidden Gems of Shikoku", locations: "MATSUYAMA • TAKAMATSU • KOCHI", price: "$2,799", duration: "11 Days" },
  ];

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      <FilterBar />
      
      <IntroductionSection />
      
      <TravelPackages />

      <ServicesAndDestinations />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", color: "#000" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "700" }}>Featured <span style={{ color: "#FFD700" }}>Japan Tours</span></h2>
          <p style={{ opacity: 0.5 }}>Showing {japanTours.length} results</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "30px" }}>
          {japanTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="card-image-container">
                <div className="best-seller-badge">BEST SELLER</div>
              </div>
              <div style={{ padding: "25px" }}>
                <div className="location-tag">{tour.locations}</div>
                <h3 className="tour-title">{tour.title}</h3>
                <div className="tour-meta">
                  <span>{tour.duration}</span>
                  <span>Max 12 People</span>
                </div>
                <div className="card-footer">
                  <div>
                    <span className="price-label">From</span>
                    <span className="price-value">{tour.price}</span>
                  </div>
                  <button className="book-button">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tour-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #eee;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        .tour-card:hover {
          transform: translateY(-10px);
          border-color: #FFD700;
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.15);
        }
        .card-image-container {
          height: 240px;
          background: #f0f0f0;
          position: relative;
          background-image: linear-gradient(45deg, #f0f0f0 25%, #f5f5f5 25%, #f5f5f5 50%, #f0f0f0 50%, #f0f0f0 75%, #f5f5f5 75%, #f5f5f5 100%);
          background-size: 40px 40px;
        }
        .best-seller-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #FFD700;
          color: #000;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 1px;
        }
        .location-tag {
          color: #FFD700;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 12px;
          letter-spacing: 1.5px;
        }
        .tour-title {
          margin: 0 0 15px 0;
          font-size: 22px;
          font-weight: 700;
          color: #1a1a1a;
        }
        .tour-meta {
          display: flex;
          gap: 15px;
          fontSize: 13px;
          opacity: 0.5;
          margin-bottom: 25px;
          color: #000;
        }
        .card-footer {
          border-top: 1px solid #eee;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .price-label {
          font-size: 11px;
          display: block;
          opacity: 0.5;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #000;
        }
        .price-value {
          font-weight: 800;
          color: #000;
          font-size: 24px;
        }
        .book-button {
          background: #000;
          color: #fff;
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .book-button:hover {
          background: #FFD700;
          color: #000;
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
};

export default Home;