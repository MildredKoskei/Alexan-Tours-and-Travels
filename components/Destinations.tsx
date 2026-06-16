"use client";

import Link from 'next/link';
import { destinations } from '../data/destinations';
import styles from './Destinations.module.css';

export default function Destinations() {
  return (
    <section id="destinations" className="section container">
      <h2 className="section-title">Popular <span className="text-gradient">Destinations</span></h2>
      <div className={styles.grid}>
        {destinations.map((dest, index) => (
          <Link href={`/destinations/${dest.name.toLowerCase()}`} key={index} style={{ display: 'block', textDecoration: 'none' }}>
            <div className={`${styles.card} hover-scale`}>
              <div 
                className={styles.imagePlaceholder} 
                style={{ backgroundImage: `url(${dest.img})` }}
              ></div>
              <div className={styles.overlay}>
                <h3 className={styles.title}>{dest.name}</h3>
                <p className={styles.activities}>{dest.activities}</p>
                <p className={styles.explanation}>{dest.explanation}</p>
                <span className={styles.explore}>Explore →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
