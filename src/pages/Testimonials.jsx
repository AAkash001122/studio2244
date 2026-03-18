import React, { useRef } from "react";
import { motion, useInView } from "framer-motion"; // Framer Motion import
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      company: "IFP",
      logo: "/logos/ifp.png",
      quote:
        "Incredible production quality and seamless coordination. They truly understand the art of filmmaking and deliver excellence every single time.",
    },
    {
      id: 2,
      company: "Perfectly Insane",
      logo: "/logos/perfectly-insane.png",
      quote:
        "They took our wildest ideas and executed them perfectly. A team that loves creative challenges and brings sanity to the chaos of production.",
    },
    {
      id: 3,
      company: "Backbenchers Production",
      logo: "/logos/backbenchers.png",
      quote:
        "Grounded, authentic, and professional. White Marble brings a unique narrative style to every project, making storytelling look effortless.",
    },
  ];

  // Scroll Animation Setup
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    // Theme Update: Light Background matching previous sections
    <section
      ref={ref}
      className="w-full bg-white py-24 md:py-32 border-t border-black/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        
        {/* Section Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-[#1a1a1a] text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            TESTIMONIALS
            {/* Accent Color: Red */}
            <span className="block w-16 h-1.5 bg-red-600 mt-4 mx-auto"></span>
          </h2>
        </motion.div>

        {/* Grid Layout with Stagger Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              // Theme Update: Brutalist Style (Hard Shadow, Black Border, White Card)
              className="group bg-[#FAFAF9] p-8 md:p-10 rounded-2xl border-2 border-black hover:border-red-600 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000]"
            >
              {/* Top: Quote Icon */}
              <div>
                <div className="text-red-600 mb-6">
                  <Quote size={32} fill="rgba(220, 38, 38, 0.2)" />
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg md:text-xl text-[#1a1a1a] italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom: Logo / Company Name */}
              <div className="border-t-2 border-black/10 pt-6 flex items-center justify-between">
                {/* Logo Area */}
                <div className="h-10 md:h-12 bg-white border border-black/10 rounded px-3 flex items-center justify-center overflow-hidden shadow-sm">
                  {/* Image logic: If image exists show image, else show text */}
                  <span className="font-sans font-bold text-[#1a1a1a] uppercase tracking-wider text-sm">
                    {item.company}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 text-red-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;