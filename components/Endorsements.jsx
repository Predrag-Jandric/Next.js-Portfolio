"use client";

// next.js imports
import React from "react";
import Image from "next/image";

// imports required Swiper components, modules and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// icons import
import { MdFormatQuote } from "react-icons/md";

// animation imports
import { motion } from "framer-motion";
import { generalVariants } from "../animations";

// data for map method
const endorsementsMap = [
  {
    endorsementsImageUrl: "/assets/endorsements/face1.jpg",
    name: "Pera Peric",
    job: "Policeman at  XYZ Osiguranje",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/face3.jpg",
    name: "Marko Maric",
    job: "Freelancer at Self-Employed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
  },
  {
    endorsementsImageUrl: "/assets/endorsements/face2.jpg",
    name: "Natasa Nikic",
    job: "Coleague at XYZ company",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
  },
];

function Endorsements() {
  return (
    <motion.section
      variants={generalVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="endorsements_wrapper"
    >
      {/* section title */}
      <h2 className="section__title__global">Endorsements</h2>

      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper"
      >
        {endorsementsMap.map((endorsement, index) => (
          <SwiperSlide key={index}>
            <Image
              src={endorsement.endorsementsImageUrl}
              width={70}
              height={70}
              alt="image missing"
            />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={endorsement.linkUrl}
              className="swiper-slide_name link__properties__global"
            >
              {endorsement.name}
            </a>
            <small className="swiper-slide_job">{endorsement.job}</small>
            <p className="swiper-slide_message">
              {" "}
              <MdFormatQuote /> {endorsement.message} <MdFormatQuote />
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default Endorsements;
