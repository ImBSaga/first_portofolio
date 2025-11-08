import { Section } from '@/components/layouts/section';
import { experienceData } from '@/constants/experience-data';
import ExperienceCard from './containers/experience-card';

const Experience = () => {
  return (
    <Section
      title='Experience in Front-End Development'
      subtitle='I have experience developing 30+ web projects across various industries, including marketplaces, health, fashion, sports, and more. Implemented 1000+ responsive web pages with interactive features and smooth animations'
    >
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
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
    </Section>
  );
};

export default Experience;
