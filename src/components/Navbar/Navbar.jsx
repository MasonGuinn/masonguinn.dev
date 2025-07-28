import styles from './Navbar.module.css';
import { Home, Code, Palette, Mail, User, LogOut } from 'lucide-react';
import { navLinkVariants, underlineVariants } from '../../utils/motion';
import { motion, useScroll, useTransform } from 'motion/react';

const navLink = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#code', icon: Code, label: 'Coding' },
    { href: '#art', icon: Palette, label: 'Art' },
    { href: '#contact', icon: Mail, label: 'Contact' },
]

const accLink = [
    { href: '#account', icon: User, label: 'Account' },
    { href: '#logout', icon: LogOut, label: 'Logout' },
]

export default function Navbar() {
    // Get the scrollY motion value
    const { scrollY } = useScroll();

   const backgroundOpacity = useTransform(scrollY, [0, 200], [0, 1]);

    return (
        <header className={styles.navbar}>
            <motion.div
                className={styles.navBackground}
                initial={{ opacity: 0 }}
                style={{ opacity: backgroundOpacity }}
            />
            <nav>
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
