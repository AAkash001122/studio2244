import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Framer Motion import
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

const FooterWithCTA = () => {
  // Scroll Animation Setup
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    // Theme Update: Light Background with Black Border
    <footer
      ref={ref}
      className="bg-[#FAFAF9] border-t-2 border-black pt-20 pb-10 relative overflow-hidden"
    >
      {/* Decorative Element (Optional - matching light theme) */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-100 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10">
        
        {/* Top Grid with Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* 1. Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Logo Container */}
            <div className="h-16 md:h-20 w-auto overflow-hidden">
              <img
                src="/logowm.png"
                alt="WhiteMarble Production"
                className="h-full w-48 md:w-56 object-contain"
              />
            </div>

            <p className="font-sans text-gray-600 text-sm leading-relaxed">
              A fearless creative team of thinkers, writers, and doers. We craft
              cinematic stories for brands and screens worldwide.
            </p>

            {/* Social Icons - Brutalist Style */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/whitemarbleproduction_?utm_source=qr&igsh=MWc3azI1dmdhZ3Y2Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-[#1a1a1a] hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-[#1a1a1a] hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-[#1a1a1a] hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-[3px_3px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.div>

          {/* 2. Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#1a1a1a] text-lg font-bold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {['Home', 'Work', 'About Us', 'Process', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '')}`}
                    className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#1a1a1a] text-lg font-bold mb-6">
              Capabilities
            </h3>
            <ul className="space-y-3">
              {['Advertising Films', 'Branded Stories', 'Original Content', 'Production Services'].map((service) => (
                <li key={service}>
                  <span className="font-sans text-gray-600 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-serif text-[#1a1a1a] text-lg font-bold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-1" size={18} />
                <span className="font-sans text-gray-600 text-sm leading-relaxed">
                  129, Kartik building, next to Kuber building, <br />
                  Opposite to Lakshmi Industry, Andheri West, <br />
                  Mumbai, Maharashtra 400065
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={18} />
                <a
                  href="mailto:whitemarbleproduction@gmail.com"
                  className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  whitemarbleproduction@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={18} />
                <a
                  href="tel:+917903606342"
                  className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  +917903606342
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section: Copyright Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-sans text-gray-500 text-xs text-center md:text-left">
            © 2026 White Marble Production. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-gray-500 text-xs hover:text-red-600 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-gray-500 text-xs hover:text-red-600 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterWithCTA;