import React from 'react'
import Image from 'next/image'

function Hero() {
    return (
        <header className="hero">
            <div className="hero__wrapper revealHeaderJS">
                <h1 className="hero__title">Hi, my name is Predrag</h1>
                <p className="hero__p">Let's make the internet interesting! I am eager to fulfill my potential as <span className="hero__span">React Front-end developer</span> and create outstanding websites that deliver an exceptional user experience.</p>
                <div className="hero__icons icons__global">
                    <a href="https://www.linkedin.com/in/predrag-jandric/" target="_blank" className="hero__link">
                        <img src="assets/img/all-social-icons/linkedIn.png" alt="image missing" className="hero__img" />
                    </a>
                    <a href="https://github.com/Predrag-Jandric" target="_blank" className="hero__link">
                        <img src="assets/img/all-social-icons/github-header.png" alt="image missing" className="hero__img" />
                    </a>
                    <a href="https://www.youtube.com/@predragjandric/videos" target="_blank"
                        className="hero__link"><img src="assets/img/all-social-icons/youtube.png" alt="image missing" className="hero__img" /></a>
                </div>

                {/* planets */}
                <img className="hero__earth mouseMoveParallaxJS"
                    src="assets/img/header-imgs/earth.png" data-value="1" alt="image missing" />
                <img className="hero__moon mouseMoveParallaxJS"
                    src="assets/img/header-imgs/moon.png" data-value="2" alt="image missing" />
                <img className="hero__star starParallaxJS" src="assets/img/header-imgs/star.png" alt="image missing" />
            </div>
        </header>

    )
}

export default Hero
