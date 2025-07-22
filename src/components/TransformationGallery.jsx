import React, { useEffect, useState } from "react";
import phonedemo from "../assets/phoneapp1trns.png"

const transformations = [
  {
    front: "https://images.unsplash.com/photo-1560185008-5bf9c1e76c61?auto=format&fit=crop&w=800&q=80",
    back: "https://images.unsplash.com/photo-1613545325292-611b5fc44556?auto=format&fit=crop&w=800&q=80",
    label: "Urban Renewal",
  },
  {
    front: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    back: "https://images.unsplash.com/photo-1628890922256-8ad32f3ac86e?auto=format&fit=crop&w=800&q=80",
    label: "Community Mural",
  },
  {
    front: "https://images.unsplash.com/photo-1573164713347-df1e9d5f35a7?auto=format&fit=crop&w=800&q=80",
    back: "https://images.unsplash.com/photo-1618761041974-5a5030527b8b?auto=format&fit=crop&w=800&q=80",
    label: "Green Walkway",
  },
  {
    front: "https://images.unsplash.com/photo-1613545325292-611b5fc44556?auto=format&fit=crop&w=800&q=80",
    back: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    label: "Public Space Upgrade",
  },
  {
    front: "https://images.unsplash.com/photo-1628890922256-8ad32f3ac86e?auto=format&fit=crop&w=800&q=80",
    back: "https://images.unsplash.com/photo-1573164713347-df1e9d5f35a7?auto=format&fit=crop&w=800&q=80",
    label: "Market Revamp",
  },
  {
    front: "https://images.unsplash.com/photo-1618761041974-5a5030527b8b?auto=format&fit=crop&w=800&q=80",
    back: "https://images.unsplash.com/photo-1560185008-5bf9c1e76c61?auto=format&fit=crop&w=800&q=80",
    label: "Park Transformation",
  },
];

export default function TransformationGallery() {
  const [flippedIndexes, setFlippedIndexes] = useState(
    Array(transformations.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedIndexes((prev) =>
        prev.map((val) => !val)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-4 md:px-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-left">
        ✨ Before → <span className="text-[#005555]">Dream World</span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full lg:w-2/3">
          {transformations.map((item, idx) => (
            <div
              key={idx}
              className="w-full h-52 [perspective:1000px]"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flippedIndexes[idx] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                  <img
                    src={item.front}
                    alt={`${item.label} before`}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                  <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm px-2 py-1 rounded-b-xl">
                    {item.label} (Before)
                  </div>
                </div>
                <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={item.back}
                    alt={`${item.label} after`}
                    className="w-full h-full object-cover rounded-xl shadow-md"
                  />
                  <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm px-2 py-1 rounded-b-xl">
                    {item.label} (After)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side phone image */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img
            src={phonedemo}
            alt="Phone Demo"
            className="w-[340px] sm:w-[380px] md:w-[420px] lg:w-[460px] xl:w-[500px] drop-shadow-xl rounded-xl transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}
