import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const SkillsNormal: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { skills } = data;

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'blue' },
    { title: 'Backend', skills: skills.backend, color: 'green' },
    { title: 'Database', skills: skills.database, color: 'purple' },
    { title: 'Tools & Technologies', skills: skills.tools, color: 'orange' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className={`px-4 py-2 rounded-full text-sm font-medium border ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsNormal;