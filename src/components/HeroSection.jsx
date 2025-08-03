import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import before from "../assets/before3.webp";
import after from "../assets/after3.webp";

const slideTexts = [
  {
    title: (
      <>
        Civic Dreams Begin{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-transparent bg-clip-text">
          With You
        </span>
      </>
    ),
    subtitle:
      "Dcharcha is your space to imagine, share, and co-create the future of your neighborhood. Parks, pavements, policies — it all starts here.",
  },
  {
    title: (
      <>
        <span className="bg-gradient-to-r from-green-600 to-teal-500 text-transparent bg-clip-text">
          Register for Beta
        </span>
      </>
    ),
    subtitle:
      "Be the first to shape civic change. Join our beta testers and help design your city's future.",
  },
  {
    title: (
      <>
        <span className="bg-gradient-to-r from-yellow-600 to-pink-500 text-transparent bg-clip-text">
          One Dream at a Time
        </span>
      </>
    ),
    subtitle:
      "Every idea matters. Inspire transformation with your dream — big or small.",
  },
];

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideTexts.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    startAutoSlide(); // restart timer on dot click
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-0 py-12 overflow-hidden isolate">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-10" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Compare Slider */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full flex justify-center items-center px-6"
        >
          <div className="w-full max-w-3xl h-auto relative">
            {isMobile ? (
              <div className="relative w-full rounded-2xl overflow-hidden h-auto aspect-[16/9]">
                <motion.img
                  key="before"
                  src={before}
                  alt="Before"
                  initial={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                  animate={{
                    opacity: 0,
                    scale: 1.05,
                    filter: "brightness(0.8)",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                />
                <motion.img
                  key="after"
                  src={after}
                  alt="After"
                  initial={{ opacity: 0, scale: 0.95, filter: "brightness(0.8)" }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "brightness(1)",
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
                />
              </div>
            ) : (
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={before}
                    alt="Before"
                    className="rounded-2xl"
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={after}
                    alt="After"
                    className="rounded-2xl"
                  />
                }
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "1rem",
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Right: Auto-Sliding Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left px-6 sm:px-12 max-w-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
                {slideTexts[currentSlide].title}
              </h1>
              <p className="mt-8 text-xl sm:text-2xl text-gray-800 font-medium max-w-xl">
                {slideTexts[currentSlide].subtitle}
              </p>

            {currentSlide === 1 && (
              <div className="mt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById("share-dream");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-7 py-3 text-lg text-white bg-green-600 hover:bg-green-700 rounded-xl shadow transition"
                >
                  Register Now
                </button>
              </div>
            )}
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="mt-6 flex justify-center md:justify-start gap-3">
            {slideTexts.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                  currentSlide === index
                    ? "bg-indigo-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* App Store Buttons */}
          <div className="mt-10 flex gap-6 justify-center md:justify-start items-center">
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Play Store Coming Soon"
                className="w-44 h-auto"
              />
              <span className="text-sm mt-1 text-gray-600">Coming Soon</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store Coming Soon"
                className="w-40 h-auto"
              />
              <span className="text-sm mt-1 text-gray-600">Coming Soon</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
