// THIS FILE CONTAINS ANIMATIONS FOR ALL SECTIONS.
// MODIFY ANIMATIONS HERE AND NOWHERE ELSE.


// animations for SKILLS section
export const skillsAnimationVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: (index) => {
        return {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
                delay: 0.05 * index,
            }
        }
    },
}

// animations for PROJECTS section
export const projectsAnimationVariants = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: (index) => {
        return {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                delay: 0.10 * index,
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