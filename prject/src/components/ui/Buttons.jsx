import React from 'react';

export function ButtonPrimary({ children, className = '', icon, onClick, ...props }) {
  return (
    <button 
      onClick={onClick}
      className={`btn-primary px-6 py-2 rounded-full text-white font-medium flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}

export function ButtonSecondary({ children, className = '', icon, onClick, ...props }) {
  return (
    <button 
      onClick={onClick}
      className={`btn-secondary px-6 py-2 rounded-full text-white font-medium flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </button>
  );
}
