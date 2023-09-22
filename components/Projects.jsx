import React from 'react'

function Projects() {
    return (
        <section className="projects">
            <div className="projects__wrapper">
                <article className="projects__item-global">
                    <div className="projects__one__img projects__global__img"></div>
                    <div className="projects__text">
                        <h3 className="projects__h3">Valve Corp. Clone</h3>
                        <p className="projects__p">
                            I was inspired by this{" "}
                            <a
                                id="link__properties__global"
                                href="https://www.valvesoftware.com/en/"
                                target="blank"
                            >
                                ValveCorp
                            </a>{" "}
                            webpage, to recreate it mobile first. The end result is a faithful
                            clone of the original webpage which I made with HTML, JS and styled
                            with Sass.
                        </p>
                        <div className="projects__btn__container">
                            <button className="btn__global">
                                <a
                                    href="https://github.com/Predrag-Jandric/SASS-valve-clone"
                                    target="blank"
                                >
                                    Code
                                </a>
                            </button>
                            <button className="btn__global">
                                <a href="https://valve-clone.netlify.app/" target="blank">
                                    Preview
                                </a>
                            </button>
                        </div>
                    </div>
                </article>

                <article className="projects__item-global">
                    <div className="projects__two__img projects__global__img"></div>
                    <div className="projects__text">
                        <h3 className="projects__h3">React online store</h3>
                        <p className="projects__p">
                            Ecommerce simulation project that uses modern React features such as
                            Advanced state management, mapping data from API, Routing, reusable
                            components and more.
                        </p>
                        <div className="projects__btn__container">
                            <button className="btn__global">
                                <a
                                    href="https://github.com/Predrag-Jandric/React-online-store-exercise"
                                    target="blank"
                                >
                                    Code
                                </a>
                            </button>
                            <button className="btn__global">
                                <a
                                    href="https://peppy-khapse-f13bb3.netlify.app/"
                                    target="blank"
                                >
                                    Preview
                                </a>
                            </button>
                        </div>
                    </div>
                </article>

                <article className="projects__item-global">
                    <div className="projects__three__img projects__global__img"></div>
                    <div className="projects__text">
                        <h3 className="projects__h3">Portfolio</h3>
                        <p className="projects__p">
                            A showcase of my skills and experience as a developer. It took months
                            of dedication to create and design. It went through several
                            iterations. React version is coming soon.
                        </p>
                        <div className="projects__btn__container">
                            <button className="btn__global">
                                <a
                                    href="https://github.com/Predrag-Jandric/Portfolio"
                                    target="blank"
                                >
                                    Code
                                </a>
                            </button>
                            <button className="btn__global">
                                <a href="javascript:void(0)" 
                                // onClick={() => alert('You are already on Portfolio preview')}
                                >
                                    Preview
                                </a>
                            </button>
                        </div>
                    </div>
                </article>

                <article className="projects__item-global">
                    <div className="projects__four__img projects__global__img"></div>
                    <div className="projects__text">
                        <h3 className="projects__h3">Bootstrap webpage</h3>
                        <p className="projects__p">
                            This project was an opportunity to put my design and coding skills to
                            the test. I focused on creating a clean, visually appealing layout in
                            Bootstrap with UI/UX rules in mind.
                        </p>
                        <div className="projects__btn__container">
                            <button className="btn__global">
                                <a
                                    href="https://github.com/Predrag-Jandric/Bootstrap-climate-webpage"
                                    target="blank"
                                >
                                    Code
                                </a>
                            </button>
                            <button className="btn__global">
                                <a
                                    href="https://bootstrap-climate-webpage-page.netlify.app/"
                                    target="blank"
                                >
                                    Preview
                                </a>
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects
