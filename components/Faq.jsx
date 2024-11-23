import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqMap = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How does useState work?",
      answer:
        "The useState hook lets you add state to functional components. It returns an array with two values: the current state and a function to update it.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows you to write HTML-like syntax directly in your JavaScript code.",
    },
  ];

  return (
    <section className="faq">
      <h2 className="section__title__global">Frequently asked questions</h2>

      {faqMap.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div className="faq__item" key={index}>
            <div
              className="faq__item__question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <button className="faq__item__question__btn">
                {isOpen ? "-" : "+"}
              </button>
            </div>
            <div className={`faq__item__answer ${isOpen ? "open" : ""}`}>
              {faq.answer}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FAQ;
