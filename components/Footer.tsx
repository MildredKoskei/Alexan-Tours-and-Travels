"use client";

import { Compass, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
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
            <li><a href="#">Safari Planning</a></li>
            <li><a href="#">Hotel Bookings</a></li>
            <li><a href="#">Visa Processing</a></li>
            <li><a href="#">Beach Vacations</a></li>
            <li><a href="#">Event Management</a></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.title}>Contact Us</h4>
          <ul className={styles.links}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Phone size={18} color="var(--primary-color)"/> Jack Omengo: +254748 234 171
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <MessageCircle size={18} color="var(--primary-color)"/> WhatsApp: +254748 234 171
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Mail size={18} color="var(--primary-color)"/> info@alexantours.com
            </li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <MapPin size={18} color="var(--primary-color)"/> Global HQ
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Alexan Tours and Travel Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
