'use client';

import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart } from 'react-icons/fa';
import { FiGrid } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import FireIcon from '@public/assets/svgs/fireIcon.svg';
import Logo from '@public/assets/svgs/DAWA_VARIATION_04.svg';
import Link from 'next/link';
import Button from '../../common/Button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const NavBar: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Track scroll position to set sticky state
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/categories', label: 'All Categories' },
    { href: '/categories/accessories', label: 'Accessories' },
    { href: '/categories/smartphone', label: 'Smartphone' },
    { href: '/categories/computer', label: 'Computer' },
    { href: '/categories/gaming', label: 'Gaming Equipments' },
    { href: '/categories/tv-monitors', label: 'TV & Monitors' },
    { href: '/categories/headphones', label: 'Headphones' },
    { href: '/categories/speaker', label: 'Speaker' },
    {
      href: '/categories/hot-deals',
      label: 'HOT DEALS',
      icon: <FireIcon className="w-5 h-5 mr-1" />,
    },
  ];

  return (
    <nav className="bg-white">
      {/* Section 1: Top Nav */}
      <div
        className={`${
          isSticky
            ? 'fixed top-0 left-0 right-0 shadow bg-white z-50 transition-transform duration-200'
            : ''
        }`}
      >
        <div
          className={`container mx-auto flex items-center justify-between ${isSticky ? 'py-2 lg:py-0' : 'py-2 px-4'} gap-4`}
        >
          {/* Menu Trigger for Mobile */}
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <HiOutlineMenu className="text-2xl text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center mb-1">
                      <Logo className={`w-auto h-12 -ml-6`} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-4">
                  {navLinks.map(({ href, label, icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center ${
                        label === 'HOT DEALS'
                          ? 'font-extrabold text-black'
                          : 'font-semibold text-[#4D4D4D]'
                      }`}
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                  <div className="relative mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <FaHeart className="text-xl text-gray-700 cursor-pointer" />
                      <span className="ml-2">Favorites</span>
                    </div>
                    <span className="bg-primary_1 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      12
                    </span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo for Larger Screens */}
          <div className="hidden lg:flex items-center">
            <Link href="/">
              <Logo className={`w-auto ${isSticky ? 'h-16' : 'h-24'} -ml-8`} />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full h-12 py-2 pl-5 pr-12 text-sm bg-gray-100 rounded-md focus:outline-none"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary_1">
                <FaSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Icons and Buttons */}
          <div className="flex items-center gap-8">
            <Link href="/categories">
              <FiGrid className="hidden lg:block text-xl text-gray-700 cursor-pointer" />
            </Link>

            {/* Favorites Icon with Badge for Large Screens */}
            <Link
              href="/favorites"
              className="relative hidden lg:flex items-center"
            >
              <FaHeart className="text-xl text-gray-700 cursor-pointer" />
              <span className="absolute -top-1.5 -right-2 bg-primary_1 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                12
              </span>
            </Link>

            {/* Login and Sign Up Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" passHref>
                <Button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 font-bold h-10 text-xs shadow-none">
                  LOGIN
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button className="bg-primary_1 hover:bg-primary_1 text-white px-4 py-2 font-bold h-10 text-xs">
                  SIGN UP
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Categories (hidden on mobile) */}
      <div className="hidden lg:flex bg-white">
        <div className="container mx-auto px-4 py-2 flex items-center gap-6 text-sm font-medium text-gray-600 overflow-x-auto">
          {navLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap ${
                label === 'HOT DEALS'
                  ? 'font-extrabold flex text-black items-center'
                  : 'font-semibold text-gray-500 hover:text-primary_1'
              }`}
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
