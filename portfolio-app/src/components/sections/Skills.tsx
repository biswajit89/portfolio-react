import Card from '../ui/Card';
import Badge from '../ui/Badge';
import TypingAnimation from '../ui/TypingAnimation';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const Skills: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { skills } = data;

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, icon: '🎨' },
    { title: 'Backend', skills: skills.backend, icon: '⚙️' },
    { title: 'Database', skills: skills.database, icon: '🗄️' },
    { title: 'Tools & Others', skills: skills.tools, icon: '🛠️' }
  ];

  return (
    <section id="skills" className="py-16">
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
                <TypingAnimation text="npm list --depth=0" speed={80} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="npm list --depth=0" speed={80} delay={500} />
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 pl-4">
                {skillCategories.map((category, index) => (
                  <div key={index} className="bg-gray-800/50 rounded p-4 border border-gray-700/50">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg">{category.icon}</span>
                      <h3 className="text-lg font-bold text-yellow-400">## {category.title}</h3>
                    </div>
                    
                    <div className="space-y-1">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2 text-sm">
                          <span className="text-green-400">├──</span>
                          <span className="text-cyan-400">{skill}</span>
                          <span className="text-gray-500">@latest</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pl-4">
                <div className="text-gray-400 text-xs mb-2">
                  Found {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)} packages
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

export default Skills;