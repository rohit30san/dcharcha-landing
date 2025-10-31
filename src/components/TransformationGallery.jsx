import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import before1 from "../assets/before2.jpeg";
import after1 from "../assets/after2.jpeg";
import before3 from "../assets/before1.jpeg";
import after3 from "../assets/after1.jpeg";
import before4 from "../assets/before4.jpeg";
import after4 from "../assets/after4.jpeg";
import before6 from "../assets/before6.jpeg";
import after6 from "../assets/after6.jpeg";

const transformations = [
  {
    before: before1,
    after: after1,
    label: "Waterlogged Roads",
  },
  {
    before: before3,
    after: after3,
    label: "Unused Space Reborn",
  },
  {
    before: before4,
    after: after4,
    label: "Waste to Wonder",
  },
  {
    before: before6,
    after: after6,
    label: "Damaged Roads Fixed",
  },
];

export default function TransformationGallery() {
  const [showAfter, setShowAfter] = useState(
    Array(transformations.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => prev.map((v) => !v));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10 text-center md:text-left leading-tight"
      >
        Before → <span className="text-[#005555]">Dream World</span>
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl"
        >
          {transformations.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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

              {/* Overlay Label */}
              <div className="absolute bottom-0 w-full bg-black/50 backdrop-blur-sm text-white text-xs sm:text-sm md:text-base px-3 py-2 z-10 flex justify-between items-center">
                <span className="font-medium tracking-wide truncate">
                  {item.label}
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#00ffff] font-semibold ml-2"
                >
                  {showAfter[idx] ? "AFTER" : "BEFORE"}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Reimagining Spaces,{" "}
            <span className="text-[#005555]">One Dream at a Time</span>
          </h3>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Discover how vision and collaboration breathe new life into forgotten
            corners of our cities. What once felt ordinary now shines with purpose,
            color, and creativity — redefining how communities connect with their
            surroundings.
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
            Every{" "}
            <span className="text-[#005555] font-semibold">before-and-after</span>{" "}
            is more than a visual — it’s a story of transformation powered by
            people who dared to dream and act. Together, we’re shaping spaces that
            inspire change and spark hope.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 bg-[#005555] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
          >
            Be Part of the Change
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
