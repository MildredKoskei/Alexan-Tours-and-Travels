"use client";

import styles from './Partners.module.css';

const partners = [
  'Kenya Wildlife Service',
  'Tripadvisor',
  'Pesapal',
  'SafariBookings',
  'National Geographic'
];

export default function Partners() {
  return (
    <section id="partners" className="section container">
      <div className={styles.head}>
        <div>
          <p className={styles.label}>Trusted by Travelers</p>
          <h2 className="section-title">
            Our <span className="text-gradient">Partners & Accreditation</span>
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        {partners.map((partner, index) => (
          <div key={index} className={`glass ${styles.partnerCard}`}>
            <span>{partner}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
