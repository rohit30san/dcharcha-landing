import { useState } from "react";
import {
  RocketLaunchIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const backendURL = import.meta.env.VITE_BACKEND_URL;

export default function ShareDream() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendURL}/api/submit-form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
      } else alert("Submission failed. Please try again.");
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <section id="share-dream" className="py-16 sm:py-20 px-4 sm:px-6 text-center">
      {/* HEADER */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        Share Your <span className="text-[#005555]">Dream</span>
      </h2>

      <p className="text-base sm:text-lg md:text-xl mb-10 sm:mb-12 max-w-2xl mx-auto text-gray-700 leading-relaxed">
        The <span className="font-semibold text-[#005555]">Dcharcha</span> app is your space to express
        your vision for your street, neighborhood, or city — from murals to better public spaces,
        your dream matters.
      </p>

      {/* APP STORE SECTION */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-14 sm:mb-16">
        {[
          {
            img: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
            label: "Coming Soon",
          },
          {
            img: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
            label: "Coming Soon",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto max-w-[240px]"
          >
            <img
              src={item.img}
              alt={item.label}
              className="w-36 sm:w-40 md:w-48 hover:scale-105 transition-transform"
            />
            <span className="text-sm text-gray-600 mt-3">{item.label}</span>
          </div>
        ))}
      </div>

      {/* BETA ACCESS SECTION */}
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 max-w-4xl mx-auto border border-gray-100">
        <div className="flex justify-center mb-5 sm:mb-6">
          <RocketLaunchIcon className="h-8 sm:h-10 w-8 sm:w-10 text-[#005555]" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Register for <span className="text-[#005555]">BETA Access</span>
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto px-2 sm:px-0">
          Sign up to be among the first to explore Dcharcha and help shape the future of your city.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4"
          >
            {/* NAME FIELD */}
            <div className="relative w-full sm:w-[45%] md:w-[22%]">
              <UserIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-[#005555] focus:outline-none transition-all"
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="relative w-full sm:w-[45%] md:w-[22%]">
              <EnvelopeIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-[#005555] focus:outline-none transition-all"
              />
            </div>

            {/* PHONE FIELD */}
            <div className="relative w-full sm:w-[45%] md:w-[22%]">
              <PhoneIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone (Optional)"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-[#005555] focus:outline-none transition-all"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#005555] hover:bg-[#007777] text-white font-semibold rounded-lg shadow transition-all"
            >
              Get Beta Invite
            </button>
          </form>
        ) : (
          <p className="text-[#005555] font-semibold text-lg mt-6">
            Thanks! You’re officially on the list.
          </p>
        )}
      </div>
    </section>
  );
}
