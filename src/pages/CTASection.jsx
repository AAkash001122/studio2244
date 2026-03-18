import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Framer Motion import
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  // Scroll Animation Setup
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // Theme Update: Light Background matching the flow
    <section
      ref={ref}
      className="relative w-full bg-[#FAFAF9] py-32 md:py-40 overflow-hidden border-t border-black/10"
    >
      {/* Decoration: Rotating Circle (Matching Hero Section style) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[20px] border-red-100 rounded-full opacity-50 z-0"
      ></motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading with Scroll Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-[#1a1a1a] text-4xl md:text-7xl font-bold leading-tight mb-12 tracking-tight"
        >
          Let’s create something <br className="hidden md:block" />
          {/* Accent Color: Red */}
          <span className="text-red-600 italic">cinematic.</span>
        </motion.h2>

        {/* Button with Brutalist Shadow & Hover Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="group relative px-12 py-5 bg-red-600 text-white text-lg font-bold rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] shadow-[6px_6px_0px_#000]">
            <span className="relative z-10 flex items-center justify-center gap-3">
              Contact Us
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </span>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12 z-0"></div>
            <span className="absolute inset-0 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              Contact Us
              <ArrowRight size={20} className="translate-x-2" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;