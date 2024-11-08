'use client';
import React from 'react';
import Highlight_Carousel from '@/components/carousels/Highlight_Carousel';
import Top10ProductCarousel from '@/components/carousels/Top10ProductCarousel';
import BestDeals from '@/components/product/BestDeals';

const HomePage = () => {
  return (
    <div>
      <section>
        <Highlight_Carousel />
      </section>
      <section className="container mx-auto px-4">
        <BestDeals />
      </section>
      <section>
        <Top10ProductCarousel />
      </section>
    </div>
  );
};

export default HomePage;
