import Navbar from './home/partials/navbar';
import Hero from './home/partials/hero';
import MyInfo from './home/partials/my-info';
import Career from './home/partials/career';
import Skills from './home/partials/skills';
import FAQ from './home/partials/faq';
import Comparison from './home/partials/comparison';
import Experience from './home/partials/experience';
import Testimonials from './home/partials/testimonials';
import ContactForm from './home/partials/contact-form';
import Footer from './home/partials/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyInfo />
      <Career />
      <Skills />
      <Comparison />
      <Experience />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
