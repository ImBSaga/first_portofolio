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

        <div className='absolute inset-y-0 left-0 z-10 w-[15%] bg-linear-to-r from-black to-transparent' />
        <div className='absolute inset-y-0 right-0 z-10 w-[15%] bg-linear-to-l from-black to-transparent' />
      </div>
    </Section>
  );
};

export default Testimonials;

// import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/marquee';
// import TestimonialCard from './containers/testimonials-card';
// import { testimonialData } from '@/constants/testimonial-data';

// const Testimonials = () => {
//   const firstRow = testimonialData.slice(0, 3);
//   const secondRow = testimonialData.slice(3, 6);
//   return (
//     <section
//       id='projects'
//       className='py-5xl md:py-8xl gap-4xl md:gap-6xl flex flex-col items-center'
//     >
//       {/* Heading */}
//       <div className='gap-lg flex flex-col'>
//         <h2 className='text-display-sm md:text-display-2xl text-center font-extrabold text-neutral-100'>
//           What People Say About Me
//         </h2>
//         <p className='font-regular md:text-md text-center text-sm text-neutral-200'>
//           Hear from clients and colleagues about their experiences working with
//           me.
//         </p>
//       </div>
//       <div className='relative flex flex-col gap-8 overflow-hidden py-10'>
//         {/* Top Marquee */}
//         <Marquee className='relative'>
//           <MarqueeContent speed={40}>
//             {firstRow.map((testimonial, idx) => (
//               <MarqueeItem key={idx}>
//                 <TestimonialCard {...testimonial} />
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>
//         </Marquee>

//         {/* Bottom Marquee (reverse direction for contrast) */}
//         <Marquee className='relative'>
//           <MarqueeContent speed={40} direction='right'>
//             {secondRow.map((testimonial, idx) => (
//               <MarqueeItem key={idx}>
//                 <TestimonialCard {...testimonial} />
//               </MarqueeItem>
//             ))}
//           </MarqueeContent>

//           <div className='from-primary-100 absolute inset-y-0 left-0 w-[15%] bg-linear-to-r to-transparent' />
//           <div className='from-primary-100 absolute inset-y-0 right-0 w-[15%] bg-linear-to-l to-transparent' />
//         </Marquee>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
