"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function LoadBalancingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [balanced, setBalanced] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setBalanced(true), 2000);
      return () => clearTimeout(timer);
    } else {
      setBalanced(false);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] text-[#22D3EE]"
          >
            Load Balancing → Equality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#E5E7EB]/60 font-light max-w-3xl md:ml-16 leading-relaxed"
          >
            Load balancer: <span className="text-[#E5E7EB] font-medium">distributes traffic → prevents overload.</span><br/>
            Equality: <span className="text-[#E5E7EB] font-medium">distributes opportunity → prevents oppression.</span>
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center overflow-hidden">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex-1 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-tr transition-all duration-1000 ${balanced ? 'from-[#22D3EE]/5 to-transparent' : 'from-[#A78BFA]/5 to-transparent'}`} />

            <svg viewBox="0 0 650 400" className="w-full h-auto drop-shadow-xl relative z-10">
              <defs>
                <filter id="cyanGlow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
                <filter id="purpleGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Requests flowing */}
              {[...Array(6)].map((_, i) => {
                const targetY = balanced ? 
                  [100, 100, 200, 200, 300, 300][i] : 
                  [200, 200, 200, 200, 200, 200][i];
                
                return (
                  <motion.circle
                    key={i}
                    cx={100}
                    cy={200}
                    r="8"
                    fill="#A78BFA"
                    filter="url(#purpleGlow)"
                    initial={{ cx: 50, cy: 200 }}
                    animate={isInView ? { 
                      cx: [50, 150, balanced ? 300 : 200],
                      cy: [200, 200, targetY]
                    } : {}}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                );
              })}

              {/* Nodes */}
              {[100, 200, 300].map((y, i) => (
                <g key={i}>
                  <motion.rect
                    x={balanced ? 280 : 180}
                    y={y - 30}
                    width="100"
                    height="60"
                    fill="#0B0F14"
                    stroke="#22D3EE"
                    strokeWidth="3"
                    rx="12"
                    filter="url(#cyanGlow)"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isInView ? 1 : 0,
                      x: balanced ? 280 : 180
                    }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                  />
                  <motion.text
                    x={balanced ? 330 : 230}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#E5E7EB"
                    fontSize="15"
                    fontWeight="700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isInView ? 1 : 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    System {i + 1}
                  </motion.text>
                </g>
              ))}

              {/* Load before balancing (overloaded middle) */}
              <AnimatePresence>
                {!balanced && isInView && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <rect x="180" y="150" width="100" height="100" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" rx="16" />
                    <text
                      x={230}
                      y={130}
                      textAnchor="middle"
                      fill="#EF4444"
                      fontSize="14"
                      fontWeight="800"
                      className="drop-shadow-md"
                    >
                      OVERLOADED
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>

              {/* Balancer */}
              {balanced && (
                <motion.g
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <rect x="120" y="160" width="80" height="80" fill="#22D3EE" rx="16" filter="url(#cyanGlow)" />
                  <text x="160" y="195" textAnchor="middle" dominantBaseline="middle" fill="#0B0F14" fontSize="13" fontWeight="900" className="tracking-wide">
                    LOAD
                  </text>
                  <text x="160" y="215" textAnchor="middle" dominantBaseline="middle" fill="#0B0F14" fontSize="13" fontWeight="900" className="tracking-wide">
                    BALANCER
                  </text>
                </motion.g>
              )}
            </svg>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:border-[#22D3EE]/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-[#22D3EE]">Equal Distribution</h3>
              <ul className="space-y-4 text-xl text-[#E5E7EB]/80">
                <li className="flex items-start gap-4"><div className="mt-2 w-2 h-2 rounded-full bg-[#22D3EE] shrink-0 blur-[0.5px]"></div>Equal access to education</li>
                <li className="flex items-start gap-4"><div className="mt-2 w-2 h-2 rounded-full bg-[#22D3EE] shrink-0 blur-[0.5px]"></div>Equal access to leadership</li>
                <li className="flex items-start gap-4"><div className="mt-2 w-2 h-2 rounded-full bg-[#22D3EE] shrink-0 blur-[0.5px]"></div>Equal economic participation</li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView && balanced ? { opacity: 1 } : { opacity: 0 }}
              className="p-8 bg-gradient-to-r from-[#22D3EE]/20 to-[#22D3EE]/5 rounded-3xl border border-[#22D3EE]/30 shadow-[0_0_20px_rgba(34,211,238,0.1)] backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-[#E5E7EB] italic leading-relaxed">
                Matches Liberal Feminism logic: <span className="text-[#22D3EE]">level the load through laws, policies, and systemic access.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
