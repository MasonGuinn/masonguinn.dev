import React from 'react';
import styles from './Hero.module.css';
import laptopImage from 'src/assets/HeroImage.png';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Mason Guinn</h1>
                <p className={styles.heroSubtitle}>Full-Stack Developer & Digital Artist</p>
                <div className={styles.heroButtons}>
                    <a href="#code" className={styles.ctaButton}>View My Work</a>
                    <a href="#contact" className={`${styles.ctaButton} ${styles.secondaryButton}`}>Get In Touch</a>
                </div>
            </div>
            <div className={styles.heroImageContainer}>
                <img src={laptopImage} alt="A laptop displaying code" className={styles.heroImage} />
            </div>
        </div>
    );
}