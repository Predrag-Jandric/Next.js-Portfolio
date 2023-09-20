"use client"

import React from "react"
import { motion } from "framer-motion"


// TO DO sa Tihomirom, uradi mapu za sve ovo umesto individualno svaki item, problem je kako background sliku mapirati
const skillsMap = [
    { name: "Html", imageUrl: "../../public/assets/skills/html.png" },
    { name: "Css", imageUrl: "../../public/assets/skills/css.png" },
    { name: "JavaScript", imageUrl: "../../public/assets/skills/js.png" },
    { name: "React", imageUrl: "../../public/assets/skills/react.png" },
    { name: "Redux", imageUrl: "../../public/assets/skills/redux-toolkit.png" },
    { name: "Sass", imageUrl: "../../public/assets/skills/sass.png" },
    { name: "Tailwind", imageUrl: "../../public/assets/skills/tailwind.png" },
    { name: "Git", imageUrl: "../../public/assets/skills/git.png" },
    { name: "Git", imageUrl: "../../public/assets/skills/nextjs.png" },
    { name: "Git", imageUrl: "../../public/assets/skills/figma.png" },
];


function Skills() {
    return (
        <section className="skills">
            <div className="skills__wrapper">
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    className="skills__card">
                    <div className="skills__html skills__global"></div>
                    <p className="skills__p">Html</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="skills__card">
                    <div className="skills__css skills__global"></div>
                    <p className="skills__p">Css</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="skills__card">
                    <div className="skills__js skills__global"></div>
                    <p className="skills__p">Java Script</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                    className="skills__card">
                    <div className="skills__react skills__global"></div>
                    <p className="skills__p">React</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="skills__card">
                    <div className="skills__redux skills__global"></div>
                    <p className="skills__p">Redux Toolkit</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.4 }}
                    className="skills__card">
                    <div className="skills__nextjs skills__global"></div>
                    <p className="skills__p">Next.js</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                    className="skills__card">
                    <div className="skills__sass skills__global"></div>
                    <p className="skills__p">Sass</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="skills__card">
                    <div className="skills__tailwind skills__global"></div>
                    <p className="skills__p">Tailwind </p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="skills__card">
                    <div className="skills__git skills__global"></div>
                    <p className="skills__p">Git VCS</p>
                </motion.article>
                <motion.article
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0 }}
                    className="skills__card">
                    <div className="skills__figma skills__global"></div>
                    <p className="skills__p">Figma</p>
                </motion.article>
            </div>
        </section>
    )
}

export default Skills
