import React, { ReactNode } from 'react';
import TopBar from '@/components/layout/TopBar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Contact Information Banner */}
      <TopBar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default MainLayout;