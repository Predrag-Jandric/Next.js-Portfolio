import php from "../public/assets/roadmap/php.png";
import react from "../public/assets/roadmap/react.png";
import job from "../public/assets/roadmap/job.png";
import mern from "../public/assets/roadmap/mern.png";

import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from "next/image";
import { generalVariants } from "../animations";
import { roadmapVariants } from "../animations";
import { motion } from "framer-motion";

function Roadmap() {
  const roadmapMapData = [
    { title: "Learn PHP", image: php, time: "2 months" },
    { title: "Do React challenges & prepare", image: react, time: "3 months" },
    { title: "Appy & Land a Job", image: job, time: "4 months" },
    { title: "Learn MERN stack", image: mern, time: "1 year" },
  ];

  return (
    <motion.div
      className="roadmap"
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* section title */}
      <h2 className="section__title__global">Roadmap</h2>

      <div className="roadmap__wrapper">
        {roadmapMapData.map((element, index) => (
          <motion.article
            variants={roadmapVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="roadmap__article"
          >
            <div className="roadmap__article__item">
              <p className="roadmap__article__item__time">{element.time}</p>
              <Image
                className="roadmap__article__item__image"
                src={element.image}
                alt={element.title}
              />
              <p className="roadmap__article__item__title">{element.title}</p>
            </div>
            {index < roadmapMapData.length - 1 && (
              <HiOutlineArrowLongRight size={40} className="roadmap__arrow" />
            )}
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}

export default Roadmap;
