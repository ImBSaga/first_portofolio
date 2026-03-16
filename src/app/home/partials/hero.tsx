import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className='custom-container gap-2xl pt-5xl pb-2xl mt-16 flex flex-col items-center md:mt-55.5 md:pt-0 md:pb-65.5'
      id='hero'
    >
      {/* Badge */}
      <div className='from-purple-pink-600 to-purple-pink-500 flex-center rounded-full bg-linear-to-r p-px text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] hover:opacity-90'>
        <div className='flex-center px-xl h-full w-full rounded-full bg-gray-900 py-[7px]'>
          <p className='md:text-md text-xs font-medium text-neutral-100'>
            👨‍💻 Imam Bayu Saga&apos;s Portfolio
          </p>
        </div>
      </div>

      {/* Title*/}
      <h1 className='text-display-xl md:text-display-3xl text-center font-bold text-neutral-100'>
        I&apos;m a{' '}
        <span className='from-purple-pink-600 to-purple-pink-500 bg-linear-to-r bg-clip-text text-transparent'>
          Front-<span className='sm:hidden'> </span>End Developer
        </span>{' '}
        & <br className='hidden md:block' />
        Full Stack Enthusiast
      </h1>

      {/* Description */}
      <p className='md:text-md text-center text-sm font-normal text-neutral-200'>
        Hi, I&apos;m Saga — a passionate Frontend Developer with{' '}
        <span className='text-neutral-100'>3+ years of experience</span>{' '}
        building modern, responsive web applications using{' '}
        <br className='hidden md:block' />
        React, Next.js, TypeScript, and Tailwind CSS.
      </p>

      <div className='flex w-full flex-col gap-4 md:w-fit md:flex-row'>
        <Link className='w-full md:w-fit' href='#projects'>
          <Button
            size='default'
            variant='default'
            iconSrc='/icons/icon-visit.svg'
            iconLeft
            className='gap-sm w-full md:w-64'
          >
            <span>View Projects</span>
          </Button>
        </Link>
        <a
          href='/resume.pdf'
          download='Imam_Bayu_Saga_Resume.pdf'
          className='w-full md:w-fit'
        >
          <Button
            size='default'
            variant='default'
            iconSrc='/icons/icon-download.svg'
            iconLeft
            className='gap-sm w-full md:w-64'
          >
            <span>Download CV</span>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
