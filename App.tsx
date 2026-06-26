import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import VideoBackground from './components/VideoBackground';
import IntroduceSection from './components/IntroduceSection';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const SECTIONS = ['introduce', 'home', 'experience', 'project', 'skills', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('introduce');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    observerRef.current = new IntersectionObserver(callback, options);
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === activeSection) return;
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400); 
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent" id="app-viewport">
      <VideoBackground />
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className={`page-container ${isTransitioning ? 'is-transitioning' : ''}`}>
        <div id="introduce"><IntroduceSection className="section" /></div>
        <div id="home"><HeroSection className="section" /></div>
        <div id="experience"><ExperienceSection className="section" /></div>
        <div id="project"><ProjectsSection className="section" /></div>
        <div id="skills"><SkillsSection className="section" /></div>
        <div id="contact"><ContactSection className="section" /></div>
      </main>
    </div>
  );
}
