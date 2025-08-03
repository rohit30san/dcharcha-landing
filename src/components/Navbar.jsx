import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Dcharcha_Logo-01.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "Gallery", to: "gallery" },
    { label: "How it Works?", to: "pillars" }, // renamed from "Pillars"
    { label: "Impact", to: "civic" },
    { label: "Why Dcharcha", to: "why" },
    { label: "Share Dream", to: "share" }, // points to "share" section
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero">
          <img
            src={logo}
            alt="Dcharcha Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className="cursor-pointer text-gray-700 hover:text-[#195554] font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3 shadow">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className="block text-gray-700 hover:text-[#195554] font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
