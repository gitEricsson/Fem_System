"use client";
import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';

import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import FeminismSection from '@/components/sections/FeminismSection';
import SPOFSection from '@/components/sections/SPOFSection';
import LoadBalancingSection from '@/components/sections/LoadBalancingSection';
import CachingSection from '@/components/sections/CachingSection';
import DistributedSection from '@/components/sections/DistributedSection';
import FaultToleranceSection from '@/components/sections/FaultToleranceSection';
import EventDrivenSection from '@/components/sections/EventDrivenSection';
import ClosingSection from '@/components/sections/ClosingSection';

export default function FeminismSystemDesign() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-[#0B0F14] text-[#E5E7EB] min-h-screen font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', sans-serif; }
        body { overflow-x: hidden; }
      `}</style>

      <HeroSection />
      <IntroSection />
      <FeminismSection />
      <SPOFSection />
      <LoadBalancingSection />
      <CachingSection />
      <DistributedSection />
      <FaultToleranceSection />
      <EventDrivenSection />
      <ClosingSection />
    </div>
  );
}
