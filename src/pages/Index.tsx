
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Expertise from '../components/Expertise';
import Testimonials from '../components/Testimonials';

const Index: React.FC = () => {
  useEffect(() => {
    // Set dark mode based on user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Projects />
      <Testimonials />
      <Contact />
    </Layout>
  );
};

export default Index;
