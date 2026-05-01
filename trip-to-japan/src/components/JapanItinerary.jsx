import React from 'react';
import { japanItinerary } from '../data/itineraryData';

/**
 * JapanItinerary Component
 * Generated via Antigravity Command
 * 
 * Features:
 * - Tailwind CSS styling
 * - Primary Color: #002366 (Dark Blue)
 * - Accent Color: #FFB6C1 (Pink)
 * - Responsive alternating grid layout
 * - Inclusions section at the bottom
 */
const JapanItinerary = () => {
  return (
    <div className="w-full bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* 🚀 Hero Header Section */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-16 text-center">
        <span className="text-[#FFB6C1] font-black tracking-widest text-sm uppercase mb-3 block">
          Exclusively Curated Signature Tour
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-[#002366] leading-tight mb-4">
          JAPAN HIGHLIGHTS <span className="text-[#FFB6C1]">EXPRESS</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          A 7 Nights / 8 Days journey through the most iconic landmarks of the Land of the Rising Sun.
        </p>
      </div>

      {/* 🏛 Step-by-Step Daily Itinerary */}
      <div className="max-w-7xl mx-auto px-4 space-y-24 pb-24">
        {japanItinerary.map((day, index) => (
          <div 
            key={day.day} 
            className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image Section with Hover Effect */}
            <div className="w-full md:w-1/2 relative group">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={day.image} 
                  alt={day.title} 
                  className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute top-6 left-6 bg-[#002366] text-white px-6 py-2 rounded-full font-black text-sm shadow-lg z-10">
                DAY 0{day.day}
              </div>
              {/* Decorative Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FFB6C1] rounded-full -z-10 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-2">
                <span className="text-[#FFB6C1] font-bold tracking-widest uppercase text-xs">
                  {day.location}
                </span>
                <h3 className="text-4xl font-black text-[#002366] leading-tight">
                  {day.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed text-justify font-normal">
                {day.description}
              </p>

              {/* Day Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {day.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-[#FFB6C1] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✔</span>
                    </div>
                    <span className="text-sm font-bold text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 📋 Professional Inclusions & Exclusions */}
      <div className="bg-[#002366] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inclusions */}
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
              <h4 className="text-3xl font-black text-[#FFB6C1] mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">✓</span>
                Tour Inclusions
              </h4>
              <ul className="space-y-4">
                {[
                  "2 Nights in Tokyo, 2 in Kyoto, 2 in Hiroshima, 1 in Osaka",
                  "Bullet Train (Ordinary Class Reserved Seat)",
                  "Daily Breakfast except arrival date",
                  "Private MPV Transfers throughout the trip",
                  "English Speaking Professional Guide",
                  "Miyajima Ferry tickets"
                ].map((item, idx) => (
                  <li key={idx} className="text-white/80 font-medium flex items-start gap-3">
                    <span className="text-[#FFB6C1] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
              <h4 className="text-3xl font-black text-red-400 mb-8 flex items-center gap-4">
                <span className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400">✕</span>
                Tour Exclusions
              </h4>
              <ul className="space-y-4">
                {[
                  "International airfares & Visa Fee",
                  "Travel insurance (compulsory)",
                  "Personal expenses (Laundry, Telephone, etc.)",
                  "Lunch and Dinner (unless specified)",
                  "Tips for guides and drivers"
                ].map((item, idx) => (
                  <li key={idx} className="text-white/80 font-medium flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <button className="bg-[#FFB6C1] text-[#002366] px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-colors duration-300 shadow-2xl">
              ENQUIRE ABOUT THIS PACKAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapanItinerary;
