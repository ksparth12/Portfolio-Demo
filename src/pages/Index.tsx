import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUp, Code, User, MapPin } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgress from '@/components/ScrollProgress';
import FloatingElements from '@/components/FloatingElements';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  // Enhanced scroll-based animations for different sections
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 400], [0, -200]);
  
  const aboutY = useTransform(scrollY, [200, 800], [100, -100]);
  const aboutOpacity = useTransform(scrollY, [200, 600], [0, 1]);
  const aboutScale = useTransform(scrollY, [200, 600], [0.9, 1]);
  
  const skillsY = useTransform(scrollY, [600, 1200], [80, -80]);
  const skillsOpacity = useTransform(scrollY, [600, 1000], [0, 1]);
  
  const projectsY = useTransform(scrollY, [1000, 1600], [80, -80]);
  const projectsOpacity = useTransform(scrollY, [1000, 1400], [0, 1]);
  const projectsScale = useTransform(scrollY, [1000, 1400], [0.9, 1]);
  
  const contactY = useTransform(scrollY, [1400, 1800], [80, -40]);
  const contactOpacity = useTransform(scrollY, [1400, 1800], [0, 1]);
  
  const backgroundY = useTransform(scrollY, [0, 2000], [0, -800]);
  const parallaxY = useTransform(scrollY, [0, 2000], [0, -400]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden w-full">
      {/* Enhanced Particle Background with Parallax */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0">
        <ParticleBackground />
      </motion.div>
      
      {/* Floating Elements with Parallax */}
      <motion.div style={{ y: parallaxY }} className="fixed inset-0 z-0">
        <FloatingElements />
      </motion.div>
      
      {/* Fixed Elements */}
      <ScrollProgress />
      <ThemeToggle />
      
      {/* Main Content with Enhanced Scroll Effects */}
      <main className="relative z-10 w-full">
        {/* Hero Section with Advanced Scroll Effects */}
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}>
          <HeroSection />
        </motion.div>

        {/* About Section with Flying Animation */}
        <motion.div
          style={{ 
            y: aboutY, 
            opacity: aboutOpacity, 
            scale: aboutScale 
          }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 200, rotateX: 45 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: {
                duration: 1.2,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }
            }}
            viewport={{ once: true, margin: "-150px" }}
          >
            <AboutSection />
          </motion.div>
        </motion.div>

        {/* Skills Section - Removed rotation effect */}
        <motion.div
          style={{ 
            y: skillsY, 
            opacity: skillsOpacity
          }}
          className="relative mb-[-3rem]"
        >
          <motion.div
            initial={{ opacity: 0, x: -200, scale: 0.5 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: {
                duration: 1.4,
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }
            }}
            viewport={{ once: true, margin: "-200px" }}
          >
            <SkillsSection />
          </motion.div>
        </motion.div>

        {/* Projects Section with Scale and Flying Animation */}
        <motion.div
          style={{ 
            y: projectsY, 
            opacity: projectsOpacity, 
            scale: projectsScale 
          }}
          className="relative mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 300, rotateY: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotateY: 0,
              transition: {
                duration: 1.6,
                ease: "easeOut",
                type: "spring",
                stiffness: 60
              }
            }}
            viewport={{ once: true, margin: "-200px" }}
          >
            <ProjectsSection />
          </motion.div>
        </motion.div>

        {/* Contact Section with Final Flying Effect */}
        <motion.div
          style={{ 
            y: contactY, 
            opacity: contactOpacity 
          }}
          className="relative mt-8"
        >
          <motion.div
            initial={{ opacity: 0, x: 200, scale: 0.7 }}
            whileInView={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: {
                duration: 1.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 70
              }
            }}
            viewport={{ once: true, margin: "-200px" }}
          >
            <ContactSection />
          </motion.div>
        </motion.div>
      </main>

      {/* Footer - Directly attached to the Contact section */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-5 bg-gradient-to-t from-black to-purple-900/20 border-t border-purple-800/30 mt-[-2px]"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <motion.div 
                className="text-lg font-medium text-white flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                <span>Parth Sharma</span>
              </motion.div>
              <p className="text-sm text-gray-400 mt-1">
                &copy; {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            
            <div className="flex items-center space-x-8">
              <motion.button
                onClick={() => scrollToSection('about')}
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/social-icons/github-contact.svg" alt="GitHub" className="w-5 h-5 mr-1.5" />
                <span className="text-sm">GitHub</span>
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/social-icons/email-contact.svg" alt="Email" className="w-5 h-5 mr-1.5" />
                <span className="text-sm">Email</span>
              </motion.button>
              
              <motion.a
                href="https://linkedin.com/in/ksparth128"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <img src="/social-icons/linkedin-contact.svg" alt="LinkedIn" className="w-5 h-5 mr-1.5" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>
              
              {/* Removed the location part that was taking you to localhost */}
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Enhanced Back to Top Button with Cursor Effect */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0,
          rotate: showBackToTop ? 360 : 0
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-900 hover:to-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-purple-500/25 cursor-hover"
        whileHover={{ 
          scale: 1.3, 
          rotate: 360,
          boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      {/* Enhanced Scroll-triggered Background Color Changes */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.2, 0.4, 0.6, 0.8, 1],
            [
              "linear-gradient(180deg, #000000 0%, #1a0033 100%)",
              "linear-gradient(180deg, #1a0033 0%, #2d1b69 100%)",
              "linear-gradient(180deg, #2d1b69 0%, #4c1d95 100%)",
              "linear-gradient(180deg, #4c1d95 0%, #5b21b6 100%)",
              "linear-gradient(180deg, #5b21b6 0%, #6d28d9 100%)",
              "linear-gradient(180deg, #6d28d9 0%, #000000 100%)"
            ]
          )
        }}
      />
    </div>
  );
};

export default Index;
