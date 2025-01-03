import React, { useState, useEffect } from 'react';
import { Camera, Code, Palette, Github, Twitter, Linkedin } from 'lucide-react';
import Navbar from './Navbar';
import Terminal from './Terminal';
import Skills from './Skills';
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <div className="relative">
      <Navbar />
      
      <div 
        className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20"
        onMouseMove={handleMouseMove}
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8 py-12">
          <div
            className={`transform transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <span className="text-blue-500 dark:text-blue-400 font-medium mb-4 block">👋 Hello, I'm</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Pranav
            </h1>
            <div className="flex items-center space-x-4 text-xl text-gray-600 dark:text-gray-300">
              <span>Developer</span>
              <span className="text-blue-500 dark:text-blue-400">•</span>
              <span>Designer</span>
              <span className="text-blue-500 dark:text-blue-400">•</span>
              <span>Creator</span>
            </div>
          </div>
          
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-md">
              A passionate full-stack developer crafting beautiful interfaces & meaningful digital experiences. 
              Specialized in building innovative web solutions that make an impact.
            </p>
          </div>
          
          <div
            className={`transform transition-all duration-700 delay-300 space-y-6 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('npx pranawww');
                  const notification = document.createElement('div');
                  notification.className = 'fixed bottom-4 right-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 flex items-center gap-2';
                  notification.innerHTML = 'Copied to clipboard!';
                  document.body.appendChild(notification);
                  
                  setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => notification.remove(), 300);
                  }, 3000);
                }}
                className="group relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.25)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.25)] active:translate-y-[4px] active:translate-x-[4px] active:shadow-none transition-all duration-200 flex items-center gap-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <span>npx pranawww</span>
              </button>
              <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                Contact Me
              </button>
            </div>

            {/* Skills Icons */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Code size={24} />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Development</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Palette size={24} />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Design</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400">
                  <Camera size={24} />
                </div>
                <span className="text-sm mt-2 text-gray-600 dark:text-gray-400">Photography</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
     

{/* Right Content - Terminal */}
<div className="w-full md:w-1/2 flex justify-center items-center py-12">
  <Terminal />
</div>

    
      </div>


      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/50 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 dark:bg-purple-900/50 rounded-full filter blur-3xl opacity-20 -z-10"></div>
    </div>
  );
};

export default HeroSection;