import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { NEXT_BUILDS } from '../data/portfolioData';

export function NextBuildsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(NEXT_BUILDS[0].id);

  return (
    <section id="next-builds" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
          04. What I&apos;m Building Next
        </p>
        <h2 className="mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
          Upcoming tools on my engineering roadmap.
        </h2>

        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {NEXT_BUILDS.map((item, idx) => {
            const isOpen = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="py-6"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#9CA6B4]">
                      <span className="font-medium text-[#E5A93C]">{item.stage}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.focus.join(' / ')}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-medium text-[#F7F8FA] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A3ACB9]">
                      {item.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setExpandedId(isOpen ? null : item.id)}
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/12 px-3.5 py-2 text-xs font-medium text-[#E4E8EE] transition-colors hover:border-white/25 hover:bg-white/[0.04] whitespace-nowrap shrink-0"
                  >
                    {isOpen ? 'Hide architecture goal' : 'Architecture goal'}
                    {isOpen ? (
                      <ChevronUp className="h-3.5 w-3.5" />
                    ) : (
                      <ChevronDown className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-4 rounded-xl border border-white/8 bg-[#0D1218] px-4 py-3 text-sm text-[#CBD2DC]">
                    <span className="font-medium text-[#E5A93C]">Target milestone: </span>
                    {item.technicalGoal}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
