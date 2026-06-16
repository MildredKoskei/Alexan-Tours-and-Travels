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
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className={styles.actions}>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </nav>
  );
}
