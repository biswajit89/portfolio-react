import { useState, useEffect } from 'react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const achievements: Achievement[] = [
  { id: 'first-visit', title: 'Welcome!', description: 'First time visitor (+20 XP)', icon: '👋' },
  { id: 'scroll-master', title: 'Scroll Master', description: 'Scrolled through entire portfolio (+100 XP)', icon: '📜' },
  { id: 'project-explorer', title: 'Project Explorer', description: 'Viewed projects section (+50 XP)', icon: '🔍' },
  { id: 'about-reader', title: 'About Reader', description: 'Learned about me (+30 XP)', icon: '📖' },
  { id: 'experience-viewer', title: 'Experience Viewer', description: 'Checked my work history (+40 XP)', icon: '💼' },
  { id: 'skills-checker', title: 'Skills Checker', description: 'Explored my abilities (+35 XP)', icon: '🎯' },
  { id: 'contact-initiator', title: 'Contact Initiator', description: 'Opened contact section (+25 XP)', icon: '📧' },
  { id: 'resume-downloader', title: 'Resume Downloaded', description: 'Downloaded the resume (+75 XP)', icon: '📄' }
];

const AchievementToast: React.FC = () => {
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);

  const unlockAchievement = (id: string, xpReward: number = 0) => {
    if (!unlockedAchievements.includes(id)) {
      const achievement = achievements.find(a => a.id === id);
      if (achievement) {
        setCurrentAchievement(achievement);
        setUnlockedAchievements(prev => [...prev, id]);
        
        // Add XP reward
        if (xpReward > 0) {
          const savedStats = localStorage.getItem('portfolioGameStats');
          const currentStats = savedStats ? JSON.parse(savedStats) : { xp: 0, level: 1, achievements: 0 };
          const newXP = currentStats.xp + xpReward;
          const newLevel = Math.floor(newXP / 100) + 1;
          const updatedStats = { ...currentStats, xp: newXP, level: newLevel, achievements: currentStats.achievements + 1 };
          localStorage.setItem('portfolioGameStats', JSON.stringify(updatedStats));
        }
        
        setTimeout(() => setCurrentAchievement(null), 3000);
      }
    }
  };

  useEffect(() => {
    // First visit achievement
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
      setTimeout(() => unlockAchievement('first-visit', 20), 1000);
    }

    // Scroll achievement
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 90) {
        unlockAchievement('scroll-master', 100);
      }
    };

    // Section achievements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'about') unlockAchievement('about-reader', 30);
          if (id === 'experience') unlockAchievement('experience-viewer', 40);
          if (id === 'projects') unlockAchievement('project-explorer', 50);
          if (id === 'skills') unlockAchievement('skills-checker', 35);
          if (id === 'contact') unlockAchievement('contact-initiator', 25);
        }
      });
    });

    document.querySelectorAll('#about, #experience, #projects, #skills, #contact').forEach(el => observer.observe(el));
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [unlockedAchievements]);

  if (!currentAchievement) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg shadow-lg animate-slide-in-right">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{currentAchievement.icon}</span>
        <div>
          <h4 className="font-bold">Achievement Unlocked!</h4>
          <p className="text-sm">{currentAchievement.title}</p>
          <p className="text-xs opacity-80">{currentAchievement.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementToast;