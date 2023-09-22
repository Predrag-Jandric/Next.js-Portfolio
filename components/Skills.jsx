"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image";

const skillsMap = [
    { name: "Html", imageUrl: "/assets/skills/html.png" },
    { name: "Css", imageUrl: "/assets/skills/css.png" },
    { name: "JavaScript", imageUrl: "/assets/skills/js.png" },
    { name: "React", imageUrl: "/assets/skills/react.png" },
    { name: "Redux Toolkit", imageUrl: "/assets/skills/redux-toolkit.png" },
    { name: "Next.js", imageUrl: "/assets/skills/nextjs.png" },
    { name: "Sass", imageUrl: "/assets/skills/sass.png" },
    { name: "Tailwind", imageUrl: "/assets/skills/tailwind.png" },
    { name: "Git", imageUrl: "/assets/skills/git.png" },
    { name: "Figma", imageUrl: "/assets/skills/figma.png" },
];

const animationVariants = {
    initial: {
        y: 70,
        opacity: 0,
    },
    animate: (index) => {
        return {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                delay: 0.10 * index,
            }
        }
    },
}

function Skills() {

    return (
        <section className="skills">
            <div className="skills__wrapper">

                {skillsMap.map((skill, index) => (
                    <motion.article
                        className="skills__card"
                        variants={animationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, }}
                        custom={index}
                        key={index}
                    >
                        <Image
                            src={skill.imageUrl}
                            width={112} height={112}
                            alt="image missing"
                            className="skills__image"
                        />
                        <p className="skills__p">{skill.name}</p>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}

export default Skills


