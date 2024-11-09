'use client';
import React, { useState } from 'react';
import RecentlyViewedCarousel from '@/components/carousels/RecentlyViewedCarousel';
import Sidebar from '@/components/category/Sidebar';
import BannerSection from '@/components/category/BannerSection';
import StarRating from '@/components/common/StarRating';
import Button from '@/components/common/Button';
import { FaTh, FaThList } from 'react-icons/fa';
import Image from 'next/image';

const productsData = [
  {
    id: 1,
    name: 'MacBook Pro 2020 With SSD',
    price: 1200000,
    rating: 4.5,
    reviews: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1600262300671-295cb21f4d06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TWFjQm9vayUyMFBybyUyMDIwMjAlMjBXaXRoJTIwU1NEfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    name: 'Ultra Slim MacBook Pro',
    price: 1250000,
    rating: 4,
    reviews: 10,
    imageUrl: '',
  },
  // Add more products as needed
];

const CategoryPage: React.FC = () => {
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState<
    'popularity' | 'price_low_to_high' | 'price_high_to_low' | 'rating'
  >('popularity');
  const [products, setProducts] = useState(productsData);

  const handleViewMore = (productId: number) => {
    console.log(`View more details for product ID: ${productId}`);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as
      | 'popularity'
      | 'price_low_to_high'
      | 'price_high_to_low'
      | 'rating';
    setSortOption(selectedOption);

    const sortedProducts = [...products].sort((a, b) => {
      if (selectedOption === 'price_low_to_high') return a.price - b.price;
      if (selectedOption === 'price_high_to_low') return b.price - a.price;
      if (selectedOption === 'rating') return b.rating - a.rating;
      return 0; // Default for 'popularity' (or no specific sort)
    });

    setProducts(sortedProducts);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col w-full lg:grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Section */}
        <Sidebar height="400px" />

        {/* Main Content Section */}
        <div className="col-span-3 space-y-14">
          {/* Banner Section */}
          <BannerSection />

          {/* Filters and Sorting Options */}
          <div className="flex flex-row flex-wrap justify-between items-center gap-4">
            <h2 className="text-2xl flex items-center font-semibold">
              Laptop Products
            </h2>

            <div className="flex flex-row justify-end items-center lg:items-start gap-4">
              {/* View Options */}
              <div className="flex items-center space-x-3">
                <button
                  className={
                    viewType === 'grid' ? 'text-primary_1' : 'text-gray-400'
                  }
                  onClick={() => setViewType('grid')}
                >
                  <FaTh size={18} />
                </button>
                <button
                  className={
                    viewType === 'list' ? 'text-primary_1' : 'text-gray-400'
                  }
                  onClick={() => setViewType('list')}
                >
                  <FaThList size={18} />
                </button>
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Sort by</span>
                <select
                  className="text-black font-semibold bg-transparent focus:outline-none cursor-pointer"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="popularity" className="font-semibold">
                    Popularity
                  </option>
                  <option value="price_low_to_high">Price: Low to High</option>
                  <option value="price_high_to_low">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Display */}
          <div
            className={`justify-center flex flex-wrap ${
              viewType === 'grid'
                ? 'sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'
                : 'flex flex-col gap-4'
            }`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md ${
                  viewType === 'list'
                    ? 'flex gap-4'
                    : 'w-[273px] sm:w-auto flex flex-col gap-4'
                }`}
              >
                {/* Product Image */}
                <div
                  className={`relative ${viewType === 'list' ? 'w-1/4' : 'w-full h-48'}`}
                >
                  <Image
                    src={product.imageUrl || '/placeholder-image.png'}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                {/* Product Details */}
                <div
                  className={`p-2 flex flex-col gap-2 justify-around flex-grow ${viewType === 'list' ? 'w-3/4' : ''}`}
                >
                  <div className="flex items-center">
                    <StarRating
                      initialRating={product.rating || 0}
                      maxRating={5}
                      starSize={16}
                      readOnly
                    />
                    <span className="ml-1 text-xs text-gray-500">
                      ({product.reviews || 0})
                    </span>
                  </div>
                  <h3 className="font-semibold text-md line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500">SKU {product.id}</p>

                  {/* Product Features (only in list view) */}
                  {viewType === 'list' && (
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>Direct Full Array</li>
                      <li>Quantum Dot Technology</li>
                      <li>Ambient Mode</li>
                      <li>One Remote Control</li>
                    </ul>
                  )}
                </div>

                {/* View More Button */}
                <div className="p-2">
                  {/* Price */}
                  <div
                    className={`flex ${viewType === 'list' ? 'items-center justify-between' : 'flex-col items-center'} mt-2`}
                  >
                    <p className="text-primary_1 font-bold">
                      UGX{product.price.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleViewMore(product.id)}
                    className={`w-full h-12 mx-auto bg-transparent hover:bg-transparent border-2 border-primary_1 ${viewType === 'list' ? 'bg-primary_1 text-white' : 'border-primary_1 text-primary_1'} py-2 rounded-md`}
                  >
                    View more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Viewed Carousel */}
      <section className="mt-12">
        <RecentlyViewedCarousel />
      </section>
    </div>
  );
};

export default CategoryPage;
