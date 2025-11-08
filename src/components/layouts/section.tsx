import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className?: string;
};

export const Section = ({
  children,
  title,
  subtitle,
  id,
  className,
}: SectionProps) => {
  return (
    <section
      className={`custom-container py-5xl md:py-8xl gap-4xl md:gap-6xl flex flex-col ${className}`}
      id={id}
    >
      {/* heading */}
      <div className='gap-lg flex flex-col items-center text-center'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          {title}
        </h2>
        <p className='font-regular md:text-md text-sm text-neutral-200'>
          {subtitle}
        </p>
      </div>

      {/* content */}
      {children}
    </section>
  );
};
