import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}