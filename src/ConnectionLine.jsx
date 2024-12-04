import React, { useLayoutEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ConnectionLine = ({ div1Ref, div2Ref, color, direction }) => {
  const [path, setPath] = useState('');
  const svgRef = useRef(null);

  useLayoutEffect(() => {
    const updatePath = () => {
      const rect1 = div1Ref.current?.getBoundingClientRect();
      const rect2 = div2Ref.current?.getBoundingClientRect();
      const svg = svgRef.current;

      if (!rect1 || !rect2 || !svg) return;

      const svgRect = svg.getBoundingClientRect();

      const x1 = rect1.x - svgRect.x + rect1.width / 2;
      const y1 = rect1.y - svgRect.y + rect1.height / 2;
      const x2 = rect2.x - svgRect.x + rect2.width / 2;
      const y2 = rect2.y - svgRect.y + rect2.height / 2;

      const angle = Math.atan2(y2 - y1, x2 - x1);
      const radius1 = rect1.width / 2;
      const radius2 = rect2.width / 2;

      const startX = x1 + Math.cos(angle) * radius1;
      const startY = y1 + Math.sin(angle) * radius1;
      const endX = x2 - Math.cos(angle) * radius2;
      const endY = y2 - Math.sin(angle) * radius2;

      const distance = Math.hypot(endX - startX, endY - startY);
      const curveIntensity = distance * 0.2;

      let controlPoint1, controlPoint2;
      switch(direction) {
        case 'stage1':
          controlPoint1 = { x: startX, y: startY + curveIntensity };
          controlPoint2 = { x: endX, y: endY - curveIntensity };
          break;
        case 'stage4':
          controlPoint1 = { x: startX, y: startY - curveIntensity };
          controlPoint2 = { x: endX, y: endY + curveIntensity };
          break;
        case 'stage2':
          controlPoint1 = { x: startX - curveIntensity, y: startY };
          controlPoint2 = { x: endX + curveIntensity, y: endY };
          break;
        case 'stage3':
          controlPoint1 = { x: startX + curveIntensity, y: startY };
          controlPoint2 = { x: endX - curveIntensity, y: endY };
          break;
        default:
          controlPoint1 = { x: (startX + endX) / 2, y: (startY + endY) / 2 };
          controlPoint2 = { x: (startX + endX) / 2, y: (startY + endY) / 2 };
      }

      const pathString = `M ${startX},${startY} C ${controlPoint1.x},${controlPoint1.y} ${controlPoint2.x},${controlPoint2.y} ${endX},${endY}`;
      setPath(pathString);
    };

    updatePath();
    window.addEventListener('resize', updatePath);
    return () => window.removeEventListener('resize', updatePath);
  }, [div1Ref, div2Ref, direction]);

  return (
    <svg ref={svgRef} className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <defs>
        <filter id={`glow-${direction}`}>
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <linearGradient id={`line-gradient-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color || "#4f46e5"} stopOpacity="0.2"/>
          <stop offset="50%" stopColor={color || "#4f46e5"} stopOpacity="1"/>
          <stop offset="100%" stopColor={color || "#4f46e5"} stopOpacity="0.2"/>
        </linearGradient>

        <linearGradient id={`flow-${direction}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="50%" stopColor="white" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="transparent"/>
          <animate
            attributeName="x1"
            values="-100%;100%"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="0%;200%"
            dur="2s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>

      {/* Base path with gradient */}
      <motion.path
        d={path}
        stroke={`url(#line-gradient-${direction})`}
        strokeWidth="3"
        fill="none"
        filter={`url(#glow-${direction})`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Animated glow effect */}
      <motion.path
        d={path}
        stroke={`url(#flow-${direction})`}
        strokeWidth="5"
        fill="none"
        filter={`url(#glow-${direction})`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
        transition={{
          pathLength: { duration: 2, repeat: Infinity },
          opacity: { duration: 2, repeat: Infinity }
        }}
      />
    </svg>
  );
};

export default ConnectionLine;