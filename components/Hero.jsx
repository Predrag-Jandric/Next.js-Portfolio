"use client"

// next.js imports
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// animation imports
import { motion } from "framer-motion"
import { heroVariants } from '../animations'

// import 
import Spline from '@splinetool/react-spline';
import Navbar from './navbar/Navbar';

import star from '../public/assets/hero/star.png'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'


function Hero() {

  return (
    <>


      <header className="hero">
      <Navbar />
        <section
          className="hero__wrapper">
          <motion.h1
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.30 }}
            className="hero__title">Hi, my name is Predrag
          </motion.h1>
          <motion.p
            initial={heroVariants.initial}
            animate={heroVariants.animate}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="hero__p">Let's make the internet interesting! I am eager to fulfill my potential as <span className="hero__span">lorem</span> and create outstanding websites that deliver an exceptional user experience.
          </motion.p>

          <motion.button
          initial={heroVariants.initial}
          animate={heroVariants.animate}
          transition={{ duration: 0.5, delay: 0.60 }}
          className='btn__global'><a href="">Learn more</a>
          </motion.button>

        </section>

        {/*  */}

        
        <Image alt='image missing' width={150} height={150} className='hero__star' src={star} />


      </header>

    </>
  )
}

export default Hero

