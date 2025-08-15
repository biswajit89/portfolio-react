import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const ExperienceNormal: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { experience } = data;

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Work Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold">{exp.company}</h4>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNormal;