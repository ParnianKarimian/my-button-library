// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'large', children }) => {
  return (
    <button className={`${variant} ${size}`}>
      {children}
    </button>
  );
};

export default Button;

