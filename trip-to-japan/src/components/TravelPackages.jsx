import React from "react";
import { FiCalendar, FiMapPin, FiClock, FiStar, FiArrowRight } from "react-icons/fi";

const TravelPackages = () => {
  const packages = [
    {
      title: "Japan Golden Route",
      duration: "6 Days",
      route: "Tokyo – Mount Fuji – Kyoto – Osaka",
      itinerary: [
        "Day 1: Arrival in Tokyo and airport transfer to hotel",
        "Day 2: Tokyo city sightseeing tour",
        "Day 3: Mount Fuji and Hakone sightseeing",
        "Day 4: Bullet train journey to Kyoto",
        "Day 5: Kyoto and Nara sightseeing",
        "Day 6: Transfer to Osaka airport for departure"
      ],
      tag: "MOST POPULAR",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Classic Japan Tour",
      duration: "7 Days",
      route: "Tokyo – Fuji – Kyoto – Osaka",
      desc: "Includes major sightseeing in Tokyo, Mount Fuji, Kyoto temples, and Osaka highlights.",
      tag: "BEST SELLER",
      image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Japan Family Tour",
      duration: "8 Days",
      route: "Tokyo – Kyoto – Osaka",
      highlights: [
        "Tokyo Disneyland",
        "Universal Studios Japan",
        "Family-friendly sightseeing"
      ],
      tag: "FAMILY SPECIAL",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cherry Blossom Japan Tour",
      duration: "Seasonal",
      route: "Tokyo – Kyoto – Osaka",
      desc: "Available during Sakura season (March–April). Experience Japan under a pink canopy.",
      tag: "SEASONAL",
      image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Japan Autumn Tour",
      duration: "Seasonal",
      route: "Kyoto – Tokyo – Nara",
      desc: "Available during autumn foliage season (October–November). Witness vibrant red maples.",
      tag: "SEASONAL",
      image: "https://images.unsplash.com/photo-1476917800583-43b82fdf98c8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="packages-section">
      <div className="container">
        
        {/* Intro */}
        <div className="packages-intro">
          <span className="subtitle">CURATED EXPERIENCES</span>
          <h2 className="title">Our Travel <span className="highlight">Packages</span></h2>
          <p className="description">
            We offer customized Japan travel packages designed for families, couples, groups, 
            corporate travelers, and individual tourists. Our packages are carefully planned 
            to provide comfort, convenience, and memorable travel experiences across Japan.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.duration === '6 Days' ? 'featured-card' : ''}`}>
              <div className="card-image">
                <img src={pkg.image} alt={pkg.title} />
                <div className="pkg-tag">{pkg.tag}</div>
                <div className="pkg-duration">
                  <FiClock className="icon" /> {pkg.duration}
                </div>
              </div>
              <div className="card-content">
                <h3 className="pkg-title">{pkg.title}</h3>
                <div className="pkg-route">
                  <FiMapPin className="icon" /> {pkg.route}
                </div>
                
                {pkg.itinerary && (
                  <ul className="pkg-itinerary">
                    {pkg.itinerary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {pkg.desc && <p className="pkg-desc">{pkg.desc}</p>}

                {pkg.highlights && (
                  <div className="pkg-highlights">
                    <strong>Includes:</strong>
                    <ul>
                      {pkg.highlights.map((h, i) => (
                        <li key={i}><FiStar className="star" /> {h}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="card-footer">
                  <button className="enquire-btn">
                    View Details <FiArrowRight className="arrow" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx="true">{`
        .packages-section {
          padding: 100px 0;
          background-color: #ffffff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .packages-intro {
          max-width: 800px;
          margin: 0 auto 60px auto;
          text-align: center;
        }

        .subtitle {
          display: block;
          color: #FFD700;
          font-weight: 800;
          letter-spacing: 2px;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .title {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .highlight {
          color: #FFD700;
        }

        .description {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
        }

        /* Grid */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 40px;
        }

        .package-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #eee;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
        }

        .package-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          border-color: #FFD700;
        }

        .featured-card {
          grid-column: span 1;
          border-width: 2px;
          border-color: rgba(255, 215, 0, 0.3);
        }

        .card-image {
          height: 250px;
          position: relative;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .package-card:hover .card-image img {
          transform: scale(1.1);
        }

        .pkg-tag {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #FFD700;
          color: #000;
          padding: 6px 14px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .pkg-duration {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0,0,0,0.7);
          color: #fff;
          padding: 6px 14px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(5px);
        }

        .card-content {
          padding: 30px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .pkg-title {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 15px;
          color: #1a1a1a;
        }

        .pkg-route {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #FFD700;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pkg-itinerary {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
          border-left: 2px solid #f0f0f0;
          padding-left: 20px;
        }

        .pkg-itinerary li {
          font-size: 14px;
          color: #666;
          margin-bottom: 10px;
          position: relative;
        }

        .pkg-itinerary li::before {
          content: '';
          position: absolute;
          left: -24px;
          top: 7px;
          width: 6px;
          height: 6px;
          background: #FFD700;
          border-radius: 50%;
        }

        .pkg-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }

        .pkg-highlights {
          margin-bottom: 25px;
        }

        .pkg-highlights strong {
          display: block;
          font-size: 14px;
          margin-bottom: 10px;
          color: #1a1a1a;
        }

        .pkg-highlights ul {
          list-style: none;
          padding: 0;
        }

        .pkg-highlights li {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .star {
          color: #FFD700;
          font-size: 12px;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #f5f5f5;
        }

        .enquire-btn {
          width: 100%;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
        }

        .enquire-btn:hover {
          background: #FFD700;
          color: #000;
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .enquire-btn:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .packages-grid { grid-template-columns: 1fr; }
          .title { font-size: 32px; }
        }
      `}</style>
    </section>
  );
};

export default TravelPackages;
