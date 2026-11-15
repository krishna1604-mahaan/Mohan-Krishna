import { motion } from 'motion/react';
import { CLIENT_TESTIMONIALS } from '../data/portfolioData';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
              03. Client Proof
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
              Measured outcomes from real project partners.
            </h2>
          </div>

          <p className="font-mono text-xs tabular-nums text-[#9CA6B4]">
            3 Live Systems Delivered · 100% On-Time Handoff
          </p>
        </div>

        {/* 3 Attributable Client Testimonials — Clean all-around hairlines, no thick left borders */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CLIENT_TESTIMONIALS.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D1218]/80 p-6"
            >
              <div>
                <p className="text-xs font-medium text-[#E5A93C]">
                  {item.projectRef} · {item.outcome}
                </p>
                <blockquote className="mt-4 text-sm leading-relaxed text-[#D7DDE6]">
                  “{item.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 border-t border-white/8 pt-4">
                <p className="font-display text-base font-medium text-[#F7F8FA]">
                  {item.clientName}
                </p>
                <p className="mt-0.5 text-xs text-[#9CA6B4]">
                  {item.role} · {item.organization}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
