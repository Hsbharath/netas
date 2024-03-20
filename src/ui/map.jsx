'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation';
import { fetchCountryData, fetchStateData, fetchConstituencyData } from '@/lib/data';
import Tooltip from './tooltip';

const MapBox = ({level}) => {
    const router = useRouter();
    const params = useParams();

    const [mapData, setMapData] = useState({});
    const [tooltip, setTooltip] = useState({
        x: 0,
        y: 0,
        text: '',
        visible: false
    });

    useEffect(() => {
        fetchData(level)
    }, []);

    const fetchData = async (level) => {
        let data = null;
        switch(level){
            case 'country':
                data = await fetchCountryData(params);
                setMapData(data);
                break;
            case 'state':
                data = await fetchStateData(params);
                setMapData(data);
                break;
            case 'constituency':
                data = await fetchConstituencyData(params);
                setMapData(data);
                break;
            default:
                break;
        }
    }

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
        <>
        {
            mapData && 
            <svg viewBox='0 0 600 800' style={{ width: '300', height: '400' }}>
                {
                    Object.entries(mapData).map(([id, path]) => (
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
        }
        </>
        
    )
}

export default MapBox