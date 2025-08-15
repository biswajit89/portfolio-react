import { useState } from 'react';
import NavigationModal from './NavigationModal';

const VillageNavigation: React.FC = () => {
  const [showVillageMap, setShowVillageMap] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowVillageMap(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
        title="Explore Portfolio Village"
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🗺️</span>
          <span className="hidden sm:block font-medium">Village</span>
        </div>
      </button>
      
      <NavigationModal 
        isOpen={showVillageMap} 
        onClose={() => setShowVillageMap(false)} 
      />
    </>
  );
};

export default VillageNavigation;