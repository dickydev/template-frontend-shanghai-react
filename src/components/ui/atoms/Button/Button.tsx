import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`px-3 py-2 rounded-md font-medium transition
        bg-gray-200 dark:bg-gray-700 dark:text-white
        hover:bg-gray-300 dark:hover:bg-gray-600
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${props.className ?? ''}`}
    >
      {children}
    </button>
  );
};
