"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

const destinations = [
  'Kenya',
  'Tanzania',
  'South Africa',
  'Dubai',
  'Singapore',
  'Thailand',
  'Zanzibar',
  'Turkey',
  'Malaysia',
  'Indonesia'
];

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const search = query.trim().toLowerCase();
    if (!search) {
      router.push('/#destinations');
      return;
    }

    const match = destinations.find((dest) => dest.toLowerCase().includes(search));
    if (match) {
      router.push(`/?destination=${encodeURIComponent(match)}#destinations`);
      return;
    }

    router.push('/#destinations');
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Discover unforgettable journeys with <span className="text-gradient">Alexan Tours</span>
        </h1>
        <p className={styles.subtitle}>
          Custom safari packages, luxury hotel bookings, visa support, and beach holidays designed for every type of traveler.
        </p>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => router.push('/packages/11-days-kenya-tanzania-zanzibar-safari')}>
            Explore Packages
          </button>
          <a href="https://wa.me/254748234171" target="_blank" rel="noreferrer" className="btn btn-outline">
            Book Now
          </a>
        </div>

        <div className={styles.searchCard}>
          <div className={styles.searchInput}>
            <label>Search your next tour</label>
            <div>
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Enter destination or package"
              />
              <button type="button" className="btn btn-primary" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
          <div className={styles.features}>
            <span>Best Price Guarantee</span>
            <span>24/7 Travel Support</span>
            <span>Personalized itineraries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
