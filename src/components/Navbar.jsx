import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon package for mobile menu

const Navbar = ({classname}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items stored as an array of objects
  const navLinks = [
    
    { name: "TEAM", path: "/team" },
    { name: "NEWS", path: "/news" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT US", path: "/about" },
    { name: "CONTACT US", path: "/contact" },
    { name: "AUGUST CONFERENCE", path: "/august-conference" },

  ];

  return (
    <nav className={`${classname}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3 ">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logo2.png" alt="Logo" className="h-20 sm:h-26" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path} className="hover:text-gray-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Register Button */}
        <Link
          to="/register"
          className="hidden md:flex items-center bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition"
        >
          REGISTER
          <span className="ml-2">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1d23] px-6 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="block py-2 text-lg font-medium hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Register Button */}
          <Link
            to="/register"
            className="block mt-4 text-center bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 hover:text-black transition"
            onClick={() => setIsOpen(false)}
          >
            REGISTER ↗
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
