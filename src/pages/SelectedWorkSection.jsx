import React, { useState, useRef } from "react";
import { X, Play } from "lucide-react";
// Framer Motion import for animations
import { motion, useInView } from "framer-motion";

const SelectedWorkSection = () => {
  // State to manage video modal
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // Ref for scroll trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Projects Data (Same as before)
  const projects = [
    {
      id: 1,
      title: "Hyundai Father’s Day",
      thumbnail: "https://picsum.photos/seed/hyundai/800/450",
      videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed",
    },
    {
      id: 2,
      title: "Samsung Commercial",
      thumbnail: "https://picsum.photos/seed/samsung/800/450",
      videoUrl: "https://www.instagram.com/reel/DVf0KI-gQrI/embed",
    },
    {
      id: 3,
      title: "HDFC Life",
      thumbnail: "https://picsum.photos/seed/hdfc/800/450",
      videoUrl: "https://www.instagram.com/reel/DUxPCXzAYHU/embed",
    },
    {
      id: 4,
      title: "Vivo Campaign",
      thumbnail: "https://picsum.photos/seed/vivo/800/450",
      videoUrl: "https://www.instagram.com/reel/DUAPd7xAUmn/embed",
    },
    {
      id: 5,
      title: "Zovo Film",
      thumbnail: "https://picsum.photos/seed/zovo/800/450",
      videoUrl: "https://www.instagram.com/reel/DUAO3cXAR0U/embed",
    },
    {
      id: 6,
      title: "Little Campaign",
      thumbnail: "https://picsum.photos/seed/little/800/450",
      videoUrl: "https://www.instagram.com/reel/DUAObJ3gWoI/embed",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
    <>
      {/* --- MAIN SECTION START --- */}
      {/* Theme Update: Light Background matching HeroSection */}
      <section ref={ref} className="w-full bg-[#FAFAF9] py-24 md:py-32 border-t border-black/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          
          {/* Heading with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="font-serif text-[#1a1a1a] text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              SELECTED WORK
              {/* Accent Color Update: Red-600 instead of Green */}
              <span className="block w-16 h-1.5 bg-red-600 mt-4"></span>
            </h2>
          </motion.div>

          {/* Grid with Stagger Animation */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onClick={() => setSelectedVideo(project)}
                // Theme Update: Brutalist Style (Hard Shadow, Black Border)
                className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-black bg-white shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-all duration-300"
              >
                {/* Image Area */}
                <div className="aspect-video w-full overflow-hidden border-b-2 border-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 border-2 border-white">
                    <Play className="text-white fill-white ml-1" size={24} />
                  </div>
                </div>

                {/* Project Title */}
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="font-serif text-xl text-[#1a1a1a] group-hover:text-red-600 transition-colors font-bold">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* --- MAIN SECTION END --- */}

      {/* --- VIDEO MODAL (Theme Updated) --- */}
      {selectedVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div 
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            // Theme Update: Light Modal with Brutalist Border
            className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden relative shadow-2xl border-4 border-black flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black rounded-full text-white hover:bg-red-600 hover:rotate-90 transition-all duration-300"
            >
              <X size={24} />
            </button>

            {/* Video Player Container */}
            <div className="w-full bg-black h-[50vh] md:h-[600px] border-b-4 border-black">
              <iframe
                src={selectedVideo.videoUrl}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allowtransparency="true"
                allow="encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title="Instagram Reel"
              ></iframe>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 bg-white">
              <h3 className="font-serif text-3xl text-[#1a1a1a] mb-2 font-bold">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-600 font-sans">
                Full Campaign Production by White Marble.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SelectedWorkSection;