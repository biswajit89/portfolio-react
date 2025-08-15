import { useState, useEffect } from 'react';

interface GameStatsProps {
  className?: string;
}

const GameStats: React.FC<GameStatsProps> = ({ className = '' }) => {
  const [stats, setStats] = useState({
    level: 1,
    xp: 0,
    streak: 0,
    achievements: 0
  });

  const addXP = (amount: number) => {
    setStats(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      const updated = { ...prev, xp: newXP, level: newLevel };
      localStorage.setItem('portfolioGameStats', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const savedStats = localStorage.getItem('portfolioGameStats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }

    let lastScrollTime = 0;
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > 100) {
        addXP(1);
        lastScrollTime = now;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const visitedKey = `visited-${sectionId}`;
          if (!localStorage.getItem(visitedKey)) {
            localStorage.setItem(visitedKey, 'true');
            addXP(50);
          }
        }
      });
    });

    document.querySelectorAll('#about, #experience, #projects, #skills, #achievements, #contact').forEach(el => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-20 right-4 z-40 bg-slate-900/90 backdrop-blur-sm rounded-lg p-3 border border-slate-700 ${className}`}>
      <div className="text-xs text-slate-300 space-y-2">
        <div className="flex items-center justify-between">
          <span>Level</span>
          <span className="text-accent font-bold">{stats.level}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1">
          <div 
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${(stats.xp % 100)}%` }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span>XP</span>
          <span className="text-green-400">{stats.xp}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>🏆</span>
          <span className="text-yellow-400">{stats.achievements}</span>
        </div>
      </div>
    </div>
  );
};

export default GameStats;