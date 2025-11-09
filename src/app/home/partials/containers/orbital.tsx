'use client';

import { motion } from 'framer-motion';
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
      {/* Orbit rings */}
      <div
        className='absolute rounded-full border-[0.5px] border-neutral-400'
        style={{
          width: 'clamp(9rem, 20vw, 16.625rem)',
          height: 'clamp(9rem, 20vw, 16.625rem)',
        }}
      />
      <div
        className='absolute rounded-full border-[0.5px] border-neutral-400'
        style={{
          width: 'clamp(13.125rem, 30vw, 24.0625rem)',
          height: 'clamp(13.125rem, 30vw, 24.0625rem)',
        }}
      />
      <div
        className='absolute rounded-full border-[0.5px] border-neutral-400'
        style={{
          width: 'clamp(17.5rem, 40vw, 32.1875rem)',
          height: 'clamp(17.5rem, 40vw, 32.1875rem)',
        }}
      />

      {/* Skill icons */}
      {skills.map((skill, index) => (
        <motion.div
          key={skill.alt}
          className={`from-purple-pink-600 to-purple-pink-500 flex-center absolute z-10 rounded-sm bg-linear-to-r p-px text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] hover:opacity-90 ${skill.position}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className='flex-center h-full w-full rounded-sm bg-gray-900 px-7.5 py-[7px]'>
            <Image
              src={skill.src}
              alt={skill.alt}
              width={20}
              height={20}
              className='h-[clamp(1.772rem,3vw,3.25rem)] w-[clamp(1.772rem,3vw,3.25rem)]'
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OrbitalSkills;
