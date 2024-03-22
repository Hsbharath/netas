// Tooltip.jsx
import React from 'react';
import StatesById from '@/lib/state-by-id';
const Tooltip = ({ x, y, text }) => {
  return (
    <div className="w-full h-full flex items-center justify-center" x={x} y={y} fontSize="14" fill="#FFFFFF" style={{ color: 'white', display: 'block', textTransform: 'capitalize' }}>
        {text}
    </div>
  );
};

export default Tooltip;
