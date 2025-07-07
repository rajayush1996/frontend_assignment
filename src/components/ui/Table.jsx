import React from 'react';

export default function Table({ children, className = '' }) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white dark:bg-gray-800 table-auto">
        {children}
      </table>
    </div>
  );
}
