import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import FooterWithCTA from "../components/FooterWithCTA";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Form Submitted:", formData); };

  return (
    <>
      <section ref={ref} className="w-full bg-[#FAFAF9] min-h-screen py-24 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Header */}
          <div className="mb-16 text-center md:text-left">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl text-[#1a1a1a] font-bold mb-4">
              LET'S <span className="text-red-600 italic">CONNECT.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-sans text-gray-600 text-lg max-w-2xl">
              Ready to create something cinematic? Fill out the form below or reach us directly.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* FORM */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name */}
                <div className="group">
                  <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Your Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b-2 border-black py-3 text-[#1a1a1a] focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400 font-sans text-lg" placeholder="John Doe" />
                </div>
                {/* Email */}
                <div className="group">
                  <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b-2 border-black py-3 text-[#1a1a1a] focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400 font-sans text-lg" placeholder="john@example.com" />
                </div>
                {/* Select */}
                <div className="group">
                  <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Project Type</label>
                  <div className="relative">
                    <select name="projectType" required value={formData.projectType} onChange={handleChange} className="w-full bg-transparent border-b-2 border-black py-3 text-[#1a1a1a] focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer font-sans text-lg">
                      <option value="" className="bg-white text-gray-400">Select a service...</option>
                      <option value="ad-film" className="bg-white">Advertising Film</option>
                      <option value="branded-content" className="bg-white">Branded Content</option>
                      <option value="original" className="bg-white">Original Content</option>
                    </select>
                    <div className="absolute right-0 top-4 text-red-600 pointer-events-none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></div>
                  </div>
                </div>
                {/* Message */}
                <div className="group">
                  <label className="block font-sans text-gray-500 text-xs uppercase tracking-widest mb-2">Your Message</label>
                  <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b-2 border-black py-3 text-[#1a1a1a] focus:outline-none focus:border-red-600 transition-colors placeholder-gray-400 font-sans text-lg resize-none" placeholder="Tell us about your vision..."></textarea>
                </div>
                
                {/* Submit Button */}
                <button type="submit" className="w-full md:w-auto px-10 py-4 bg-red-600 text-white font-bold font-sans rounded-full border-2 border-black hover:shadow-[6px_6px_0px_#000] transition-all duration-300 flex items-center justify-center gap-3 group shadow-[4px_4px_0px_#000]">
                  Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* INFO & MAP */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="space-y-10">
              
              {/* Card */}
              <div className="bg-white border-2 border-black p-8 rounded-3xl shadow-[6px_6px_0px_#000]">
                <h2 className="font-serif text-3xl text-[#1a1a1a] mb-6 font-bold">White Marble Production</h2>
                <p className="font-sans text-gray-600 mb-8 text-lg">Mumbai, India</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors border border-black">
                      <Mail size={20} />
                    </div>
                    <a href="mailto:whitemarbleproduction@gmail.com" className="font-sans text-[#1a1a1a] text-lg group-hover:text-red-600 transition-colors">whitemarbleproduction@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors border border-black">
                      <Phone size={20} />
                    </div>
                    <a href="tel:+917903606342" className="font-sans text-[#1a1a1a] text-lg group-hover:text-red-600 transition-colors">+91 7903606342</a>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors border border-black">
                      <MapPin size={20} />
                    </div>
                    <span className="font-sans text-[#1a1a1a] text-lg">123, Kartik Complex, Veera Desai Road</span>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t-2 border-black flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-[#1a1a1a] hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-[2px_2px_0px_#000]"><Instagram size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full border border-black flex items-center justify-center text-[#1a1a1a] hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-[2px_2px_0px_#000]"><Linkedin size={18} /></a>
                </div>
              </div>

              {/* Map */}
              <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border-2 border-black group shadow-[4px_4px_0px_#000]">
                <div className="absolute top-4 left-4 z-10 bg-white border-2 border-black px-4 py-2 rounded-lg pointer-events-none shadow-[2px_2px_0px_#000]">
                  <span className="text-[#1a1a1a] text-xs font-bold uppercase tracking-wider">Our Studio</span>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30154.85832863687!2d72.81186593476565!3d19.13583140000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772195079315!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }} allowFullScreen loading="lazy" title="Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></iframe>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
      <FooterWithCTA />
    </>
  );
};

export default Contact;