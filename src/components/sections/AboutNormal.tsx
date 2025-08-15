import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const AboutNormal: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { personal } = data;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {personal.summary}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">6+ years of software development experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Full-stack development expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Team leadership and mentoring</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-gray-900">Name:</span>
                  <span className="text-gray-700 ml-2">{personal.name}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Role:</span>
                  <span className="text-gray-700 ml-2">{personal.title}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Experience:</span>
                  <span className="text-gray-700 ml-2">{personal.experience}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Location:</span>
                  <span className="text-gray-700 ml-2">{personal.location}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <span className="text-gray-700 ml-2">{personal.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNormal;