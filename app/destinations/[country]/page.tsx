import { destinations, TourPackage } from '@/data/destinations';
import packagesData from '@/data/packages.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, DollarSign, ArrowRight } from 'lucide-react';
import styles from './DestinationDetails.module.css';

const packages = packagesData as TourPackage[];

export function generateStaticParams() {
  return destinations.map((dest) => ({
    country: dest.name.toLowerCase(),
  }));
}

export default function DestinationPage({ params }: { params: { country: string } }) {
  const destination = destinations.find(d => d.name.toLowerCase() === params.country);

  if (!destination) {
    notFound();
  }

  // Filter packages for this destination
  const countryPackages = packages.filter(p => p.country.toLowerCase() === params.country);

  return (
    <div className={styles.pageContainer}>
      <div 
        className={styles.heroBanner} 
        style={{ backgroundImage: `url(${destination.img})` }}
      >
        <div className={styles.heroOverlay}>
          <div className="container">
            <Link href="/#destinations" className={styles.backLink}>
              <ArrowLeft size={20} /> Back to Destinations
            </Link>
            <h1 className={styles.title}>{destination.name}</h1>
          </div>
        </div>
      </div>

      <div className={`container ${styles.contentSection}`}>
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Top Activities</h2>
          <p className={styles.text}>{destination.activities}</p>
        </div>
        
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.text}>{destination.explanation}</p>
        </div>

        {/* Packages Section */}
        <div className={styles.packagesSection}>
          <h2 className={styles.packagesTitle}>Available <span className="text-gradient">Tour Packages</span></h2>
          <p className={styles.packagesSubtitle}>
            Handpicked premium itineraries designed to give you the ultimate experience in {destination.name}.
          </p>

          <div className={styles.packagesGrid}>
            {countryPackages.map((pkg, idx) => (
              <div key={idx} className={`${styles.packageCard} hover-scale`}>
                <div className={styles.packageCardContent}>
                  <h3 className={styles.packageTitle}>{pkg.title}</h3>
                  <p className={styles.packageDescription}>
                    {pkg.overview ? (pkg.overview.substring(0, 160) + '...') : pkg.subtitle}
                  </p>
                  
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className={styles.packageHighlightsContainer}>
                      <span className={styles.highlightsLabel}>Key Highlights:</span>
                      <ul className={styles.packageHighlights}>
                        {pkg.highlights.slice(0, 3).map((hl, hlIdx) => (
                          <li key={hlIdx} className={styles.highlightItem}>{hl}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className={styles.packageCardFooter}>
                  <div className={styles.packageMeta}>
                    <span className={styles.packageDuration}>
                      <Clock size={16} /> {pkg.subtitle.split('|')[0].trim()}
                    </span>
                    <span className={styles.packagePrice}>
                      {pkg.price}
                    </span>
                  </div>
                  <Link 
                    href={`/destinations/${destination.name.toLowerCase()}/${pkg.slug}`} 
                    className="btn btn-primary"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  >
                    View Full Itinerary <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.actionSection}>
          <p className={styles.text}>Ready to plan your unforgettable trip to {destination.name}?</p>
          <Link href={`/inquire?destination=${encodeURIComponent(destination.name)}`} className="btn btn-primary" style={{ marginTop: '20px' }}>
            Contact Us to Book
          </Link>
        </div>
      </div>
    </div>
  );
}
