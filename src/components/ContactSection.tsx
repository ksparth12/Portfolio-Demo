import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactMethods = [
    {
      icon: "/social-icons/email-contact.svg",
      label: "Email",
      value: "Ksparth12@gmail.com",
      href: "mailto:Ksparth12@gmail.com",
      gradient: "from-purple-600 to-purple-800"
    },
    {
      icon: "/social-icons/linkedin-contact.svg",
      label: "LinkedIn",
      value: "ksparth128",
      href: "https://linkedin.com/in/ksparth128",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      icon: "/social-icons/github-contact.svg",
      label: "GitHub",
      value: "ksparth12",
      href: "https://github.com/ksparth12",
      gradient: "from-purple-700 to-purple-900"
    },
    {
      icon: "/social-icons/location-contact.svg",
      label: "Location",
      value: "Noida, NCR, India",
      href: "#",
      gradient: "from-purple-800 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="pt-10 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-purple-950/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to collaborate or just want to chat about technology? I'm always open to new opportunities and conversations!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-800 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Professional Image & Info */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  {/* Background Effects */}
                  <motion.div
                    className="absolute -inset-6 bg-gradient-to-r from-purple-800 to-purple-900 rounded-full opacity-20 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Main Professional Image */}
                  <motion.div
                    className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-600/40 shadow-2xl shadow-purple-600/25"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src="/local-uploads/cd90d756-7a7d-41f9-b6b3-17efe161afc1.png"
                      alt="Parth Sharma - Professional"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                  </motion.div>

                  {/* Floating Contact Icons */}
                  {contactMethods.slice(0, 3).map((method, index) => (
                    <motion.div
                      key={method.label}
                      className={`absolute w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                      style={{
                        top: `${20 + index * 60}px`,
                        right: index % 2 === 0 ? '-20px' : 'auto',
                        left: index % 2 === 1 ? '-20px' : 'auto',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 2 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      <img src={method.icon} alt={method.label} className="w-6 h-6" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Personal Message */}
              <motion.div
                className="bg-gradient-to-r from-purple-900/40 to-purple-800/30 p-6 rounded-xl border border-purple-600/30 mb-6"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Whether you're looking for a passionate developer to join your team, want to discuss a project idea, 
                  or simply want to connect with a fellow tech enthusiast, I'd love to hear from you!
                </p>
              </motion.div>

              {/* Get In Touch Button - Moved here from bottom */}
              <motion.div
                className="text-center lg:text-left mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <Button
                  className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-800 hover:to-purple-900 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-600/25 transition-all duration-300"
                  onClick={() => window.open('mailto:Ksparth12@gmail.com', '_blank')}
                >
                  <img src="/social-icons/email-contact.svg" alt="Email" className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-purple-800/30 to-purple-700/30 rounded-xl border border-purple-600/30">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-purple-700/30 to-purple-800/30 rounded-xl border border-purple-600/30">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-400">Commitment</div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="bg-gradient-to-r from-gray-900/80 to-purple-900/30 border-purple-600/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-600/25 cursor-pointer"
                    onClick={() => method.href !== '#' && window.open(method.href, '_blank')}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`p-4 bg-gradient-to-r ${method.gradient} rounded-xl`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <img src={method.icon} alt={method.label} className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">
                            {method.label}
                          </h3>
                          <p className="text-purple-300">
                            {method.value}
                          </p>
                        </div>
                        {method.href !== '#' && (
                          <motion.div
                            className="text-purple-400"
                            whileHover={{ x: 5 }}
                          >
                            <img src="/social-icons/link-contact.svg" alt="Open Link" className="w-5 h-5" />
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {/* Removed the Get In Touch button from here as it's now above */}
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-purple-600/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
