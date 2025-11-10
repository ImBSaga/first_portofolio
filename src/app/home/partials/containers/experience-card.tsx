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
    <div className='gap-lg md:gap-xl flex flex-col rounded-2xl'>
      {/* Image */}
      <div className='relative h-80 w-80 rounded-3xl md:h-92.5 md:w-92.5 md:rounded-4xl'>
        <Image priority sizes='small' src={`${imageSrc}`} fill alt={name} />
      </div>

      {/* Content */}
      <div className='gap-lg md:gap-5xl flex flex-col'>
        {/* Details */}
        <div className='gap-md md:gap-lg flex flex-col'>
          <h3 className='text-lg font-bold text-neutral-100 md:text-xl'>
            {name}
          </h3>
          <div className='gap-md flex'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='py-md px-xl rounded-full border border-neutral-300'
              >
                <p className='text-sm font-normal text-neutral-100'>{skill}</p>
              </div>
            ))}
          </div>
          <p className='text-sm font-normal text-neutral-200'>{description}</p>
        </div>

        {/* Visit */}
        <div className='gap-sm flex items-center'>
          <span className='from-purple-pink-600 to-purple-pink-500 text-md bg-linear-to-r bg-clip-text font-bold text-transparent md:text-lg'>
            Visit
          </span>

          <Image
            width={24}
            height={24}
            src='/icons/icon-visit.svg'
            alt='visit'
          />
        </div>
      </div>
    </div>
  );
}
