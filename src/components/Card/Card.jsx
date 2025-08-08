// C:/dev/Web/masonguinn.dev/src/components/Card/Card.jsx

import React from 'react';
import { motion } from 'motion/react';
import styles from './Card.module.css';

export function Card({ project, variants }) {
    const { image, title, description, links } = project;

    return (
        <motion.div className={styles.card} variants={variants}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.links}>
                    {/* Now we just map over the links array */}
                    {links.map(({ href, icon: Icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${title} ${label}`}
                        >
                            <Icon className={styles.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}