import React, { ReactNode } from 'react';
import TopBar from '@/components/layout/TopBar';
import NavBar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Contact Information Banner */}
      <TopBar />

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;
