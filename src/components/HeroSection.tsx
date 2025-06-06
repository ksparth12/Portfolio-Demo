import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Code, Star, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypewriterEffect from './TypewriterEffect';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const words = [
    { text: "Build." },
    { text: "Design." },
    { text: "Develop." },
    { text: "Deploy." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: "/social-icons/github-contact.svg",
      url: "https://github.com/ksparth12",
      color: "hover:text-white hover:bg-purple-800"
    },
    {
      name: "LinkedIn",
      icon: "/social-icons/linkedin-contact.svg",
      url: "https://linkedin.com/in/ksparth128",
      color: "hover:text-white hover:bg-purple-800"
    },
    {
      name: "Email",
      icon: "/social-icons/email-contact.svg",
      url: "mailto:Ksparth12@gmail.com",
      color: "hover:text-white hover:bg-purple-800"
    },
    {
      name: "Location",
      icon: "/social-icons/location-contact.svg",
      url: "#",
      color: "hover:text-white hover:bg-purple-800"
    }
  ];

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-purple-400 text-lg mb-4"
            >
              👋 Hello, I'm
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent"
            >
              Parth Sharma
            </motion.h1>

            {/* Typewriter Effect */}
            <div className="text-2xl lg:text-3xl mb-6 h-20">
              <TypewriterEffect
                texts={[
                  "Software Engineer",
                  "Full Stack Developer",
                  "CS Final Year Student",
                  "Problem Solver",
                  "Code Enthusiast"
                ]}
              />
            </div>

            {/* Location */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-gray-300 text-lg mb-8"
            >
              📍 Noida, NCR | Chandigarh University | Software Engineer
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                size="lg"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                size="lg"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-8"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full border border-gray-700 ${social.color} transition-colors duration-300`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Code Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Central Code Symbol */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-48 h-48 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-full flex items-center justify-center border-2 border-purple-500/30">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Terminal className="w-24 h-24 text-purple-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Orbiting Icons */}
              {[
                { icon: Code, delay: 0, radius: 120 },
                { icon: Star, delay: 2, radius: 120 },
                { icon: Zap, delay: 4, radius: 120 },
                { icon: Terminal, delay: 6, radius: 120 }
              ].map(({ icon: Icon, delay, radius }, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: `-24px`,
                    marginTop: `-24px`,
                    transformOrigin: `24px ${radius}px`
                  }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}

              {/* Floating Code Snippets */}
              {['{ }', '< />', '&&', '||'].map((code, index) => (
                <motion.div
                  key={code}
                  className="absolute text-purple-400 font-mono text-xl font-bold"
                  style={{
                    left: `${20 + index * 20}%`,
                    top: `${30 + index * 15}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {code}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-purple-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
