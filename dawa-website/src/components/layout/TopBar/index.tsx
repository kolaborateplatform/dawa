'use client';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-primary_1 text-white py-2">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-sm px-4 gap-y-2">
        {/* Left Section */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt aria-hidden="true" />
            <a
              href="tel:+256702108552"
              aria-label="Call us at +256 702108552"
              className="hover:underline focus:outline-none focus:underline"
            >
              +256 702108552
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope aria-hidden="true" />
            <a
              href="mailto:dawaonlinestore@gmail.com"
              aria-label="Email us at dawaonlinestore@gmail.com"
              className="hover:underline focus:outline-none focus:underline"
            >
              dawaonlinestore@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt aria-hidden="true" />
          <a
            href="#"
            aria-label="View store locations"
            className="hover:underline focus:outline-none focus:underline"
          >
            Store Locations
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
