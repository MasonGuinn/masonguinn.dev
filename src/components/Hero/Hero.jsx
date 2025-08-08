import React from 'react';
import { motion } from 'motion/react';
import styles from './Hero.module.css';
import { staggerContainer, staggerItem } from "../../utils/motion.js";
import {TypingText} from "../TypingText/TypingText.jsx";

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <motion.div className={styles.heroTextContainer} variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} >
                <motion.h2 variants={staggerItem}>Hi my name is...</motion.h2>
                <motion.h1 variants={staggerItem}>Mason Guinn</motion.h1>
                <motion.div variants={staggerItem}>
                    <TypingText as="p" speed={35} text="a cybersecurity student based in Pasco, Washington
                    I have worked on a wide range of front-end projects, from DJ applications to eCommerce
                    booking platforms, with a focus on creating clean, well-crafted interfaces that not only look
                    great but also provide a seamless user experience." />
                </motion.div>
            </motion.div>
        </section>
    );
}