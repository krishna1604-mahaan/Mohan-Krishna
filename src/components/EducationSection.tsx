import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
          06. Education
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
          Academic foundation & schooling.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {EDUCATION_HISTORY.map((entry, idx) => (
            <motion.article
              key={entry.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-[#0D1218]/85 p-7 transition-colors duration-200 hover:border-white/20"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-medium text-[#E5A93C]">
                  {entry.period} · {entry.location}
                </span>
                <GraduationCap className="h-4 w-4 text-[#8C96A5]" aria-hidden="true" />
              </div>

              <h3 className="mt-3 font-display text-2xl font-semibold text-[#F7F8FA]">
                {entry.institution}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-[#CBD2DC]">{entry.program}</p>
              <p className="mt-4 border-t border-white/8 pt-4 text-sm leading-relaxed text-[#9CA6B4]">
                {entry.notes}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
