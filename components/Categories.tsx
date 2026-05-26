"use client";

import styles from './Categories.module.css';
import { Globe2, Sparkles, Map } from 'lucide-react';

const categories = [
  { title: 'Kenya Safaris', tours: 44, icon: <Sparkles size={24} /> },
  { title: 'Tanzania Safaris', tours: 18, icon: <Map size={24} /> },
  { title: 'Uganda Safaris', tours: 9, icon: <Globe2 size={24} /> },
  { title: 'Rest of Africa', tours: 26, icon: <Sparkles size={24} /> }
];

export default function Categories() {
  return (
    <section id="categories" className="section container">
      <div className={styles.intro}>
        <div>
          <p className={styles.label}>Explore More</p>
          <h2 className="section-title">
            Popular <span className="text-gradient">Destination Categories</span>
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <div key={index} className={`glass ${styles.card}`}>
            <div className={styles.icon}>{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.tours} tours available</p>
            <a href="#packages" className={styles.link}>Explore</a>
          </div>
        ))}
      </div>
    </section>
  );
}
