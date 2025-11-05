import { Section } from '@/components/layouts/section';
import { careerData } from '@/constants/career-data';
import CareerCard from './containers/career-card';

const Career = () => {
  return (
    <Section
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
    >
      <div className='md:gap-3xl gap-xl relative flex flex-col'>
        {/* Line */}
        <div className='from-purple-pink-600 to-purple-pink-500 absolute top-0 left-2 -z-10 h-full w-1 bg-linear-to-b md:w-1.5'></div>

        {/* Careers */}
        {careerData.map((career, index) => {
          const isLast = index === careerData.length - 1;
          return (
            <div
              className='gap-md md:gap-3xl relative flex'
              key={career.company}
            >
              {/* Line */}
              {isLast && (
                <div className='absolute top-0 -z-2 h-full w-5 border border-neutral-600 bg-neutral-600' />
              )}

              {/* Dot */}
              <div className='bg-primary-100 flex-center h-5 w-5 shrink-0 rounded-full shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] md:h-6 md:w-6'>
                <div className='from-purple-pink-600 to-purple-pink-500 h-2.5 w-2.5 rounded-full bg-linear-to-r md:h-3 md:w-3' />
              </div>

              {/* Career Card */}
              <CareerCard
                company={career.company}
                date={career.date}
                details={career.details}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Career;
