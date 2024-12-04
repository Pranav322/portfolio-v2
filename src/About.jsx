import React, { useState, useEffect } from 'react';
import Skills from './Skills';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left side - About Text */}
          <div
            className={`transform transition-all duration-700 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-xl leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for creating elegant solutions.
              </p>
              <p className="text-lg leading-relaxed">
                With several years of experience in web development, I specialize in building 
                scalable applications using modern technologies.
              </p>
              <p className="text-lg leading-relaxed">
                My focus is on creating intuitive user experiences while maintaining clean, 
                efficient code architecture.
              </p>
              <div className="pt-6">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div
            className={`transform transition-all duration-700 delay-200 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <div className="backdrop-blur-sm rounded-2xl p-8">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;