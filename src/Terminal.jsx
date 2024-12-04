import React, { useState, useEffect, useRef } from "react";
import { TerminalSquare } from "lucide-react";
import HelpCommand from "./HelpCommand";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [commands, setCommands] = useState([]);
  const terminalRef = useRef(null);
  
  const getFormattedTime = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes}:${seconds}${amPm}`;
  };

  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const processCommand = (command) => {
    const cmd = command.trim().toLowerCase();
    let output;
    
    switch (cmd) {
      case "help":
        output = <HelpCommand />;
        break;
      case "shiva":
        output = "Hello there! I'm Shiva, a Full Stack Developer experienced in the MERN stack.";
        break;
      case "about":
        window.location.href = "#about";
        output = "Navigating to about section...";
        break;
      case "clear":
        setCommands([]);
        return;
      default:
        if (cmd.startsWith("echo ")) {
          output = cmd.substring(5);
        } else {
          output = `Command not found: ${cmd}. Type 'help' for available commands.`;
        }
    }

    const newCommand = {
      id: Date.now(),
      input: command,
      output,
      time: getFormattedTime()
    };

    setCommands(prev => [...prev, newCommand]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands]);

  return (
    <div className="border-2 border-black/30 dark:border-white/30 rounded-lg h-[450px] overflow-y-auto w-full">
      <div className="flex p-2 justify-between mb-5 items-center sticky top-0 dark:bg-black/40 z-20 backdrop-blur-lg bg-white/40">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <h1 className="dark:text-white/80">pranaw.vercel.app</h1>
        <span className="border flex gap-1 font-medium text-sm border-white/30 rounded-lg p-2 text-gray-700 dark:text-white">
          <TerminalSquare class size={17} />
          zsh
        </span>
      </div>

      <div className="p-2">
        <h1 className="text-sm font-medium opacity-70 dark:text-white">Type 'help' for available commands</h1>
        
        {commands.map((command) => (
          <div key={command.id} ref={terminalRef} className="mt-2 font-mono flex justify-between">
            <div className="w-full">
              <div className="text-md font-medium opacity-70 dark:text-white flex items-center gap-3">
                <span className="text-green-500 font-bold text-2xl">{">"}</span>
                {command.input}
              </div>
              <span className="text-sm font-medium opacity-70 dark:text-white">{command.output}</span>
            </div>
            <span className="text-sm opacity-60 dark:text-white/60">{command.time}</span>
          </div>
        ))}

        <div className="flex font-mono justify-between items-center text-md">
          <div className="w-full flex items-center gap-3">
            <span className="text-2xl font-bold dark:text-white">{">"}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              className="bg-transparent w-[90%] outline-none dark:text-white"
            />
          </div>
          <span className="text-sm opacity-60 dark:text-white/60">{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;