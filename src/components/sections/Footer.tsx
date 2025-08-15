import TypingAnimation from '../ui/TypingAnimation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/biswajit', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/biswajit', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/biswajit', icon: 'twitter' }
  ];

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Terminal Window */}
          <div className="rounded-lg border border-gray-700/50 shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 rounded-t-lg border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">
                <TypingAnimation text="cat ~/.signature" speed={80} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-4 md:p-6 font-mono text-xs md:text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="cat ~/.signature" speed={80} delay={500} />
                </span>
              </div>
              
              <div className="pl-2 md:pl-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-4">
                  <div className="mb-4 md:mb-0">
                    <div className="text-cyan-400 font-bold text-base md:text-lg">Biswajit Nath</div>
                    <div className="text-gray-400 text-xs md:text-sm">Sr. Software Engineer</div>
                    <div className="text-green-400 text-xs mt-1"># Building the future, one commit at a time</div>
                  </div>
                  
                  <div className="flex gap-3 md:gap-4 flex-wrap">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-cyan-400 transition-colors duration-200 text-xs whitespace-nowrap"
                        aria-label={link.name}
                      >
                        ./{link.name.toLowerCase()}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-700/50 pt-4">
                  <div className="text-gray-500 text-xs">
                    <span className="text-purple-400"># </span>
                    © {currentYear} Biswajit Nath. All rights reserved.
                  </div>
                  <div className="text-gray-500 text-xs mt-1">
                    <span className="text-purple-400"># </span>
                    Built with <span className="text-blue-400">React</span>, <span className="text-blue-400">TypeScript</span> & <span className="text-blue-400">Tailwind CSS</span>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="text-white ml-2">
                    <TypingAnimation text="exit" speed={100} delay={2000} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;