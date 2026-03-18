import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion"; // Animation import
import { Play, ArrowUpRight, X } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectsData = [
    { id: 1, brand: "Hyundai", campaign: "Father’s Day Campaign", role: "Production Execution", thumbnail: "https://picsum.photos/seed/hyundai/800/500", videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed" },
    { id: 2, brand: "Samsung", campaign: "Commercial Campaign", role: "Production", thumbnail: "https://picsum.photos/seed/samsung/800/500", videoUrl: "https://www.instagram.com/reel/DVf0KI-gQrI/embed" },
    { id: 3, brand: "Zovio", campaign: "Brand Reel 2024", role: "Creative Direction", thumbnail: "https://picsum.photos/seed/zovo/800/500", videoUrl: "https://www.instagram.com/reel/DUAO3cXAR0U/embed" },
    { id: 4, brand: "Oppo", campaign: "Diwali Festival", role: "End-to-End Production", thumbnail: "https://picsum.photos/seed/oppo/800/500", videoUrl: "https://www.instagram.com/reel/DUxPCXzAYHU/embed" },
    { id: 5, brand: "Vivo", campaign: "V-Series Launch", role: "Production House", thumbnail: "https://picsum.photos/seed/vivo/800/500", videoUrl: "https://www.instagram.com/reel/DUAPd7xAUmn/embed" },
    { id: 6, brand: "Backbenchers", campaign: "Indie Film Project", role: "Co-Production", thumbnail: "https://picsum.photos/seed/indie/800/500", videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed" },
  ];

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <>
      {/* --- PAGE HEADER --- */}
      <section className="w-full bg-[#FAFAF9] pt-32 pb-16 px-6 md:px-16 border-b-2 border-black">
        <div className="max-w-[1280px] mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-[#1a1a1a] text-5xl md:text-8xl font-bold tracking-tight mb-4">
            OUR WORK
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-sans text-gray-600 text-lg max-w-2xl">
            Showcasing cinematic excellence and disciplined production execution for brands that dare to stand out.
          </motion.p>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section ref={ref} className="w-full bg-white py-16 px-6 md:px-16 min-h-screen">
        <div className="max-w-[1280px] mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants} onClick={() => setSelectedProject(project)} className="group cursor-pointer">
                {/* THUMBNAIL FRAME */}
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-black bg-white mb-5 shadow-[4px_4px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] transition-all duration-300">
                  <img src={project.thumbnail} alt={project.campaign} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_25px_rgba(220,38,38,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 border-2 border-white">
                      <Play className="text-white fill-white ml-1" size={20} />
                    </div>
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div className="flex flex-col">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] font-bold mb-1 group-hover:text-red-600 transition-colors">{project.brand}</h3>
                  <p className="font-sans text-gray-600 text-base mb-3">{project.campaign}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 text-xs font-bold uppercase tracking-widest border border-red-600/30 px-2 py-1 rounded bg-red-50">
                      {project.role}
                    </span>
                    <ArrowUpRight size={16} className="text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- VIDEO MODAL --- */}
      {selectedProject && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={() => setSelectedProject(null)}>
          <motion.div initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden relative shadow-2xl border-4 border-black flex flex-col" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 z-10 p-2 bg-black rounded-full text-white hover:bg-red-600 transition-colors"><X size={24} /></button>
            <div className="w-full bg-black h-[70vh] md:h-[600px] border-b-4 border-black">
              <iframe src={selectedProject.videoUrl} className="w-full h-full" frameBorder="0" scrolling="no" allowtransparency="true" allow="encrypted-media; picture-in-picture; web-share" allowFullScreen title="Instagram Reel"></iframe>
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h2 className="font-serif text-3xl text-[#1a1a1a] mb-1 font-bold">{selectedProject.brand}</h2>
              <p className="text-red-600 font-sans font-semibold text-sm uppercase tracking-wider mb-3">{selectedProject.role}</p>
              <p className="text-gray-600 font-sans">{selectedProject.campaign}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
      <FooterWithCTA />
    </>
  );
};

export default WorkPage;