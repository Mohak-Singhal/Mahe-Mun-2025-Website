import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <footer style={{ fontFamily: 'Inter, sans-serif' }}  id="footer" className="bg-black text-white py-10">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Menu Section */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-0.5 text-gray-400 font-light text-center md:text-left ">
                  <li>
                    <Link to="/" className="hover:text-white">Home</Link>
                  </li>
                  <li>
                    <Link to="/team" className="hover:text-white">Team</Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="hover:text-white">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/news" className="hover:text-white">News Letter</Link>
                  </li>
                  <li>
                    <Link to="/august-conference" className="hover:text-white">August Conference</Link>
                  </li>
                </ul>
              </div>

              {/* Connect Section */}
              <div className="flex flex-col items-center md:items-start md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                  Contact us
                </h3>
                {/* <p className="mb-4 text-center md:text-left text-gray-400 font-light">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat.
                </p> */}
                <div className="mb-4 text-gray-400 font-light space-y-3 text-center md:text-left">
                  {" "}
                  {/* ← Text alignment */}
                  {/* Email */}
                  {/* <p className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">Director External Affairs</p> */}
                  <a
                    href="mailto:siddhi.docmpl2023@learner.manipal.edu"
                    className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
                  >
                    {" "}
                    {/* ← Flex alignment */}
                    <FaEnvelope className="text-white" />
                    siddhi.docmpl2023@learner.manipal.edu
                  </a>
                  {/* Phone */}
                  <a
                    href="tel:+919810026430"
                    className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors"
                  >
                    <FaPhone className="text-white transform rotate-90" />
                    +91 9810026430
                  </a>
                  {/* Address */}
                  <div className="flex flex-col items-center md:items-start gap-2">
                    {" "}
                    {/* ← Stack vertically on mobile */}
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <FaMapMarkerAlt className="text-white" />
                      <span className="text-center md:text-left">
                        Address:
                      </span>{" "}
                      {/* ← Label alignment */}
                    </div>
                    <address className="not-italic text-center md:text-left">
                    Floor 3, Manipal Edu Building,  
                      <br />
                      Manipal Dr, Madhav Nagar,
                      <br />
                      Manipal, Karnataka-576104
                    </address>
                  </div>
                </div>
                {/* <div className="bg-[#1f1f1f] p-4 rounded-lg flex items-center space-x-3 h-12">
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
                </div> */}
              </div>
            </div>

            {/* Bottom Right: Follow Us Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4 text-gray-400">
              <a href="https://www.linkedin.com/in/oiac-mahe-93b338254/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors duration-200">
                  <FaLinkedin />
                </a>
              <a href="https://www.instagram.com/oiac_mahe/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white transition-colors duration-200">
                  <FaInstagram />
                </a>
                <a href="#" className="text-xl hover:text-white transition-colors duration-200">
                  <FaTwitter />
                </a>
                <a href="#" className="text-xl hover:text-white transition-colors duration-200">
                  <FaFacebookF />
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
