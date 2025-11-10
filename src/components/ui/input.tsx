import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'py-md px-lg md:px-xl rounded-2xl bg-neutral-500',
        className
      )}
      {...props}
    />
  );
}

export { Input };
