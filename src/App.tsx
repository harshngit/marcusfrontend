import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import Subscription from './components/Subscription';
import FAQ from './components/FAQ';
// import Testimonials from './components/Testimonials';
// import Clients from './components/Clients';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';

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
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {route === '/privacy' ? (
        <PrivacyPolicy />
      ) : route === '/terms' ? (
        <TermsAndConditions />
      ) : (
        <>
          <Hero />
          <VideoSection />
          <WhyChooseUs />
          <Products />
          {/* <Subscription /> */}
          <FAQ />
          {/* <Testimonials /> */}
          {/* <Clients /> */}
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
