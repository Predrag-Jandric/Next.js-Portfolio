"use client"

import Skills from '../components/Skills'
import About from '../components/About'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TestingComp from '../components/TestingComp'
import Endorsements from '../components/Endorsements'
import { ParallaxProvider } from 'react-scroll-parallax'
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <>
      
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Endorsements />
        <Footer />


        {/* <TestingComp/> */}

    </>
  )
}


