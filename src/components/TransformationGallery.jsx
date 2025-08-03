import React, { useEffect, useState } from "react";
import before1 from "../assets/before6.webp";
import after1 from "../assets/after6.webp";
import before3 from "../assets/before3.webp";
import after3 from "../assets/after3.webp";
import before4 from "../assets/before4.webp";
import after4 from "../assets/after4.webp";
import before5 from "../assets/before5.webp";
import after5 from "../assets/after5.webp";

const transformations = [
  {
    before: before1,
    after: after1,
    label: "Urban Renewal",
  },
  {
    before: before3,
    after: after3,
    label: "Community Mural",
  },
  {
    before: before4,
    after: after4,
    label: "Green Walkway",
  },
  {
    before: before5,
    after: after5,
    label: "Public Space Upgrade",
  },
];

export default function TransformationGallery() {
  const [showAfter, setShowAfter] = useState(
    Array(transformations.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => prev.map((val) => !val));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-22 px-4 md:px-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10 text-left leading-tight">
        ✨ Before → <span className="text-[#005555]">Dream World</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Side Grid */}
        <div className="grid grid-cols-2 gap-6 flex-1 w-full">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={item.before}
                alt={`${item.label} before`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  showAfter[idx] ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src={item.after}
                alt={`${item.label} after`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  showAfter[idx] ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm px-3 py-2 z-10">
                {item.label} ({showAfter[idx] ? "After" : "Before"})
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Text */}
        <div className="flex-1 max-w-xl pt-3">
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-left leading-tight">
            Transforming Spaces,{" "}
            <span className="text-[#005555]">One Dream at a Time</span>
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Explore real transformations happening in public spaces around us.
            From neglected paths to vibrant walkways, from empty walls to
            vibrant murals — Dcharcha showcases how collective imagination
            reshapes our surroundings. Every before-and-after tells a story of
            progress, art, and shared dreams.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            These visuals reflect more than physical changes — they capture the
            spirit of a community-driven future. Join the movement and
            reimagine the world with Dcharcha. ✨
          </p>
        </div>
      </div>
    </div>
  );
}
