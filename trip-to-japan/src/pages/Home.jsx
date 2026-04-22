import React from "react";
import FilterBar from "../components/FilterBar";

const Home = () => {
  return (
    <main style={{ backgroundColor: "#111", minHeight: "100vh" }}>
      <FilterBar />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px", color: "#fff" }}>
        <h1 style={{ color: "#FFD700", marginBottom: "10px" }}>Vietnam Classic Tours</h1>
        <p style={{ opacity: 0.8, marginBottom: "40px" }}>Explore our curated selection of premium tours through Vietnam.</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "30px" }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} style={{ background: "#000", borderRadius: "15px", overflow: "hidden", border: "1px solid #333", transition: "transform 0.3s ease" }} className="tour-card">
              <div style={{ height: "240px", background: "#222", position: "relative" }}>
                <div style={{ position: "absolute", top: "15px", right: "15px", background: "#FFD700", color: "#000", padding: "4px 12px", borderRadius: "20px", fontWeight: "bold", fontSize: "12px" }}>BEST SELLER</div>
              </div>
              <div style={{ padding: "25px" }}>
                <div style={{ color: "#FFD700", fontSize: "12px", fontWeight: "bold", marginBottom: "10px", letterSpacing: "1px" }}>HANOI • HALONG BAY • HOI AN</div>
                <h3 style={{ margin: "0 0 15px 0", fontSize: "20px" }}>Ultimate Vietnam Discovery {i}</h3>
                <div style={{ display: "flex", gap: "15px", marginBottom: "20px", fontSize: "13px", opacity: 0.6 }}>
                  <span>8 Days</span>
                  <span>Max 12 People</span>
                </div>
                <div style={{ borderTop: "1px solid #333", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: "12px", display: "block", opacity: 0.5 }}>From</span>
                    <span style={{ fontWeight: "bold", color: "#FFD700", fontSize: "22px" }}>$1,499</span>
                  </div>
                  <button style={{ background: "#FFD700", color: "#000", border: "none", padding: "12px 24px", borderRadius: "30px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s ease" }}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tour-card:hover {
          transform: translateY(-10px);
          border-color: #FFD700;
        }
        button:hover {
          background: #fff !important;
          transform: scale(1.05);
        }
      `}</style>
    </main>
  );
};

export default Home;