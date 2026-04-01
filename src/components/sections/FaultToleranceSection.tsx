"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scale, ShieldCheck, HeartHandshake, HeartPulse } from 'lucide-react';

export default function FaultToleranceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const supportSystems = [
    { title: "Legal Protections", icon: Scale, desc: "Laws that protect victims and hold perpetrators completely accountable" },
    { title: "Safe Reporting", icon: ShieldCheck, desc: "Secure mechanisms for event reporting without the fear of retaliation" },
    { title: "Social Networks", icon: HeartHandshake, desc: "Community-driven support mechanisms and solidarity backup structures" },
    { title: "Healthcare Access", icon: HeartPulse, desc: "Robust mental health resources and specialized medical care nodes" }
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 md:py-32 relative">
      <div className="max-w-6xl w-full mx-auto">
        <div className="text-center md:text-left mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] text-[#22D3EE]"
          >
            Fault Tolerance → Support Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#E5E7EB]/60 font-light max-w-4xl md:ml-16 leading-relaxed"
          >
            Fault Tolerance: <span className="text-[#E5E7EB] font-medium">ensure the system stays up despite unexpected failures.</span><br/>
            Society: <span className="text-[#E5E7EB] font-medium">ensure individuals stay whole despite systemic shocks and crises.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportSystems.map((item, i) => {
            const Icon = item.icon; // Extract the component for rendering
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.8, type: "spring" }}
                className="p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl hover:border-[#22D3EE]/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#22D3EE]/0 to-[#22D3EE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-start md:items-center flex-col md:flex-row gap-6 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#22D3EE]/20 to-[#A78BFA]/20 border border-[#22D3EE]/30 flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#22D3EE]/60 transition-colors duration-300">
                    <Icon 
                      className="w-10 h-10 text-[#22D3EE] drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] group-hover:scale-110 transition-transform duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#E5E7EB] mb-3 group-hover:text-[#22D3EE] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#E5E7EB]/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}