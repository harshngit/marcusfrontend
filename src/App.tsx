import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
// import Subscription from './components/Subscription';
import FAQ from './components/FAQ';
// import Testimonials from './components/Testimonials';
// import Clients from './components/Clients';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [route, setRoute] = useState<string>(() => {
    const hash = window.location.hash.replace(/^#/, '');
    return hash || '/';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setRoute(hash || '/');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        {route === '/privacy' ? (
          <motion.div key="privacy" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <PrivacyPolicy />
          </motion.div>
        ) : route === '/terms' ? (
          <motion.div key="terms" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
            <TermsAndConditions />
          </motion.div>
        ) : (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
            <Hero />
            <VideoSection />
            <WhyChooseUs />
            <Products />
            {/* <Subscription /> */}
            <FAQ />
            {/* <Testimonials /> */}
            {/* <Clients /> */}
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
