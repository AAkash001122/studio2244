import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import {
  X,
  Play,
  Quote,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

// ==========================================
// ULTRA SCROLL WRAPPER COMPONENT
// ==========================================
const ScrollSection = ({ children, zIndex, bgColor = "#FAFAF9" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const blurProgress = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const scale = useSpring(scaleProgress, { stiffness: 100, damping: 30 });
  const opacity = useSpring(opacityProgress, { stiffness: 100, damping: 30 });
  const y = useSpring(yProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className="relative w-full" style={{ zIndex: zIndex }}>
      <motion.div
        style={{
          scale: scale,
          opacity: opacity,
          y: y,
          filter: useTransform(blurProgress, (v) => `blur(${v}px)`),
          backgroundColor: bgColor,
          position: "sticky",
          top: 0,
          minHeight: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
        className="rounded-t-[2rem] overflow-hidden shadow-2xl"
      >
        <div className="w-full h-full overflow-y-auto">{children}</div>
      </motion.div>
    </div>
  );
};

// ==========================================
// 1. HERO TOP SECTION (First View)
// ==========================================
const HeroTopSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-[#FAFAF9]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[1280px] mx-auto px-6 py-8 flex justify-between items-center relative z-50"
      >
        <Link to="/" className="block">
          <img
            src="/wmlogo2244.png"
            alt="WhiteMarble Logo"
            className="h-14 w-42 object-cover"
          />
        </Link>
      </motion.nav>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-block px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-sm shadow-md"
          >
            Since 2015 • Mumbai
          </motion.div>
          {/* ✅ FIXED: Added leading-tight and pb-2 to fix y/g clipping */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-5xl lg:text-[3.5rem] font-serif font-bold leading-tight tracking-tight pb-2"
          >
            White Marble <br />
            <span className="text-red-600">Film Production.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-gray-600 max-w-md leading-relaxed"
          >
            We are a local leading advertising agency, driven by research to
            craft effective campaigns and master brand communication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to="/work"
              className="bg-black text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-red-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              Ads Video
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-black px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-all duration-300 text-center"
            >
              KNOW MORE
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div
          style={{ y: y1 }}
          className="relative h-[550px] lg:h-[650px] w-full flex justify-center items-center order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 lg:-right-10 w-32 h-32 bg-[#FFD93D] rounded-full opacity-90 mix-blend-multiply z-0"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-0 lg:-left-10 w-40 h-40 bg-[#FF6B8B] rounded-full opacity-80 mix-blend-multiply z-0"
          ></motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-[6px] border-[#4D96FF] rounded-full opacity-50 z-0"
          ></motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 3 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className="absolute top-20 right-0 lg:-right-8 bg-black text-white p-6 rounded-xl shadow-2xl z-20 max-w-[220px] text-center border border-gray-700"
          >
            <div className="flex justify-center mb-2 text-yellow-400 text-lg">
              ★★★★★
            </div>
            <h3 className="text-sm font-bold leading-snug">White Marble</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-[320px] lg:w-[420px] h-[420px] lg:h-[520px] rounded-t-[200px] rounded-b-[2rem] overflow-hidden shadow-[12px_12px_0px_#000] z-10 bg-gray-200 border-4 border-black"
          >
            <img
              src="https://picsum.photos/seed/vintageAgency22/600/800"
              alt="Creative Character"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ==========================================
// 2. SELECTED WORK SECTION
// ==========================================
const SelectedWorkSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
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

  return (
    <section className="w-full py-24 md:py-32 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="mb-16">
          <h2 className="font-serif text-[#1a1a1a] text-4xl md:text-6xl font-bold tracking-tight">
            SELECTED WORK
            <span className="block w-16 h-1.5 bg-red-600 mt-4"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedVideo(project)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-black bg-white shadow-[6px_6px_0px_#000] hover:shadow-[10px_10px_0px_#000] transition-all duration-300"
            >
              <div className="aspect-video w-full overflow-hidden border-b-2 border-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] transform scale-0 group-hover:scale-100 transition-transform duration-300 border-2 border-white">
                  <Play className="text-white fill-white ml-1" size={24} />
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white">
                <h3 className="font-serif text-xl text-[#1a1a1a] group-hover:text-red-600 transition-colors font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
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
            className="bg-white w-full max-w-5xl rounded-2xl overflow-hidden relative shadow-2xl border-4 border-black flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black rounded-full text-white hover:bg-red-600 hover:rotate-90 transition-all duration-300"
            >
              <X size={24} />
            </button>
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
    </section>
  );
};

// ==========================================
// 3. TESTIMONIALS SECTION
// ==========================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      company: "IFP",
      quote:
        "Incredible production quality and seamless coordination. They truly understand the art of filmmaking and deliver excellence every single time.",
    },
    {
      id: 2,
      company: "Perfectly Insane",
      quote:
        "They took our wildest ideas and executed them perfectly. A team that loves creative challenges and brings sanity to the chaos of production.",
    },
    {
      id: 3,
      company: "Backbenchers Production",
      quote:
        "Grounded, authentic, and professional. White Marble brings a unique narrative style to every project, making storytelling look effortless.",
    },
  ];
  return (
    <section className="w-full py-24 md:py-32 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-[#1a1a1a] text-4xl md:text-6xl font-bold tracking-tight">
            TESTIMONIALS
            <span className="block w-16 h-1.5 bg-red-600 mt-4 mx-auto"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAFAF9] p-8 md:p-10 rounded-2xl border-2 border-black hover:border-red-600 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between h-full shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000]"
            >
              <div>
                <div className="text-red-600 mb-6">
                  <Quote size={32} fill="rgba(220, 38, 38, 0.2)" />
                </div>
                <p className="font-serif text-lg md:text-xl text-[#1a1a1a] italic leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>
              <div className="border-t-2 border-black/10 pt-6 flex items-center justify-between">
                <div className="h-10 md:h-12 bg-white border border-black/10 rounded px-3 flex items-center justify-center shadow-sm">
                  <span className="font-sans font-bold text-[#1a1a1a] uppercase tracking-wider text-sm">
                    {item.company}
                  </span>
                </div>
                <div className="flex gap-1 text-red-600">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// 4. CTA SECTION
// ==========================================
const CTASection = () => {
  return (
    <section className="relative w-full py-32 md:py-40 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[20px] border-red-100 rounded-full opacity-50 z-0"
      ></motion.div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-[#1a1a1a] text-4xl md:text-7xl font-bold leading-tight mb-12 tracking-tight">
          Let’s create something <br className="hidden md:block" />
          <span className="text-red-600 italic">cinematic.</span>
        </h2>
        <Link
          to="/contact"
          className="group relative inline-block px-12 py-5 bg-red-600 text-white text-lg font-bold rounded-full border-2 border-black overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] shadow-[6px_6px_0px_#000] cursor-pointer"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            Contact Us{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-2 transition-transform"
            />
          </span>
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12 z-0"></div>
        </Link>
      </div>
    </section>
  );
};

// ==========================================
// 5. FOOTER (UPDATED TO WHITE THEME)
// ==========================================
const FooterWithCTA = () => {
  return (
    <footer className="bg-white border-t-2 border-black pt-20 pb-10 relative overflow-hidden">
      {/* Lighter decoration for white background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 relative z-10 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="h-16 md:h-20 w-auto overflow-hidden">
              <img
                src="/wmlogo2244.png"
                alt="WhiteMarble Production"
                className="h-full w-48 md:w-56 object-contain"
              />
            </div>
            <p className="font-sans text-gray-600 text-sm leading-relaxed">
              A fearless creative team of thinkers, writers, and doers.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/whitemarbleproduction_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-black/10 flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-black text-lg font-bold mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-sans text-gray-600 text-sm hover:text-red-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-black text-lg font-bold mb-6">
              Capabilities
            </h3>
            <ul className="space-y-3">
              <li>
                <span className="font-sans text-gray-600 text-sm">
                  Advertising Films
                </span>
              </li>
              <li>
                <span className="font-sans text-gray-600 text-sm">
                  Branded Stories
                </span>
              </li>
              <li>
                <span className="font-sans text-gray-600 text-sm">
                  Original Content
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-black text-lg font-bold mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-1" size={18} />
                <span className="font-sans text-gray-600 text-sm">
                  Mumbai, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={18} />
                <a
                  href="mailto:whitemarbleproduction@gmail.com"
                  className="font-sans text-gray-600 text-sm hover:text-black transition-colors"
                >
                  whitemarbleproduction@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={18} />
                <a
                  href="tel:+917903606342"
                  className="font-sans text-gray-600 text-sm hover:text-black transition-colors"
                >
                  +917903606342
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-gray-500 text-xs">
            © 2026 White Marble Production.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-sans text-gray-500 text-xs hover:text-black"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-sans text-gray-500 text-xs hover:text-black"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// MAIN HERO SECTION (ASSEMBLING ALL)
// ==========================================
const HeroSection = () => {
  return (
    <div className="bg-[#FAFAF9] text-[#1a1a1a] font-sans overflow-x-hidden selection:bg-black selection:text-white">
      <HeroTopSection />

      <ScrollSection zIndex={10} bgColor="#FAFAF9">
        <SelectedWorkSection />
      </ScrollSection>

      <ScrollSection zIndex={20} bgColor="#FFFFFF">
        <TestimonialsSection />
      </ScrollSection>

      <ScrollSection zIndex={30} bgColor="#FAFAF9">
        <CTASection />
      </ScrollSection>

      {/* Footer Section Background adjusted to match white theme */}
      <ScrollSection zIndex={40} bgColor="#FFFFFF">
        <FooterWithCTA />
      </ScrollSection>
    </div>
  );
};

export default HeroSection;
