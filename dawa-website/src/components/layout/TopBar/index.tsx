import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-primary_1 text-white py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+256 702108552</span>
        </div>

        {/* Center Section */}
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>dawaonlinestore@gmail.com</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <span>Store Locations</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
