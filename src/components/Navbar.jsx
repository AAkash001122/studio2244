import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.4 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <>
      {/* --- 1. NAVBAR (Background & Logo) --- */}
      {/* Z-Index: 40. Logo yahan hai. */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-white border-b-2 border-black shadow-[0_4px_0px_#000] py-4"
            : "bg-transparent py-6"
        }`}
      ></nav>

      {/* --- 2. FULL SCREEN MENU --- */}
      {/* Z-Index: 50. Navbar ke upar aayega. */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 bg-[#FAFAF9] flex flex-col justify-between overflow-hidden border-l-4 border-black"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

            {/* Navigation Links */}
            <div className="flex-grow flex items-center justify-end pr-12 md:pr-24 pt-24">
              <div className="text-right space-y-6">
                {[
                  { name: "Home", path: "/" },
                  { name: "Services", path: "/services" },
                  { name: "Work", path: "/work" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={linkVariants}
                    whileHover={{ x: -10 }}
                    className="overflow-hidden"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-5xl md:text-7xl font-serif font-bold text-black hover:text-red-600 transition-colors duration-300 flex items-center justify-end gap-4 group"
                    >
                      {item.name}
                      <ChevronRight className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Footer Info */}
            <motion.div
              variants={linkVariants}
              className="border-t-2 border-black p-8 grid grid-cols-3 gap-4 bg-white"
            >
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  Address
                </h4>
                <p className="text-sm font-medium text-black leading-tight">
                  Mumbai, Maharashtra
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-gray-500 tracking-wider">
                  Email
                </h4>
                <a
                  href="mailto:hello@agency.com"
                  className="text-sm font-medium text-black hover:text-red-600 transition-colors"
                >
                  hello@agency.com
                </a>
              </div>

              <div className="flex gap-3 justify-end items-center">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                >
                  <Twitter size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 3. UNIVERSAL BUTTON (Independent Layer) --- */}
      {/* Z-Index: 9999. Sabse upar rahega. Navbar ya Menu isse chhupa nahi paayega. */}
      <div
        className={`fixed top-0 right-0 z-[9999] transition-colors duration-500 p-6 md:p-16 ${scrolled || isOpen ? "bg-white/0" : "bg-transparent"}`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full border-2 border-black flex flex-col items-center justify-center gap-1.5 hover:bg-black group transition-all duration-300 shadow-[4px_4px_0px_#000]"
          // Background taaki button ke peeche ka content scroll karne par na dikhe (agar navbar white ho toh)
          style={{
            backgroundColor: scrolled || isOpen ? "#ffffff" : "transparent",
          }}
        >
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 6, backgroundColor: "white" }
                : { rotate: 0, y: 0, backgroundColor: "black" }
            }
            className="w-5 h-0.5 bg-black block group-hover:bg-white transition-colors"
          ></motion.span>
          <motion.span
            animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-5 h-0.5 bg-black block group-hover:bg-white transition-colors"
          ></motion.span>
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -6, backgroundColor: "white" }
                : { rotate: 0, y: 0, backgroundColor: "black" }
            }
            className="w-5 h-0.5 bg-black block group-hover:bg-white transition-colors"
          ></motion.span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
