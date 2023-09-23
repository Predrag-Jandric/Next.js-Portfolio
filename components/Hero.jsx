"use client"

// next.js imports
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// animation imports
import { motion } from "framer-motion"
import { heroAnimationVariants } from "../animations";


// data for map method
const heroMap = [
  {
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
    heroImageUrl: "/assets/all-social-icons/linkedIn.png"
  },
  {
    linkUrl: "https://github.com/Predrag-Jandric",
    heroImageUrl: "/assets/all-social-icons/github-hero.png"
  },
  {
    linkUrl: "https://www.youtube.com/@predragjandric/videos",
    heroImageUrl: "/assets/all-social-icons/youtube.png"
  },
]

function Hero() {

  const words = ["ambitious", "dedicated"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentWord(words[currentWordIndex]);
  }, [currentWordIndex]);

  return (
    <header className="hero">
      <section className="hero__wrapper revealHeaderJS">
        <h1 className="hero__title">Hi, my name is Predrag</h1>
        <p className="hero__p">Let's make the internet interesting! I am eager to fulfill my potential as <span className="hero__span">{currentWord}</span> and create outstanding websites that deliver an exceptional user experience.</p>

        {/* icons */}
        <article className="hero__icons icons__global">
          {/* mapping over "heroMap" to create link imgs */}
          {heroMap.map((item, index) => (
            <a key={index} href={item.linkUrl} target="_blank" rel="noopener noreferrer" className='hero__link' >
              <Image src={item.heroImageUrl} className='hero__img' alt="image missing" width={45} height={45} />
            </a>
          ))}

        </article>

        {/* place for new 3D planet */}

      </section>
    </header>

  )
}

export default Hero


// add particles as bg using "ts-particles npm package"