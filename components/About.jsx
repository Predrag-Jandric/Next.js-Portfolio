import devPhoto from '../public/assets/about/devPhoto.jpeg'

function About() {
    return (
        <section className="about">
            <div className="about__wrapper revealSectionJS">
                <div className="about__content">
                    <article className="about__item">
                        <img src={devPhoto} alt="image missing" className="about__img" />
                        <div className="about__personal-info">
                            <p className="about__p">
                                Name: <br /> <span className="about__span">Predrag Jandric</span>
                            </p>
                            <p className="about__p">
                                Email: <br />{" "}
                                <span className="about__span">
                                    <a
                                        id="link__properties__global"
                                        href="mailto:predrag.jandric.bg@gmail.com"
                                    >
                                        predrag.jandric.<br />bg@gmail.com
                                    </a>
                                </span>
                            </p>
                        </div>
                    </article>
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
                                id="link__properties__global"
                            >
                                YouTube tutorials
                            </a>{" "}
                            for my own benefit. As I continuously work towards becoming a better
                            developer, I'm excited to collaborate with like-minded professionals.
                        </p>
                    </article>
                </div>
                <button className="btn__global about__btn">
                    <a href="Predrag-Jandric-CV.pdf" download>
                        Download CV
                    </a>
                </button>
            </div>
        </section>

    )
}

export default About
