
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Database, Globe, Star, Zap, Coffee } from 'lucide-react';

const FloatingElements = () => {
  const techIcons = [Code, Terminal, Cpu, Database, Globe, Star, Zap, Coffee];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Tech Icons */}
      {[...Array(12)].map((_, i) => {
        const Icon = techIcons[i % techIcons.length];
        return (
          <motion.div
            key={`tech-${i}`}
            className="absolute w-8 h-8 text-purple-500/30"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              rotate: [0, 180, 360],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}

      {/* Floating Code Snippets */}
      {['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB', 'Express'].map((tech, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-purple-400/40 font-mono text-sm font-bold bg-purple-900/10 px-3 py-1 rounded-lg border border-purple-500/20"
          style={{
            right: `${5 + i * 15}%`,
            top: `${40 + i * 10}%`,
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 1.2,
            ease: "easeInOut"
          }}
        >
          {tech}
        </motion.div>
      ))}

      {/* Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute w-6 h-6 ${i % 3 === 0 ? 'bg-purple-500/30' : i % 3 === 1 ? 'bg-purple-600/30' : 'bg-purple-400/30'} ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            rotate: [0, 360, 720],
            opacity: [0.2, 0.7, 0.2]
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Binary Code Rain Effect */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-purple-300/20 font-mono text-xs"
          style={{
            left: `${5 + i * 6}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
        >
          {Array.from({ length: 10 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
