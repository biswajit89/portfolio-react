import { useState } from 'react';

interface VillageBuilding {
  id: string;
  name: string;
  icon: string;
  x: number;
  y: number;
  section: string;
  description: string;
}

const buildings: VillageBuilding[] = [
  { id: 'home', name: 'Home', icon: '🏠', x: 50, y: 80, section: 'hero', description: 'Start your journey here' },
  { id: 'library', name: 'Library', icon: '📚', x: 20, y: 60, section: 'about', description: 'Learn about me' },
  { id: 'office', name: 'Office', icon: '🏢', x: 80, y: 40, section: 'experience', description: 'My work history' },
  { id: 'workshop', name: 'Workshop', icon: '🔧', x: 30, y: 30, section: 'projects', description: 'Things I\'ve built' },
  { id: 'school', name: 'School', icon: '🎓', x: 70, y: 70, section: 'skills', description: 'My abilities' },
  { id: 'trophy', name: 'Trophy Hall', icon: '🏆', x: 15, y: 35, section: 'achievements', description: 'My achievements' },
  { id: 'mailbox', name: 'Mailbox', icon: '📮', x: 60, y: 20, section: 'contact', description: 'Get in touch' }
];

interface VillageMapProps {
  onNavigate: (section: string) => void;
  className?: string;
}

const VillageMap: React.FC<VillageMapProps> = ({ onNavigate, className = '' }) => {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null);

  return (
    <div className={`relative w-full h-96 bg-gradient-to-b from-blue-200 to-green-300 rounded-lg overflow-hidden ${className}`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-4 left-4 text-2xl">☀️</div>
        <div className="absolute top-8 right-8 text-xl">☁️</div>
        <div className="absolute bottom-4 left-8 text-lg">🌳</div>
        <div className="absolute bottom-8 right-4 text-lg">🌲</div>
        <div className="absolute top-1/2 left-1/4 text-sm">🌸</div>
        <div className="absolute top-3/4 right-1/3 text-sm">🌺</div>
      </div>

      {/* Buildings */}
      {buildings.map((building) => (
        <div
          key={building.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-125"
          style={{ left: `${building.x}%`, top: `${building.y}%` }}
          onClick={() => onNavigate(building.section)}
          onMouseEnter={() => setHoveredBuilding(building.id)}
          onMouseLeave={() => setHoveredBuilding(null)}
        >
          <div className="text-3xl hover:animate-bounce">{building.icon}</div>
          {hoveredBuilding === building.id && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
              <div className="font-semibold">{building.name}</div>
              <div className="text-slate-300">{building.description}</div>
            </div>
          )}
        </div>
      ))}

      {/* Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path
          d="M 50% 80% Q 35% 70% 20% 60%"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.6"
        />
        <path
          d="M 50% 80% Q 65% 60% 80% 40%"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.6"
        />
        <path
          d="M 20% 60% Q 25% 45% 30% 30%"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.6"
        />
        <path
          d="M 30% 30% Q 45% 25% 60% 20%"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.6"
        />
        <path
          d="M 20% 60% Q 17% 47% 15% 35%"
          stroke="#8B4513"
          strokeWidth="3"
          fill="none"
          strokeDasharray="5,5"
          opacity="0.6"
        />
      </svg>

      <div className="absolute bottom-2 left-2 text-xs text-slate-700 bg-white/80 px-2 py-1 rounded">
        🗺️ Click buildings to explore
      </div>
      <div className="absolute top-2 right-2 text-xs text-slate-700 bg-yellow-200/80 px-2 py-1 rounded">
        🏠 Home • 📚 Library • 🏢 Office • 🔧 Workshop • 🎓 School • 🏆 Trophy • 📮 Mail
      </div>
    </div>
  );
};

export default VillageMap;