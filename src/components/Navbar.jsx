import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ classname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AUGUST CONFERENCE", path: "/august-conference" },
    { name: "GALLERY", path: "/gallery" },
    { name: "NEWS", path: "/news" },
    { name: "TEAM", path: "/team" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "CONTACT US", path: "footer" },
  ];

  // Animation variants
  const navVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <nav
      className={`${classname} fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-black/95 shadow-lg" : "bg-black/70 "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/">
            <img src="/logo2.png" alt="Logo" className="h-18 sm:h-20 transition-all" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-base font-medium text-white">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              variants={navVariants}
              initial="initial"
              animate="animate"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.name === "CONTACT US" ? (
                <ScrollLink
                  to="footer"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                </ScrollLink>
              ) : (
                <Link to={link.path} className="relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Register Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/register"
            className="hidden md:flex items-center bg-white text-black px-6 py-2.5 rounded-full font-semibold transition-all hover:bg-gray-100 shadow-md hover:shadow-lg"
          >
            REGISTER
            <span className="ml-2 group-hover:rotate-45 transition-transform">↗</span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50 relative"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-gradient-to-b from-black/90 to-gray-900/90 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center space-y-10 text-xl font-medium"
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={36} />
              </motion.button>

              {/* Nav Links */}
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  {link.name === "CONTACT US" ? (
                    <ScrollLink
                      to="footer"
                      smooth={true}
                      duration={500}
                      className="cursor-pointer hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={link.path}
                      className="hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Register Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-all hover:bg-gray-100 shadow-lg hover:shadow-xl"
                  onClick={() => setIsOpen(false)}
                >
                  REGISTER ↗
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;