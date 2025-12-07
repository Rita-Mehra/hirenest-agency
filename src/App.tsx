import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Countries } from './components/Countries';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Countries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
