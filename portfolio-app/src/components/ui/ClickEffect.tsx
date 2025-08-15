import { useState, useEffect } from 'react';

interface ClickParticle {
  id: number;
  x: number;
  y: number;
  color: string;
}

const ClickEffect: React.FC = () => {
  const [particles, setParticles] = useState<ClickParticle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ['#3b82f6', '#8b5cf6', '#06d6a0', '#f72585', '#ffbe0b'];
      const newParticles: ClickParticle[] = [];
      
      for (let i = 0; i < 6; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      
      setParticles(prev => [...prev, ...newParticles]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => !newParticles.includes(p)));
      }, 1000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, index) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full animate-ping"
          style={{
            left: particle.x + (Math.random() - 0.5) * 40,
            top: particle.y + (Math.random() - 0.5) * 40,
            backgroundColor: particle.color,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

export default ClickEffect;