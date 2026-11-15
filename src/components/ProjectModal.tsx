import { ArrowUpRight, RefreshCw, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { PROFILE, type RealTimeProject } from '../data/portfolioData';

interface ProjectModalProps {
  project: RealTimeProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [events, setEvents] = useState(project?.liveEvents ?? []);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setEvents(project?.liveEvents ?? []);
    setImgError(false);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleTriggerLiveTick = () => {
    const now = new Date();
    const ts = now.toTimeString().slice(0, 8);
    const sampleDetails: Record<string, { actor: string; detail: string }> = {
      pulsedesk: {
        actor: 'Room #CS-204',
        detail: 'Synced updated list-comprehension benchmark (0.8 ms execution)',
      },
      agrisense: {
        actor: 'Sector B-04',
        detail: 'Live moisture poll received: 32.4% · Evapotranspiration nominal',
      },
      civicroute: {
        actor: 'Loop North-02',
        detail: 'Live GPS beacon confirmed at Library Stop · Next departure in 90s',
      },
    };
    const next = sampleDetails[project.id] ?? {
      actor: 'Stream Node',
      detail: 'Synchronized updated real-time packet',
    };
    setEvents((prev) => [{ timestamp: ts, ...next }, ...prev.slice(0, 3)]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/12 bg-[#0D1117] p-6 shadow-2xl sm:p-8"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#E5A93C]">
              {project.index} · {project.category}
            </p>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-2xl font-semibold text-[#F7F8FA] sm:text-3xl"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-[#A3ACB9]">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project inspector"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/12 text-[#CBD2DC] transition-colors hover:bg-white/8 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Visual Frame */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#121820]">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="aspect-[16/9] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-[#13202B] to-[#1D160B] p-6">
              <span className="font-display text-xl font-medium text-[#F1F3F5]">
                {project.title}
              </span>
            </div>
          )}
        </div>

        {/* Summary & Metadata (Zero-pill inline typography) */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-[#9CA6B4]">
            {project.stack.map((tech, idx) => (
              <span key={tech} className="inline-flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">·</span>}
                <span>{tech}</span>
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-[#CBD2DC] sm:text-base">
            {project.summary}
          </p>
        </div>

        {/* Interactive Real-Time Stream Inspector */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#090C10] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h4 className="font-display text-sm font-medium text-[#F1F3F5]">
                {project.liveFeedLabel}
              </h4>
              <p className="text-xs text-[#8C96A5]">
                Interactive preview of real-time event payloads
              </p>
            </div>
            <button
              type="button"
              onClick={handleTriggerLiveTick}
              className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#F1F3F5] transition-colors hover:border-[#E5A93C]/50 hover:text-[#E5A93C] whitespace-nowrap shrink-0"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Simulate live packet
            </button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-4 border-y border-white/8 py-3">
            {project.liveMetrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs text-[#8C96A5]">{metric.label}</dt>
                <dd className="mt-0.5 font-mono text-sm font-medium tabular-nums text-[#F1F3F5]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-4 space-y-2.5">
            {events.map((ev, i) => (
              <li
                key={`${ev.timestamp}-${i}`}
                className="flex flex-col gap-1 text-xs sm:flex-row sm:items-baseline sm:gap-3"
              >
                <span className="font-mono tabular-nums text-[#E5A93C] shrink-0">
                  {ev.timestamp}
                </span>
                <span className="font-medium text-[#E2E6EC] shrink-0">{ev.actor}</span>
                <span className="text-[#9CA6B4]">{ev.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Notes */}
        <div className="mt-6">
          <h4 className="font-display text-sm font-medium text-[#F1F3F5]">
            Engineering Notes
          </h4>
          <ul className="mt-2.5 space-y-2 text-sm text-[#A3ACB9]">
            {project.architectureNotes.map((note) => (
              <li key={note} className="flex items-start gap-2.5">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E5A93C]" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Action */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="font-mono text-xs tabular-nums text-[#9CA6B4]">
            {project.outcomeMetric}
          </span>
          <a
            href={PROFILE.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#E5A93C] px-4 py-2 text-xs font-semibold text-[#0B0E13] transition-colors hover:bg-[#F0B852] whitespace-nowrap shrink-0"
          >
            View GitHub Profile
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
