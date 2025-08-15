import { useState } from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import TypingAnimation from '../ui/TypingAnimation';
import portfolioData from '../../data/portfolio.json';
import type { PortfolioData } from '../../types/portfolio';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const data = portfolioData as PortfolioData;
  const { personal } = data;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
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
                <TypingAnimation text="curl -X POST /contact" speed={80} />
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2">
                  <TypingAnimation text="curl -X POST /contact" speed={80} delay={500} />
                </span>
              </div>
              
              <div className="pl-4 mb-6">
                <div className="text-cyan-400 mb-4"># Let's connect and build something amazing together!</div>
                <div className="text-gray-300 mb-6">
                  I'm always open to discussing new opportunities and interesting projects.
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 pl-4">
                <div>
                  <div className="text-yellow-400 font-bold mb-4">## Contact Info</div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-800/50 rounded p-3 border border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">📧</span>
                        <div>
                          <div className="text-cyan-400 text-sm font-bold">email:</div>
                          <div className="text-green-400 text-sm">{personal.email}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded p-3 border border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">📱</span>
                        <div>
                          <div className="text-cyan-400 text-sm font-bold">phone:</div>
                          <div className="text-green-400 text-sm">{personal.phone}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded p-3 border border-gray-700/50">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">📍</span>
                        <div>
                          <div className="text-cyan-400 text-sm font-bold">location:</div>
                          <div className="text-green-400 text-sm">{personal.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-yellow-400 font-bold mb-4">## Send Message</div>
                  
                  <div className="bg-gray-800/50 rounded p-4 border border-gray-700/50">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-cyan-400 text-xs block mb-1">name:</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded text-white text-sm font-mono focus:ring-1 focus:ring-green-500 focus:border-green-500"
                          placeholder="your_name"
                        />
                      </div>
                      
                      <div>
                        <label className="text-cyan-400 text-xs block mb-1">email:</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded text-white text-sm font-mono focus:ring-1 focus:ring-green-500 focus:border-green-500"
                          placeholder="you@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="text-cyan-400 text-xs block mb-1">message:</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded text-white text-sm font-mono focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
                          placeholder="Your message here..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full px-4 py-2 bg-green-600/20 text-green-400 hover:bg-green-600/30 rounded border border-green-600/50 transition-colors font-mono text-sm"
                      >
                        ./send_message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <span className="text-green-400">$</span>
                <span className="text-white ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;