import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Team from './components/Team';
import { useLenis } from 'lenis/react';

// Single-page home — all sections on one route
function HomePage({ loading }) {
  const { hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!loading && hash) {
      // Short delay to ensure elements are fully layout-ready after loader transition
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el && lenis) {
          lenis.scrollTo(el, { offset: -100 });
        } else if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else if (!loading && !hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [hash, loading, lenis]);

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}

// Separate route for the interactive Gallery
function GalleryPage() {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-[80px]">
        <Gallery />
      </main>
    </PageTransition>
  );
}

// Separate route for the Team page
function TeamPage() {
  return (
    <PageTransition>
      <Navbar />
      <main className="pt-[80px]">
        <Team />
      </main>
      <Footer />
    </PageTransition>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    // Disable loading screen after the preloader animation sequence completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loading) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [loading, lenis]);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader brandText="Vision4Youth" />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage loading={loading} />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="*" element={<HomePage loading={loading} />} />
      </Routes>
    </>
  );
}

export default App;
