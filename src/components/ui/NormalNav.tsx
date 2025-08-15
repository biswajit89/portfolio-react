import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NormalNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: './home', path: '/', icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'about', label: './about', path: '/about', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )},
    { id: 'experience', label: './work', path: '/experience', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
      </svg>
    )},
    { id: 'projects', label: './projects', path: '/projects', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V9a2 2 0 00-2-2H5z" />
      </svg>
    )},
    { id: 'skills', label: './skills', path: '/skills', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )},
    { id: 'contact', label: './contact', path: '/contact', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )}
  ];

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const sections = navItems.map(item => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setActiveSection('');
    }
  }, [location.pathname]);

  const isActive = (item: typeof navItems[0]) => {
    if (location.pathname === '/') {
      return activeSection === item.id;
    }
    return location.pathname === item.path;
  };

  const handleNavigation = (item: typeof navItems[0]) => {
    if (location.pathname === '/' && item.id !== 'hero') {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <nav className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl rounded-full shadow-2xl border border-white/20">
      <div className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 md:py-3">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item)}
            className={`group relative flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-500 transform hover:scale-110 font-mono ${
              isActive(item)
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50'
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
            title={item.label}
          >
            <div className={`transition-all duration-300 w-5 h-5 ${
              isActive(item) ? 'rotate-12 scale-110' : 'group-hover:scale-110'
            }`}>
              {item.icon}
            </div>
            
            <span className={`text-xs font-mono font-bold whitespace-nowrap transition-all duration-500 overflow-hidden tracking-wider ${
              isActive(item) 
                ? 'opacity-100 max-w-28 ml-1' 
                : 'opacity-0 max-w-0 ml-0'
            }`}>
              {item.label}
            </span>
            
            {/* Active indicator */}
            {isActive(item) && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
            
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap scale-95 group-hover:scale-100">
              {item.label}
            </div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NormalNav;