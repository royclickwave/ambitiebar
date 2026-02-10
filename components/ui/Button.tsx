import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-workon-yellow text-primary-dark shadow-md hover:shadow-lg rounded-full py-3.5 px-7 text-lg font-title",
    secondary: "bg-transparent border-2 border-workon-yellow text-primary-dark hover:bg-workon-yellow/10 rounded-full py-3 px-6 text-base font-title"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};