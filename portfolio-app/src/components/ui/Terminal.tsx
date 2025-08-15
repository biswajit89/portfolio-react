import { useState, useEffect } from 'react';

interface TerminalProps {
  commands: string[];
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ commands, className = '' }) => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentCommand < commands.length) {
      const command = commands[currentCommand];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index <= command.length) {
          setDisplayText(command.slice(0, index));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentCommand(prev => (prev + 1) % commands.length);
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [currentCommand, commands]);

  return (
    <div className={`bg-slate-900 rounded-lg p-4 font-mono text-sm border border-slate-700 ${className}`}>
      <div className="flex items-center mb-3">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="ml-4 text-slate-400 text-xs">Terminal</div>
      </div>
      <div className="text-green-400">
        <span className="text-blue-400">$</span> {displayText}
        {showCursor && <span className="bg-green-400 text-slate-900">█</span>}
      </div>
    </div>
  );
};

export default Terminal;