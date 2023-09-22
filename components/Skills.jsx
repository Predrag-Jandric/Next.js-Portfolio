"use client"

import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image";

const skillsMap = [
    { name: "Html", imageUrl: "/assets/skills/html.png" },
    { name: "Css", imageUrl: "/assets/skills/css.png" },
    { name: "JavaScript", imageUrl: "/assets/skills/js.png" },
    { name: "React", imageUrl: "/assets/skills/react.png" },
    { name: "Redux", imageUrl: "/assets/skills/redux-toolkit.png" },
    { name: "Sass", imageUrl: "/assets/skills/sass.png" },
    { name: "Tailwind", imageUrl: "/assets/skills/tailwind.png" },
    { name: "Git", imageUrl: "/assets/skills/git.png" },
    { name: "Next.js", imageUrl: "/assets/skills/nextjs.png" },
    { name: "Figma", imageUrl: "/assets/skills/figma.png" },
];


function Skills() {

    // const ref = useRef(null)
    // const isInView = useInView(ref)

    // const mainControls = useAnimation()

    // useEffect(() => {
    //     if (isInView) {

    //     }
    // }, [isInView])

    return (
        <section className="skills">
            <div className="skills__wrapper">

                {skillsMap.map((skill, index) => (
                    <article className="skills__card" key={index}>
                        <Image
                            src={skill.imageUrl}
                            width={112} height={112}
                            alt="image missing"
                            className="skills__image" />
                        <p className="skills__p">{skill.name}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills


// initial={{ x: -90, opacity: 0, scale: 0.5 }}
// animate={{ x: 0, opacity: 1, scale: 1 }}
// transition={{ type: 'spring', bounce: 0, duration: 0.2, delay: 0 }}