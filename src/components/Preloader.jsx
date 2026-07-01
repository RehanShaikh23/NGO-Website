import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultSlogans = [
  "Empowering Youth, Transforming Communities",
  "Secular, Not-for-Profit, Socially Dedicated",
  "Uplifting Society Through Education"
];

function SloganCycle({ slogans = defaultSlogans }) {
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSloganIndex((prev) => (prev + 1) % slogans.length);
    }, 2200); // 2.2 seconds per slogan
    return () => clearInterval(interval);
  }, [slogans.length]);

  const currentText = slogans[currentSloganIndex];
  const characters = Array.from(currentText);

  return (
    <div 
      className="h-[30px] overflow-hidden flex justify-center items-center text-[13px] sm:text-[15px] tracking-tight font-medium text-[#171717]/80"
      style={{ fontFamily: '"Geist Mono", monospace' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentSloganIndex}
          className="inline-flex justify-center flex-wrap px-4 text-center"
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {characters.map((char, charIdx) => (
            <motion.span
              key={charIdx}
              className="inline-block"
              variants={{
                initial: { y: 25, opacity: 0 },
                animate: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                    delay: charIdx * 0.008
                  }
                },
                exit: { 
                  y: -25, 
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    delay: charIdx * 0.004
                  }
                }
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Preloader({ brandText = "Vision4Youth", slogans = defaultSlogans }) {
  // Lock body scroll while loaded
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const letters = Array.from(brandText);

  // Parent variants to stagger children
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.4
      }
    }
  };

  // Letter animations matching Framer's textEffect
  const letterVariants = {
    initial: {
      opacity: 0.001,
      scale: 3,
      x: 100,
      skewY: 3,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      skewY: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 300,
        mass: 1,
      }
    }
  };

  // Radial elements spring slide-in transitions
  const radial1Variants = {
    initial: { x: 1200, opacity: 0, scale: 1.2 },
    animate: {
      x: 0,
      opacity: 0.5,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2.2
      }
    }
  };

  const radial2Variants = {
    initial: { x: -1200, opacity: 0, scale: 1.2 },
    animate: {
      x: 0,
      opacity: 0.5,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 2.2
      }
    }
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ ease: [1, 0.01, 0.38, 1.01], duration: 1 }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white overflow-hidden"
      style={{ touchAction: 'none' }}
    >
      {/* Background Radial Glow (Cyan) - bottom-left */}
      <motion.div
        variants={radial1Variants}
        initial="initial"
        animate="animate"
        className="absolute w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          bottom: '-280px',
          left: '-280px',
          background: 'radial-gradient(circle, rgba(89, 187, 213, 1) 0%, rgba(89, 187, 213, 0) 70%)',
          filter: 'blur(57px)',
          WebkitFilter: 'blur(57px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Background Radial Glow (Lime/Yellow) - top-right */}
      <motion.div
        variants={radial2Variants}
        initial="initial"
        animate="animate"
        className="absolute w-[640px] h-[640px] rounded-full pointer-events-none"
        style={{
          top: '-280px',
          right: '-280px',
          background: 'radial-gradient(circle, rgba(206, 255, 113, 1) 0%, rgba(206, 255, 113, 0) 70%)',
          filter: 'blur(57px)',
          WebkitFilter: 'blur(57px)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5">
        
        {/* Brand Text */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex overflow-hidden py-2"
        >
          <h1 className="text-[44px] sm:text-[64px] font-extrabold tracking-tight text-[#171717] select-none flex">
            {letters.map((letter, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                className="inline-block origin-center"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </motion.div>

        {/* Monospace Cycling Subtitle */}
        <SloganCycle slogans={slogans} />
      </div>
    </motion.div>
  );
}
