import React from 'react';

function BaseButton({ as: Component = 'button', children, className = '', icon, onClick, ...props }) {
  return (
    <Component
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-white font-medium flex items-center justify-center gap-2 ${className}`}
      {...props}
    >
      {icon && <span className="material-symbols-outlined text-[18px]">{icon}</span>}
      {children}
    </Component>
  );
}

export function ButtonPrimary({ children, className = '', icon, onClick, ...props }) {
  return (
    <BaseButton as={props.as} className={`btn-primary ${className}`} icon={icon} onClick={onClick} {...props}>
      {children}
    </BaseButton>
  );
}

export function ButtonSecondary({ children, className = '', icon, onClick, ...props }) {
  return (
    <BaseButton as={props.as} className={`btn-secondary ${className}`} icon={icon} onClick={onClick} {...props}>
      {children}
    </BaseButton>
  );
}
