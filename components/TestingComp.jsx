"use client"

// THIS COMPONENT IS USED FOR TESTING BEFORE IMPLEMENTATION

// import React, { useState, useEffect } from 'react';

// function TestingComp() {
//   const words = ["ambitious", "smart", "dedicated"];
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     setCurrentWord(words[currentWordIndex]);
//   }, [currentWordIndex]);

//   return (
//     <main>

//         <p className="hero__p">
//           I am <span className="changing-text">{currentWord} developer</span>
//         </p>

//     </main>
//   );
// }

// export default TestingComp;




// ==================================================

import React from 'react'
import Image from 'next/image';

const projectsMap = [
  {
    title: 'Valve Corp. Clone',
    description:
      "I was inspired by this ValveCorp webpage, to recreate it mobile first. The end result is a faithful clone of the original webpage which I made with HTML, JS and styled with Sass.",
    projectsImageUrl: "/assets/projects/card-valve.jpeg",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: 'https://github.com/Predrag-Jandric/SASS-valve-clone',
    previewLink: 'https://valve-clone.netlify.app/',
  },
  {
    title: 'React online store',
    description:
      "Ecommerce simulation project that uses modern React features such as Advanced state management, mapping data from API, Routing, reusable components and more.",
    projectsImageUrl: "/assets/projects/card-react.png",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: 'https://github.com/Predrag-Jandric/React-online-store-exercise',
    previewLink: 'https://peppy-khapse-f13bb3.netlify.app/',
  },
  {
    title: 'Portfolio',
    description:
      "A showcase of my skills and experience as a developer. It took months of dedication to create and design. React version is coming soon.",
    projectsImageUrl: "/assets/projects/card-portfolio.jpeg",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: 'https://github.com/Predrag-Jandric/Portfolio',
    previewLink: 'javascript:void(0)', // You can set this to null or an appropriate value
  },
  {
    title: 'Bootstrap webpage',
    description:
      "This project was an opportunity to put my design and coding skills to the test. I focused on creating a clean, visually appealing layout in Bootstrap with UI/UX rules in mind.",
    projectsImageUrl: "/assets/projects/card-bootstrap.jpeg",
    TechUsedUrl: [
      "/assets/projects/techUsed/nextjs.png",
      "/assets/projects/techUsed/react.png",
      "/assets/projects/techUsed/tailwind.png",
      "/assets/projects/techUsed/sass.png",
    ],
    githubLink: 'https://github.com/Predrag-Jandric/Bootstrap-climate-webpage',
    previewLink: 'https://bootstrap-climate-webpage-page.netlify.app/',
  },
];

function TestingComp() {
  return (
    <main className="projects__wrapper">

      {projectsMap.map((project, index) => (
        <section className="projects__item-global" key={index}>

          <Image
            src={project.projectsImageUrl}
            width={300} height={300}
            alt='image missing'
            className='projects__image'
          />

          <article className="projects__text">
            <h3 className="projects__text__h3">{project.title}</h3>
            <p className="projects__text__p">{project.description}</p>
          </article>

          <article className='projects__techUsed'>
            <h4 className='projects__techUsed__header'>
              Technologies used
            </h4>

            <div className="projects__techUsed__images">
            {project.TechUsedUrl.map((techImageUrl, techIndex) => (
              <Image
                key={techIndex}
                src={techImageUrl}
                width={50}
                height={50}
                alt='image missing'
              />
            ))}
            </div>
          </article>

          <article className="projects__btn__container">
            <button className="btn__global">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Code
              </a>
            </button>
            <button className="btn__global">
              <a href={project.previewLink} target="_blank" rel="noopener noreferrer">
                Preview
              </a>
            </button>
          </article>
        </section>
      ))}
    </main>
  )
}

export default TestingComp
