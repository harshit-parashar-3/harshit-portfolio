import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Index: React.FC = () => (
  <Layout>
    <Hero />
    <TechMarquee />
    <About />
    <Services />
    <Projects />
    <Experience />
    <Skills />
    <Contact />
  </Layout>
);

export default Index;
