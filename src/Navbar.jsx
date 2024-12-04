import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, TerminalIcon, Sun, Moon, BookOpen, Code } from 'lucide-react';
import { useTheme } from "./context/ThemeContext";

const navbarItems = [
    {
        name: "Home",
        path: "/",
        icon: Home
    },
    {
        name: "Projects",
        path: "/projects",
        icon: TerminalIcon
    },
    
    {
        name: "Blog",
        path: "/blog",
        icon: BookOpen
    },
    {
        name: "About",
        path: "/about",
        icon: Info
    }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <section className="flex w-[90%] justify-between items-center m-auto p-2 rounded-full">
        <Link to="/" className="uppercase text-3xl font-bold tracking-widest relative text-gray-900 dark:text-white">
          Pranav <span className="text-blue-500 font-bold text-8xl absolute -bottom-2">.</span>
        </Link>

        <div className="hidden lg:flex gap-5 min-w-96 justify-center items-center border-2 border-white/30 dark:border-gray-700/50 bg-black/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-full p-2">
          {navbarItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className={`flex items-center justify-center gap-2 uppercase duration-200 ease-linear w-36 font-medium rounded-full p-2 text-center 
                ${location.pathname === item.path
                  ? 'bg-white dark:bg-gray-700 text-black dark:text-white'
                  : 'hover:bg-white/90 dark:hover:bg-gray-700/90 hover:text-black dark:hover:text-white text-gray-800 dark:text-gray-200'}`}
            >
              <item.icon /> {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-white/30 dark:bg-gray-700/50 backdrop-blur-md flex items-center justify-center hover:bg-white/40 dark:hover:bg-gray-600/50 transition-colors"
        >
          {isDarkMode ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </section>

      <section className="fixed z-50 md:w-[30rem] md:m-auto lg:hidden bottom-10 left-0 right-0 flex flex-wrap justify-center w-full">
        <div className="border-black/10 dark:border-white/10 flex gap-3 flex-wrap items-center w-[60%] justify-between p-2 bg-black/20 dark:bg-white/5 backdrop-blur-lg border-2 rounded-full">
          {navbarItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`p-2 ${location.pathname === item.path
                ? 'bg-[#3c3939] dark:bg-white/30 rounded-full text-white dark:text-black'
                : 'text-black dark:text-white'}`}
            >
              <item.icon />
            </Link>
          ))}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;