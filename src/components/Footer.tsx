import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdCall } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { FaFirstOrder } from 'react-icons/fa6';
import { IoIosNotifications } from 'react-icons/io';

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-50 mt-10'>
      {/* <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <div className='font-bold text-lg text-[#030303]'>
            Coffee Tea Shop
          </div>
          <div className='hidden md:flex space-x-6 font-medium text-sm'>
            <NavLink to="/" className="hover:text-gray-500 flex items-center transition duration-200">
              <IoHome className='mr-1' /> Home
            </NavLink>
            <NavLink to="/order" className="hover:text-gray-500 flex items-center transition duration-200">
              <FaFirstOrder className='mr-1' /> Orders
            </NavLink>
            <NavLink to="#" className="hover:text-gray-500 flex items-center transition duration-200">
              <MdCall className='mr-1' /> Contact Us
            </NavLink>
            <NavLink to="/notification" className="hover:text-gray-500 flex items-center transition duration-200">
              <IoIosNotifications className='mr-1' /> Notification
            </NavLink>
          </div>
          <div className='md:hidden flex'>
            <button>
              {/* You can add a mobile menu icon here if needed */}
            {/* </button>
          </div>
        </div>
        <div className='md:hidden flex flex-col space-y-4 mt-4'>
          <NavLink to="/" className="hover:text-gray-500 flex items-center transition duration-200">
            <IoHome className='mr-1' /> Home
          </NavLink>
          <NavLink to="/order" className="hover:text-gray-500 flex items-center transition duration-200">
            <FaFirstOrder className='mr-1' /> Orders
          </NavLink>
          <NavLink to="/contact-us" className="hover:text-gray-500 flex items-center transition duration-200">
            <MdCall className='mr-1' /> Contact Us
          </NavLink>
          <NavLink to="/notification" className="hover:text-gray-500 flex items-center transition duration-200">
            <IoIosNotifications className='mr-1' /> Notification
          </NavLink>
        </div>
      </div> */}
      <div className='bg-gray-200 py-4 text-center'>
        <p className='text-xs text-gray-600'>
          &copy; {new Date().getFullYear()} Coffee Tea Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
