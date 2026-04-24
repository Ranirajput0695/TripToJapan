import React from "react";

const IntroductionSection = () => {
  return (
    <section className="intro-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="badge">YOUR TRUSTED JAPAN TRAVEL PARTNER</div>
          <h1 className="title">
            Welcome to <span className="highlight">TripToJapan.in</span>
          </h1>
          <p className="description">
            TripToJapan.in is a Japan-based travel service platform powered by 
            <strong> HTC Group of Companies</strong>, providing professional ground travel arrangements 
            across Japan. We specialize in delivering reliable transportation, guided sightseeing, 
            customized FIT tours, and group travel services across major destinations in Japan.
          </p>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">🇯🇵</div>
              <p>With a dedicated operations team based in Japan, we ensure smooth travel experiences for travel agents, families, corporate groups, and individual travelers.</p>
            </div>
            <div className="info-item">
              <div className="info-icon">✨</div>
              <p>Whether you need airport transfers, sightseeing tours, activity tickets, or complete tour arrangements, our experienced team is ready to assist you with professional and timely services.</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .intro-section {
          background-color: #ffffff;
          background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/japan_travel_hero_1776955286433.png');
          background-size: cover;
          background-position: center;
          color: #000;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .intro-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .badge {
          display: inline-block;
          background: #FFD700;
          color: #000;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
          animation: fadeInDown 0.8s ease-out;
        }

        .title {
          font-size: 48px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
        }

        .highlight {
          color: #FFD700;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .description {
          font-size: 18px;
          line-height: 1.8;
          color: rgba(0, 0, 0, 0.7);
          margin-bottom: 48px;
          animation: fadeInUp 1s ease-out;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          text-align: left;
          animation: fadeInUp 1.2s ease-out;
        }

        .info-item {
          background: rgba(0, 0, 0, 0.02);
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .info-item:hover {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(255, 215, 0, 0.3);
          transform: translateY(-5px);
        }

        .info-icon {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .info-item p {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.6);
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .title { font-size: 32px; }
          .info-grid { grid-template-columns: 1fr; }
          .intro-section { padding: 60px 0; }
        }
      `}</style>
    </section>
  );
};

export default IntroductionSection;
