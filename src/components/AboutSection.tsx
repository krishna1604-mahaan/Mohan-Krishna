import { motion } from 'motion/react';
import { ABOUT_CONTENT } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium tracking-wide text-[#E5A93C]">01. About</p>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
            {ABOUT_CONTENT.heading}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#A3ACB9] sm:text-[17px]">
            {ABOUT_CONTENT.narrative}
          </p>
        </motion.div>

        {/* Clean 3-column architectural grid separated by hairlines (zero nested cards) */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">
          {ABOUT_CONTENT.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <span className="font-mono text-xs font-medium tabular-nums text-[#E5A93C]">
                {pillar.index}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-[#F1F3F5]">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#9CA6B4]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
