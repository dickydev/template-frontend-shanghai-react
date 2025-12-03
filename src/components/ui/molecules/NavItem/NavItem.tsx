import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  label: string;
}

export const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition text-white ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-700 dark:text-gray-200'} hover:bg-blue-500 hover:text-white`
      }
    >
      {label}
    </NavLink>
  );
};
