import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    // Initialize trail positions
    const initialTrail = Array(5).fill(null).map(() => ({ 
      x: 0, 
      y: 0, 
      opacity: 0 
    }));
    setTrail(initialTrail);

    // Show cursor when mouse enters viewport
    const handleMouseEnter = () => setIsVisible(true);
    
    // Hide cursor when mouse leaves viewport
    const handleMouseLeave = () => setIsVisible(false);
    
    // Track mouse position and update trail
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Update trail with new positions
      setTrail(prevTrail => {
        const newTrail = [...prevTrail];
        // Remove oldest position and add new one at the beginning
        newTrail.pop();
        newTrail.unshift({ 
          x: newPosition.x, 
          y: newPosition.y,
          opacity: 0.8
        });
        return newTrail;
      });
    };
    
    // Track click state
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Track hovering state
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('clickable') ||
        target.classList.contains('interactive') ||
        target.tagName === 'INPUT' ||
        [...target.classList].some(cls => cls.includes('hover'));
      
      setIsHovering(isInteractive);
    };

    // Add event listeners
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Main cursor styles
  const cursorStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isVisible ? 1 : 0,
    transform: isClicking ? 'scale(0.8) translate(-50%, -50%)' : isHovering ? 'scale(1.5) translate(-50%, -50%)' : 'scale(1) translate(-50%, -50%)',
    backgroundColor: isHovering ? 'rgba(147, 51, 234, 0.2)' : 'rgba(147, 51, 234, 0.3)',
    boxShadow: isHovering ? '0 0 10px rgba(147, 51, 234, 0.5)' : 'none',
  };

  // Dot cursor styles
  const dotStyle: React.CSSProperties = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isVisible ? 1 : 0,
    transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.5)' : 'scale(1)'}`,
    boxShadow: '0 0 5px rgba(147, 51, 234, 0.8)'
  };

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div 
          key={index}
          className="custom-cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: isVisible ? (point.opacity * (1 - index * 0.15)) : 0,
            transform: `translate(-50%, -50%) scale(${1 - index * 0.15})`,
            backgroundColor: 'rgba(147, 51, 234, 0.2)',
            position: 'fixed',
            width: '15px',
            height: '15px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9998,
            transition: 'opacity 0.1s ease'
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div className="custom-cursor" style={cursorStyle}></div>
      
      {/* Dot cursor */}
      <div className="cursor-dot" style={dotStyle}></div>
    </>
  );
};

export default CustomCursor; 