import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { EducationSection } from './components/EducationSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { NextBuildsSection } from './components/NextBuildsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { StudioBackdrop } from './components/StudioBackdrop';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-[#F1F3F5]">
        <StudioBackdrop />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <TestimonialsSection />
          <NextBuildsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>
    </MotionConfig>
  );
}
