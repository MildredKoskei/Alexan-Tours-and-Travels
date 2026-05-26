"use client";

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './Destinations.module.css';

const destinations = [
  { name: 'Kenya', img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80' },
  { name: 'Tanzania', img: 'https://images.unsplash.com/photo-1518182170546-076616fd4625?auto=format&fit=crop&w=800&q=80' },
  { name: 'South Africa', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=80' },
  { name: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Singapore', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80' },
  { name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80' },
  { name: 'Zanzibar', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80' },
  { name: 'Turkey', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80' },
  { name: 'Malaysia', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f0a?auto=format&fit=crop&w=800&q=80' },
  { name: 'Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80' }
];

export default function Destinations() {
  const searchParams = useSearchParams();
  const selectedParam = searchParams.get('destination')?.toLowerCase() || '';

  const filtered = useMemo(() => {
    if (!selectedParam) return destinations;
    const matches = destinations.filter((dest) => dest.name.toLowerCase().includes(selectedParam));
    return matches.length ? matches : destinations;
  }, [selectedParam]);

  return (
    <section id="destinations" className="section container">
      <h2 className="section-title">Popular <span className="text-gradient">Destinations</span></h2>
      <div className={styles.grid}>
        {filtered.map((dest, index) => (
          <div
            key={index}
            id={dest.name.toLowerCase().replace(/\s+/g, '-')}
            className={`${styles.card} hover-scale ${selectedParam && dest.name.toLowerCase().includes(selectedParam) ? styles.active : ''}`}
          >
            <div
              className={styles.imagePlaceholder}
              style={{ backgroundImage: `url(${dest.img})` }}
            ></div>
            <div className={styles.overlay}>
              <h3 className={styles.title}>{dest.name}</h3>
              <span className={styles.explore}>Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
