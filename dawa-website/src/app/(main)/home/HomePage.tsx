'use client';
import React from 'react';
import Highlight_Carousel from '@/components/carousels/Highlight_Carousel';
import Top10ProductCarousel from '@/components/carousels/Top10ProductCarousel';
import BestDeals from '@/components/product/BestDeals';
import PopularSearchCarousel from '@/components/carousels/PopularSearchCarousel';
import FlashSale from '@/components/product/FlashSale';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <Highlight_Carousel />
      </section>
      <section className="container mx-auto px-4">
        <BestDeals />
      </section>
      <section>
        <Top10ProductCarousel />
      </section>
      <section>
        <PopularSearchCarousel />
      </section>
      <section>
        <FlashSale />
      </section>
    </div>
  );
};

export default HomePage;
