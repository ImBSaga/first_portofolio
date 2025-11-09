import { comparisonData } from '@/constants/comparison-data';
import Image from 'next/image';

const Comparison = () => {
  return (
    <section className='custom-container py-5xl md:py-8xl gap-4xl md:gap-6xl flex flex-col'>
      {/* Heading */}
      <div className='gap-lg flex flex-col items-center text-center'>
        {/* Mobile */}
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100 md:hidden'>
          What Sets Me Apart
        </h2>
        <p className='font-regular md:text-md text-sm text-neutral-200 md:hidden'>
          A comparison of my approach and skills against typical programmers.
        </p>

        {/* Desktop */}
        <h2 className='text-display-sm md:text-display-2xl hidden font-extrabold text-neutral-100 md:block'>
          Why I Stand Out
        </h2>
        <p className='font-regular md:text-md hidden text-sm text-neutral-200 md:block'>
          A showcase of my unique approach and skill set compared to
          conventional front-end developers
        </p>
      </div>

      {/* Content */}
      <div className='py-3xl px-lg rounded-3xl bg-neutral-500'>
        {/* Header */}
        <div className='from-purple-pink-600 to-purple-pink-500 flex-center align-center py-md px-lg md:text-md rounded-full bg-linear-to-r text-sm font-semibold text-neutral-100 shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] hover:opacity-90 md:py-3.25 md:font-bold'>
          <p className='flex-6 text-center md:flex-1'>Skill</p>
          <p className='flex-2 text-center md:flex-1'>Me</p>
          <p className='flex-2 text-center md:flex-1'>Other</p>
        </div>

        {/* Body */}
        {comparisonData.map((comparison, index) => {
          const isLast = index === comparisonData.length - 1;
          return (
            <div
              className={`py-3xl px-lg flex md:py-5.25 ${
                isLast ? 'border-b-0' : 'border-b border-neutral-400'
              } text-sm font-semibold text-neutral-100`}
              key={comparison.name}
            >
              <p className='flex-6 text-center md:flex-1'>{comparison.name}</p>
              <div className='flex-2 text-center md:flex-1'>
                <Image
                  src='/icons/icon-check.svg'
                  alt='check'
                  height={20}
                  width={20}
                  className='inline h-5 w-5 md:h-7 md:w-7'
                />
              </div>
              <div className='flex-2 text-center md:flex-1'>
                <Image
                  src='/icons/icon-uncheck.svg'
                  alt='uncheck'
                  height={20}
                  width={20}
                  className='inline h-5 w-5 md:h-7 md:w-7'
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Comparison;
