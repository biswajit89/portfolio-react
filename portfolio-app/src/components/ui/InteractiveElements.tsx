import { useState } from 'react';

const InteractiveElements: React.FC = () => {
  const [clickedElements, setClickedElements] = useState<string[]>([]);

  const handleElementClick = (id: string) => {
    if (!clickedElements.includes(id)) {
      setClickedElements(prev => [...prev, id]);
    }
  };

  const elements = [
    { id: 'star1', icon: '⭐', x: 10, y: 20, reward: '+10 XP' },
    { id: 'gem1', icon: '💎', x: 85, y: 15, reward: '+25 XP' },
    { id: 'coin1', icon: '🪙', x: 15, y: 70, reward: '+5 XP' },
    { id: 'star2', icon: '⭐', x: 90, y: 80, reward: '+10 XP' },
    { id: 'gem2', icon: '💎', x: 50, y: 10, reward: '+25 XP' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute pointer-events-auto cursor-pointer transition-all duration-300 ${
            clickedElements.includes(element.id) 
              ? 'opacity-0 scale-0' 
              : 'opacity-70 hover:opacity-100 hover:scale-110 animate-pulse'
          }`}
          style={{ left: `${element.x}%`, top: `${element.y}%` }}
          onClick={() => handleElementClick(element.id)}
        >
          <div className="text-2xl">{element.icon}</div>
          {!clickedElements.includes(element.id) && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-2 py-1 rounded text-xs opacity-0 hover:opacity-100 transition-opacity">
              {element.reward}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InteractiveElements;