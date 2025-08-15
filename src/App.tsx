import { Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';
import Hero from './components/sections/Hero';
import HeroNormal from './components/sections/HeroNormal';
import About from './components/sections/About';
import AboutNormal from './components/sections/AboutNormal';
import Experience from './components/sections/Experience';
import ExperienceNormal from './components/sections/ExperienceNormal';
import Projects from './components/sections/Projects';
import ProjectsNormal from './components/sections/ProjectsNormal';
import Skills from './components/sections/Skills';
import SkillsNormal from './components/sections/SkillsNormal';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import ContactNormal from './components/sections/ContactNormal';
import Footer from './components/sections/Footer';
import FloatingNav from './components/ui/FloatingNav';
import NormalNav from './components/ui/NormalNav';
import ThemeToggle from './components/ui/ThemeToggle';

// Dev mode home page
const DevHomePage: React.FC = () => (
  <>
    <section id="hero"><Hero /></section>
    <section id="about"><About /></section>
    <section id="experience"><Experience /></section>
    <section id="projects"><Projects /></section>
    <section id="skills"><Skills /></section>
    <section id="contact"><Contact /></section>
  </>
);

// Normal mode home page
const NormalHomePage: React.FC = () => (
  <>
    <section id="hero"><HeroNormal /></section>
    <section id="about"><AboutNormal /></section>
    <section id="experience"><ExperienceNormal /></section>
    <section id="projects"><ProjectsNormal /></section>
    <section id="skills"><SkillsNormal /></section>
    <section id="contact"><ContactNormal /></section>
  </>
);

const App: React.FC = () => {
  const { theme } = useTheme();
  const HomePage = theme === 'dev' ? DevHomePage : NormalHomePage;

  return (
    <div className={`min-h-screen ${theme === 'dev' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      <ThemeToggle />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={theme === 'dev' ? <About /> : <AboutNormal />} />
          <Route path="/experience" element={theme === 'dev' ? <Experience /> : <ExperienceNormal />} />
          <Route path="/projects" element={theme === 'dev' ? <Projects /> : <ProjectsNormal />} />
          <Route path="/skills" element={theme === 'dev' ? <Skills /> : <SkillsNormal />} />
          <Route path="/contact" element={theme === 'dev' ? <Contact /> : <ContactNormal />} />
        </Routes>
      </main>
      {theme === 'dev' && <Footer />}
      {theme === 'dev' && <FloatingNav />}
      {theme === 'normal' && <NormalNav />}
    </div>
  );
};

export default App;