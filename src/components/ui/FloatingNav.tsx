import { useState, useEffect } from 'react';

const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(true);

  const navItems = [
    { id: 'hero', label: './home', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )},
    { id: 'about', label: './about', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )},
    { id: 'experience', label: './work', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V9a2 2 0 00-2-2H5z" />
      </svg>
    )},
    { id: 'projects', label: './projects', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21l4-4 4 4" />
      </svg>
    )},
    { id: 'skills', label: './skills', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )},
    { id: 'contact', label: './contact', icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
      </svg>
    )}
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      lastScrollY = currentScrollY;

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
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        
        {/* Main navigation */}
        <div className="relative bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-full px-2 py-2 border border-green-500/20 shadow-2xl shadow-green-500/10">
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-500 transform hover:scale-110 font-mono ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-black shadow-lg shadow-green-500/25 scale-105'
                    : 'text-green-400 hover:text-green-300 hover:bg-green-500/5 border border-transparent hover:border-green-500/20'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                title={item.label}
              >
                {/* Icon with animation */}
                <div className={`transition-all duration-300 ${
                  activeSection === item.id ? 'rotate-12 scale-110' : 'group-hover:scale-110'
                }`}>
                  {item.icon}
                </div>
                
                {/* Label with slide animation */}
                <span className={`text-xs font-mono font-bold whitespace-nowrap transition-all duration-500 overflow-hidden tracking-wider ${
                  activeSection === item.id 
                    ? 'opacity-100 max-w-28 ml-1' 
                    : 'opacity-0 max-w-0 ml-0'
                }`}>
                  {item.label}
                </span>
                
                {/* Active indicator dot */}
                {activeSection === item.id && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                )}
                
                {/* Hover ripple effect */}
                <div className="absolute inset-0 rounded-full bg-green-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;