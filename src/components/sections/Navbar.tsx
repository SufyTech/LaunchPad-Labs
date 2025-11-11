import React, { useState } from "react";
import rocketImg from "../../assets/rocket.png"; // adjust path if needed
import { Menu, X } from "lucide-react"; // for hamburger icons (already available in shadcn/lucide-react setup)

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f3f7f8]/80 backdrop-blur-md border-b border-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={rocketImg}
            alt="Rocket"
            className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">
            <span className="text-blue-600">LaunchPad</span>{" "}
            <span className="text-gray-800">Labs</span>
          </h1>
        </div>

        {/* Middle: Nav Links (Desktop only) */}
        <div className="hidden md:flex justify-around pl-20 space-x-8 text-gray-700 font-medium">
          <a href="#how" className="hover:text-blue-600 transition">
            How It Works
          </a>
          <a href="#work" className="hover:text-blue-600 transition">
            Our Work
          </a>
          <a href="#process" className="hover:text-blue-600 transition">
            Our Process
          </a>
          <a href="#founder" className="hover:text-blue-600 transition">
            Founder
          </a>
          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
        </div>

        {/* Right: CTA Button (hidden on small) */}
        <a
          href="#book"
          className="hidden sm:inline-block bg-gradient-to-r border-[2px] border-[#08cbfd] from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition font-medium"
        >
          Book A Call
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            <a
              href="#how"
              className="hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#work"
              className="hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Our Work
            </a>
            <a
              href="#process"
              className="hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Our Process
            </a>
            <a
              href="#founder"
              className="hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Founder
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>

            {/* CTA in mobile dropdown */}
            <a
              href="#book"
              className="bg-gradient-to-r border-[2px] border-[#08cbfd] from-[#0F93FF] to-[#003BB9] text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] transition font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Book A Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
