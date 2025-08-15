import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const FloatingElements: React.FC = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      setElements(newElements);
    };

    createElements();

    const animateElements = () => {
      setElements(prev => prev.map(el => ({
        ...el,
        y: el.y - el.speed,
        x: el.x + Math.sin(el.y * 0.01) * 0.5,
        y: el.y < -10 ? window.innerHeight + 10 : el.y - el.speed
      })));
    };

    const interval = setInterval(animateElements, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {elements.map(el => (
        <div
          key={el.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
          style={{
            left: `${el.x}px`,
            top: `${el.y}px`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            opacity: el.opacity,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;