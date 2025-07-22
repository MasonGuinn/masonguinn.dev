import React from 'react';
import styles from './Navbar.module.css';
import { Home, Code, Palette, Mail, User, LogOut } from 'lucide-react';

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
    return (
        <header className={styles.navbar}>
            <nav>
                <ul className={styles.navListCenter}>
                    {navLink.map(({ href, icon: Icon, label }) => (
                        <li key={href}>
                            <a href={href} key={href}>
                                <Icon size={20} />
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className={styles.navListRight}>
                    {accLink.map(({ href, icon: Icon, label }) => (
                        <li key={href}>
                            <a href={href}>
                                <Icon size={20} />
                                <span>{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
