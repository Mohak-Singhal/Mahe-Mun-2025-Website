import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer  id="footer" className="bg-black text-white py-10">
      <div className="container mx-auto px-10">
        {/* Upper Division */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Logo Section */}
          <div className="flex flex-col items-center">
            <img src="/logo.jpg" alt="MAHE MUN" className="mb-4 w-72 " />
          </div>

          {/* Right: Menu, Connect, and Follow Us */}
          <div className="flex flex-col space-y-8">
            {/* Top Right: Menu and Connect */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Menu Section */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-0.5 text-gray-400 font-light">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/news">News Letter</Link>
                  </li>
                </ul>
              </div>

              {/* Connect Section */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <p className="mb-4 text-center md:text-left text-gray-400 font-light">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat.
                </p>
                <div className="bg-[#1f1f1f] p-4 rounded-lg flex items-center space-x-3 h-12">
                  <div className="text-white">
                    <img src="/email.png" alt="Email Icon" className="w-7" />
                  </div>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full  text-gray-300 placeholder-gray-  px-4 py-2 rounded-md focus:outline-none focus:ring-0 "
                  />
                  <button className="hover:scale-110 transition-all duration-200 ease-in-out">
                    <img
                      src="/paperplane.png"
                      alt="Email Icon"
                      className="w-7"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Right: Follow Us Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="text-xl">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Division */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-500 font-semibold">
            &copy; 2025 <span className=" text-white">MAHE MUN</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
