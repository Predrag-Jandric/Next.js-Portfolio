"use client"

// next.js imports
import Image from 'next/image'
import React from 'react'

// animation imports
import { motion } from "framer-motion"
import { generalVariants } from "../animations";

// images
import devPhoto from '/public/assets/about/devPhoto.jpeg'


function About() {
    return (
        <motion.div
            variants={generalVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, }}
            id='aboutAnchor'
        >
            {/* section title */}
            <h2 className="section__title__global">About</h2>

            <section className="about">
                <div className="about__wrapper">

                    <section className="about__content">

                        <Image src={devPhoto} width={192} height={192} alt="image missing" className="about__img" />


                        <article className="about__item">
                            <h3 className="about__title">
                                Progress-oriented Front End web developer
                            </h3>
                            <p className="about__desc">
                                Through three years of dedicated learning via courses, personal
                                projects, and guidance, I've developed a strong grasp of programming
                                concepts. To solidify my understanding, I also create{" "}
                                <a
                                    href="https://www.youtube.com/@predragjandric/videos"
                                    target="_blank"
                                    className="link__properties__global"
                                >
                                    YouTube tutorials
                                </a>{" "}
                                for my own benefit. As I continuously work towards becoming a better
                                developer, I'm excited to collaborate with like-minded professionals.
                            </p>
                        </article>

                    </section>
                    <button className="btn__global about__btn">
                        <a href="Predrag-Jandric-CV.pdf" download>
                            Download CV
                        </a>
                    </button>
                </div>
            </section>
        </motion.div>
    )
}

export default About
