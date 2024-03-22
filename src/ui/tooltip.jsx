// Tooltip.jsx
import React from 'react';
import StatesById from '@/lib/state-by-id';
const Tooltip = ({ x, y, text }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <p className='text-2xl font-bold capitalize'>{text}</p>
    </div>
  );
};

export default Tooltip;
