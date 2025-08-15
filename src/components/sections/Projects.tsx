import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import TypingAnimation from '../ui/TypingAnimation';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const Projects: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { projects } = data;

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
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
                <TypingAnimation text="ls -la ./projects" speed={80} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="ls -la ./projects" speed={80} delay={500} />
                </span>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 md:gap-6 pl-2 md:pl-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-800/50 rounded p-3 md:p-4 border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-blue-400">📁</span>
                      <h3 className="text-base md:text-lg font-bold text-cyan-400">{project.name}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-purple-400"># </span>
                      <span className="text-gray-300 text-xs md:text-sm leading-relaxed">{project.description}</span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-yellow-400 text-xs mb-2">## Dependencies:</div>
                      <div className="flex flex-wrap gap-1 max-w-full">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-700/50 text-green-300 px-2 py-1 rounded text-xs border border-gray-600/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 text-xs">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 text-blue-400 hover:bg-gray-700 rounded border border-gray-600/50 transition-colors"
                      >
                        <span>./</span>view_code
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-1 px-3 py-1 bg-green-600/20 text-green-400 hover:bg-green-600/30 rounded border border-green-600/50 transition-colors"
                      >
                        <span>./</span>demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex items-center">
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

export default Projects;