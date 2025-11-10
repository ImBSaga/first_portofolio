'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'data-[state=open]:from-purple-pink-600 data-[state=open]:to-purple-pink-500 data-[state=open]:rounded-2xl data-[state=open]:bg-linear-to-r data-[state=open]:p-px data-[state=open]:shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] data-[state=open]:hover:opacity-90',
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Trigger
      data-slot='accordion-trigger'
      className={cn(
        'group flex flex-1 items-start justify-between outline-none md:items-center',
        // Closed state
        'py-xl px-xl md:px-3xl flex w-full items-start justify-between gap-4 bg-neutral-500 text-left data-[state=closed]:rounded-2xl md:items-center',
        // Open state
        'data-[state=open]:rounded-t-2xl data-[state=open]:p-px data-[state=open]:text-left',
        className
      )}
      {...props}
    >
      {/* Inner content wrapper for open state */}
      <div
        className={cn(
          'flex w-full items-start justify-between md:items-center',

          // Open state
          'group-data-[state=open]:px-xl group-data-[state=open]:pt-xl group-data-[state=open]:md:px-3xl group-data-[state=open]:md:pt-3xl group-data-[state=open]:-m-px group-data-[state=open]:rounded-t-2xl group-data-[state=open]:bg-neutral-500'
        )}
      >
        <p className='text-md font-semibold text-neutral-100 md:text-xl'>
          {children}
        </p>
        <Image
          className='transition-transform duration-200 group-data-[state=closed]:rotate-180'
          src='/icons/icon-arrow.svg'
          alt='arrow'
          width={16}
          height={16}
        />
      </div>
    </AccordionPrimitive.Trigger>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down flex items-start justify-between overflow-hidden rounded-b-2xl bg-neutral-500 text-left md:items-center'
      {...props}
    >
      <div
        className={cn(
          'pt-lg md:pt-xl pb-xl md:pb-3xl px-xl md:px-3xl',
          className
        )}
      >
        <p className='md:text-md text-sm font-normal text-neutral-200'>
          {children}
        </p>
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
