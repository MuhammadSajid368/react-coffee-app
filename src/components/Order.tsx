// src/components/Orders.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification, createOrder } from '../redux/actions';
import { Item } from '../types';

const Orders: React.FC = () => {
  const items = useSelector((state: any) => state.items);
  const notifications = useSelector((state: any) => state.notifications);
  const dispatch = useDispatch();

  const handleOrder = (item: Item) => {
    const order = {
      id: Date.now().toString(),
      items: [item],
      total: item.price * (1 + item.taxRate),
      createdAt: new Date(),
    };
    dispatch(createOrder(order));
    dispatch(addNotification(`Your order for ${item.name} has been placed!`));
  };

  return (
    <div>
      <h2 className='text-3xl mt-11 font-extrabold'>My Recent Orders</h2>

      <div>
        {notifications.map((notification: string, index: number) => (
          <div key={index} className="notification">
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
