
import React from 'react'
import Image from 'next/image'

import linkedInIcon from '../public/assets/all-social-icons/linkedIn.png'
import gitHubIcon from '../public/assets/all-social-icons/github-hero.png'
import youtube from '../public/assets/all-social-icons/youtube.png'

function Hero() {
    return (
        <header className="hero">
            <section className="hero__wrapper revealHeaderJS">
                <h1 className="hero__title">Hi, my name is Predrag</h1>
                <p className="hero__p">Let's make the internet interesting! I am eager to fulfill my potential as <span className="hero__span">React Front-end developer</span> and create outstanding websites that deliver an exceptional user experience.</p>
                <article className="hero__icons icons__global">
                    <a href="https://www.linkedin.com/in/predrag-jandric/" target="_blank" rel="noopener noreferrer" className="hero__link">
                        <Image src={linkedInIcon} alt="image missing" className="hero__img" />
                    </a>
                    <a href="https://github.com/Predrag-Jandric" target="_blank" rel="noopener noreferrer" className="hero__link">
                        <Image src={gitHubIcon} alt="image missing" className="hero__img" />
                    </a>
                    <a href="https://www.youtube.com/@predragjandric/videos" target="_blank" rel="noopener noreferrer" className="hero__link">
                        <Image src={youtube} alt="image missing" className="hero__img" />
                    </a>

                </article>

                {/* place for new 3D planet */}

            </section>
        </header>

    )
}

export default Hero


// add particles as bg using "ts-particles npm package"