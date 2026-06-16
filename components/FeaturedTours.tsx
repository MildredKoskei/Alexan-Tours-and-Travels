"use client";

import Link from 'next/link';
import styles from './FeaturedTours.module.css';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';

const tours = [
  {
    title: '11 Days Kenya, Tanzania & Zanzibar Safari',
    slug: '11-days-kenya-tanzania-zanzibar-safari',
    price: '$3,850',
    duration: '11 days',
    location: 'Kenya · Tanzania · Zanzibar',
    desc: 'Luxury safari itinerary with game drives, beach time and cultural experiences.'
  },
  {
    title: '9 Days Namibia Luxury Safari Tour',
    slug: '9-days-namibia-luxury-safari-tour',
    price: '$5,200',
    duration: '9 days',
    location: 'Namibia',
    desc: 'Explore Etosha, Sossusvlei and Swakopmund on a premium desert safari.'
  },
  {
    title: '8 Days Ol Pejeta, Maasai Mara & Amboseli Safari',
    slug: '8-days-ol-pejeta-maasai-mara-amboseli-safari',
    price: '$3,300',
    duration: '8 days',
    location: 'Kenya',
    desc: 'A curated safari experience through iconic Kenyan wildlife reserves.'
  }
];

export default function FeaturedTours() {
  return (
    <section id="packages" className="section container">
      <div className={styles.head}>
        <div>
          <p className={styles.label}>Recommended Destinations</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Safari Packages</span>
          </h2>
        </div>
        <a href="#destinations" className="btn btn-outline">
          View All Tours
        </a>
      </div>

      <div className={styles.grid}>
        {tours.map((tour, index) => (
          <article key={index} className={`glass ${styles.card}`}>
            <div className={styles.cardHeader}>
              <span className={styles.price}>{tour.price}</span>
              <span className={styles.badge}>{tour.duration}</span>
            </div>

            <div>
              <h3 className={styles.tourTitle}>{tour.title}</h3>
              <p className={styles.tourDesc}>{tour.desc}</p>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <MapPin size={16} /> {tour.location}
              </span>
              <span className={styles.metaItem}>
                <CalendarDays size={16} /> {tour.duration}
              </span>
            </div>

            <Link href={`/packages/${tour.slug}`} className={styles.link}>
              Explore package <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
