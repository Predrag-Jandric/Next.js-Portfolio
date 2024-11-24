"use client";

import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TestingComp from "../components/TestingComp";
import Endorsements from "../components/Endorsements";
import Faq from "../components/Faq";
import Roadmap from "../components/Roadmap";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Roadmap />
      <Endorsements />
      <Faq />
      <Footer />

      {/* <TestingComp/> */}
    </>
  );
}
