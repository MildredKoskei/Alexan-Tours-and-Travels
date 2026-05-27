"use client";

import { Compass, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Compass size={32} color="var(--primary-color)" />
            <span>ALEXAN <span className="text-gradient">TOURS</span></span>
          </div>
          <p className={styles.desc}>
            Your premium partner for unforgettable journeys. We handle the details so you can enjoy the experience.
          </p>
        </div>

        <div>
          <h4 className={styles.title}>Services</h4>
          <ul className={styles.links}>
            <li><a href="#services">Safari Planning</a></li>
            <li><a href="#services">Hotel Bookings</a></li>
            <li><a href="#services">Visa Processing</a></li>
            <li><a href="#services">Beach Vacations</a></li>
            <li><a href="#services">Event Management</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Quick Links</h4>
          <ul className={styles.links}>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#categories">Destinations</a></li>
            <li><a href="#blog">Magazine</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Contact Us</h4>
          <ul className={styles.links}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Mail size={18} color="var(--primary-color)" /> alexantours@gmail.com
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={18} color="var(--primary-color)" /> +254711604832
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <MapPin size={18} color="var(--primary-color)" /> Kilimani Business Centre, Kirichwa Rd, Nairobi
            </li>
          </ul>
          <div className={styles.social}>
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Alexan Tours and Travel Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
