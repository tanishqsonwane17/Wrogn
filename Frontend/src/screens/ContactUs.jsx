import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-lg"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span style={{fontFamily:'walkerBold'}}>
            Get in Touch
          </span>
        </motion.h2>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-black transition"
            ></textarea>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold shadow hover:bg-gray-900 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
