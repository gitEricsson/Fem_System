"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-32 md:py-48 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mx-auto text-center"
      >
        <div className="mb-16 inline-block relative">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#22D3EE] mb-4">
            What is System Design?
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent absolute -bottom-4 left-0" 
          />
        </div>
        
        <p className="text-2xl md:text-4xl leading-tight mb-20 text-[#E5E7EB] font-light tracking-tight">
          It's building architectures that are <br className="hidden md:block"/>
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A78BFA]">scalable</span>,{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#EF4444]">resilient</span>, and{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#EF4444] to-[#22D3EE]">fair</span> in distributing load and responsibility.
        </p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="group relative p-10 md:p-16 bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#A78BFA]/5 to-[#22D3EE]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <p className="text-1xl md:text-3xl leading-relaxed text-[#E5E7EB] font-medium italic relative z-10">
            "But what if society itself is a system… <br className="hidden md:block"/>
            <span className="text-[#A78BFA]">and it wasn't designed for balance?</span>"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}