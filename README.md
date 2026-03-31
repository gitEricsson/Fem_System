# Fem System: Gender Perspective in System Design

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff69b4?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

A premium, interactive web experience exploring the intersection of **System Design Principles** and **Feminist Theory**. This project uses high-level engineering concepts to analyze and visualize social power structures, specifically patriarchy and gendered labor.

## 🌟 Philosophy

In software engineering, we strive for resilience, scalability, and fairness. Yet, our social systems often suffer from the very anti-patterns we avoid in code: **Single Points of Failure**, **Stale Data (Stereotypes)**, and **Imbalanced Load Distribution**.

**Fem System** re-envisions society through the lens of a distributed, fault-tolerant architecture.

---

## 🛠️ Conceptual Framework

The project is structured into several interactive sections, each mapping a technical concept to a social reality:

### 1. [SPOF → Patriarchy](src/components/sections/SPOFSection.tsx)
*   **Tech Concept:** Single Point of Failure.
*   **Social Insight:** A system where power is concentrated in a single demographic is fragile. True resilience comes from a distributed power structure.

### 2. [Load Balancing → Mental Load](src/components/sections/LoadBalancingSection.tsx)
*   **Tech Concept:** Traffic Distribution.
*   **Social Insight:** Analyzing the "Invisible Labor" and how it's historically skewed. We explore what happens when we balance the "request load" across all nodes equally.

### 3. [Caching → Gender Stereotypes](src/components/sections/CachingSection.tsx)
*   **Tech Concept:** TTL (Time to Live) and Stale Data.
*   **Social Insight:** Stereotypes are essentially "stale cache" — old data that hasn't been invalidated despite real-time reality changing.

### 4. [Distributed Systems → Equity](src/components/sections/DistributedSection.tsx)
*   **Tech Concept:** Decentralization.
*   **Social Insight:** moving from a Monolithic power structure to a microservices-inspired model of shared autonomy.

### 5. [Event-Driven → Social Movements](src/components/sections/EventDrivenSection.tsx)
*   **Tech Concept:** Pub/Sub and Asynchronous Processing.
*   **Social Insight:** How single "events" (incidents) trigger massive, asynchronous social reckonings and state changes.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0 (with @tailwindcss/postcss)
- **Animation:** Framer Motion 12.0 for high-performance, fluid interactions
- **Icons:** SVG Repo (Customized)
- **Typography:** Inter (Variable Font)

---

## 📦 Getting Started

### Prerequisites
- Node.js 20+
- npm / pnpm / yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gitEricsson/Fem_Design.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 UI/UX Design

The application features a **Dark Premium Aesthetic**:
- **Glassmorphism:** Heavy use of backdrop blurs and transparent borders.
- **Vibrant Gradients:** Cyber-cyan (`#22D3EE`) and Royal Purple (`#A78BFA`) accents.
- **Dynamic Interactions:** Scroll-triggered animations and interactive SVG diagrams.
- **Responsive Layout:** Fully optimized for mobile, tablet, and desktop viewports.

---

## 👤 Credits

Created and maintained by **Ericsson Raphael**.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
