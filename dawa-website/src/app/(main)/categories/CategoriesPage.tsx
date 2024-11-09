'use client';
import HotSalesCarousel from '@/components/carousels/HotSalesCarousel';
import RecentlyViewedCarousel from '@/components/carousels/RecentlyViewedCarousel';
import React from 'react';

const CategoriesPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <section>
        <HotSalesCarousel />
      </section>
      <section>
        <RecentlyViewedCarousel />
      </section>
    </div>
  );
};

export default CategoriesPage;
