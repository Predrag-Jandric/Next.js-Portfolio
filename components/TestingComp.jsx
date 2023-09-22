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


import React from 'react'

function TestingComp() {
  return (
    <main className="projects__wrapper">
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
    </main>
  )
}

export default TestingComp
