"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function SPOFSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-15%" });
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setFailed(true), 2500);
      return () => clearTimeout(timer);
    } else {
      setFailed(false);
    }
  }, [isInView]);

  const nodes = [
    { x: 300, y: 80, label: "Education" },
    { x: 520, y: 150, label: "Economics" },
    { x: 80, y: 150, label: "Media" },
    { x: 520, y: 350, label: "Politics" },
    { x: 80, y: 350, label: "Culture" },
    { x: 300, y: 420, label: "Healthcare" }
  ];
  const center = { x: 300, y: 250 };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-32 md:py-48 relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center md:text-left mb-12">
          <motion.h2
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 transition-colors duration-700"
            animate={{ color: failed ? "#EF4444" : "#22D3EE", textShadow: failed ? "0 0 30px rgba(239,68,68,0.5)" : "0 0 30px rgba(34,211,238,0.5)" }}
          >
            SPOF → Patriarchy
          </motion.h2>
          <p className="text-xl md:text-2xl text-[#E5E7EB]/60 font-light max-w-3xl ml-16 leading-relaxed">
            Tech: <span className="text-white font-medium">One server crashes → entire system fails.</span><br/>
            Society: <span className="text-white font-medium">One dominant power structure → systemic imbalance.</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className={`flex-1 w-full bg-[#0B0F14] border rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-1000 ${failed ? 'border-[#EF4444]/30 shadow-[#EF4444]/20' : 'border-[#22D3EE]/30 shadow-[#22D3EE]/10'}`}
          >
            {failed && <div className="absolute inset-0 bg-[#EF4444]/5 animate-pulse pointer-events-none" />}
            
            <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-xl relative z-10">
              {nodes.map((node, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={node.x} y1={node.y} x2={center.x} y2={center.y}
                  stroke={failed ? "#EF4444" : "#22D3EE"}
                  strokeWidth={failed ? "1" : "3"}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isInView ? 1 : 0 }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  opacity={failed ? 0.3 : 0.8}
                />
              ))}

              {nodes.map((node, i) => (
                <g key={`node-${i}`}>
                  <motion.circle
                    cx={node.x} cy={node.y} r="38"
                    fill="#0B0F14" stroke={failed ? "#EF4444" : "#22D3EE"} strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                    opacity={failed ? 0.4 : 1}
                  />
                  <text x={node.x} y={node.y} textAnchor="middle" dominantBaseline="middle" fill={failed ? "#9CA3AF" : "#FFFFFF"} fontSize="13" fontWeight="600">
                    {node.label}
                  </text>
                </g>
              ))}

              {/* Central SPOF */}
              <motion.circle
                cx={center.x} cy={center.y} r="65"
                fill="#0B0F14"
                stroke={failed ? "#EF4444" : "#22D3EE"} strokeWidth="4"
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0, fill: failed ? "#EF4444" : "#0B0F14" }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
              />
              <text x={center.x} y={center.y} textAnchor="middle" dominantBaseline="middle" fill={failed ? "#FFFFFF" : "#E5E7EB"} fontSize="18" fontWeight="800" className="tracking-widest">
                {failed ? "CRASHED" : "SPOF"}
              </text>

              <AnimatePresence>
                {failed && (
                  <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1, rotate: 180 }} transition={{ type: "spring" }}>
                    <line x1={center.x - 40} y1={center.y - 40} x2={center.x + 40} y2={center.y + 40} stroke="#0B0F14" strokeWidth="8" strokeLinecap="round" />
                    <line x1={center.x + 40} y1={center.y - 40} x2={center.x - 40} y2={center.y + 40} stroke="#0B0F14" strokeWidth="8" strokeLinecap="round" />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </motion.div>

          {/* Text Context */}
          <motion.div className="flex-1 space-y-6">
            <div className="p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4 text-[#EF4444]">Single Point of Control</h3>
              <ul className="space-y-3 text-lg text-[#E5E7EB]/80">
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#EF4444]" /> Decision-making concentrated</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#EF4444]" /> Economic power hoarded</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#EF4444]" /> Social narratives tightly controlled</li>
              </ul>
            </div>
            
            <AnimatePresence>
              {failed && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 bg-[#EF4444]/10 rounded-3xl border border-[#EF4444]/30 backdrop-blur-md"
                >
                  <p className="text-2xl font-bold text-white italic">
                    "A system where one demographic holds most of the power isn't just unfair, <span className="text-[#EF4444]">it's fundamentally fragile.</span>"
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}