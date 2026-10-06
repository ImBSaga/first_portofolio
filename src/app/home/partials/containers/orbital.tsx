'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const skills = [
  {
    src: '/icons/icon-html.svg',
    alt: 'HTML',
    position: 'top-0 translate-y-1/2',
  },
  { src: '/icons/icon-css.svg', alt: 'CSS', position: 'top-0 left-0' },
  { src: '/icons/icon-javascript.svg', alt: 'JavaScript', position: 'left-0' },
  { src: '/icons/icon-react.svg', alt: 'React', position: 'right-0' },
  { src: '/icons/icon-redux.svg', alt: 'Redux', position: 'right-0 bottom-0' },
  {
    src: '/icons/icon-typescript.svg',
    alt: 'TypeScript',
    position: 'bottom-0',
  },
];

const OrbitalSkills = () => {
  return (
    <div
      className='relative flex items-center justify-center'
      style={{
        width: 'clamp(20rem, 40vw, 36.7rem)',
        height: 'clamp(17.5rem, 40vw, 32.2rem)',
      }}
    >
      {/* Orbit rings - with gentle breathing/pulsing animation */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute rounded-full border-[0.5px] border-neutral-400'
        style={{
          width: 'clamp(9rem, 20vw, 16.625rem)',
          height: 'clamp(9rem, 20vw, 16.625rem)',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className='absolute rounded-full border-[0.5px] border-neutral-400'
        style={{
          width: 'clamp(13.125rem, 30vw, 24.0625rem)',
          height: 'clamp(13.125rem, 30vw, 24.0625rem)',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className='absolute rounded-full border-[0.5px] border-neutral-400'
        style={{
          width: 'clamp(17.5rem, 40vw, 32.1875rem)',
          height: 'clamp(17.5rem, 40vw, 32.1875rem)',
        }}
      />

      {/* Skill icons - exactly in their original positions with smooth floating orbital drift */}
      {skills.map((skill, index) => {
        // Subtle orbital floating drift offsets per card
        const floatY = index % 2 === 0 ? [-5, 5, -5] : [5, -5, 5];
        const floatX = index % 3 === 0 ? [-3, 3, -3] : [3, -3, 3];

        return (
          <motion.div
            key={skill.alt}
            className={`from-purple-pink-600 to-purple-pink-500 flex-center absolute z-10 rounded-sm bg-linear-to-r p-px text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] transition-opacity hover:opacity-90 ${skill.position}`}
            animate={{
              y: floatY,
              x: floatX,
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.15 }}
          >
            <div className='flex-center h-full w-full rounded-sm bg-gray-900 px-7.5 py-[7px]'>
              <Image
                src={skill.src}
                alt={skill.alt}
                width={36}
                height={36}
                className='h-[clamp(1.772rem,3vw,3.25rem)] w-[clamp(1.772rem,3vw,3.25rem)] object-contain'
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default OrbitalSkills;
