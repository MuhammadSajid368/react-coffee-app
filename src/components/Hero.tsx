import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import sampleItems from '../data/data';  // Ensure the path is correct

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  taxRate: number;
  description: string;
  discountWith?: string;
}

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchData, setSearchData] = useState<Product[]>([]); // Change to empty array for consistent type

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setSearchData([]); 
    } else {
      const filteredProducts = sampleItems.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );
      console.log(filteredProducts);  // For debugging
      setSearchData(filteredProducts);
    }
  };

  return (
    <div className='relative w-full h-96 overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-no-repeat'
        style={{
          backgroundImage: "url('bg-images.jpg')",
          filter: 'blur(5px)',
        }}
      />
      <div className='relative lg:w-1/2 sm:w-full px-1 mx-auto text-center text-white lg:text-gray-800 pt-24 pb-4 text-3xl z-10'>
        <p>Coffee & Tea</p>
        <p>Find Your Favourites Now....</p>
      </div>
      <div className='relative lg:w-1/2 md:w-1/2 sm:w-full px-9 mx-auto flex items-center space-x-2 z-10'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          type='search'
          id='search'
          className='py-2 px-4 w-3/4 rounded-sm focus:outline-none'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className='py-2 rounded-sm focus:outline-none'>
          <FaSearch />
        </button>
      </div>

      {/* Render search results if there are any */}
      {searchData.length > 0 && (
        <div className='mt-4'>
          <h2 className='text-2xl text-center text-white'>Search Results</h2>
          <ul className='space-y-2'>
            {searchData.map((product) => (
              <li key={product.id} className='text-white'>
                <div className='flex items-center'>
                  <img
                    src={product.image}
                    alt={product.name}
                    className='w-16 h-16 object-cover rounded-md'
                  />
                  <div className='ml-4'>
                    <p>{product.name}</p>
                    <p>${(product.price * (1 + product.taxRate)).toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show no results found message if no products match */}
      {searchTerm && searchData.length === 0 && (
        <div className='mt-4'>
          <p className='text-white'>No results found for "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Hero;
