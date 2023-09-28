"use client"

// next.js imports
import React from "react"
import Image from "next/image";

// animation imports
import { motion } from "framer-motion"
import { skillsVariants } from "../animations";
import { generalVariants } from "../animations";


// data for map method
const skillsMap = [
    { name: "Html", skillsImageUrl: "/assets/skills/html.png" },
    { name: "Css", skillsImageUrl: "/assets/skills/css.png" },
    { name: "JavaScript", skillsImageUrl: "/assets/skills/js.png" },
    { name: "React", skillsImageUrl: "/assets/skills/react.png" },
    { name: "Redux Toolkit", skillsImageUrl: "/assets/skills/redux-toolkit.png" },
    { name: "Next.js", skillsImageUrl: "/assets/skills/nextjs.png" },
    { name: "Sass", skillsImageUrl: "/assets/skills/sass.png" },
    { name: "Tailwind", skillsImageUrl: "/assets/skills/tailwind.png" },
    { name: "Git", skillsImageUrl: "/assets/skills/git.png" },
    { name: "Figma", skillsImageUrl: "/assets/skills/figma.png" },
];

function Skills() {
    return (
        <motion.div
            variants={generalVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, }}>

            {/* section title */}
            <h2 className="section__title__global">Skills</h2>

            <section className="skills">
                <article className="skills__wrapper">

                    {/* mapping over "skillsMap" to create imgs and text */}
                    {skillsMap.map((skill, index) => (
                        <motion.div
                            className="skills__card"
                            variants={skillsVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, }}
                            custom={index}
                            key={index}
                        >
                            <Image
                                src={skill.skillsImageUrl}
                                width={110} height={110}
                                alt="image missing"
                                className="skills__card__image"
                            />
                            <p className="skills__card__p">{skill.name}</p>
                        </motion.div>
                    ))}

                </article>
            </section>
        </motion.div>
    )
}

export default Skills


