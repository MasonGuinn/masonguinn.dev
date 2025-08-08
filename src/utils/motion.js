// This file exports various animation variants and functions for Motion
// These utilities are designed to create common UI animations like fading, zooming,
// sliding, and staggered text effects.

/**
 * Creates a fade-in animation variant.
 * @param {string} [direction='up']
 * @param {'spring' | 'tween'} [type='spring']
 * @param {number} [delay=0]
 * @param {number} [duration=0.75]
 */
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

/**
 * A reusable container variant for staggering child animations.
 * @param {number} staggerChildren - The delay in seconds between each child's animation.
 * @param {number} delayChildren - The delay in seconds before the first child's animation starts.
 */
export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren,
            },
        },
    };
};

/**
 * Variants for individual items within a staggered container animation.
 *
 * @example
 * // Usage with Motion:
 * import { motion } from 'motion/react';
 * import { containerVariants, itemVariants } from '../utils/motion';
 *
 * <motion.div variants={staggerContainer()} initial="hidden" whileInView="show">
 *   <motion.p variants={staggerItem}>Item 1</motion.p>
 *   <motion.p variants={staggerItem}>Item 2</motion.p>
 */
export const staggerItem = {
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

/**
 * Creates a zoom-in animation variant.
 * @param {number} delay - The delay before the animation starts in seconds.
 * @param {number} duration - The duration of the animation in seconds.
 *
 * @example
 * // Usage with Motion:
 * import { motion } from 'motion/react';
 * import { zoomIn } from '../utils/motion';
 *
 * <motion.div
 *   variants={zoomIn(0.5, 1)}
 *   initial="hidden"
 *   whileInView="show"
 * />
 */
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

/**
 * Creates a slide-in animation variant.
 * @param {string} direction - The direction from which the element slides in ('up', 'down', 'left', 'right').
 * @param {string} type - The type of transition ('tween', 'spring', etc.).
 * @param {number} delay - The delay before the animation starts in seconds.
 * @param {number} duration - The duration of the animation in seconds.
 *
 * @example
 * // Usage with Motion:
 * import { motion } from 'motion/react';
 * import { slideIn } from '../utils/motion';
 *
 * <motion.div
 *   variants={slideIn('left', 'tween', 0.5, 1)}
 *   initial="hidden"
 *   whileInView="show" />
 */
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

export const navLinkVariants = {
    rest: {
        color: "#cbd5e1", // Default color from your CSS
    },
    hover: {
        color: "#ffffff", // Brighter white on hover
    },
};

/**
 * Variants for an underline effect, typically used with navigation links.
 * Animates the scale of an underline element from left to right on hover.
 *
 * @example
 * // Usage with Motion:
 * import { motion } from 'motion/react';
 * import { underlineVariants } from '../utils/motion';
 *
 * <nav>
 *   <ul className={styles.navListCenter}>
 *     {navLink.map(({ href, icon: Icon, label }) => (
 *       <li key={href}>
 *         <a href={href} key={href}zz>
 *           <Icon size={20} />
 *           <span>{label}</span>
 *
 *           // Usage is here
 *           <motion.div className={styles.underline} variants={underlineVariants}/>
 *         </a>
 *       </li>
 *     ))}
 *   </ul>
 * </nav>
 */
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
            ease: 'easeOut',
        },
    },
};