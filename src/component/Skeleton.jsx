import React from 'react';

const Skeleton = ({ className, variant = 'rect' }) => {
  const baseStyles = 'skeleton animate-pulse';
  const variants = {
    rect: 'rounded-lg',
    circle: 'rounded-full',
    text: 'h-4 rounded w-3/4 mb-2',
  };

  return <div className={`${baseStyles} ${variants[variant]} ${className}`} />;
};

export default Skeleton;
