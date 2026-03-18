import React from "react";
import FooterWithCTA from "../components/FooterWithCTA";

import {
  FileText,
  Lightbulb,
  ClipboardList,
  Clapperboard,
  Scissors,
  Rocket,
  CheckCircle,
} from "lucide-react";

const ProcessPage = () => {
  const steps = [
    {
      id: 1,
      title: "Understanding the Brief",
      icon: <FileText size={24} />,
      desc: "We go beyond the surface. We dissect objectives, analyze target demographics, and decode the brand's core message to build a foundation that is bulletproof.",
    },
    {
      id: 2,
      title: "Creative Alignment",
      icon: <Lightbulb size={24} />,
      desc: "This is where the magic starts. Brainstorming sessions, mood boards, and creative brainstorming ensure our vision is perfectly aligned with your brand's soul.",
    },
    {
      id: 3,
      title: "Strategic Pre-Production",
      icon: <ClipboardList size={24} />,
      desc: "Meticulous planning is our superpower. From casting and location scouting to scheduling and logistics, we script every detail before the camera rolls.",
    },
    {
      id: 4,
      title: "Production Execution",
      icon: <Clapperboard size={24} />,
      desc: "Lights, camera, action! With a disciplined crew and top-tier equipment, we bring the storyboard to life on set, managing chaos with calm precision.",
    },
    {
      id: 5,
      title: "Post Production",
      icon: <Scissors size={24} />,
      desc: "The edit bay is where the story finds its rhythm. Editing, color grading, VFX, and sound design—we polish every frame to cinematic perfection.",
    },
    {
      id: 6,
      title: "Delivery & Support",
      icon: <Rocket size={24} />,
      desc: "We don't just hand over a file; we launch a campaign. We deliver in all required formats and provide campaign support to ensure maximum impact.",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#FAFAF9] text-[#1a1a1a] pb-24">
        {/* HEADER / HERO */}
        <section className="relative pt-32 pb-20 px-6 md:px-16 overflow-hidden border-b-2 border-black bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-red-600 font-sans font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
              Our Methodology
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-[#1a1a1a]">
              The Art of <br className="hidden md:block" />{" "}
              <span className="text-red-600 italic">Execution.</span>
            </h1>
            <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              A structured, 6-step workflow that transforms raw ideas into
              cinematic masterpieces.
            </p>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="relative max-w-7xl mx-auto px-6 md:px-16 py-24">
          {/* Vertical Line - Solid Black */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-black md:-translate-x-1/2 h-full"></div>

          <div className="relative space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-5/12 relative z-10">
                    <div className="group relative overflow-hidden bg-white border-2 border-black rounded-2xl shadow-[6px_6px_0px_#000] transition-all duration-500 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] hover:border-red-600 p-8 md:p-10">
                      
                      {/* Background Number */}
                      <span className="absolute -right-6 -bottom-8 text-9xl font-bold text-black/5 font-serif pointer-events-none select-none">
                        0{step.id}
                      </span>

                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 border-2 border-black group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                            {step.icon}
                          </div>
                          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                            {step.title}
                          </h3>
                        </div>

                        <p className="font-sans text-gray-600 leading-relaxed text-base md:text-lg">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Red with Black Border */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 bg-red-600 border-4 border-black rounded-full z-20 shadow-[0_0_0px_transparent] hidden md:block"></div>

                  {/* Empty Space for alternating layout */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* BOTTOM CTA SECTION */}
        <section className="mt-12 px-6 md:px-16 max-w-4xl mx-auto text-center mb-16">
          <div className="bg-white border-2 border-black p-12 rounded-3xl relative overflow-hidden shadow-[8px_8px_0px_#000]">
            
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 mx-auto mb-6 border-2 border-black">
                <CheckCircle size={32} />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] font-bold mb-6">
                Why Obsess Over Process?
              </h2>
              <p className="font-sans text-gray-600 text-lg leading-relaxed">
                Because creativity without structure is just chaos. Our rigorous
                process ensures that your budget is respected, your timelines
                are met, and the final output isn't just "good"—it's{" "}
                <span className="text-[#1a1a1a] font-bold">extraordinary</span>.
              </p>
            </div>
          </div>
        </section>
      </div>
      <FooterWithCTA />
    </>
  );
};

export default ProcessPage;