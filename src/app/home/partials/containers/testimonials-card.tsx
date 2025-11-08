import Image from 'next/image';

type TestimonialsCardProps = {
  imageSrc: string;
  name: string;
  position: string;
  description: string;
};

export default function TestimonialsCard({
  imageSrc,
  name,
  position,
  description,
}: TestimonialsCardProps) {
  return (
    <div className='mx-4 w-[350px] shrink-0 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='mb-4 flex items-center gap-4'>
        <div className='border-border/40 relative h-12 w-12 overflow-hidden rounded-full border'>
          <Image
            sizes='small'
            src={`${imageSrc}`}
            alt={name}
            fill
            className='object-cover'
          />
        </div>
        <div>
          <h4 className='text-base font-semibold'>{name}</h4>
          <p className='text-muted-foreground text-sm'>{position}</p>
        </div>
      </div>
      <p className='text-muted-foreground text-sm leading-relaxed'>
        {description}
      </p>
    </div>
  );
}
