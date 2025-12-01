import React from 'react';
import type { UserStatus } from '../../../../types/user';
interface StatusBadgeProps {
  status: UserStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: UserStatus): string => {
    switch (status) {
      case 'online':
        return 'text-green-600 bg-green-100';
      case 'offline':
        return 'text-gray-600 bg-gray-100';
      case 'busy':
        return 'text-red-600 bg-red-100';
    }
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium uppercase ${getStatusColor(status)}`}
    >
      {'>'} {status}
    </span>
  );
};
