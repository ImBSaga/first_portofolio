import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-5xl px-2xl md:px-11xl gap-3xl flex flex-col bg-neutral-500 md:flex-row md:justify-between'>
      {/* Social links */}
      <div className='flex-start gap-xl md:order-2'>
        <Link
          href='https://github.com/ImBSaga'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='transition-opacity hover:opacity-70'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='white'
            className='h-10 w-10'
          >
            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z' />
          </svg>
        </Link>

        <Link
          href='https://linkedin.com/in/imam-bayu-saga-2b2281203'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='transition-opacity hover:opacity-70'
        >
          <Image
            src='/icons/icon-linkedin.svg'
            alt='linkedin'
            width={40}
            height={40}
            className='h-10 w-10 md:h-10 md:w-10'
          />
        </Link>

        <Link
          href='mailto:imbsaga@gmail.com'
          aria-label='Email'
          className='transition-opacity hover:opacity-70'
        >
          <Image
            src='/icons/icon-email.svg'
            alt='email'
            width={40}
            height={40}
            className='h-10 w-10 md:h-10 md:w-10'
          />
        </Link>
      </div>

      {/* Copyright */}
      <div className='flex flex-col gap-2 md:order-1 md:justify-center'>
        <div className='flex-start gap-xl'>
          <Image
            src='/icons/icon-logo.svg'
            alt='logo'
            width={36}
            height={36}
            className='h-9 w-9 md:h-10 md:w-10'
          />
          <p className='text-sm font-normal text-neutral-200'>
            © 2026 Imam Bayu Saga
          </p>
        </div>
        <p className='text-xs font-normal text-neutral-300'>
          Built with Next.js, TypeScript &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
