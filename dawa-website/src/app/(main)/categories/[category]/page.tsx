import React from 'react';
import CategoryPage from './CategoryPage';

interface PageProps {
  params: { category: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { category } = params;

  return (
    <div>
      <CategoryPage category={category} />
    </div>
  );
};

export default Page;
