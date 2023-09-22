"use client"

// imports
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image";

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

// framer animation instructions
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
            <article className="skills_wrapper">

                {/* mapped data */}
                {skillsMap.map((skill, index) => (
                    <motion.div
                        className="skills_card"
                        variants={animationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, }}
                        custom={index}
                        key={index}
                    >
                        <Image
                            src={skill.skillsImageUrl}
                            width={112} height={112}
                            alt="image missing"
                            className="skills_card_image"
                        />
                        <p className="skills_card_p">{skill.name}</p>
                    </motion.div>
                ))}

            </article>
        </section>
    )
}

export default Skills


