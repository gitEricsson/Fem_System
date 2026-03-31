"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function CachingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [invalidated, setInvalidated] = useState(false);

  // Positioned specifically for a 500-width inner box to look balanced
  const stereotypes = [
    { text: "emotional", x: 150, y: 100 },
    { text: "weak", x: 300, y: 80 },
    { text: "submissive", x: 450, y: 100 },
    { text: "irrational", x: 200, y: 160 },
    { text: "dependent", x: 400, y: 160 }
  ];

  return (
    <section ref={ref} className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 md:py-32 relative">
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
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="w-full max-w-4xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 shadow-2xl relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-1000 ${invalidated ? 'from-[#22D3EE]/5' : 'from-[#A78BFA]/5'}`} />

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

              {/* Cache box */}
              <rect x="50" y="40" width="500" height="200" fill="#0B0F14" stroke="#A78BFA" strokeWidth="4" rx="24" filter="url(#purpleBoxGlow)" />
              <text x="300" y="20" textAnchor="middle" fill="#A78BFA" fontSize="20" fontWeight="800" className="tracking-widest">
                CACHED STEREOTYPES
              </text>

              {/* Stereotype labels */}
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
                  <rect
                    x={s.x - 55}
                    y={s.y - 18}
                    width="110"
                    height="36"
                    fill="#EF4444"
                    rx="12"
                    filter="url(#redPillGlow)"
                  />
                  <text
                    x={s.x}
                    y={s.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#FFFFFF"
                    fontSize="15"
                    fontWeight="800"
                    className="tracking-wide"
                  >
                    {s.text}
                  </text>
                </motion.g>
              ))}

              {/* Invalidation effect */}
              <AnimatePresence>
                {invalidated && isInView && (
                  <motion.text
                    x="300"
                    y="140"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#22D3EE"
                    fontSize="32"
                    fontWeight="900"
                    className="tracking-wider"
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

          <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
            {/* Interactive Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              onClick={() => setInvalidated(!invalidated)}
              className="px-10 py-5 bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] text-[#0B0F14] font-black tracking-wide text-xl rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.5)] transition-all duration-300 whitespace-nowrap"
            >
              {invalidated ? "Reset Cache" : "Invalidate Component"}
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="p-8 w-full bg-white/5 backdrop-blur-xl border border-[#A78BFA]/30 rounded-3xl shadow-[0_0_20px_rgba(167,139,250,0.1)] relative"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#E5E7EB] italic leading-relaxed text-center">
                "Bias is just <span className="text-[#A78BFA] drop-shadow-md">stale data</span> that was never invalidated."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
