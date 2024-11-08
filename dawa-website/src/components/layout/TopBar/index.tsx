import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-primary_1 text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex justify-start gap-4 items-center">
          {/* Left Section */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <a href="tel:+256702108552" className="hover:underline">
              +256 702108552
            </a>
          </div>

          {/* Center Section */}
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <a
              href="mailto:dawaonlinestore@gmail.com"
              className="hover:underline"
            >
              dawaonlinestore@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <a href="#" className="hover:underline">
            Store Locations
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
