import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='flex-between custom-container py-5xl'>
      <div className='flex-start gap-xl'>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
        />
        <p>© alex2024</p>
      </div>

      <div className='flex-start gap-xl'>
        <Image
          src='/icons/icon-dribble.svg'
          alt='dribble'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
        />
        <Image
          src='/icons/icon-instagram.svg'
          alt='instagram'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
        />
        <Image
          src='/icons/icon-linkedin.svg'
          alt='linkedin'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
        />
      </div>
    </footer>
  );
};

export default Footer;
