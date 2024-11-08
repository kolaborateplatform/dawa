import React, { ReactNode } from 'react';
import TopBar from '@/components/layout/TopBar';
import NavBar from './Navbar';
import Footer from './Footer';
import Newsletter from './NewsLetter';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Information Banner */}
      <TopBar />

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="py-6 flex-grow">{children}</main>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
