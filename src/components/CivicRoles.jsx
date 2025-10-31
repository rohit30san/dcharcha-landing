import React from "react";
import {
  GiGraduateCap,
  GiFamilyHouse,
  GiVote,
  GiArchitectMask,
  GiArtificialHive,
} from "react-icons/gi";
import { motion } from "framer-motion";

const CivicRoles = () => {
  const roles = [
    {
      id: "students",
      title: "Students",
      description: "Shape the future through learning and advocacy",
      icon: (
        <GiGraduateCap className="text-5xl sm:text-6xl text-indigo-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      btnColor: "from-indigo-500 to-indigo-700",
      buttonText: "Inspire & Lead",
    },
    {
      id: "residents",
      title: "Residents",
      description: "Influence decisions that affect your community",
      icon: (
        <GiFamilyHouse className="text-5xl sm:text-6xl text-green-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      btnColor: "from-green-500 to-green-700",
      buttonText: "Act for Change",
    },
    {
      id: "officials",
      title: "Officials",
      description: "Connect with constituents and implement solutions",
      icon: (
        <GiVote className="text-5xl sm:text-6xl text-yellow-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      btnColor: "from-yellow-500 to-yellow-700",
      buttonText: "Lead with Purpose",
    },
    {
      id: "designers",
      title: "Designers",
      description: "Create spaces that foster community and engagement",
      icon: (
        <GiArchitectMask className="text-5xl sm:text-6xl text-pink-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      btnColor: "from-pink-500 to-pink-700",
      buttonText: "Design for Impact",
    },
    {
      id: "innovators",
      title: "Innovators",
      description: "Develop solutions for tomorrow's challenges",
      icon: (
        <GiArtificialHive className="text-5xl sm:text-6xl text-purple-600 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
      ),
      btnColor: "from-purple-500 to-purple-700",
      buttonText: "Build the Future",
    },
  ];

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10"
        >
          Civic Change Starts With You
        </motion.h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white p-5 sm:p-6 rounded-xl text-center shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {role.icon}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                  {role.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-6 min-h-[48px]">
                  {role.description}
                </p>
              </div>

              {/* Button */}
              <div className="mt-auto">
                <button
                  className={`bg-gradient-to-r ${role.btnColor} text-white font-semibold py-2 px-4 sm:px-5 w-full rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  {role.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-14 text-center"
        >
          <p className="text-lg sm:text-2xl italic text-gray-700 mb-6 sm:mb-8">
            Dcharcha gives you the power to reimagine and act—no matter who you are.
          </p>
          <a
            href="#share-dream"
            className="relative inline-block bg-[#005555] text-white font-semibold py-3 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-[#005555] opacity-40 blur-lg animate-pulse"></span>
            <span className="relative z-10">Join the Movement</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CivicRoles;
