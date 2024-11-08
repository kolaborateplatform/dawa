'use client';
import React from 'react';
import StarRating from '../common/StarRating';
import Image from 'next/image';

// Define the structure of each product item
interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  rating: number;
  reviews: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fitness and Activity Tracker',
    price: 'UGX32,000',
    imageUrl:
      'https://images.unsplash.com/photo-1654195131868-cac1d8429d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rml0bmVzcyUyMGFuZCUyMEFjdGl2aXR5JTIwVHJhY2tlcnxlbnwwfHwwfHx8MA%3D%3D',
    rating: 3,
    reviews: 12,
  },
  {
    id: 2,
    name: 'Xbox White Joystick',
    price: 'UGX102,000',
    imageUrl:
      'https://images.unsplash.com/photo-1612801799890-4ba4760b6590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WGJveCUyMFdoaXRlJTIwSm95c3RpY2t8ZW58MHx8MHx8fDA%3D',
    rating: 4,
    reviews: 18,
  },
  {
    id: 3,
    name: 'Super Boost Headphones',
    price: 'UGX32,000',
    imageUrl:
      'https://images.unsplash.com/photo-1593697909822-5d9da12b4680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFN1cGVyJTIwQm9vc3QlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww',
    rating: 3,
    reviews: 10,
  },
  {
    id: 4,
    name: 'Ice White Airpods',
    price: 'UGX1,200,000',
    imageUrl:
      'https://images.unsplash.com/photo-1556607173-eca49c3c4f47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8V2hpdGUlMjBBaXJwb2RzfGVufDB8fDB8fHww',
    rating: 4,
    reviews: 20,
  },
  {
    id: 5,
    name: 'Hazer Mouse Gaming',
    price: 'UGX25,000',
    imageUrl:
      'https://images.unsplash.com/photo-1520609930-0fe8db30fd0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdXNlfGVufDB8fDB8fHww',
    rating: 3,
    reviews: 15,
  },
  {
    id: 6,
    name: 'Samsung Galaxy S21 Ultra',
    price: 'UGX1,200,000',
    imageUrl:
      'https://images.unsplash.com/photo-1610792516286-524726503fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2Ftc3VuZyUyMEdhbGF4eSUyMFMyMSUyMFVsdHJhfGVufDB8fDB8fHww',
    rating: 4,
    reviews: 25,
  },
  {
    id: 7,
    name: 'Sony PlayStation 5',
    price: 'UGX1,200,000',
    imageUrl:
      'https://images.unsplash.com/photo-1678761442615-5af77170f925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29ueSUyMFBsYXlTdGF0aW9uJTIwNXxlbnwwfHwwfHx8MA%3D%3D',
    rating: 4,
    reviews: 20,
  },
  {
    id: 8,
    name: 'Nintendo Switch Lite',
    price: 'UGX1,200,000',
    imageUrl:
      'https://images.unsplash.com/photo-1569089630965-daa2d5aa3860?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmludGVuZG8lMjBTd2l0Y2glMjBMaXRlfGVufDB8fDB8fHww',
    rating: 4,
    reviews: 25,
  },
];

const BestDeals: React.FC = () => {
  // Handler to handle clicks and log product ID
  const handleClick = (productId: number) => {
    console.log(`Product ID: ${productId}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">
        Best Deals
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClick(product.id)}
            className="hover:bg-white :hover:shadow-md rounded-lg flex items-center px-2 py-4 w-full max-w-[273px] mx-auto sm:mx-0 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {/* Product Image */}
            <div className="w-[80px] h-[80px] sm:w-[117px] sm:h-[117px] md:w-[120px] md:h-[120px] lg:w-[117px] lg:h-[139px] relative flex-shrink-0">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="ml-4 flex flex-col h-full py-1 justify-between text-left">
              <h3 className="text-sm font-semibold leading-tight">
                {product.name}
              </h3>
              <div>
                <p className="text-primary_1 font-bold">{product.price}</p>
                <div className="flex items-center mt-1">
                  <StarRating
                    initialRating={product.rating}
                    maxRating={4}
                    starSize={16}
                    readOnly
                  />
                  <span className="ml-2 text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
