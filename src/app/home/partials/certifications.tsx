import { Section } from '@/components/layouts/section';
import { certificationData } from '@/constants/certification-data';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <Section
      id='certifications'
      title='Certifications & Achievements'
      subtitle='A showcase of my professional milestones, recognitions, and community contributions.'
    >
      <div className='gap-lg md:gap-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {certificationData.map((cert, index) => {
          const content = (
            <div className='p-lg gap-md hover:border-purple-pink-600/50 flex flex-col rounded-3xl border border-neutral-400 bg-neutral-500 transition-all duration-300 hover:bg-neutral-400 h-full'>
              <div className='flex items-center gap-3'>
                <span className='text-3xl'>{cert.icon}</span>
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <h3 className='md:text-md text-sm font-bold text-neutral-100'>
                      {cert.title}
                    </h3>
                    {cert.link && <ExternalLink size={14} className='text-neutral-400' />}
                  </div>
                  <p className='text-xs font-normal text-neutral-200'>
                    {cert.issuer}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-1 mt-auto'>
                <span className='text-purple-pink-500 text-xs font-medium'>
                  📅
                </span>
                <span className='text-xs font-medium text-neutral-200'>
                  {cert.year}
                </span>
              </div>
            </div>
          );

          if (cert.link) {
            return (
              <Link key={index} href={cert.link} target='_blank' rel='noopener noreferrer' className='block h-full'>
                {content}
              </Link>
            );
          }

          return <div key={index}>{content}</div>;
        })}
      </div>
    </Section>
  );
};

export default Certifications;
