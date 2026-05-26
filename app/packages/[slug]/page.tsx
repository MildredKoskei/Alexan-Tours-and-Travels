import { notFound } from 'next/navigation';
import Link from 'next/link';

const packages = [
  {
    slug: '11-days-kenya-tanzania-zanzibar-safari',
    title: '11 Days Kenya, Tanzania & Zanzibar Safari',
    price: '$3,850',
    duration: '11 days',
    overview: 'Enjoy a luxury safari experience across Kenya, Tanzania and Zanzibar with game drives, cultural visits and beach relaxation.',
    itinerary: [
      'Day 1-2: Nairobi arrival, safari briefing and transfer to Maasai Mara.',
      'Day 3-4: Full safari game drives in Maasai Mara with picnic lunches.',
      'Day 5-6: Transfer to Serengeti for wildlife viewing and sundowner evenings.',
      'Day 7: Ngorongoro Crater visit with safari exploration.',
      'Day 8-9: Explore Tarangire National Park and its large elephant herds.',
      'Day 10-11: Fly to Zanzibar for beach time, spice tours and departure.'
    ]
  },
  {
    slug: '9-days-namibia-luxury-safari-tour',
    title: '9 Days Namibia Luxury Safari Tour',
    price: '$5,200',
    duration: '9 days',
    overview: 'Discover Namibia’s desert landscapes, coastal towns and wildlife parks with premium accommodations and guided experiences.',
    itinerary: [
      'Day 1: Arrival in Windhoek and city orientation.',
      'Day 2-3: Transfer to Sossusvlei for desert excursions and sunset views.',
      'Day 4-5: Travel to Swakopmund for adventure activities and ocean scenery.',
      'Day 6-7: Explore Damaraland with visits to rock art and desert-adapted wildlife.',
      'Day 8-9: Final safari in Etosha National Park with game drives and local culture.'
    ]
  },
  {
    slug: '8-days-ol-pejeta-maasai-mara-amboseli-safari',
    title: '8 Days Ol Pejeta, Maasai Mara & Amboseli Safari',
    price: '$3,300',
    duration: '8 days',
    overview: 'A premium Kenyan safari tour visiting Ol Pejeta, Maasai Mara and Amboseli with excellent wildlife viewing opportunities.',
    itinerary: [
      'Day 1: Arrival in Nairobi and transfer to Ol Pejeta Conservancy.',
      'Day 2: Full game drive at Ol Pejeta with chimpanzee tracking.',
      'Day 3-4: Travel to Maasai Mara for morning and evening wildlife drives.',
      'Day 5: Cultural visit with Maasai community and leisure time.',
      'Day 6-7: Transfer to Amboseli National Park with stunning views of Kilimanjaro.',
      'Day 8: Return to Nairobi for departure.'
    ]
  }
];

export default function PackagePage({ params }: { params: { slug: string } }) {
  const pack = packages.find((pkg) => pkg.slug === params.slug);
  if (!pack) {
    notFound();
  }

  return (
    <main className="section container">
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <Link href="/" className="btn btn-outline" style={{ marginBottom: '24px' }}>
          ← Back to Home
        </Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{pack.title}</h1>
        <p style={{ color: 'var(--light-text)', marginBottom: '12px' }}>{pack.overview}</p>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '24px' }}>
          <span className="btn btn-outline" style={{ padding: '12px 18px' }}>{pack.duration}</span>
          <span className="btn btn-primary" style={{ padding: '12px 18px', textDecoration: 'none' }}>Starting from {pack.price}</span>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ marginBottom: '18px' }}>Itinerary</h2>
          <ol style={{ listStyle: 'decimal', paddingLeft: '20px', color: 'var(--light-text)' }}>
            {pack.itinerary.map((item, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>{item}</li>
            ))}
          </ol>
        </section>

        <a
          href="https://wa.me/254748234171"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ padding: '16px 24px' }}
        >
          Book this package on WhatsApp
        </a>
      </div>
    </main>
  );
}
