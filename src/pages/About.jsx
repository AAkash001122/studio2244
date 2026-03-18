import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Users,
  CheckCircle,
  Award,
  Zap,
  Heart,
  Quote,
} from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <div className="w-full bg-[#FAFAF9] text-[#1a1a1a]">
        {/* HEADER */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden border-b-2 border-black">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAF9] via-white to-[#FAFAF9] z-0"></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-[#1a1a1a]"
            >
              ABOUT US
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="h-1.5 w-24 bg-red-600 mx-auto rounded-full"
            ></motion.div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <span className="text-red-600 font-sans font-bold tracking-[0.2em] text-sm uppercase">
              Our Philosophy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-gray-600 leading-tight">
              "Stories are not made to fill screens.
              <br className="hidden md:block" />
              <span className="text-[#1a1a1a] not-italic mt-4 block font-bold">
                They are made to be felt.
              </span>
            </h2>
          </motion.div>
        </section>

        {/* APPROACH */}
        <section ref={ref} className="py-20 bg-white border-y-2 border-black">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Card 1 */}
              <motion.div
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-[#FAFAF9] border-2 border-black hover:border-red-600 transition-all duration-500 hover:-translate-y-2 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000]"
              >
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors border-2 border-black">
                  <Target size={28} />
                </div>
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 font-bold">
                  Clarity
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Every project begins with absolute clarity. We dive deep into
                  the brand's core.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-[#FAFAF9] border-2 border-black hover:border-red-600 transition-all duration-500 hover:-translate-y-2 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000]"
              >
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors border-2 border-black">
                  <Users size={28} />
                </div>
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 font-bold">
                  Collaboration
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  We don't just work for you; we work with you.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-[#FAFAF9] border-2 border-black hover:border-red-600 transition-all duration-500 hover:-translate-y-2 shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000]"
              >
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors border-2 border-black">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 font-bold">
                  Preparation
                </h3>
                <p className="font-sans text-gray-600 leading-relaxed">
                  Meticulous planning and rigorous preparation eliminate chaos.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DNA STRIP */}
        <section className="py-16 border-b-2 border-black bg-[#FAFAF9]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16">
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <Zap className="text-red-600" size={24} />
                <span className="font-serif text-xl text-[#1a1a1a]">
                  Cinematic Quality
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <Heart className="text-red-600" size={24} />
                <span className="font-serif text-xl text-[#1a1a1a]">
                  Passionate Storytelling
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <Award className="text-red-600" size={24} />
                <span className="font-serif text-xl text-[#1a1a1a]">
                  Award Winning Team
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-red-600 translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border-4 border-black z-10 shadow-[6px_6px_0px_#000]">
                <img
                  src="https://picsum.photos/seed/prithvi/600/800"
                  alt="Prithvi Singhaniya"
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Founder Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 z-10"
            >
              <div className="inline-block px-4 py-1 border-2 border-red-600 rounded-full bg-white">
                <span className="text-red-600 text-xs font-bold uppercase tracking-widest">
                  The Visionary
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] font-bold leading-tight">
                WhiteMarble <br />{" "}
                <span className="text-red-600"> Film Production</span>
              </h2>
              <h3 className="font-sans text-xl text-gray-600 font-light">
                Producer / Executive Producer
              </h3>
              <div className="w-20 h-1 bg-black/20 rounded-full"></div>
              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                With over{" "}
                <span className="text-[#1a1a1a] font-semibold">30+ years</span>{" "}
                of experience in the advertising film industry.
              </p>
              <div className="pt-6 border-t-2 border-black/10 mt-8 flex items-center gap-4">
                <Quote className="text-red-600" size={32} />
                <p className="font-serif text-xl italic text-gray-600">
                  "We don't just shoot films; we craft legacies."
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <FooterWithCTA />
    </>
  );
};

export default AboutPage;
