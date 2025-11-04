import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className='custom-container gap-2xl pt-5xl pb-2xl mt-16 flex flex-col items-center md:mt-55.5'
      id='hero'
    >
      {/* Alex's Portfolio */}
      <div className='from-purple-pink-600 to-purple-pink-500 flex-center rounded-full bg-linear-to-r p-px text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] hover:opacity-90'>
        <div className='flex-center px-xl h-full w-full rounded-full bg-gray-900 py-[7px]'>
          <p className='md:text-md text-xs font-medium text-neutral-100'>
            👨 Alex's Portfolio
          </p>
        </div>
      </div>

      {/* Title*/}
      <h3 className='text-display-xl md:text-display-3xl text-center font-bold text-neutral-100'>
        I am a{' '}
        <span className='from-purple-pink-600 to-purple-pink-500 bg-linear-to-r bg-clip-text text-transparent'>
          Front-<span className='sm:hidden'> </span>End Developer
        </span>{' '}
        & <br className='hidden md:block' />
        Web Programming Instructor
      </h3>

      {/* Description */}
      <p className='md:text-md text-center text-sm font-normal text-neutral-200'>
        Hi, I’m Alex, a passionate web developer with over{' '}
        <span className='text-neutral-100'>3 years of experience</span> in
        creating responsive websites. I also teach{' '}
        <br className='hidden md:block' />
        aspiring developers to master modern web programming and bring their
        ideas to life.
      </p>

      {/* Button */}
      <Link className='w-full md:w-fit' href='#contact'>
        <Button
          size='default'
          variant='default'
          className='h-12 w-full md:w-fit'
        >
          View Portfolio
        </Button>
      </Link>
    </section>
  );
};

export default Hero;
