import js from "./public/assets/skills/js.png";
import sass from "./public/assets/skills/sass.png";
import react from "./public/assets/skills/react.png";
import { HiArrowLongRight } from "react-icons/hi2";
import Image from "next/image";

function Test() {
  const phases = [
    { title: "Learn React", image: js, time: "next 2 months" },
    { title: "Learn Next.js", image: sass, time: "next 6 months" },
    { title: "Learn PHP", image: react, time: "next year" },
  ];

  return (
    <div>
      <div>
        {phases.map((phase, index) => (
          <article key={index}>
            {/* Phase Content */}
            <div>
              {/* Time */}
              <p>{phase.time}</p>
              {/* Image */}
              <Image src={phase.image} alt={phase.title} />
              {/* Title */}
              <p>{phase.title}</p>
            </div>

            {/* Arrow */}
            {index < phases.length - 1 && <HiArrowLongRight />}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Test;
