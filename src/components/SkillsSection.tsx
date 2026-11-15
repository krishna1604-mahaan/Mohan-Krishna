import { motion } from 'motion/react';
import { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  const visibleGroups =
    activeCategory === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
              05. Skills & AI Toolkit
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
              Core stack & daily AI partners.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="inline-flex w-fit flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0E1319] p-1"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                type="button"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-[#E5A93C] text-[#0B0E13]'
                    : 'text-[#A3ACB9] hover:text-[#F1F3F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {visibleGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-[#0D1218]/80 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-[#F7F8FA]">
                {group.category}
              </h3>
              <p className="mt-1 text-xs text-[#8C96A5]">{group.description}</p>

              <ul className="mt-6 divide-y divide-white/8 border-t border-white/8">
                {group.items.map((skill) => (
                  <li key={skill.name} className="py-3.5 first:pt-4 last:pb-0">
                    <p className="font-medium text-[#F1F3F5]">{skill.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-[#9CA6B4]">
                      {skill.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
