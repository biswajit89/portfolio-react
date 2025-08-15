import Button from '../ui/Button';
import Terminal from '../ui/Terminal';
import ParallaxBackground from '../ui/ParallaxBackground';
import FloatingElements from '../ui/FloatingElements';
import ExperienceCounter from '../ui/ExperienceCounter';
import TypingAnimation from '../ui/TypingAnimation';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const Hero: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { personal, skills } = data;

  return (
    <section className="min-h-[60vh] flex items-center justify-center py-12 relative overflow-hidden">
      <ParallaxBackground />
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="rounded-lg border border-gray-700/50 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 rounded-t-lg border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">
                <TypingAnimation text="biswajit@portfolio:~$" speed={100} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="whoami" speed={80} delay={1000} />
                </span>
              </div>
              
              <div className="mb-6 pl-4">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="/profile.svg" 
                    alt="Biswajit Nath" 
                    className="w-16 h-16 rounded-full border-2 border-green-400/50"
                  />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">
                      {personal.name}
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <h2 className="text-lg text-green-400 font-semibold">
                        {personal.title}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  <span className="text-cyan-400"># </span>
                  Crafting digital experiences that scale from 
                  <span className="text-yellow-400 font-medium">zero to millions</span>. 
                  Code architect by day, problem solver by night. 🚀
                </p>
                
                <div className="mb-4 text-sm">
                  <div className="text-purple-400 mb-2">## Core Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 2), ...skills.tools.slice(0, 2)].map((skill, index) => (
                      <span key={index} className="bg-gray-700/50 text-green-300 px-2 py-1 rounded text-xs border border-gray-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <ExperienceCounter />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">ls -la ./actions</span>
              </div>
              
              <div className="pl-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="sm" className="group relative overflow-hidden font-mono">
                    <span className="relative z-10 flex items-center text-xs">
                      <span className="mr-2">./</span>
                      <a href="#projects">view_projects</a>
                    </span>
                  </Button>
                  
                  <a 
                    href="/Biswajit_Nath_7yrs_java_react_microservice.pdf" 
                    download="Biswajit_Nath_7yrs_java_react_microservice.pdf"
                    className="inline-flex items-center px-4 py-2 border border-green-500/50 text-green-400 hover:bg-green-500/10 font-mono text-xs rounded transition-all duration-300"
                  >
                    <span className="mr-2">./</span>
                    download_resume
                  </a>
                  
                  <a 
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-300 hover:bg-green-600/30 font-mono text-xs rounded transition-all duration-300"
                  >
                    <span className="mr-2">./</span>
                    contact_me
                  </a>
                </div>
              </div>
              
              <div className="text-gray-500 text-xs">
                <div className="flex items-center gap-4 flex-wrap">
                  <span>📍 {personal.location}</span>
                  <span>🟢 Available for hire</span>
                  <span>⚡ Fast response</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;