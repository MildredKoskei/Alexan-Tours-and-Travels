"use client";

import { useState } from 'react';
import { TourPackage } from '@/data/destinations';
import packagesData from '@/data/packages.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, X, Star, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import styles from './PackageDetails.module.css';
import { destinations } from '@/data/destinations';

const packages = packagesData as TourPackage[];

export default function PackageDetailPage({ params }: { params: { country: string; packageSlug: string } }) {
  const pkg = packages.find(
    p => p.country.toLowerCase() === params.country && p.slug === params.packageSlug
  );

  if (!pkg) {
    notFound();
  }

  const destination = destinations.find(d => d.name.toLowerCase() === params.country);

  return (
    <PackageDetails pkg={pkg} country={params.country} img={destination?.img} />
  );
}

function PackageDetails({ pkg, country, img }: { pkg: TourPackage; country: string; img?: string }) {
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <div className={styles.pageContainer}>
      {/* Hero */}
      <div
        className={styles.heroBanner}
        style={{ backgroundImage: `url(${img || ''})` }}
      >
        <div className={styles.heroOverlay}>
          <div className="container">
            {/* Breadcrumbs */}
            <nav className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#destinations">Destinations</Link>
              <span>/</span>
              <Link href={`/destinations/${country}`} style={{ textTransform: 'capitalize' }}>{country}</Link>
              <span>/</span>
              <span className={styles.breadcrumbCurrent}>{pkg.title}</span>
            </nav>

            <Link href={`/destinations/${country}`} className={styles.backLink}>
              <ArrowLeft size={20} /> Back to {country.charAt(0).toUpperCase() + country.slice(1)}
            </Link>
            <h1 className={styles.heroTitle}>{pkg.title}</h1>
            <p className={styles.heroSubtitle}>{pkg.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`container ${styles.mainContent}`}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* Overview */}
          {pkg.overview && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Trip Overview</h2>
              <div className={styles.overviewText}>
                {pkg.overview.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary Accordion */}
          {pkg.itinerary && pkg.itinerary.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Day-by-Day Itinerary</h2>
              <div className={styles.accordion}>
                {pkg.itinerary.map((day, idx) => (
                  <div key={idx} className={`${styles.accordionItem} ${openDay === idx ? styles.accordionOpen : ''}`}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => setOpenDay(openDay === idx ? null : idx)}
                    >
                      <div className={styles.accordionHeaderLeft}>
                        <span className={styles.dayBadge}>{day.day}</span>
                        <span className={styles.dayTitle}>{day.title}</span>
                      </div>
                      {openDay === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {openDay === idx && (
                      <div className={styles.accordionBody}>
                        {day.description.split('\n\n').map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attractions Grid */}
          {pkg.attractions && pkg.attractions.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Places to Visit</h2>
              <div className={styles.attractionsGrid}>
                {pkg.attractions.map((attraction, idx) => (
                  <div key={idx} className={styles.attractionCard}>
                    <h3 className={styles.attractionName}>{attraction.name}</h3>
                    <p className={styles.attractionDescription}>{attraction.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className={styles.sidebar}>
          {/* Price Card */}
          <div className={styles.priceCard}>
            <div className={styles.priceBadge}>
              <span className={styles.priceLabel}>Starting From</span>
              <span className={styles.priceValue}>{pkg.price}</span>
              <span className={styles.pricePer}>per person sharing</span>
            </div>
            <a href="/#contact" className={`btn btn-primary ${styles.bookBtn}`}>
              <Phone size={18} /> Inquire / Book Now
            </a>
            <a
              href="https://wa.me/254748234171"
              target="_blank"
              rel="noreferrer"
              className={`btn ${styles.whatsappBtn}`}
            >
              Book via WhatsApp
            </a>
          </div>

          {/* Highlights */}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarCardTitle}>
                <Star size={18} /> Trip Highlights
              </h3>
              <ul className={styles.highlightsList}>
                {pkg.highlights.map((hl, i) => (
                  <li key={i} className={styles.highlightItem}>
                    <Star size={14} className={styles.starIcon} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Inclusions */}
          {pkg.inclusions && pkg.inclusions.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarCardTitle}>
                <Check size={18} /> What&apos;s Included
              </h3>
              <ul className={styles.inclusionsList}>
                {pkg.inclusions.map((item, i) => (
                  <li key={i} className={styles.inclusionItem}>
                    <Check size={14} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Exclusions */}
          {pkg.exclusions && pkg.exclusions.length > 0 && (
            <div className={styles.sidebarCard}>
              <h3 className={`${styles.sidebarCardTitle} ${styles.exclusionsTitle}`}>
                <X size={18} /> Not Included
              </h3>
              <ul className={styles.exclusionsList}>
                {pkg.exclusions.map((item, i) => (
                  <li key={i} className={styles.exclusionItem}>
                    <X size={14} className={styles.xIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
