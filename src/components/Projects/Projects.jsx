import React from 'react';
import { motion } from 'motion/react';
import styles from './Projects.module.css';
import { Card } from '../Card/Card.jsx';
import { staggerContainer, staggerItem } from '../../utils/motion';
import { Globe, Code } from 'lucide-react';
import GithubIcon from '../../assets/Github.svg?react';

/**
 * @type {Array<{id: number, image: string, title: string, description: string, links: Array<{href: string, icon: React.ElementType, label: string}>}>}
 */
const projectData = [
    {
        id: 1,
        image: '/images/domposer.png',
        title: 'Domposer',
        description: 'A website builder which has a UI that allows you to quickly add and rearrange HTML and CSS, upload and download created projects and files.',
        links: [
            { href: 'https://github.com/MasonGuinn/domposer', icon: GithubIcon, label: 'GitHub' },
        ],
    },
    {
        id: 2,
        image: '/images/bayjs.png',
        title: 'Bay.js',
        description: 'An easy to use, lightweight library for web-components. It doesn\'t need a build step but can be included if you want to.',
        links: [
            { href: 'https://github.com/MasonGuinn/bay.js', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://bayjs.org', icon: Globe, label: 'Website' },
            { href: 'https://www.npmjs.com/package/bay.js', icon: Code, label: 'NPM' },
        ],
    },
    {
        id: 3,
        image: '/images/cookiemunch.png',
        title: 'Cookiemunch',
        description: 'A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.',
        links: [
            { href: 'https://github.com/MasonGuinn/cookiemunch', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://cookiemunch.js.org', icon: Globe, label: 'Website' },
            { href: 'https://www.npmjs.com/package/cookiemunch', icon: Code, label: 'NPM' },
        ],
    },
    {
        id: 4,
        image: '/images/screen-time.png',
        title: 'Screen time converter',
        description: 'Count the time your children spend on activities like homework, chores and exercise and convert it into screen time.',
        links: [
            { href: 'https://github.com/MasonGuinn/screen-time', icon: GithubIcon, label: 'GitHub' },
        ],
    },
    {
        id: 5,
        image: '/images/inline-svg.png',
        title: 'inline.svg',
        description: 'This is a NPM package that takes an SVG file and renders it as an inline SVG to the DOM and can also render HTML files too.',
        links: [
            { href: 'https://github.com/MasonGuinn/inline.svg', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://inlinesvg.js.org', icon: Globe, label: 'Website' },
            { href: 'https://www.npmjs.com/package/inline.svg', icon: Code, label: 'NPM' },
        ],
    },
    {
        id: 6,
        image: '/images/pcdj.png',
        title: 'PCDJ',
        description: 'I\'ve had the opportunity to work with PCDJ DJ software, where I contributed to the design and skinning for various products.',
        links: [
            { href: 'https://pcdj.com', icon: Globe, label: 'Website' },
        ],
    },
];

export default function Projects() {
    return (
        <motion.section
            className={styles.projectsContainer}
            id="projects"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}>

            <motion.h2 variants={staggerItem}>
                My Work
            </motion.h2>

            <motion.p variants={staggerItem}>
                A collection of projects I've worked on.
            </motion.p>

            <div className={styles.grid}>
                {projectData.map((project) => (
                    <Card key={project.id} project={project} variants={staggerItem} />
                ))}
            </div>

        </motion.section>
    );
}