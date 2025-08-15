import { useEffect } from 'react';

const ScrollParallax: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      document.documentElement.style.setProperty('--scroll-y', scrolled.toString());
      
      // Update parallax elements
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast');
      parallaxElements.forEach((element) => {
        const speed = element.classList.contains('parallax-slow') ? 0.5 : -0.3;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollParallax;