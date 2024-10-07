// src/components/NotificationList.tsx
import React from 'react';
import { useSelector } from 'react-redux';

const NotificationList: React.FC = () => {
  const notifications = useSelector((state: any) => state.notifications);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {
          notifications ? notifications.map((msg: string, index: number) => (
            <li key={index}>{msg}</li>
          )) : "No Notification Here"}
      </ul>
    </div>
  );
};

export default NotificationList;
