import { Section } from '@/components/layouts/section';
import { skillData } from '@/constants/skills-data';
import Orbital from './containers/orbital';
import Image from 'next/image';

const Skills = () => {
  return (
    <Section
      title='My Core Skill'
      subtitle='An overview of the key technologies and frameworks I specialize in'
      id='skills'
      className='md:pt-8xl! pt-0!'
    >
      <div className='gap-3xl flex flex-col items-center md:flex-row md:gap-0'>
        {/* Orbital */}
        <div className='flex w-full justify-center md:h-auto md:w-auto'>
          <Orbital />
        </div>

        {/* Skills */}
        <div className='gap-3xl md:gap-2xl flex w-full flex-col md:flex-1'>
          {skillData.map((skill, index) => (
            <div
              key={index}
              className='gap-sm md:gap-lg flex flex-col md:ml-auto md:w-5/6'
            >
              {/* Title */}
              <div className='flex justify-between'>
                <p className='md:text-md text-sm font-semibold text-neutral-100'>
                  {skill.name}
                </p>
                <p className='md:text-md text-sm font-semibold text-neutral-100'>
                  {skill.percentage}%
                </p>
              </div>

              {/* Bar */}
              <div className='h-3 overflow-hidden rounded-full bg-neutral-400'>
                <div
                  className='custom-gradient h-full rounded-full'
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
