// THIS FILE CONTAINS ANIMATIONS FOR ALL SECTIONS.
// MODIFY ANIMATIONS HERE AND NOWHERE ELSE.


// animations for SKILLS section
export const skillsAnimationVariants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: (index) => {
        return {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.2,
                delay: 0.10 * index,
            }
        }
    },
}

// animations for PROJECTS section
export const projectsAnimationVariants = {
    initial: {
        y: 70,
        opacity: 0,
    },
    animate: (index) => {
        return {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: 0.3 * index,
            }
        }
    },
}

// animations for FOOTER section
export const footerAnimationVariants = {
    initial: {
        y: 70,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 0.3
        }
    },
}