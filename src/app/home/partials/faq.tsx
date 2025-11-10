import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQData } from '@/constants/faq-data';
import Image from 'next/image';

const FAQ = () => {
  return (
    <Section
      title='Frequently Asked Question'
      subtitle='Find answers to some of the frequently asked questions below.'
      id='FAQ'
    >
      <Accordion
        type='single'
        collapsible
        className='gap-xl md:gap-2xl flex flex-col'
      >
        {FAQData.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>
              <p className='text-md font-semibold text-neutral-100 md:text-xl'>
                {item.title}
              </p>
            </AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
