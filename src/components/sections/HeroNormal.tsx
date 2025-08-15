import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const HeroNormal: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { personal, skills } = data;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/profile_picture.jpg" 
              alt="Biswajit Nath" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-xl border-4 border-white"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {personal.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              {personal.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              {personal.summary}
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[...skills.frontend.slice(0, 3), ...skills.backend.slice(0, 2)].map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View Projects
            </a>
            <a 
              href="/Biswajit_Nath_7yrs_java_react_microservice.pdf" 
              download="Biswajit_Nath_7yrs_java_react_microservice.pdf"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Download Resume
            </a>
            <a 
              href="#contact"
              className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 text-gray-600">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <span>📍 {personal.location}</span>
              <span>🟢 Available for hire</span>
              <span>⚡ Fast response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNormal;