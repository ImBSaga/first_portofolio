import Navbar from './home/partials/navbar';
import Hero from './home/partials/hero';
import MyInfo from './home/partials/my-info';
import Career from './home/partials/career';
import Skills from './home/partials/skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyInfo />
      <Career />
      <Skills />
    </>
  );
}
