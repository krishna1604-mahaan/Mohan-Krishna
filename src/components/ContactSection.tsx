import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { type FormEvent, useState } from 'react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [topic, setTopic] = useState('Student Internship');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleComposeMail = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${topic} — Inquiry${senderName.trim() ? ` from ${senderName.trim()}` : ''}`,
    );
    const body = encodeURIComponent(
      message.trim() ||
        `Hi Mohan,\n\nI would love to connect regarding ${topic.toLowerCase()}.`,
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFeedback('Opening your email client with a pre-filled note.');
  };

  return (
    <section id="contact" className="pt-16 pb-12 sm:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 rounded-2xl border border-white/10 bg-[#0D1218]/90 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left Direct Info */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
                07. Contact
              </p>
              <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
                Looking for an intern who ships fast? Let&apos;s connect.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#A3ACB9] sm:text-base">
                I&apos;m open to student internships across Python development, responsive web design, and AI prompt engineering—and always excited to collaborate on real-time builds.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#E5A93C] px-4 py-2.5 text-sm font-semibold text-[#0B0E13] transition-colors hover:bg-[#F0B852] whitespace-nowrap shrink-0"
                >
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-[#E4E8EE] transition-colors hover:border-white/25 hover:bg-white/[0.06] whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#E5A93C]" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-[#9CA6B4]" />
                      {PROFILE.email}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links Directory */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
              <a
                href={PROFILE.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/8 bg-[#090C10] px-4 py-3 transition-colors hover:border-white/20"
              >
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-[#8C96A5]">
                    <Github className="h-3.5 w-3.5 text-[#E5A93C]" />
                    GitHub
                  </p>
                  <p className="mt-1 truncate text-xs font-medium text-[#F1F3F5]">
                    {PROFILE.socials.github.handle}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8C96A5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F1F3F5]" />
              </a>

              <a
                href={PROFILE.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/8 bg-[#090C10] px-4 py-3 transition-colors hover:border-white/20"
              >
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-[#8C96A5]">
                    <Linkedin className="h-3.5 w-3.5 text-[#E5A93C]" />
                    LinkedIn
                  </p>
                  <p className="mt-1 truncate text-xs font-medium text-[#F1F3F5]">
                    mohan-krishna
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8C96A5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F1F3F5]" />
              </a>

              <a
                href={PROFILE.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/8 bg-[#090C10] px-4 py-3 transition-colors hover:border-white/20"
              >
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 text-xs font-medium text-[#8C96A5]">
                    <Instagram className="h-3.5 w-3.5 text-[#E5A93C]" />
                    Instagram
                  </p>
                  <p className="mt-1 truncate text-xs font-medium text-[#F1F3F5]">
                    {PROFILE.socials.instagram.handle}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#8C96A5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F1F3F5]" />
              </a>
            </div>
          </div>

          {/* Right Quick Email Draft Composer */}
          <form onSubmit={handleComposeMail} className="flex flex-col gap-4 lg:col-span-6">
            <div>
              <label htmlFor="sender-name" className="block text-xs font-medium text-[#CBD2DC]">
                Your name
              </label>
              <input
                id="sender-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Priya Sharma"
                className="mt-1.5 w-full rounded-lg border border-white/12 bg-[#080B0F] px-3.5 py-2.5 text-sm text-[#F1F3F5] placeholder:text-[#66707F] focus:border-[#E5A93C] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="inquiry-topic" className="block text-xs font-medium text-[#CBD2DC]">
                Topic
              </label>
              <select
                id="inquiry-topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-white/12 bg-[#080B0F] px-3.5 py-2.5 text-sm text-[#F1F3F5] focus:border-[#E5A93C] focus:outline-none"
              >
                <option value="Student Internship">Student Internship</option>
                <option value="Real-Time Web Project">Real-Time Web Project</option>
                <option value="AI Prompt Architecture">AI Prompt Architecture</option>
                <option value="Collaboration">General Collaboration</option>
              </select>
            </div>

            <div>
              <label htmlFor="inquiry-message" className="block text-xs font-medium text-[#CBD2DC]">
                Project or role details
              </label>
              <textarea
                id="inquiry-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share a quick overview of the role or project timeline..."
                className="mt-1.5 w-full rounded-lg border border-white/12 bg-[#080B0F] px-3.5 py-2.5 text-sm text-[#F1F3F5] placeholder:text-[#66707F] focus:border-[#E5A93C] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E5A93C]/50 bg-[#E5A93C]/12 px-4 py-2.5 text-sm font-medium text-[#F5C66D] transition-colors hover:bg-[#E5A93C] hover:text-[#0B0E13] whitespace-nowrap shrink-0"
              >
                <Send className="h-4 w-4" />
                Draft email to Mohan
              </button>

              {feedback && (
                <p className="text-xs text-[#9CA6B4]" role="status">
                  {feedback}
                </p>
              )}
            </div>
          </form>
        </motion.div>

        {/* Quiet Editorial Footer */}
        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 text-xs text-[#7D8796] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="transition-colors hover:text-[#CBD2DC]">
              About
            </a>
            <a href="#projects" className="transition-colors hover:text-[#CBD2DC]">
              Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-[#CBD2DC]">
              Skills
            </a>
            <a href="#education" className="transition-colors hover:text-[#CBD2DC]">
              Education
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
