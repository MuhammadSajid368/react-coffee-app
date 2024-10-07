import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdCall, MdOutlineMenuOpen } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { FaCartArrowDown, FaFirstOrder } from 'react-icons/fa6';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoIosNotifications } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const notifications = useSelector((state: any) => state.notifications);
  const notificationCount = notifications.length;
  const cart = useSelector((state: any) => state.cart);
  const cartCount = cart.length;

  const menuClick = (): void => {
    setOpen(!open);
  };

  return (
    <div>
      <div className='w-full h-16 bg-gray-50 flex justify-between px-8 items-center shadow-md'>
        <div className='font-bold text-3xl text-[#030303]'>
          Coffee Tea Shop
        </div>

        <div>
          <div className='md:hidden lg:hidden flex'>
            <button onClick={menuClick}>
              <HiOutlineMenuAlt1 className='text-2xl text-gray-800 hover:text-gray-500 transition duration-200' />
            </button>
          </div>
          <ul className='space-x-6 font-medium text-lg lg:flex md:flex hidden'>
            <li>
              <NavLink to="/" className="hover:text-gray-500 flex items-center transition duration-200">
                <IoHome className='mr-1' /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order" className="hover:text-gray-500 flex items-center transition duration-200">
                <FaFirstOrder className='mr-1' /> Orders
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/cart" className="hover:text-gray-500 flex items-center transition duration-200">
                <FaCartArrowDown className='mr-1' />
                {cartCount > 0 && (
                  <span className="absolute top-[-6px] right-[-10px] bg-lime-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {cartCount}
                  </span>
                )}
                Cart
              </NavLink>
            </li>
            <li className="relative">
              <NavLink to="/notification" className="hover:text-gray-500 flex items-center transition duration-200">
                <IoIosNotifications className='mr-1' />
                {notificationCount > 0 && (
                  <span className="absolute top-[-6px] right-[-10px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {notificationCount}
                  </span>
                )}
                Notification
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {open && (
          <div>
            <ul className='lg:hidden md:hidden bg-gray-100 h-auto py-4 space-y-4 px-5'>
              <li>
                <NavLink to="/" className="hover:text-gray-500 flex items-center transition duration-200">
                  <IoHome className='mr-1' /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/order" className="hover:text-gray-500 flex items-center transition duration-200">
                  <FaFirstOrder className='mr-1' /> Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" className="hover:text-gray-500 flex items-center transition duration-200">
                  <MdCall className='mr-1' /> Contact Us
                </NavLink>
              </li>
              <li className="relative">
                <NavLink to="/notification" className="hover:text-gray-500 flex items-center transition duration-200">
                  <IoIosNotifications className='mr-1' />
                  {notificationCount > 0 && (
                    <span className="absolute top-[-6px] right-[-10px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      {notificationCount}
                    </span>
                  )}
                  Notification
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
