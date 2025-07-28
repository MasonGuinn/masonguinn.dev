export const fadeIn = (direction = 'up', type = 'spring', delay = 0, duration = 0.75) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

// 1. Define variants for the container and the items
export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // This will delay each child's animation
        },
    },
};

export const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        }
    },
};

export const zoomIn = (delay, duration) => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

export const slideIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

export const typingContainer = (speed = 0.08) => ({
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            // The 'speed' parameter now controls the stagger duration
            staggerChildren: speed,
        },
    },
});

// This variant for each letter remains the same
export const textVariant = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
        },
    },
};

export const navLinkVariants = {
    hover: {
        // You can add animations for the link itself here if you want
    },
};

export const underlineVariants = {
    rest: {
        scaleX: 0,
        originX: 0, // Animate from the left
    },
    hover: {
        scaleX: 1,
        originX: 0,
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        },
    },
};