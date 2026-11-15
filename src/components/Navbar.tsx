import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PROFILE } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#080B0F]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#F1F3F5] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5A93C]"
        >
          {PROFILE.fullName}
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A3ACB9]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 transition-colors duration-150 hover:text-[#F1F3F5] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5A93C] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#E5A93C] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#E5A93C] px-4 py-2 text-xs font-semibold text-[#0B0E13] transition-all duration-150 hover:bg-[#F0B852] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5A93C]"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#E2E6EC] transition-colors hover:bg-white/5 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-white/8 bg-[#0B0F15] px-6 py-4 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#CBD2DC] transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#E5A93C] px-4 py-2.5 text-sm font-semibold text-[#0B0E13]"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
