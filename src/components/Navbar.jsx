import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ classname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: "TEAM", path: "/team" },
    { name: "NEWS", path: "/news" },
    { name: "GALLERY", path: "/gallery" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CONTACT US", path: "footer" }, // Scrolls to footer
  ];

  return (
    <nav
      className={`${classname} fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-black text-white shadow-md" : "bg-black text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="/logo2.png" alt="Logo" className="h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.name === "CONTACT US" ? (
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-400 transition"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link to={link.path} className="hover:text-gray-400 transition">
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Register Button */}
        <Link
          to="/register"
          className="hidden md:flex items-center px-5 py-2 rounded-full font-semibold bg-white text-black hover:bg-gray-300 transition"
        >
          REGISTER
          <span className="ml-2">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4">
          <ul className="flex flex-col space-y-4 text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.name === "CONTACT US" ? (
                  <ScrollLink
                    to="footer"
                    smooth={true}
                    duration={500}
                    className="block py-2 text-lg font-medium hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </ScrollLink>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-2 text-lg font-medium hover:text-gray-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Register Button */}
          <Link
            to="/register"
            className="block mt-4 text-center bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
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
