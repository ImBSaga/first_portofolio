import { Section } from '@/components/layouts/section';
import { certificationData } from '@/constants/certification-data';

const Certifications = () => {
  return (
    <Section
      id='certifications'
      title='Certifications & Achievements'
      subtitle='A showcase of my professional milestones, recognitions, and community contributions.'
    >
      <div className='gap-lg md:gap-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {certificationData.map((cert, index) => (
          <div
            key={index}
            className='p-lg gap-md hover:border-purple-pink-600/50 flex flex-col rounded-3xl border border-neutral-400 bg-neutral-500 transition-colors duration-300 hover:bg-neutral-400'
          >
            <div className='flex items-center gap-3'>
              <span className='text-3xl'>{cert.icon}</span>
              <div>
                <h3 className='md:text-md text-sm font-bold text-neutral-100'>
                  {cert.title}
                </h3>
                <p className='text-xs font-normal text-neutral-200'>
                  {cert.issuer}
                </p>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <span className='text-purple-pink-500 text-xs font-medium'>
                📅
              </span>
              <span className='text-xs font-medium text-neutral-200'>
                {cert.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
