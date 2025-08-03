import React from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/Dcharcha_Logo-01.webp";
import termsPDF from "../assets/Terms_of_Service.pdf";
import privacyPDF from "../assets/Privacy_Policy.pdf";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white p-2 rounded-full shadow-md">
                <img
                  src={logo}
                  alt="Dcharcha Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Dcharcha</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              A collaborative platform to share ideas, connect with community,
              and explore knowledge together.
            </p>
            <div className="flex gap-3 mt-2">
              {[FaTwitter, FaFacebookF, FaLinkedinIn].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={`Social media icon ${idx}`}
                >
                  <Icon className="text-sm" />
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
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

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
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

          {/* Optional - Contact or Newsletter section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-2">dcharcha123@gmail.com</p>
            <p className="text-sm text-gray-400">+91 9908996747</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs sm:text-sm text-gray-500">
          &copy; 2025 Dcharcha. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
