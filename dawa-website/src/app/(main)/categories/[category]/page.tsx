import React from 'react';
import CategoryPageComponent from './CategoryPage';

interface PageProps {
  params: { category: string };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { category } = params;

  return (
    <div>
      <CategoryPageComponent category={category} />
    </div>
  );
};

export default Page;
