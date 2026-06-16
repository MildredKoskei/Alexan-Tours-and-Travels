"use client";

import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  const phoneNumber = "254748234171";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello! I would like to make an enquiry.`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatingBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} color="#fff" />
    </a>
  );
}
