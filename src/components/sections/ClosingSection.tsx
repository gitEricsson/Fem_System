"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ClosingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22D3EE]/5 to-[#A78BFA]/5 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-6xl w-full mx-auto text-center relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-16 tracking-tighter bg-gradient-to-r from-[#22D3EE] via-[#E5E7EB] to-[#A78BFA] bg-clip-text text-transparent leading-[1.1]"
        >
          In engineering, we don't design systems that depend on <span className="italic text-[#EF4444] drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">one node</span>, <span className="italic text-[#EF4444] drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">one voice</span>, or <span className="italic text-[#EF4444] drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">one failure point.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-3xl md:text-5xl text-[#E5E7EB]/80 font-light mb-16 leading-relaxed"
        >
          We architect precisely for <span className="text-[#22D3EE] font-extrabold drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">resilience</span>, <span className="text-[#A78BFA] font-extrabold drop-shadow-[0_0_15px_rgba(167,139,250,0.4)]">fairness</span>, and <span className="text-[#22D3EE] font-extrabold drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">distribution</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1, type: "spring", stiffness: 60 }}
          className="inline-block relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] rounded-[3rem] blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
          
          <div className="relative px-12 md:px-20 py-16 bg-[#0B0F14]/90 backdrop-blur-2xl rounded-[3rem] border border-white/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/10 via-transparent to-[#A78BFA]/10" />
            
            <p className="text-4xl md:text-6xl font-black text-[#E5E7EB] italic relative z-10 leading-tight tracking-tight">
              Maybe it's time we start designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#A78BFA]">society</span> the exact same way.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-32 text-[#E5E7EB]/50 font-medium tracking-widest uppercase text-sm"
        >
          <p className="hover:text-[#22D3EE] transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑ Scroll Back to Top</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
