'use client'
import React, { useState } from 'react'
import karnatakaData from '@/lib/countries/country/states/karnataka';
import Tooltip from './tooltip';
const StateMap = () => {

  const [tooltip, setTooltip] = useState({
      x: 0,
      y: 0,
      text: '',
      visible: false
  })

  const handleStateClick = (id) => {
      console.log(id);
  }

  const handleMouseOver = (e, id) => {
    const rect = e.target.getBoundingClientRect();
    setTooltip({ x: rect.left, y: rect.top, text: id, visible: true });
    e.target.setAttribute('fill', '#57caff50');
  }

  const handleMouseOut = (e) => {
      setTooltip({...tooltip, visible: false});
      e.target.setAttribute('fill', '#233554');
  }

  return (
    <div className='w-full h-full flex items-center justify-center p-3 md:p-12'>
      <svg id="svgContainer" viewBox='0 0 300 600' style={{ width: '500', height: '700', textAlign: 'center'}} 
        className='flex items-center justify-center'>
        {
          Object.entries(karnatakaData).map(([id, path]) => (
            <g key={id}>
                <path 
                id={path.title}
                d={path.d} 
                fill="#233554" 
                stroke="#57caff"
                onClick={() => handleStateClick(path)}
                onMouseOver={(e) => handleMouseOver(e, path.id)}
                onMouseOut={(e) => handleMouseOut(e)}
                style={{ cursor: 'pointer', pointerEvents: 'visible'}}></path>
                {tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} text={tooltip.text} /> }
            </g>
          ))
        }
      </svg> 
    </div>
  );
}

export default StateMap;