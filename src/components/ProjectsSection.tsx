import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { REALTIME_PROJECTS, type RealTimeProject } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

type ProjectFilter = 'all' | 'python' | 'ai';

export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<RealTimeProject | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects = REALTIME_PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'python') return project.stack.includes('Python');
    if (filter === 'ai') {
      return project.stack.some((s) =>
        ['Google Gemini', 'ChatGPT', 'Emergent AI', 'Prompt Writing'].includes(s),
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-wide text-[#E5A93C]">
              02. Real-Time Projects
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold tracking-tight text-[#F7F8FA] sm:text-4xl">
              Three real-time systems built for live clarity.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#9CA6B4] sm:text-base">
              Select any project to inspect its live event feed, telemetry metrics, and engineering workflow.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by capability"
            className="inline-flex w-fit items-center gap-1 rounded-lg border border-white/10 bg-[#0E1319] p-1"
          >
            {[
              { id: 'all' as const, label: 'All (3)' },
              { id: 'python' as const, label: 'Python Core' },
              { id: 'ai' as const, label: 'AI-Assisted' },
            ].map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  filter === tab.id
                    ? 'bg-[#E5A93C] text-[#0B0E13]'
                    : 'text-[#A3ACB9] hover:text-[#F1F3F5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Real-Time Project Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {visibleProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0D1218]/90 transition-colors duration-200 hover:border-white/22"
            >
              {/* 4:3 Bespoke Project Preview */}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="relative aspect-[4/3] w-full overflow-hidden bg-[#121820] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5A93C]"
              >
                {!failedImages[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                    }
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#13202B] to-[#1D160B] p-6">
                    <span className="font-display text-xl font-medium text-[#F1F3F5]">
                      {project.title}
                    </span>
                    <span className="mt-1 text-xs text-[#9CA6B4]">{project.category}</span>
                  </div>
                )}
              </button>

              {/* Card Body — Zero-pill clean editorial typography */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium text-[#E5A93C]">
                    {project.index} · {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#F7F8FA]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A3ACB9]">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/8 pt-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#8C96A5]">
                    {project.stack.map((tech, tIdx) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        {tIdx > 0 && <span aria-hidden="true">·</span>}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tabular-nums text-[#CBD2DC]">
                      {project.outcomeMetric}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#E5A93C] transition-colors hover:text-[#F5C66D] whitespace-nowrap shrink-0"
                    >
                      Inspect stream
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
