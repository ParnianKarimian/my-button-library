import React from 'react';
import '../assets/Button.css'

type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
};

const Button: React.FC<ButtonProps> = ({ label, onClick,variant='primary', size='large' }) => {
  const className = `my-button ${variant} ${size}`;
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

