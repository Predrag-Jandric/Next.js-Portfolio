"use client"

// next.js imports
import React from "react"
import Image from "next/image";

// required Swiper components, modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// icons
import { MdFormatQuote } from "react-icons/md";

const endorsementsMap = [
    {
        endorsementsImageUrl: "/assets/endorsements/face1.jpg",
        name: 'Pera Peric',
        job: 'Policeman at  XYZ Osiguranje',
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
        linkUrl: "https://www.linkedin.com/in/predrag-jandric/"
    },
    {
        endorsementsImageUrl: "/assets/endorsements/face2.jpg",
        name: 'Marko Maric',
        job: 'Coleague at XYZ company',
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
        linkUrl: "https://www.linkedin.com/in/predrag-jandric/"
    },
    {
        endorsementsImageUrl: "/assets/endorsements/face3.jpg",
        name: 'Natasa Nikic',
        job: 'Freelancer at Self-Employed',
        message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus eaque aspernatur ratione sint, maiores esse magnam quia perferendis assumenda?",
        linkUrl: "https://www.linkedin.com/in/predrag-jandric/"
    },
];



function Endorsements() {
    return (
        <section className="endorsements_wrapper">
            <h2 className="section__title__global">Endorsements</h2>

            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {endorsementsMap.map((endorsement, index) => (
                    <SwiperSlide key={index}>
                        <Image src={endorsement.endorsementsImageUrl} width={70} height={70} alt="image missing" />

                        <a target="_blank" rel="noopener noreferrer" href={endorsement.linkUrl} className="swiper-slide_name link__properties__global">{endorsement.name}</a>
                        <small className="swiper-slide_job">{endorsement.job}</small>
                        <p className="swiper-slide_message"> <MdFormatQuote /> {endorsement.message} <MdFormatQuote /></p>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>

                    <Image src={"/assets/endorsements/face1.jpg"} width={70} height={70} alt="image missing" />

                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/predrag-jandric/" className="swiper-slide_name link__properties__global">Petar Peric</a>
                    <small className="swiper-slide_job">IT programmer at ATV</small>
                    <p className="swiper-slide_message"> <MdFormatQuote /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iste culpa veniam ea nisi possimus dolorem reiciendis eius dignissimos magni? <MdFormatQuote /></p>
                </SwiperSlide>



                <SwiperSlide>Slide 2</SwiperSlide> */}

            </Swiper>
        </section>
    )
}

export default Endorsements
