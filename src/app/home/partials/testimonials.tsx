import { Section } from '@/components/layouts/section';
import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/marquee';
import TestimonialCard from './containers/testimonials-card';
import { testimonialData } from '@/constants/testimonial-data';

const Testimonials = () => {
  const firstRow = testimonialData.slice(0, 3);
  const secondRow = testimonialData.slice(3, 6);
  return (
    <Section
      title='What People Say About Me'
      subtitle='Hear from clients and colleagues about their experiences working with me.'
    >
      <div className='relative flex flex-col gap-8 overflow-hidden py-10'>
        {/* Top Marquee */}
        <Marquee className='relative'>
          <MarqueeContent speed={40}>
            {firstRow.map((testimonial, idx) => (
              <MarqueeItem key={idx}>
                <TestimonialCard {...testimonial} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>

        {/* Bottom Marquee (reverse direction for contrast) */}
        <Marquee className='relative'>
          <MarqueeContent speed={40} direction='right'>
            {secondRow.map((testimonial, idx) => (
              <MarqueeItem key={idx}>
                <TestimonialCard {...testimonial} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </Section>
  );
};

export default Testimonials;
