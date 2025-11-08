import Image from 'next/image';

type ExperienceCardProps = {
  imageSrc: string;
  name: string;
  skills: string[];
  description: string;
};

export default function ExperienceCard({
  imageSrc,
  name,
  skills,
  description,
}: ExperienceCardProps) {
  return (
    <div className='p-lg gap-lg md:p-3xl md:gap-2xl flex w-full flex-col rounded-4xl bg-neutral-500'>
      <Image priority src={`${imageSrc}`} width={500} height={500} alt={name} />
      <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
        {name}
      </h3>
      <div className='gap-sm flex'>
        {skills.map((skill, index) => (
          <p
            key={index}
            className='md:text-md text-sm font-normal text-neutral-100'
          >
            {skill}
          </p>
        ))}
      </div>
      <p className='md:text-md text-sm font-normal text-neutral-100'>
        {description}
      </p>
    </div>
  );
}
