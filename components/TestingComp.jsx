"use client"

// THIS COMPONENT IS USED FOR TESTING
//  FEATURES BEFORE IMPLEMENTATION

import React, { useState, useEffect } from 'react';

function TestingComp() {
  const words = ["ambitious", "smart", "dedicated"];
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
    <main>

        <p className="hero__p">
          I am <span className="changing-text">{currentWord} developer</span>
        </p>

    </main>
  );
}

export default TestingComp;




// ==================================================
