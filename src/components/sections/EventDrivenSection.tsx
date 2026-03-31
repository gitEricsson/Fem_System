"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function EventDrivenSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-200px" });
  const [eventTriggered, setEventTriggered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setEventTriggered(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setEventTriggered(false);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(167,139,250,0.4)] text-[#A78BFA]"
          >
            Event-Driven Systems → Social Movements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#E5E7EB]/60 font-light max-w-4xl ml-16 leading-relaxed"
          >
            Events: <span className="text-[#E5E7EB] font-medium">trigger immediate reactions in asynchronous systems.</span><br/>
            Incidents: <span className="text-[#E5E7EB] font-medium">trigger viral movements and reckonings in society.</span>
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Event Flow Diagram */}
          <div className="w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden relative">
            
            <div className={`absolute inset-0 bg-gradient-to-r transition-all duration-1000 ${eventTriggered ? 'from-[#EF4444]/5 via-[#A78BFA]/5 to-[#22D3EE]/5' : 'from-transparent'}`} />

            <svg viewBox="0 0 800 250" className="w-full h-auto relative z-10 drop-shadow-xl">
              <defs>
                 <filter id="eventGlow">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                 </filter>
                 <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#A78BFA" />
                 </marker>
              </defs>

              {/* Event */}
              <motion.g
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
              >
                <circle cx="100" cy="125" r="50" fill="#EF4444" filter="url(#eventGlow)" />
                <text x="100" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" className="tracking-wider">
                  INCIDENT
                </text>
                <text x="100" y="145" textAnchor="middle" fill="#FFFFFF" fontSize="13" opacity="0.8">
                  (Event)
                </text>
              </motion.g>

              {/* Arrow */}
              <motion.line
                x1="150"
                y1="125"
                x2="250"
                y2="125"
                stroke="#A78BFA"
                strokeWidth="4"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                filter="url(#eventGlow)"
              />

              {/* Reactions */}
              {["Awareness", "Protests", "Policy Change"].map((label, i) => (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={eventTriggered && isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.3, type: "spring", stiffness: 80 }}
                >
                  <rect
                    x={280 + i * 160}
                    y="95"
                    width="140"
                    height="60"
                    fill="#0B0F14"
                    stroke="#A78BFA"
                    strokeWidth="3"
                    rx="16"
                    filter="url(#eventGlow)"
                  />
                  <text
                    x={350 + i * 160}
                    y="125"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#E5E7EB"
                    fontSize="15"
                    fontWeight="800"
                   className="tracking-wide"
                  >
                    {label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView && eventTriggered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="p-10 w-full max-w-4xl bg-gradient-to-r from-[#A78BFA]/20 to-[#A78BFA]/5 rounded-3xl border border-[#A78BFA]/40 shadow-[0_0_30px_rgba(167,139,250,0.15)] backdrop-blur-md"
          >
            <p className="text-3xl font-bold text-[#E5E7EB] italic text-center leading-relaxed">
              "Society evolves through events, <span className="text-[#A78BFA]">but only if the system has listeners actively monitoring the queue.</span>"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
