'use client';

import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter: backdropBlur,
      }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='flex-between custom-container h-16 md:h-21'>
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={28}
          height={28}
          className='h-7 w-7 md:h-10 md:w-10'
        />

        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3xl'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='text-md hover:text-primary-200 px-md'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex-start gap-xl'>
          <Link href='#contact'>
            <Button
              size='default'
              variant='default'
              iconSrc='/icons/icon-email.svg'
              iconLeft
              className='md:gap-sm gap-0'
            >
              <span className='hidden md:inline'>Hire me</span>
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Menu className='cursor-pointer lg:hidden' />
            </SheetTrigger>

            <SheetContent>
              <Image
                src='/images/logo.svg'
                alt='logo'
                width={28}
                height={28}
                className='h-7 w-7 md:h-10 md:w-10'
              />

              <nav className='mt-5'>
                <ul className='gap-3xl flex flex-col'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <SheetClose asChild>
                        <Link href={data.href}>{data.label}</Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>

              <SheetClose asChild>
                <Link href='#contact'>
                  <Button
                    size='default'
                    variant='default'
                    iconSrc='/icons/icon-email.svg'
                    iconLeft
                    className='gap-sm w-full'
                  >
                    <span>Hire Me</span>
                  </Button>
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
