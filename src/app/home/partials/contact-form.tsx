'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Please enter a valid email address'),
  message: z
    .string()
    .min(1, { message: 'Message is required' })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);

  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <section
      id='contact'
      className='py-5xl px-2xl gap-3xl md:pt-8xl md:px-11xl md:gap-6xl flex flex-col md:flex-row md:items-center md:pb-25'
    >
      {/* Heading */}
      <div className='gap-lg flex flex-col md:flex-1'>
        <h2 className='text-display-sm md:text-display-2xl text-left font-extrabold text-neutral-100'>
          Contact Me
        </h2>
        <p className='font-regular md:text-md text-sm text-neutral-200'>
          Feel free to drop a message for any inquiries or collaborations.
        </p>
      </div>

      <Form {...form}>
        <form
          className='p-xl gap-xl md:p-3xl md:gap-2xl flex flex-col rounded-3xl bg-linear-to-b from-[rgba(38,38,38,1)] to-transparent md:flex-1 md:rounded-4xl'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <Input disabled={loading} placeholder='Name' {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <Input disabled={loading} placeholder='Email' {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <Textarea disabled={loading} placeholder='Message' {...field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={loading} className='mt-6 w-full md:mt-10'>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </Form>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </section>
  );
};

export default ContactForm;
