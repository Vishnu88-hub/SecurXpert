import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import WhyChooseUs from './sections/WhyChooseUs';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
