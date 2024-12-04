import React from "react";

const HelpCommand = () => {
  return (
    <div className="mt-2">
      <h1 className="text-sm font-medium opacity-70">Available commands:</h1>
      <ul className="text-sm font-mono font-semibold tracking-wide flex flex-col gap-2">
        <li className="mt-2 flex gap-2 items-center">
          shiva: <span className="opacity-70 text-xs">Displays info about me</span>
        </li>
        <li className="mt-2 flex gap-2 items-center">
          echo: <span className="opacity-70 text-xs">Prints whatever is written after echo</span>
        </li>
        <li className="mt-2 flex gap-2 items-center">
          about: <span className="opacity-70 text-xs">Navigate to about section</span>
        </li>
        <li className="flex items-center gap-2">
          clear: <span className="opacity-70 text-xs">Clears terminal</span>
        </li>
      </ul>
    </div>
  );
};

export default HelpCommand;