// THIS FILE CONTAINS ANIMATIONS FOR ALL SECTIONS.
// MODIFY ANIMATIONS HERE AND NOWHERE ELSE.


// animations for SKILLS section
export const skillsAnimationVariants = {
    initial: {
        scale: 0,
    },
    animate: (index) => {
        return {
            scale: 1,
            transition: {
                duration: 0.2,
                delay: 0.08 * index,
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
                delay: 0.2 * index,
            }
        }
    },
}

// GENERAL animations 
export const generalAnimationVariants = {
    initial: {
        y: 70,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.2
        }
    },
}