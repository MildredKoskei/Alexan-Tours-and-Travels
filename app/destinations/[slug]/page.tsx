import Link from 'next/link';
import { notFound } from 'next/navigation';

const destinationData = {
  tanzania: {
    title: 'Tanzania Adventures',
    description: 'Explore Tanzania’s legendary safari parks, breathtaking landscapes, and coastal islands.',
    highlights: [
      {
        title: 'Serengeti National Park',
        desc: 'Witness the Great Migration and enjoy world-class game drives in the heart of the savanna.',
        img: 'https://images.unsplash.com/photo-1498194751102-456c6d2f53f1?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Ngorongoro Crater',
        desc: 'A natural wildlife amphitheater with dense populations of lions, elephants, and rhinos.',
        img: 'https://images.unsplash.com/photo-1549111534-773ce4db772e?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Zanzibar Beach Escape',
        desc: 'Relax on powder-white beaches, explore Stone Town, and enjoy island culture and spices.',
        img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  malaysia: {
    title: 'Malaysia Getaway',
    description: 'Discover Malaysia’s vibrant cities, lush rainforests, and idyllic island beaches.',
    highlights: [
      {
        title: 'Kuala Lumpur',
        desc: 'Marvel at the Petronas Towers, explore vibrant markets, and taste world-class street food.',
        img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Langkawi Island',
        desc: 'Enjoy crystal-clear waters, cable car views, and serene tropical beaches.',
        img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'
      },
      {
        title: 'Cameron Highlands',
        desc: 'Walk through tea plantations, flower farms, and cool highland trails.',
        img: 'https://images.unsplash.com/photo-1552089126-5b30a6bb7ee0?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  }
};

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const page = destinationData[params.slug as keyof typeof destinationData];
  if (!page) {
    notFound();
  }

  return (
    <main className="section container" style={{ maxWidth: 1100, margin: '0 auto' }}>
      <Link href="/" className="btn btn-outline" style={{ marginBottom: 24 }}>
        ← Back to Home
      </Link>

      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: '3rem', marginBottom: 16 }}>{page.title}</h1>
        <p style={{ color: 'var(--light-text)', fontSize: '1.05rem', lineHeight: 1.8 }}>{page.description}</p>
      </header>

      <div style={{ display: 'grid', gap: 32 }}>
        {page.highlights.map((highlight) => (
          <section key={highlight.title} style={{ display: 'grid', gap: 18, gridTemplateColumns: '1fr', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: 10 }}>{highlight.title}</h2>
              <p style={{ color: 'var(--light-text)', lineHeight: 1.8 }}>{highlight.desc}</p>
            </div>
            <div style={{ borderRadius: 24, overflow: 'hidden', height: 340 }}>
              <img
                src={highlight.img}
                alt={highlight.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </section>
        ))}
      </div>

      <div style={{ marginTop: 48, padding: 28, borderRadius: 24, background: 'rgba(252, 163, 17, 0.08)' }}>
        <h2 style={{ marginBottom: 14 }}>Plan your visit</h2>
        <p style={{ color: 'var(--light-text)', lineHeight: 1.8 }}>
          Contact us to customize a full itinerary for this destination, including transfers, accommodations and guided tours.
        </p>
        <a href="https://wa.me/254748234171" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 16 }}>
          Book via WhatsApp
        </a>
      </div>
    </main>
  );
}
