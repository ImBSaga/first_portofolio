import Image from 'next/image';

type CareerCardProps = {
  company: string;
  date: string;
  details: string[];
};

export default function CareerCard({
  company,
  date,
  details,
}: CareerCardProps) {
  return (
    <div className='p-lg gap-lg md:p-3xl md:gap-2xl flex w-full flex-col rounded-4xl bg-neutral-500'>
      <h3 className='text-md md:text-display-xs font-bold text-neutral-100'>
        Fronted Developer
      </h3>

      <div className='gap-lg flex flex-col md:flex-row md:items-center'>
        <div className='gap-sm flex'>
          <Image
            src='/icons/icon-company.svg'
            alt='company'
            width={20}
            height={20}
            className='h-5 w-5 md:h-6 md:w-6'
          />
          <p className='md:text-md text-sm font-normal text-neutral-100'>
            {company}
          </p>
        </div>

        <div className='hidden h-1 w-1 shrink-0 rounded-full bg-neutral-100 md:block' />

        <div className='gap-sm flex'>
          <Image
            src='/icons/icon-date.svg'
            alt='date'
            width={20}
            height={20}
            className='h-5 w-5 md:h-6 md:w-6'
          />
          <p className='md:text-md text-sm font-normal text-neutral-100'>
            {date}
          </p>
        </div>
      </div>

      {details.map((detail, index) => (
        <li key={index} className='gap-md flex items-center'>
          <div className='h-1 w-1 shrink-0 rounded-full bg-neutral-200'></div>
          <p className='md:text-md text-sm font-normal text-neutral-200'>
            {detail}
          </p>
        </li>
      ))}
    </div>
  );
}
