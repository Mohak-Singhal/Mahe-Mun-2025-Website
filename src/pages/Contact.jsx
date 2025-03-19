import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
  };

  return (
    <>
    <Navbar classname="bg-black text-white"/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-6">
      {/* Page Heading */}
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <p className="text-lg text-gray-600 text-center mb-10">
        Have questions? Reach out to us, and we’ll be happy to assist you!
      </p>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition">
            <span className="text-blue-600 text-3xl">📍</span>
            <div>
              <p className="text-gray-800 font-semibold">Mahe MUN</p>
              <p className="text-gray-600">Mahe Campus</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition">
            <span className="text-blue-600 text-3xl">📞</span>
            <div>
              <p className="text-gray-800 font-semibold">Phone</p>
              <p className="text-gray-600">+91 9XXXXXXXXX</p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition">
            <span className="text-blue-600 text-3xl">✉️</span>
            <div>
              <p className="text-gray-800 font-semibold">Email</p>
              <p className="text-gray-600">contact@mahemun.com</p>
            </div>
          </div>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://www.google.com/maps/place/edu+Building/@13.3533362,74.7848639,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbca5b5f12e46fd:0x3250e8c415a0f22e!8m2!3d13.3533362!4d74.7848639!16s%2Fg%2F11j5fk43zj?entry=tts&g_ep=EgoyMDI1MDMxNi4wIPu8ASoASAFQAw%3D%3D"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        className="mt-12 w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 transition"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
    <Footer/>
    </>
  );
}
