import Image from 'next/image';
import AchievementCard from './containers/achievement-card';
import { Button } from '@/components/ui/button';

import { achievementData } from '@/constants/achivement-data';

const MyInfo = () => {
  return (
    <section id='about' className='flex-start custom-container flex-col'>
      {/* Photo Section */}
      <div className='custom-gradient relative flex w-full flex-col items-center rounded-xl p-8 md:p-12'>
        <div
          className='border-purple-pink-500 relative overflow-hidden rounded-full border-4 shadow-2xl'
          style={{ width: '250px', height: '250px' }}
        >
          <Image
            priority
            src='/images/my-photo.jpg' // User should replace this with their LinkedIn photo
            fill
            alt='Imam Bayu Saga'
            className='object-cover'
          />
        </div>

        <div className='mt-8 flex flex-col items-center gap-4'>
          <a href='/resume.pdf' download='Imam_Bayu_Saga_Resume.pdf'>
            <Button
              iconSrc='/icons/icon-download.svg'
              iconLeft
              className='gap-sm px-8 py-6 text-lg font-bold'
            >
              <span>Download Resume</span>
            </Button>
          </a>
        </div>
      </div>

      {/* Info */}
      <div className='gap-lg py-5xl flex flex-col md:flex-row'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100 md:flex-[0.4]'>
          Who am I?
        </h2>
        <p className='md:text-md text-sm font-normal text-neutral-200 md:flex-[0.6]'>
          Hi, I&apos;m <span className='text-neutral-100'>Imam Bayu Saga</span>,
          a Frontend Developer based in{' '}
          <span className='text-neutral-100'>Bogor, West Java, Indonesia</span>.
          With <span className='text-neutral-100'>3+ years of experience</span>{' '}
          at PT. Asia e-Services, I specialize in building responsive,
          user-friendly web applications using{' '}
          <span className='text-neutral-100'>
            React.js, Next.js, TypeScript, and Tailwind CSS
          </span>
          . I also have hands-on experience customizing ERP systems with Python
          (Odoo) and collaborating with cross-functional teams to deliver
          scalable, high-performance solutions. My passion lies in clean UI,
          performance optimization, and great user experiences.
        </p>
      </div>

      {/* Stats */}
      <div className='gap-lg lg:gap-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {achievementData.map((data, index) => (
          <AchievementCard
            key={data.h3}
            h3={data.h3}
            p={data.p}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default MyInfo;
