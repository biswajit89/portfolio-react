import Card from '../ui/Card';
import TypingAnimation from '../ui/TypingAnimation';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const Experience: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { experience } = data;

  return (
    <section id="experience" className="py-16 bg-slate-900/30">
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
                <TypingAnimation text="git log --oneline" speed={80} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="git log --oneline" speed={80} delay={500} />
                </span>
              </div>
              
              <div className="pl-4 space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-yellow-400 font-bold">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-gray-500 ml-2">commit</span>
                      </div>
                      
                      <div className="flex-1 bg-gray-800/50 rounded p-3 md:p-4 border border-gray-700/50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-cyan-400">{exp.position}</h3>
                            <h4 className="text-sm md:text-base text-green-400 font-medium">{exp.company}</h4>
                          </div>
                          <span className="text-gray-400 text-xs md:text-sm font-mono bg-gray-700/50 px-2 py-1 rounded">
                            {exp.duration}
                          </span>
                        </div>
                        
                        <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
                          <span className="text-purple-400"># </span>
                          {exp.description}
                        </div>
                      </div>
                    </div>
                    
                    {index < experience.length - 1 && (
                      <div className="ml-6 mt-2 mb-2">
                        <span className="text-gray-600">|</span>
                      </div>
                    )}
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

export default Experience;