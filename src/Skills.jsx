import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, FileCode, Box, Palette, Terminal, GitBranch, Database, Server, Layers } from 'lucide-react';
import ConnectionLine from './ConnectionLine';

const skills = {
  stage1: [
    { icon: Code2, color: '#61DAFB', name: 'React' },
    { icon: FileCode, color: '#bdbdbd', name: 'Next.js' },
    { icon: Box, color: '#007acc', name: 'TypeScript' },
  ],
  stage2: [
    { icon: Palette, color: '#38b2ac', name: 'TailwindCSS' },
    { icon: Terminal, color: '#bf0477', name: 'Rust' },
  ],
  stage3: [
    { icon: Server, color: '#61DAFB', name: 'Docker' },
    { icon: GitBranch, color: '#FF0000', name: 'Git' },
  ],
  stage4: [
    { icon: Database, color: '#45A538', name: 'MongoDB' },
    { icon: Layers, color: '#f58220', name: 'SQL' },
  ]
};

const Skills = () => {
  const refs = {
    stage1: skills.stage1.map(() => useRef(null)),
    stage2: skills.stage2.map(() => useRef(null)),
    stage3: skills.stage3.map(() => useRef(null)),
    stage4: skills.stage4.map(() => useRef(null)),
  };
  const centerRef = useRef(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
      <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
        Crafting full stack web apps using M.E.R.N stack
      </p>
      <div className="relative w-full max-w-4xl h-[600px] flex justify-center items-center">
        {/* Center Tech Stack */}
        <motion.div
          ref={centerRef}
          className="absolute w-40 h-40 bg-black dark:bg-white/10 rounded-full flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white font-bold text-xl">Tech Stack</span>
        </motion.div>

        {/* Stage 1 - Top */}
        <div className="absolute top-0 w-full flex justify-around">
          {skills.stage1.map((skill, index) => (
            <motion.div
              key={`stage1-${index}`}
              ref={refs.stage1[index]}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center relative overflow-hidden"
                style={{ 
                  backgroundColor: `${skill.color}10`,
                  boxShadow: `0 0 20px ${skill.color}30`,
                  border: `2px solid ${skill.color}40`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <skill.icon size={32} style={{ color: skill.color }} />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stage 2 - Right */}
        <div className="absolute right-0 h-full flex flex-col justify-center gap-20">
          {skills.stage2.map((skill, index) => (
            <motion.div
              key={`stage2-${index}`}
              ref={refs.stage2[index]}
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.6 }}
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${skill.color}20` }}>
                <skill.icon size={32} style={{ color: skill.color }} />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stage 3 - Left */}
        <div className="absolute left-0 h-full flex flex-col justify-center gap-20">
          {skills.stage3.map((skill, index) => (
            <motion.div
              key={`stage3-${index}`}
              ref={refs.stage3[index]}
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.9 }}
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${skill.color}20` }}>
                <skill.icon size={32} style={{ color: skill.color }} />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Stage 4 - Bottom */}
        <div className="absolute bottom-0 w-full flex justify-around">
          {skills.stage4.map((skill, index) => (
            <motion.div
              key={`stage4-${index}`}
              ref={refs.stage4[index]}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 1.2 }}
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center"
                   style={{ backgroundColor: `${skill.color}20` }}>
                <skill.icon size={32} style={{ color: skill.color }} />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Update the Connection Lines section */}
        {Object.entries(skills).map(([stage, stageSkills]) =>
          stageSkills.map((skill, index) => (
            <ConnectionLine
              key={`${stage}-${index}`}
              div1Ref={refs[stage][index]}
              div2Ref={centerRef}
              color={skill.color}
              direction={stage}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Skills;