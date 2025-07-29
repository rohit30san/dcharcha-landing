import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Dcharcha_Logo-01.png";
import termsPDF from "../assets/Terms_of_Service.pdf";
import privacyPDF from "../assets/Privacy_Policy.pdf";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white p-2 rounded-full shadow-md">
                <img
                  src={logo}
                  alt="Dcharcha Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Dcharcha</h3>
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              A collaborative platform to share ideas, connect with community,
              and explore knowledge together.
            </p>
            <div className="flex gap-3">
              {[FaTwitter, FaFacebookF, FaLinkedinIn].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="text-sm" />
                </button>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Home", id: "hero" },
                { label: "Gallery", id: "gallery" },
                { label: "Why Dcharcha", id: "why-dcharcha" },
                { label: "Pillars", id: "pillars" },
                { label: "Share Your Dream", id: "share-dream" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href={termsPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href={privacyPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs sm:text-sm text-gray-500">
          &copy; 2025 Dcharcha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
