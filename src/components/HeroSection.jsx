import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import phonepp from "../assets/phoneapp.png";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-0 py-20 overflow-hidden isolate">
      {/* Optional Background Shape */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-10">
        {/* Add SVG or decorative bg here if needed */}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full flex justify-start items-center"
        >
          <img
            src={phonepp}
            alt="Phone Demo"
            className="object-contain w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] -ml-6 sm:ml-0"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center md:text-left px-6 sm:px-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Civic Dreams Begin{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-transparent bg-clip-text">
              With You
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-800 font-medium max-w-xl">
            Dcharcha is your space to imagine, share, and co-create the future of your neighborhood.
            Parks, pavements, policies — it all starts here.
          </p>

          {/* App Store Buttons */}
          <div className="mt-8 flex gap-4 justify-center md:justify-start items-center">
            <div className="flex flex-col items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Play Store Coming Soon"
                className="w-40 h-auto"
              />
              <span className="text-sm mt-1 text-gray-600">Coming Soon</span>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store Coming Soon"
                className="w-36 h-auto"
              />
              <span className="text-sm mt-1 text-gray-600">Coming Soon</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-700 font-medium text-sm sm:text-base">
            <div>
              <SparklesIcon className="w-6 h-6 text-[#195554] mb-2 mx-auto md:mx-0" />
              2,300+ Dreams Shared
            </div>
            <div>
              <SparklesIcon className="w-6 h-6 text-[#195554] mb-2 mx-auto md:mx-0" />
              120+ Cities Engaged
            </div>
            <div>
              <SparklesIcon className="w-6 h-6 text-[#195554] mb-2 mx-auto md:mx-0" />
              98% Community Approval
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
