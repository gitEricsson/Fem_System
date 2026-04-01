"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { RefreshCcw, MousePointer2, Command } from 'lucide-react';

export default function CachingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [invalidated, setInvalidated] = useState(false);

  const stereotypes = [
    { text: "emotional", x: 150, y: 100 },
    { text: "weak", x: 300, y: 80 },
    { text: "submissive", x: 450, y: 100 },
    { text: "irrational", x: 200, y: 160 },
    { text: "dependent", x: 400, y: 160 }
  ];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(167,139,250,0.4)] text-[#A78BFA]"
          >
            Caching → Gender Stereotypes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#E5E7EB]/60 font-light max-w-4xl ml-16 leading-relaxed"
          >
            Cache: <span className="text-[#E5E7EB] font-medium">stores old data for faster access.</span><br/>
            Society: <span className="text-[#E5E7EB] font-medium">stores outdated beliefs instead of parsing real-time reality.</span>
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Diagram remains same logic, but we can wrap it in a container that reacts to the button click */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 shadow-2xl relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-1000 rounded-[3rem] ${invalidated ? 'from-[#22D3EE]/5' : 'from-[#A78BFA]/5'}`} />

            <svg viewBox="0 0 600 280" className="w-full h-auto drop-shadow-2xl relative z-10">
              <defs>
                <filter id="purpleBoxGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="redPillGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              <rect x="50" y="40" width="500" height="200" fill="#0B0F14" stroke={invalidated ? "#22D3EE" : "#A78BFA"} strokeWidth="4" rx="24" filter="url(#purpleBoxGlow)" className="transition-colors duration-500" />
              <text x="300" y="20" textAnchor="middle" fill={invalidated ? "#22D3EE" : "#A78BFA"} fontSize="20" fontWeight="800" className="tracking-widest transition-colors duration-500">
                {invalidated ? "CLEAN STATE" : "CACHED STEREOTYPES"}
              </text>

              {stereotypes.map((s, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: invalidated ? 0 : 1,
                    y: invalidated ? -50 : 0,
                    scale: invalidated ? 0.5 : 1
                  } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <rect x={s.x - 55} y={s.y - 18} width="110" height="36" fill="#EF4444" rx="12" filter="url(#redPillGlow)" />
                  <text x={s.x} y={s.y + 1} textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize="15" fontWeight="800" className="tracking-wide">
                    {s.text}
                  </text>
                </motion.g>
              ))}

              <AnimatePresence>
                {invalidated && (
                  <motion.text
                    x="300" y="140" textAnchor="middle" dominantBaseline="middle" fill="#22D3EE" fontSize="32" fontWeight="900"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ filter: "drop-shadow(0px 0px 10px rgba(34,211,238,0.8))" }}
                  >
                    CACHE INVALIDATED
                  </motion.text>
                )}
              </AnimatePresence>
            </svg>
          </motion.div>
<div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl mt-16">
        
        <div className="relative group">
          {/* --- THE "CLICK ME" NOTE --- */}
          <AnimatePresence>
            {!invalidated && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute -top-16 flex flex-col items-start gap-1 pointer-events-none"
              >
                <div className="bg-[#A78BFA] text-[#0B0F14] text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                  Try it
                </div>
                <motion.div 
                  animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="flex items-center gap-2"
                >
                  <MousePointer2 className="w-5 h-5 text-[#A78BFA] fill-[#A78BFA]/20" />
                  <span className="text-[#A78BFA]/80 font-mono text-xs italic whitespace-nowrap">
                    // click to flush cache
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- THE BUTTON --- */}
          <motion.button
            onClick={() => setInvalidated(!invalidated)}
            animate={isInView ? { y: [0, -4, 0] } : {}}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              transition: { duration: 0.2 } 
            }}
            whileTap={{ 
              scale: 0.92,
              transition: { type: "spring", stiffness: 400, damping: 15 } 
            }}
            className={`
              relative z-10 px-10 py-6 rounded-2xl flex items-center gap-4
              font-black tracking-tighter text-xl uppercase overflow-hidden
              transition-colors duration-300
              ${invalidated 
                ? "bg-[#22D3EE] text-[#0B0F14] shadow-[0_10px_0px_#0891b2]" 
                : "bg-[#A78BFA] text-[#0B0F14] shadow-[0_15px_40px_rgba(167,139,250,0.4)]"}
            `}
          >
            <motion.div
              initial={{ x: '-150%', skewX: -20 }}
              animate={{ x: '250%' }}
              transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            />

            <span className="relative z-10 flex items-center gap-4">
              {invalidated ? <RefreshCcw className="w-6 h-6" /> : <Command className="w-6 h-6 fill-current" />}
              {invalidated ? "Reset System" : "Flush Bias"}
            </span>
          </motion.button>

          {/* Secondary shadow that stays put when button shrinks to enhance the depth */}
          <div className="absolute inset-x-4 bottom-0 h-4 bg-black/40 blur-xl -z-10 rounded-full group-hover:opacity-100 opacity-50 transition-opacity" />
        </div>

        {/* --- DYNAMIC QUOTE BOX --- */}
        <motion.div
          animate={{ 
            borderColor: invalidated ? "rgba(34,211,238,0.5)" : "rgba(167,139,250,0.3)",
            scale: invalidated ? 1.02 : 1
          }}
          className="p-8 w-full bg-white/5 backdrop-blur-xl border rounded-3xl transition-all duration-500"
        >
          <p className="text-2xl md:text-3xl font-bold text-[#E5E7EB] italic leading-relaxed text-center">
            "Bias is just <span className={invalidated ? 'text-[#22D3EE]' : 'text-[#A78BFA]'}>stale data</span> that was never invalidated."
          </p>
        </motion.div>
      </div>
        </div>
      </div>
    </section>
  );
}