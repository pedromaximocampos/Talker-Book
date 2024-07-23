"use client"
import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string | ReactNode;
  color?: 'blue' | 'red' | 'green' | 'gray' | 'lightBlue' | 'transparent' | 'gradient' | 'gradientDark';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: any) => void;
}

// Função para mapear a prop de cor para classes Tailwind CSS
const getColorClass = (color: ButtonProps['color']): string => {
  const mapColors = {
    'blue':
      'bg-blue-950 hover:bg-blue-900 text-white',
    'red':
      'bg-red-600 hover:bg-red-700 text-white',
    'green':
      'bg-green-500 hover:bg-green-900 text-white',
    'gray':
      'bg-gray-700 hover:bg-gray-900 text-white',
    'transparent':
      'bg-transparent hover:bg-gray-200 text-blue-950 border border-blue-950',
    'lightBlue':
      'bg-blue-600 hover:bg-blue-900 text-white',
    'gradient':
      'bg-gradient-to-l from-blue-700 to-blue-800 rounded-lg text-white ',
    'gradientDark':
      'bg-gradient-to-l from-blue-800 to-blue-950 rounded-lg text-white '

  }

  return mapColors[color || 'transparent'];
};

const Button: React.FC<ButtonProps> = ({ label, onClick, color, type }) => {

  const colorClass = getColorClass(color);

  if (type === undefined) type = "button";

  return (
    <button onClick={(e) => onClick?.(e)} type={type} className={`w-full h-12 rounded-lg  ${colorClass}`} >
      {label}
    </button>
  )
}

export default Button;
