import Card from '../ui/Card';
import CodeBlock from '../ui/CodeBlock';
import TypingAnimation from '../ui/TypingAnimation';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const About: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { personal, education } = data;

  return (
    <section id="about" className="py-16">
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
                <TypingAnimation text="cat about.md" speed={80} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="cat about.md" speed={80} delay={500} />
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 pl-2 md:pl-4">
                <div>
                  <div className="mb-4">
                    <span className="text-cyan-400"># </span>
                    <span className="text-yellow-400 font-bold">Who I Am</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed font-light">
                    {personal.summary}
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed font-light">
                    I'm passionate about creating digital experiences that make a difference. 
                    With a strong foundation in both frontend and backend technologies, 
                    I enjoy tackling complex problems and turning ideas into reality.
                  </p>
                  
                  <div className="bg-gray-800/50 rounded p-3 md:p-4 border border-gray-700/50 overflow-x-auto">
                    <div className="text-purple-400 mb-2">const developer = {`{`}</div>
                    <div className="pl-2 md:pl-4 space-y-1 text-xs md:text-sm">
                      <div><span className="text-blue-400">name:</span> <span className="text-green-300">"{personal.name}"</span>,</div>
                      <div><span className="text-blue-400">role:</span> <span className="text-green-300">"{personal.title}"</span>,</div>
                      <div><span className="text-blue-400">experience:</span> <span className="text-green-300">"{personal.experience}"</span>,</div>
                      <div><span className="text-blue-400">skills:</span> <span className="text-yellow-300">["React", "Node.js", "Java", "AWS"]</span>,</div>
                      <div><span className="text-blue-400">passion:</span> <span className="text-green-300">"Building scalable solutions"</span></div>
                    </div>
                    <div className="text-purple-400">{`};`}</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded p-4 border border-gray-700/50">
                    <div className="text-yellow-400 font-bold mb-3">## Quick Facts</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Experience:</span>
                        <span className="text-green-400">{personal.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Location:</span>
                        <span className="text-green-400">{personal.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Email:</span>
                        <span className="text-green-400">{personal.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gray-800/50 rounded p-4 border border-gray-700/50">
                      <div className="text-cyan-400 font-bold text-sm">{edu.degree}</div>
                      <div className="text-gray-300 text-sm">{edu.institution}</div>
                      <div className="text-gray-500 text-xs">{edu.year} • GPA: {edu.gpa}</div>
                    </div>
                  ))}
                </div>
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

export default About;