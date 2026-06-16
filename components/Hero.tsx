"use client";

import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Explore the World with <br />
          <span className="text-gradient">Alexan Tours</span>
        </h1>
        <p className={styles.subtitle}>
          Premium Safari Planning, Hotel Bookings, Visa Processing, Beach Vacations, and Event Management across the globe's most breathtaking destinations.
        </p>
        <div className={styles.actions}>
          <button className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Plan Your Trip
          </button>
          <button className="btn btn-outline" style={{ padding: '16px 40px', fontSize: '1.1rem', color: '#fff', borderColor: '#fff' }}>
            Explore Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
