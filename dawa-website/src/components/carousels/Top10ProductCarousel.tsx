'use client';
import React, { useState, useEffect, useCallback } from 'react';
import StarRating from '../common/StarRating';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  rating: number;
  sold: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Smart Watch',
    price: 'UGX600,000',
    originalPrice: 'UGX720,000',
    imageUrl:
      'https://images.unsplash.com/photo-1461141346587-763ab02bced9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U21hcnQlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4,
    sold: '4.3m',
  },
  {
    id: 2,
    name: 'Full Set iPad Devices',
    price: 'UGX900,000',
    imageUrl:
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVsbCUyMFNldCUyMGlQYWQlMjBEZXZpY2VzfGVufDB8fDB8fHww',
    rating: 3,
    sold: '5.4m',
  },
  {
    id: 3,
    name: 'AirPods',
    price: 'UGX1,000,000',
    originalPrice: 'UGX1,300,000',
    imageUrl:
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWlyUG9kc3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 4,
    sold: '5.5m',
  },
  {
    id: 4,
    name: 'Smartphone',
    price: 'UGX67,000',
    imageUrl:
      'https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8U21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    rating: 3,
    sold: '6.2m',
  },
  {
    id: 5,
    name: 'Smart TV',
    price: 'UGX1,200,000',
    originalPrice: 'UGX1,500,000',
    imageUrl:
      'https://images.unsplash.com/photo-1601944177325-f8867652837f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNtYXJ0JTIwVFZ8ZW58MHx8MHx8fDA%3D',
    rating: 4,
    sold: '4.8m',
  },
  {
    id: 6,
    name: 'Smart Phone',
    price: 'UGX50,000',
    imageUrl:
      'https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U21hcnQlMjBQaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4,
    sold: '5.2m',
  },
];

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const Top10ProductCarousel: React.FC = () => {
  const size = useWindowSize();
  const [itemsToShow, setItemsToShow] = useState(3); // Default for Desktop

  // Update itemsToShow based on window width
  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width < 640) {
        setItemsToShow(1); // Mobile
      } else if (size.width < 1024) {
        setItemsToShow(2); // Tablet
      } else {
        setItemsToShow(3); // Desktop
      }
    }
  }, [size.width]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the maximum index to prevent partial visibility
  const maxIndex = Math.max(products.length - itemsToShow, 0);

  // Adjust currentIndex if itemsToShow changes and currentIndex is out of bounds
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleProductClick = (id: number) => {
    console.log(`Product selected with ID: ${id}`);
    // Handle further actions with the selected product ID here
  };

  // Calculate the percentage to translate based on currentIndex
  const translatePercentage = (currentIndex * 100) / itemsToShow;

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start mx-auto px-4">
        {/* Left Section: Title and Navigation */}
        <div className="w-full lg:w-1/4  lg:ml-[13%] flex flex-col gap-4 justify-between mb-6 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center lg:text-left">
            Top 10 Selected Products Of The Week
          </h2>
          <div className="flex justify-center lg:justify-start items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous Products"
              className={`p-2 rounded-full border border-gray-300 disabled:border-gray-200 shadow ${
                currentIndex === 0
                  ? 'disabled:text-gray-200 cursor-not-allowed'
                  : 'border-gray-600 text-gray-600 hover:bg-gray-300'
              } focus:outline-none transition`}
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Next Products"
              className={`p-2 rounded-full border border-gray-300 shadow ${
                currentIndex > maxIndex
                  ? 'border-gray-200 disabled:text-gray-200 cursor-not-allowed'
                  : 'border-gray-600 text-gray-600 hover:bg-gray-300'
              } focus:outline-none transition`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="w-full lg:w-3/4 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
              width: `${(products.length * 100) / itemsToShow}%`,
            }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="p-4 w-full max-w-[348px] flex-shrink-0 cursor-pointer"
                style={{
                  width: `${100 / products.length}%`,
                }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="relative w-full h-48 sm:h-56 md:h-64">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                      priority={false}
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-500">
                        {product.sold} sold
                      </p>
                      <p className="text-primary_1 font-bold text-lg mt-2">
                        {product.price}
                        {product.originalPrice && (
                          <span className="text-gray-400 line-through text-sm ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center mt-4">
                      <StarRating
                        initialRating={product.rating}
                        maxRating={4}
                        starSize={16}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top10ProductCarousel;
