"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Compass } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <Compass size={32} color="var(--primary-color)" />
        <span>ALEXAN <span className="text-gradient">TOURS</span></span>
      </Link>
      
      <ul className={styles.navLinks}>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#destinations">Destinations</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>

      <div className={styles.actions}>
        <a
          href="https://wa.me/254748234171"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
