'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  stockLeft: number;
  totalStock: number;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fitness and Activity Tracker',
    price: 'UGX32,000',
    stockLeft: 24,
    totalStock: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
  },
  {
    id: 2,
    name: 'Xbox White Joystick',
    price: 'UGX32,000',
    stockLeft: 24,
    totalStock: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1612801799890-4ba4760b6590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WGJveCUyMFdoaXRlJTIwSm95c3RpY2t8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 3,
    name: 'Smart Watch Series 6',
    price: 'UGX25,000',
    stockLeft: 15,
    totalStock: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U21hcnQlMjBXYXRjaCUyMFNlcmllcyUyMDZ8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 4,
    name: 'Wireless Earbuds Pro',
    price: 'UGX18,000',
    stockLeft: 30,
    totalStock: 100,
    imageUrl:
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2lyZWxlc3MlMjBFYXJidWRzJTIwUHJvfGVufDB8fDB8fHww',
  },
];

const FlashSale: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Update itemsPerView based on window width
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      setItemsPerView(width >= 1024 ? 2 : 1);
    };

    updateItemsPerView(); // Initial setting
    window.addEventListener('resize', updateItemsPerView);

    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Group products into slides based on itemsPerView
  const slides = useMemo(() => {
    const groupedSlides: Product[][] = [];
    for (let i = 0; i < products.length; i += itemsPerView) {
      groupedSlides.push(products.slice(i, i + itemsPerView));
    }
    return groupedSlides;
  }, [itemsPerView]);

  const maxIndex = slides.length - 1;

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < maxIndex ? prevIndex + 1 : 0,
      );
    }, 5000); // 5 seconds
    return () => clearInterval(carouselInterval);
  }, [maxIndex]);

  // Format time from seconds to HH : MM : SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${hours} : ${minutes} : ${secs}`;
  };

  return (
    <div className="w-full py-6 container mx-auto bg-primary_1 rounded-xl relative">
      <div className="flex flex-col lg:flex-row items-center px-6">
        {/* Left Section with Countdown */}
        <div className="lg:w-4/12 w-full text-white relative z-10 lg:pr-4 text-center lg:text-left">
          <h2 className="text-3xl font-bold">Flash Sale</h2>
          <p className="text-sm my-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="text-4xl font-bold mt-4">{formatTime(timeLeft)}</div>
        </div>

        {/* Right Section with Carousel */}
        <div className="lg:w-8/12 w-full mt-6 lg:mt-0 relative z-10 flex flex-col items-start">
          {/* Carousel Container with Overflow Hidden */}
          <div className="overflow-hidden w-full">
            {/* Carousel Inner */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex-shrink-0 flex gap-4 justify-center"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  {slide.map((product) => (
                    <div
                      key={product.id}
                      className="w-[420px] h-[150px] bg-white rounded-lg p-4 shadow-lg flex items-center"
                    >
                      <div className="relative w-[117px] h-full rounded-xl overflow-hidden">
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="117px"
                          quality={100}
                        />
                      </div>
                      <div className="flex-1 flex flex-col h-full py-2 justify-between ml-4">
                        <h3 className="font-semibold text-black text-wrap">
                          {product.name}
                        </h3>
                        <div>
                          <div className="w-full flex justify-between items-center">
                            <p className="text-primary_1 font-bold">
                              <p></p>
                              {product.price}
                            </p>

                            <span className="text-xs text-gray-400">
                              {product.stockLeft} left
                            </span>
                          </div>
                          <Progress
                            value={
                              (product.stockLeft / product.totalStock) * 100
                            }
                            className="mt-1 bg-primary_2"
                            indicatorClassName="bg-primary_1"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="mt-4 ml-7 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-white' : 'w-2 bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url('/path-to-background-image.jpg')] bg-cover opacity-20 lg:opacity-30"></div>

        {/* View More Link */}
        <Link
          href={'#'}
          className="absolute bottom-4 right-6 text-white text-sm cursor-pointer underline"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
