import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='py-5xl px-2xl md:px-11xl gap-3xl flex flex-col bg-neutral-500 md:flex-row md:justify-between'>
      <div className='flex-start gap-xl md:order-2'>
        <Image
          src='/icons/icon-dribble.svg'
          alt='dribble'
          width={40}
          height={40}
          className='h-10 w-10 md:h-10 md:w-10'
        />
        <Image
          src='/icons/icon-instagram.svg'
          alt='instagram'
          width={40}
          height={40}
          className='h-10 w-10 md:h-10 md:w-10'
        />
        <Image
          src='/icons/icon-linkedin.svg'
          alt='linkedin'
          width={40}
          height={40}
          className='h-10 w-10 md:h-10 md:w-10'
        />
      </div>

      <div className='flex-start gap-xl md:order-1'>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={36}
          height={36}
          className='h-9 w-9 md:h-10 md:w-10'
        />
        <p className='text-sm font-normal text-neutral-200'>© alex2024</p>
      </div>
    </footer>
  );
};

export default Footer;
