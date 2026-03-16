import { Section } from '@/components/layouts/section';

const ResumeIframe = () => {
  return (
    <Section
      id='resume'
      title='My Resume'
      subtitle='For a more detailed look at my professional background, education, and technical expertise.'
    >
      <div className='relative w-full overflow-hidden rounded-2xl bg-neutral-500 shadow-2xl' style={{ height: '800px' }}>
        <iframe
          src='/resume.pdf'
          title='Imam Bayu Saga Resume'
          className='h-full w-full border-none'
          style={{ minHeight: '800px' }}
        />
        
        {/* Fallback for browsers that don't support iframes or if file is missing */}
        <div className='absolute inset-0 -z-10 flex flex-col items-center justify-center gap-4 bg-neutral-600 p-8 text-center'>
           <p className='text-lg font-medium text-neutral-100'>
             Unable to display PDF? 
           </p>
           <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='text-purple-pink-500 underline underline-offset-4'>
             Click here to view it in a new tab
           </a>
        </div>
      </div>
    </Section>
  );
};

export default ResumeIframe;
