import Navbar from './home/partials/navbar';
import Hero from './home/partials/hero';
import MyInfo from './home/partials/my-info';
import Career from './home/partials/career';
import Skills from './home/partials/skills';
import Projects from './home/partials/projects';
import Certifications from './home/partials/certifications';
import Testimonials from './home/partials/testimonials';
import FAQ from './home/partials/faq';
import ContactForm from './home/partials/contact-form';
import Footer from './home/partials/footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyInfo />
      <Skills />
      <Career />
      <Projects />
      <Certifications />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}
