import React from 'react';
import { motion } from 'motion/react';
import styles from './Hero.module.css';
import {fadeIn, containerVariants, itemVariants, zoomIn} from "../../utils/motion.js";
import {TypingText} from "../TypingText/TypingText.jsx";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <motion.div className={styles.heroTextContainer} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ amount: 0.25 }} >
                <motion.h2 variants={itemVariants}>Hi my name is...</motion.h2>
                <motion.h1 variants={itemVariants}>Mason Guinn</motion.h1>
                <motion.div variants={itemVariants}>
                    <TypingText as="p" speed={50} text="a cybersecurity student based in Pasco, Washington
                    I have worked on a wide range of front-end projects, from DJ applications to eCommerce
                    booking platforms, with a focus on creating clean, well-crafted interfaces that not only look
                    great but also provide a seamless user experience." />
                </motion.div>
            </motion.div>
        </section>
    );
}