import { useState, useEffect } from 'react';

const ExperienceCounter: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [prevTime, setPrevTime] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Career start date (September 1, 2018)
    const startDate = new Date('2018-09-01T09:00:00');

    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setPrevTime(timeElapsed);
      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm font-mono">
      <div className="text-purple-400 mb-2">## uptime --since 2018-09-01</div>
      <div className="flex gap-1 sm:gap-2 overflow-x-auto">
        <div className={`bg-gray-700/50 rounded px-2 sm:px-3 py-1 sm:py-2 text-center border border-gray-600/50 overflow-hidden min-w-0 flex-shrink-0 ${timeElapsed.years !== prevTime.years ? 'animate-scroll-up' : ''}`}>
          <div className="text-cyan-400 font-bold text-xs sm:text-sm">{timeElapsed.years}</div>
          <div className="text-gray-400 text-xs">y</div>
        </div>
        <div className={`bg-gray-700/50 rounded px-2 sm:px-3 py-1 sm:py-2 text-center border border-gray-600/50 overflow-hidden min-w-0 flex-shrink-0 ${timeElapsed.months !== prevTime.months ? 'animate-scroll-up' : ''}`}>
          <div className="text-cyan-400 font-bold text-xs sm:text-sm">{timeElapsed.months}</div>
          <div className="text-gray-400 text-xs">m</div>
        </div>
        <div className={`bg-gray-700/50 rounded px-2 sm:px-3 py-1 sm:py-2 text-center border border-gray-600/50 overflow-hidden min-w-0 flex-shrink-0 ${timeElapsed.days !== prevTime.days ? 'animate-scroll-up' : ''}`}>
          <div className="text-cyan-400 font-bold text-xs sm:text-sm">{timeElapsed.days}</div>
          <div className="text-gray-400 text-xs">d</div>
        </div>
        <div className={`bg-gray-700/50 rounded px-2 sm:px-3 py-1 sm:py-2 text-center border border-gray-600/50 animate-pulse overflow-hidden min-w-0 flex-shrink-0 ${timeElapsed.hours !== prevTime.hours ? 'animate-scroll-up' : ''}`}>
          <div className="text-green-400 font-bold text-xs sm:text-sm">{timeElapsed.hours}</div>
          <div className="text-gray-400 text-xs">h</div>
        </div>
        <div className={`bg-gray-700/50 rounded px-2 sm:px-3 py-1 sm:py-2 text-center border border-gray-600/50 animate-pulse overflow-hidden min-w-0 flex-shrink-0 ${timeElapsed.minutes !== prevTime.minutes ? 'animate-scroll-up' : ''}`}>
          <div className="text-green-400 font-bold text-xs sm:text-sm">{timeElapsed.minutes}</div>
          <div className="text-gray-400 text-xs">m</div>
        </div>
        <div className="bg-gray-700/50 rounded px-2 sm:px-3 py-1 sm:py-2 text-center border border-gray-600/50 animate-pulse animate-scroll-up overflow-hidden min-w-0 flex-shrink-0">
          <div className="text-green-400 font-bold text-xs sm:text-sm">{timeElapsed.seconds}</div>
          <div className="text-gray-400 text-xs">s</div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCounter;