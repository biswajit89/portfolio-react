import Card from '../ui/Card';
import Badge from '../ui/Badge';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

const Achievements: React.FC = () => {
  const data = portfolioData as PortfolioData & { achievements: string[], languages: string[] };
  const { achievements, languages } = data;

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-accent-500">🏆 Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-300 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </Card>
          
          <Card>
            <h3 className="text-2xl font-semibold mb-6 text-accent-500">🌐 Languages</h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <Badge key={index} variant="success">
                  {language}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-accent-500">📍 Location</h4>
              <p className="text-slate-300">
                <strong>Current:</strong> Viman Nagar, Pune, Maharashtra - 411014
              </p>
              <p className="text-slate-300 mt-2">
                <strong>Permanent:</strong> House No 390, Vill Rangkhal, Karimganj (Assam) - 788736
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;