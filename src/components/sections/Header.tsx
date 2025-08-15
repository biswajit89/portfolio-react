import { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-primary/95 backdrop-blur-md border-b border-slate-700/50' : 'bg-transparent'}
    `}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-accent-500">Biswajit Nath</div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-slate-300 hover:text-accent-500 transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <button className="text-slate-300 hover:text-accent-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;