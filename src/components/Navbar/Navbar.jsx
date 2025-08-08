import styles from './Navbar.module.css';
import { Home, Code, Palette, Mail, User, LogOut } from 'lucide-react';
import {navLinkVariants, underlineVariants} from '../../utils/motion';
import { motion, useScroll, useTransform } from 'motion/react';

// Navigation links data
const navLink = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#code', icon: Code, label: 'Coding' },
    { href: '#art', icon: Palette, label: 'Art' },
    { href: '#contact', icon: Mail, label: 'Contact' },
]

// Account links data
const accLink = [
    { href: '#account', icon: User, label: 'Account' },
    { href: '#logout', icon: LogOut, label: 'Logout' },
]

export default function Navbar() {
    // Get the scrollY motion value from useScroll hook
    const { scrollY } = useScroll();

    // Transform scrollY to control background opacity, goes from 0 to 1 as scrollY goes from 0 to 200Zz
    const backgroundOpacity = useTransform(scrollY, [0, 200], [0, 1]);

    return (
        <header className={styles.navbar}>
            {/* Background div for the navbar, its opacity changes on scroll */}
            <motion.div
                className={styles.navBackground}
                initial={{ opacity: 0 }}
                style={{ opacity: backgroundOpacity }}
            />
            <nav>
                {/* Center navigation links */}
                <ul className={styles.navListCenter}>
                    {navLink.map(({ href, icon: Icon, label }) => (
                        <li key={href}>
                            <motion.a href={href} key={href} variants={navLinkVariants} initial="rest" whileHover="hover">
                                <Icon size={20} />
                                <span>{label}</span>
                                <motion.div className={styles.underline} variants={underlineVariants}/>
                            </motion.a>
                        </li>
                    ))}
                </ul>
                {/* Right-aligned account links */}
                <ul className={styles.navListRight}>
                    {accLink.map(({ href, icon: Icon, label }) => (
                        <li key={href}>
                            <motion.a href={href} key={href} variants={navLinkVariants} initial="rest" whileHover="hover">
                                <Icon size={20} />
                                <span>{label}</span>
                                <motion.div className={styles.underline} variants={underlineVariants}/>
                            </motion.a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
