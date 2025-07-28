import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.heroTextContainer}>
                <h2>Hi my name is...</h2>
                <h1>Mason Guinn</h1>
                <p>a cybersecurity student based in Pasco, Washington
                    I have worked on a wide range of front-end projects, from DJ applications to eCommerce
                    booking platforms, with a focus on creating clean, well-crafted interfaces that not only look
                    great but also provide a seamless user experience.
                </p>
            </div>
        </section>
    );
}