import React from 'react';
import styles from './Navbar.module.css';
import { Home, Code, Palette, Mail, User, LogOut } from 'lucide-react';

const navLink = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#code', icon: Code, label: 'Coding' },
    { href: '#art', icon: Palette, label: 'Art' },
    { href: '#contact', icon: Mail, label: 'Contact' },
    { href: '#account', icon: User, label: 'Account' },
    { href: '#logout', icon: LogOut, label: 'Logout' },
]

export default function Navbar() {
    return (
        <header className={styles.navbarHeader}>
            <div className={styles.navbarContainer}>
                <nav className={styles.navbar}>

                </nav>
            </div>
        </header>
    )
}
