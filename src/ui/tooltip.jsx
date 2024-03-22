// Tooltip.jsx
import React from 'react';
import StatesById from '@/lib/state-by-id';
const Tooltip = ({ color, text }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center bg-[${color}]-500`}>
        <p className={`text-xl font-light capitalize`} style={{color: `${color}`}}>{text}</p>
    </div>
  );
};

export default Tooltip;
