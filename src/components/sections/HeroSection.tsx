"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center px-4 sm:px-8 relative overflow-hidden bg-[#0B0F14]">
      {/* Dynamic Breathing Background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-gradient-to-tr from-[#22D3EE]/20 via-[#A78BFA]/20 to-[#22D3EE]/10 rounded-full blur-[100px] pointer-events-none" 
      />

         <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22D3EE" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-6xl z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold mb-6 tracking-tighter leading-[1.05] bg-gradient-to-r from-[#22D3EE] via-[#E5E7EB] to-[#A78BFA] bg-clip-text text-transparent pb-4">
            System Design
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2 bg-gradient-to-r from-[#A78BFA] to-[#22D3EE] bg-clip-text text-transparent opacity-90">
              Meets Feminism
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-xl md:text-3xl text-[#E5E7EB]/70 font-light tracking-wide max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Eliminating <span className="text-[#EF4444] font-medium drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">Single Points of Failure</span> in Society
        </motion.p>

        <motion.p
          className="mt-8 text-sm md:text-base text-[#22D3EE]/80 font-medium tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          A presentation by <a href="https://github.com/gitEricsson" target="_blank" rel="noopener noreferrer" className="text-[#A78BFA] hover:text-[#22D3EE] transition-colors underline decoration-[#A78BFA]/50 underline-offset-4">Ericsson Rapahel</a>
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 z-10 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-8 h-14 border border-white/20 rounded-full flex justify-center p-2 backdrop-blur-sm bg-white/5">
          <motion.div 
            animate={{ height: ["20%", "60%", "20%"], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 bg-gradient-to-b from-[#22D3EE] to-[#A78BFA] rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}