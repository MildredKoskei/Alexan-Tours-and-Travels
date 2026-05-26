import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedTours from '@/components/FeaturedTours';
import Categories from '@/components/Categories';
import Destinations from '@/components/Destinations';
import Partners from '@/components/Partners';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <FeaturedTours />
      <Categories />
      <Suspense fallback={<div className="section container">Loading destinations...</div>}>
        <Destinations />
      </Suspense>
      <Partners />
      <Blog />
    </>
  );
}
