import React from 'react';
import HomePage from './HomePage';
import Layout from '@/components/layout';

const page = () => {
  return (
    <Layout newsletterProps={{ container: false }}>
      <HomePage />
    </Layout>
  );
};

export default page;
