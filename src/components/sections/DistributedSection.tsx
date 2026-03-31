"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function DistributedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const nodes = [
    { x: 150, y: 150, attrs: ["Race", "Class"], color: "#22D3EE" },
    { x: 350, y: 100, attrs: ["Gender", "Age"], color: "#A78BFA" },
    { x: 450, y: 220, attrs: ["Disability", "Religion"], color: "#22D3EE" },
    { x: 250, y: 280, attrs: ["Sexuality", "Nationality"], color: "#A78BFA" }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 relative">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center md:text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] text-[#22D3EE]"
          >
            Distributed Systems → Intersectionality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#E5E7EB]/60 font-light max-w-3xl ml-16 leading-relaxed"
          >
            Distributed systems have multiple nodes with entirely different roles.<br/>
            <span className="text-[#E5E7EB] font-medium">People experience life differently based on overlapping identities.</span>
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex-1 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 shadow-2xl overflow-hidden"
          >
            <svg viewBox="0 0 600 400" className="w-full h-auto drop-shadow-xl relative z-10">
              <defs>
                 <filter id="distGlow">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                 </filter>
              </defs>

              {/* Connection lines between nodes */}
              {nodes.map((node1, i) => 
                nodes.slice(i + 1).map((node2, j) => (
                  <motion.line
                    key={`${i}-${j}`}
                    x1={node1.x}
                    y1={node1.y}
                    x2={node2.x}
                    y2={node2.y}
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    opacity="0.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.5, delay: 0.6 + i * 0.1 + j * 0.05, ease: "easeInOut" }}
                  />
                ))
              )}

              {/* Nodes with attributes */}
              {nodes.map((node, i) => (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring", stiffness: 80 }}
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="65"
                    fill="#0B0F14"
                    stroke={node.color}
                    strokeWidth="4"
                    filter="url(#distGlow)"
                  />
                  {node.attrs.map((attr, j) => (
                    <text
                      key={j}
                      x={node.x}
                      y={node.y - 12 + j * 24}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={node.color}
                      fontSize="14"
                      fontWeight="800"
                      className="tracking-wide"
                    >
                      {attr}
                    </text>
                  ))}
                </motion.g>
              ))}
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
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-[#22D3EE]">Unique Contexts</h3>
              <p className="text-xl text-[#E5E7EB]/80 leading-relaxed font-light">
                Just as distributed architectures require deep understanding of each node's unique network context and constraints, we must recognize that individuals experience society differently based on their intersecting layers of identity.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-r from-[#A78BFA]/20 to-[#A78BFA]/5 rounded-3xl border border-[#A78BFA]/30 shadow-[0_0_20px_rgba(167,139,250,0.1)] backdrop-blur-sm relative">
              <p className="text-2xl font-bold text-[#E5E7EB] italic leading-relaxed">
                "You can't design <span className="text-[#A78BFA]">one solution</span> for everyone."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-[1px] bg-[#A78BFA]/50" />
                <p className="text-lg text-[#A78BFA] font-semibold tracking-wide uppercase">
                  Intersectional Feminism
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
