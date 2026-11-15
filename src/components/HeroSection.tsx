import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { MARQUEE_SKILLS, PROFILE } from '../data/portfolioData';

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="top" className="relative pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* 2-Column Hero Split with matching stretch height */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
                Open to Student Internships · {PROFILE.location}
              </p>

              <h1 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.04] tracking-tight text-[#F7F8FA] sm:text-5xl lg:text-[3.6rem]">
                {PROFILE.fullName}
              </h1>

              <p className="mt-4 font-display text-xl font-medium text-[#D6DCE5] sm:text-2xl">
                {PROFILE.heroHeadline}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A0AAB8] sm:text-[17px]">
                {PROFILE.heroLead}
              </p>
            </div>

            {/* Primary CTA & Direct Social Links */}
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E5A93C] px-5 py-2.5 text-sm font-semibold text-[#0B0E13] transition-all duration-150 hover:bg-[#F0B852] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5A93C]"
                >
                  Explore Real-Time Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-[#E4E8EE] transition-colors duration-150 hover:border-white/25 hover:bg-white/[0.06] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5A93C]"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#E5A93C]" />
                      Copied {PROFILE.email}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-[#9CA6B4]" />
                      {PROFILE.email}
                    </>
                  )}
                </button>
              </div>

              {/* Clean text-anchored social links */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/8 pt-5 text-sm text-[#A3ACB9]">
                <a
                  href={PROFILE.socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F7F8FA] whitespace-nowrap shrink-0"
                >
                  <Github className="h-4 w-4 text-[#E5A93C]" />
                  <span>{PROFILE.socials.github.handle}</span>
                </a>
                <a
                  href={PROFILE.socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F7F8FA] whitespace-nowrap shrink-0"
                >
                  <Linkedin className="h-4 w-4 text-[#E5A93C]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE.socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F7F8FA] whitespace-nowrap shrink-0"
                >
                  <Instagram className="h-4 w-4 text-[#E5A93C]" />
                  <span>{PROFILE.socials.instagram.handle}</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#F7F8FA] whitespace-nowrap shrink-0"
                >
                  <Mail className="h-4 w-4 text-[#E5A93C]" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Circular Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center lg:col-span-5"
          >
            <div className="relative flex flex-col items-center">
              {/* Subtle ambient studio rim behind the circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-full bg-gradient-to-tr from-[#1F4E5F]/35 via-transparent to-[#E5A93C]/25 blur-2xl"
              />

              <div className="relative aspect-square w-64 overflow-hidden rounded-full border-2 border-[#E5A93C]/80 bg-[#11161D] p-1.5 shadow-2xl ring-1 ring-white/12 sm:w-80 lg:w-[340px]">
                <div className="h-full w-full overflow-hidden rounded-full border border-white/15 bg-[#0D1218]">
                  {!imgError ? (
                    <img
                      src={PROFILE.portrait}
                      alt={PROFILE.portraitAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="h-full w-full object-cover object-[50%_26%]"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#13202B] via-[#0E1319] to-[#1F180D] p-6 text-center">
                      <span className="font-display text-2xl font-semibold text-[#F1F3F5]">
                        {PROFILE.fullName}
                      </span>
                      <span className="mt-1.5 text-xs text-[#A3ACB9]">
                        {PROFILE.shortRole}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 text-center">
                <p className="font-display text-base font-medium text-[#F7F8FA]">
                  {PROFILE.fullName}
                </p>
                <p className="mt-0.5 text-xs text-[#9CA6B4]">
                  {PROFILE.shortRole} · {PROFILE.institution}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Summary Strip below Hero Split */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-2 gap-6 rounded-xl border border-white/8 bg-[#0E1319]/80 px-6 py-5 sm:grid-cols-4"
        >
          {PROFILE.summaryStrip.map((item) => (
            <div key={item.label}>
              <dt className="text-xs font-medium text-[#8C96A5]">{item.label}</dt>
              <dd className="mt-1 font-display text-sm font-medium text-[#F1F3F5] sm:text-base">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Subtle Animated Editorial Skill Marquee Divider */}
      <div className="mt-12 overflow-hidden border-y border-white/8 bg-[#0B0F14]/70 py-3.5">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap text-xs font-medium tracking-wide text-[#95A0AE]">
          {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((skill, idx) => (
            <span key={`${skill}-${idx}`} className="inline-flex items-center gap-10">
              <span>{skill}</span>
              <span aria-hidden="true" className="text-[#E5A93C]/65">
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
