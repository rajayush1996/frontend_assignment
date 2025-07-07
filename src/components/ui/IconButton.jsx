// src/components/ui/IconButton.jsx
import React from 'react';

export default function IconButton({
  icon: Icon,          // e.g. Edit2, Trash2, etc.
  label,               // accessible label
  onClick,
  variant = 'default', // or 'primary' | 'danger'
  className = '',
  ...props
}) {
  // map variants to theme colors
  const variantClasses = {
    default: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-300',
    primary: 'text-primary-500 hover:bg-primary-100 focus:ring-primary-300',
    danger:  'text-danger-500 hover:bg-danger-100 focus:ring-danger-300',
  };
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`
        p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      <Icon size={20} />
    </button>
  );
}
