"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FeminismSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  const perspectives = [
    { name: "Liberal Feminism", color: "#22D3EE", desc: "Equality through laws, systemic policies, equal pay, and access to education." },
    { name: "Radical Feminism", color: "#A78BFA", desc: "Patriarchy entrenches power imbalances, gender roles, violence against women, and restrictions on reproductive rights within society." },
    { name: "Socialist Feminism", color: "#E5E7EB", desc: "Correlating gender exploitation with economic and capitalist architecture." },
    { name: "Cultural Feminism", color: "#A78BFA", desc: "Revaluing empathetic, collaborative traits as essential system components." },
    { name: "Intersectional Feminism", color: "#22D3EE", desc: "Mapping overlapping identities (race, class, gender) to debug the full system." }
  ];

  return (
    <section ref={ref} className="min-h-[100svh] flex items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-10"
          >
            What is Feminism?
          </motion.h2>

          {/* Interactive Definition Link */}
          <motion.a
            href="https://en.wikipedia.org/wiki/Feminist_Manifesto" // Update this URL to your specific manifesto link
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group relative block max-w-4xl mx-auto p-8 md:p-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/[0.05] hover:border-[#A78BFA]/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] transition-all duration-500 mb-8 cursor-pointer"
          >
            {/* Subtle corner glow on hover */}
            <div className="absolute -top-px -right-px w-20 h-20 bg-gradient-to-bl from-[#A78BFA]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-3xl" />
            
            <p className="text-xl md:text-3xl text-[#E5E7EB] font-medium leading-relaxed relative z-10">
              Feminism is a social and political movement that advocates for equal rights and opportunities across genders, especially addressing historical and systemic disadvantages faced by women.
              <span className="inline-block ml-3 text-[#A78BFA] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                ↗
              </span>
            </p>
          </motion.a>

          {/* Styled Sub-label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#22D3EE]/50" />
            <p className="text-sm md:text-base text-[#22D3EE] font-semibold tracking-[0.2em] uppercase">
              Not a single idea, but a collection of architectural perspectives
            </p>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#22D3EE]/50" />
          </motion.div>
        </div>

        {/* Perspectives Grid */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {perspectives.map((p, i) => (
            <motion.div
              key={p.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
              }}
              className="group flex-1 min-w-[300px] max-w-[400px] p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 opacity-50 group-hover:opacity-100 transition-opacity duration-300" 
                style={{ backgroundColor: p.color, boxShadow: `0 0 20px ${p.color}` }} 
              />
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight" style={{ color: p.color }}>{p.name}</h3>
              <p className="text-[#E5E7EB]/70 text-base leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 p-8 md:p-10 bg-gradient-to-r from-[#22D3EE]/10 via-transparent to-[#A78BFA]/10 rounded-3xl border border-white/10 backdrop-blur-md text-center max-w-4xl mx-auto shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
        >
          <p className="text-xl md:text-3xl text-white font-medium leading-relaxed italic">
            "These perspectives aren't just social ideas; they are different ways of <span className="text-[#22D3EE] font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] not-italic">debugging a flawed system</span>."
          </p>
        </motion.div>
      </div>
    </section>
  );
}