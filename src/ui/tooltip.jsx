// Tooltip.jsx
import React from 'react';
import StatesById from '@/lib/state-by-id';
const Tooltip = ({ x, y, text }) => {
  return (
    <text x={x} y={y} fontSize="14" fill="#FFFFFF" style={{ color: 'white', display: 'block' }}>
        {text}
    </text>
  );
};

export default Tooltip;
