import { useState } from "react";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
    }
  };

  return (
    <section id="share-dream" className="py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Share Your Dream</h2>
      <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700">
        The Dcharcha app is your space to express your vision for your street, neighborhood, or city.
        From murals to better public spaces, your dream matters.
      </p>

      {/* App Store Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            className="w-40 md:w-48 hover:scale-105 transition-transform"
          />
          <span className="text-sm text-gray-600">Coming Soon</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="w-40 md:w-48 hover:scale-105 transition-transform"
          />
          <span className="text-sm text-gray-600">Coming Soon</span>
        </div>
      </div>

      {/* Register for BETA */}
      <div className="p-6 max-w-5xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
          🚀 Register for BETA Access
        </h3>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Sign up to be the first to try the Dcharcha app and help shape your city's story.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center gap-4 justify-center flex-wrap"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full md:w-1/4 px-4 py-3 rounded-lg border border-gray-300 bg-white/30 backdrop-blur-md text-gray-900 placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full md:w-1/4 px-4 py-3 rounded-lg border border-gray-300 bg-white/30 backdrop-blur-md text-gray-900 placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone (Optional)"
              className="w-full md:w-1/4 px-4 py-3 rounded-lg border border-gray-300 bg-white/30 backdrop-blur-md text-gray-900 placeholder-gray-600 shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition-all"
            >
              Get Beta Invite
            </button>
          </form>
        ) : (
          <p className="text-green-700 font-semibold text-lg mt-4">Thanks! You’re on the list. 🎉</p>
        )}
      </div>
    </section>
  );
}
