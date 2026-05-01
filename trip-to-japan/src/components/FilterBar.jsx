import React from 'react';
import { FiSliders, FiChevronDown } from 'react-icons/fi';

const FilterBar = () => {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar-content">
        <div className="breadcrumb-section">
           <div className="filter-button">
              <FiSliders className="filter-icon" />
              <span>FILTER TOURS</span>
           </div>
        </div>
        
        <div className="sort-section">
           <div className="sort-dropdown">
              <span>SORT BY: POPULARITY</span>
              <FiChevronDown className="dropdown-icon" />
           </div>
        </div>
      </div>


      <style jsx="true">{`
        .filter-bar-container {
          background-color: #002366; /* Deep Blue background */
          color: #ffffff; /* White text */
          width: 100%;
          padding: 20px 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          margin-top: 140px; /* Offset for fixed navbar */
          border-bottom: 1px solid rgba(255, 183, 197, 0.2);
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .filter-bar-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }

        .breadcrumb-section {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          font-size: 16px;
          cursor: pointer;
          transition: color 0.3s ease;
          color: #FFB7C5;
        }

        .filter-button:hover {
          color: #fff;
        }

        .filter-icon {
          font-size: 18px;
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
          font-weight: 700;
        }

        .sort-dropdown:hover {
          background: #FFB7C5; /* Pink background on hover */
          color: #002366; /* Blue text on hover */
          border-color: #FFB7C5;
        }

        .dropdown-icon {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .filter-bar-container {
            margin-top: 110px;
          }
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
