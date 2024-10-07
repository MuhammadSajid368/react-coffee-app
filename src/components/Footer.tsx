import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-50 mt-10'>
      <div className='bg-gray-200 py-4 text-center'>
        <p className='text-xs text-gray-600'>
          &copy; {new Date().getFullYear()} Coffee Tea Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
