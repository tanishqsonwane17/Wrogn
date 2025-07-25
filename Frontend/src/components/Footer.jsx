import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
    const items = footerRef.current.querySelectorAll('.footer-item');

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black rounded-t-3xl z-50 flex flex-col gap-8 px-8 py-16 pr-1 md:flex-row justify-around mt-16"
    >
      {/* Column 1: Quick Links */}
      <ul className="text-white flex flex-col gap-2">
        <li className="uppercase text-md font-semibold mb-1 footer-item">Quick Links</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Privacy Policy</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Returns & Shipping Policy</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Terms & Conditions</li>
      </ul>

      {/* Column 2: Connect */}
      <ul className="text-white flex flex-col gap-2">
        <li className="uppercase text-md font-semibold mb-1 footer-item">Connect With Us</li>
        <li className="font-mono text-gray-300 text-xs footer-item">About Us</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Contact Us</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Track Your Order</li>
      </ul>

      {/* Column 3: Help */}
      <ul className="text-white flex flex-col gap-2">
        <li className="uppercase text-md font-semibold mb-1 footer-item">Help & Support</li>
        <li className="font-mono text-gray-300 text-xs footer-item">FAQ</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Help Center</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Shipping Guide</li>
      </ul>

      {/* Column 4: Get Support */}
      <ul className="text-white flex flex-col gap-2">
        <li className="uppercase text-md font-semibold mb-1 footer-item">Get Support</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Order Status</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Returns & Exchanges</li>
        <li className="font-mono text-gray-300 text-xs footer-item">Report a Problem</li>
      </ul>

      {/* Column 5: Legal & Currency */}
      <div className="text-gray-200 font-mono">
        <h1 className="mb-2 text-md footer-item">₹ INR / EN</h1>
        <div className="flex gap-2">
          <ul className="flex w-full flex-col text-xs text-gray-300 gap-2">
            <li className="footer-item">Refund Policy</li>
            <li className="footer-item">Privacy Policy</li>
            <li className="footer-item">Shipping Policy</li>
            <li className="footer-item">Terms of Service</li>
            <li className="footer-item">Contact Information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
