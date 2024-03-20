'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import statesDataIndia from '@/lib/countries/country/india';
import Tooltip from './tooltip';
import Link from 'next/link';

const India = () => {
    const router = useRouter();
    const [tooltip, setTooltip] = useState({
        x: 0,
        y: 0,
        text: '',
        visible: false
    })

    const handleStateClick = (state) => {
        router.push(`/india/${state}`);
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
            <svg viewBox='0 0 600 800' style={{ width: '300', height: '400' }}>
                {
                    Object.entries(statesDataIndia).map(([id, path]) => (
                        <g key={id}>
                            <path 
                            key={id} 
                            d={path.d} 
                            fill="#233554" 
                            stroke="#57caff"
                            onClick={() => handleStateClick(id)}
                            onMouseOver={(e) => handleMouseOver(e, path.id)}
                            onMouseOut={(e) => handleMouseOut(e)}
                            style={{ cursor: 'pointer', pointerEvents: 'visible'}}></path>
                            {tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} text={tooltip.text} /> }
                        </g>
                    ))
                }
            </svg> 
        </div>
    )
}

export default India