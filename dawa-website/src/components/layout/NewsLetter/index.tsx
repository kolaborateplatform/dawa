import CircleElements from '@public/assets/icons/circleElement.svg';
import EnvelopIcons from '@public/assets/icons/envelops.svg';
import React from 'react';

import Button from '../../common/Button';

const Newsletter = ({ container = false }: { container?: boolean }) => {
  return (
    <section
      className={`bg-primary_1 py-12 relative overflow-hidden ${container ? 'rounded-2xl container mx-auto' : ''}`}
    >
      <div
        className={`${container ? '' : 'container mx-auto'} flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 space-y-4 md:space-y-0`}
      >
        {/* Left Section */}
        <div className="flex items-start space-x-4 text-white md:w-1/2 relative">
          <EnvelopIcons className="w-64 h-2w-64" />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold relative">
              Sign Up for Newsletter
              {/* Circle Elements Decoration */}
              <CircleElements className="absolute z-0 right-[202px] top-[44%] transform -translate-y-1/2 w-10 h-10 opacity-60" />
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 relative">
          {/* Circle Elements Decoration */}
          <CircleElements className="absolute z-0 right-[45px] top-[113%] transform -translate-y-1/2 w-10 h-10 opacity-60" />

          <form className="relative z-20 flex items-center bg-white rounded-md shadow-md w-full p-1 max-w-lg mx-auto overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-grow text-sm px-6 py-4 text-gray-600 placeholder-gray-400 outline-none"
              required
            />
            <Button className="bg-gray-700 text-white h-12 px-8 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition-colors">
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
