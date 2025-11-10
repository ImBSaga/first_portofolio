import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <Image
            src={
              variant === 'success'
                ? '/images/image-sent.svg'
                : '/images/image-sent-fail.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            priority
            sizes='small'
            width={203}
            height={159}
            className='h-39.75 w-50.75 md:h-54.25 md:w-69.25'
          />
        </DialogHeader>
        <DialogBody>
          <DialogTitle>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Message failed to send.'}
          </DialogTitle>
          <DialogDescription>
            {variant === 'success'
              ? 'Thank you for reaching out. I’ll get back to you as soon as possible'
              : 'An unexpected error occurred. Kindly try again in a few moments.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button>{loading ? 'Loading...' : 'Back to Home'}</Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
