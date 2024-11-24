import js from "./public/assets/skills/js.png";
import sass from "./public/assets/skills/sass.png";
import react from "./public/assets/skills/react.png";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

function Roadmap() {
  const phases = [
    { title: "Learn React", image: js, time: "next 2 months" },
    { title: "Learn Next.js", image: sass, time: "next 6 months" },
    { title: "Learn PHP", image: react, time: "next year" },
  ];

  return (
    <div className="test1">
      <div className="test2">
        {phases.map((phase, index) => (
          <article key={index} className="roadmap__container">
            {/* Phase Content */}
            <div className="roadmap__container__item">
              {/* Time */}
              <p className="roadmap__container__item__time">{phase.time}</p>
              {/* Image */}
              <Image className="roadmap__container__item__image" src={phase.image} alt={phase.title} />
              {/* Title */}
              <p className="roadmap__container__item__title">{phase.title}</p>
            </div>

            {/* Arrow */}
            {index < phases.length - 1 && <HiArrowLongRight className="roadmap__arrow"  />}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
