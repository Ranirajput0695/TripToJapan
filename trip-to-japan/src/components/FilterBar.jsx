import React from 'react';
import { FiSliders, FiChevronDown } from 'react-icons/fi';

const FilterBar = () => {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar-content">
        <div className="breadcrumb-section">
          <nav className="breadcrumbs">
            <span>Japan Tour Packages</span>
            <span className="separator">/</span>
            <span className="current-page">Japan Classic Tours</span>
          </nav>
          <div className="filter-button">
            <FiSliders className="filter-icon" />
            <span className="filter-text">FILTER TOUR</span>
          </div>
        </div>
        
        <div className="sort-section">
          <div className="sort-dropdown">
            <span>Sort by latest</span>
            <FiChevronDown className="dropdown-icon" />
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .filter-bar-container {
          background-color: #000000; /* Black background */
          color: #ffffff; /* White text */
          width: 100%;
          padding: 20px 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin-top: 100px; /* Offset for fixed navbar */
          border-bottom: 1px solid #222;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .filter-bar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 20px;
        }

        .breadcrumb-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .breadcrumbs {
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.8;
        }

        .separator {
          opacity: 0.5;
        }

        .current-page {
          font-weight: 700;
          opacity: 1;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .filter-button:hover {
          color: #FFD700; /* Yellow hover effect */
        }

        .filter-icon {
          font-size: 18px;
          transform: rotate(90deg);
        }

        .sort-section {
          display: flex;
          align-items: center;
        }

        .sort-dropdown {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 20px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          gap: 40px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
          color: #fff;
        }

        .sort-dropdown:hover {
          background: #FFD700; /* Yellow background on hover */
          color: #000000; /* Black text on hover */
          border-color: #FFD700;
        }

        .dropdown-icon {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .filter-bar-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          
          .sort-section {
            width: 100%;
          }
          
          .sort-dropdown {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterBar;
