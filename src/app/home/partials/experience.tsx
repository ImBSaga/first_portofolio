import { experienceData } from '@/constants/experience-data';
import ExperienceCard from './containers/experience-card';

const Experience = () => {
  return (
    <section
      id='projects'
      className='custom-container py-5xl md:py-8xl gap-4xl md:gap-6xl flex flex-col'
    >
      {/* Heading */}
      <div className='gap-lg flex flex-col md:flex-row md:gap-0'>
        <h2 className='text-display-sm md:text-display-2xl text-left font-extrabold text-neutral-100 md:flex-1'>
          Experience in Front-End Development
        </h2>
        <p className='font-regular md:text-md text-sm text-neutral-200 md:flex-1 md:text-right'>
          I have experience developing 30+ web projects across various
          industries, including marketplaces, health, fashion, sports, and more.
          Implemented 1000+ responsive web pages with interactive features and
          smooth animations
        </p>
      </div>

      {/* Content */}
      <div className='gap-4xl md:gap-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {experienceData.map((experience, index) => (
          <ExperienceCard
            key={index}
            imageSrc={experience.imageSrc}
            name={experience.name}
            skills={experience.skills}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
