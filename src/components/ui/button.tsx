import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-linear-to-r from-purple-pink-600 to-purple-pink-500 text-white shadow-[0_4px_24px_0_rgba(135,70,235,0.32)] hover:opacity-90 ',
      },
      size: {
        default: 'h-10 px-2.5 md:h-12 md:px-12 rounded-full text-sm',
        icon: 'size-10 md:size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: LucideIcon;
  iconSrc?: string;
  iconLeft?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  icon: Icon,
  iconSrc,
  iconLeft = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  const hasIcon = !!Icon || !!iconSrc;
  const showIconLeft =
    iconLeft || (size === 'default' && hasIcon) || size === 'icon';

  const iconNode = Icon ? (
    <Icon className={cn('size-5', size === 'icon' && 'size-full')} />
  ) : iconSrc ? (
    <img
      src={iconSrc}
      alt=''
      className={cn('size-5', size === 'icon' && 'size-full')}
    />
  ) : null;

  const content =
    size === 'icon' ? (
      iconNode
    ) : (
      <>
        {showIconLeft && iconNode}
        {children && <span>{children}</span>}
        {!showIconLeft && hasIcon && iconNode}
      </>
    );

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {content}
    </Comp>
  );
}

export { Button, buttonVariants };
