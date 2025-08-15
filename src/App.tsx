import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingNav from './components/ui/FloatingNav';


const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <FloatingNav />
    </div>
  );
};

export default App;