import { useState } from 'react';
import VillageMap from './VillageMap';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationModal: React.FC<NavigationModalProps> = ({ isOpen, onClose }) => {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-slate-900 rounded-xl p-6 max-w-2xl w-full mx-4 border border-slate-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white">🗺️ Portfolio Village</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-slate-300 mb-6">
          Welcome to my portfolio village! Click on any building to explore different sections of my journey.
        </p>
        <VillageMap onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default NavigationModal;