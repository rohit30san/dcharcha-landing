import React from "react";
import {
  GiGraduateCap,
  GiFamilyHouse,
  GiVote,
  GiArchitectMask,
  GiArtificialHive,
} from "react-icons/gi";

const CivicRoles = () => {
  const roles = [
    {
      id: "students",
      title: "Students",
      description: "Shape the future through learning and advocacy",
      icon: <GiGraduateCap className="text-6xl text-indigo-600 mb-4 mx-auto" />,
    },
    {
      id: "residents",
      title: "Residents",
      description: "Influence decisions that affect your community",
      icon: <GiFamilyHouse className="text-6xl text-green-600 mb-4 mx-auto" />,
    },
    {
      id: "officials",
      title: "Officials",
      description: "Connect with constituents and implement solutions",
      icon: <GiVote className="text-6xl text-yellow-600 mb-4 mx-auto" />,
    },
    {
      id: "designers",
      title: "Designers",
      description: "Create spaces that foster community and engagement",
      icon: <GiArchitectMask className="text-6xl text-pink-600 mb-4 mx-auto" />,
    },
    {
      id: "innovators",
      title: "Innovators",
      description: "Develop solutions for tomorrow's challenges",
      icon: <GiArtificialHive className="text-6xl text-purple-600 mb-4 mx-auto" />,
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Civic Change Starts With You
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              {role.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{role.title}</h3>
              <p className="text-gray-600 text-sm">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-2xl italic text-gray-700">
            Dcharcha gives you the power to reimagine and act—no matter who you are.
          </p>
          <a
            href="#share-dream"
            className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </div>
  );
};

export default CivicRoles;
