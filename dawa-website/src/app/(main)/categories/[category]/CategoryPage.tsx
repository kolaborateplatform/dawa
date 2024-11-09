'use client';
import RecentlyViewedCarousel from '@/components/carousels/RecentlyViewedCarousel';
import React from 'react';

const CategoryPage = ({ category }: any) => {
  return (
    <div>
      <div className="flex flex-col gap-12">
        <section className="container mx-auto">
          We are in category page
          <h1>{category}</h1>
        </section>
        <section>
          <RecentlyViewedCarousel />
        </section>
      </div>
    </div>
  );
};

export default CategoryPage;
