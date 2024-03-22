'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation';
import { fetchCountryData, fetchStateData, fetchConstituencyData } from '@/lib/data';
import Tooltip from './tooltip';

const MapBox = ({level}) => {
    const router = useRouter();
    const params = useParams();
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
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
                setWidth(620);
                setHeight(680);
                setMapData(data);
                break;
            case 'state':
                data = await fetchStateData(params);
                setWidth(data.size.width);
                setHeight(data.size.height);
                setMapData(data.data);
                break;
            case 'constituency':
                data = await fetchConstituencyData(params);
                setWidth(312);
                setHeight(640);
                setMapData(data);
                break;
            default:
                break;
        }
    }

    const handleClick = (id, category) => { 
        console.log(id, category)
        switch (category) {
            case 'country':
                router.push(`/${params.country}`);
                break;
            case 'state':
                router.push(`/${params.country}/${id}`);
                break;
            case 'constituency':
                router.push(`/${params.country}/${params.state}/${id}`);
                break;
            default:
                break;
        }
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
        <div className='w-full h-full flex flex-col items-center justify-center gap-8 overflow-hidden'>
            <div className='w-full h-[calc(100vh - 100px)]'>
                {
                    mapData && 
                    <svg style={{position: 'relative', width: '429px'}} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio='xMinYMin meet'>
                        {
                            Object.entries(mapData).map(([id, path]) => (
                                <g key={id}>
                                    <path 
                                    key={id} 
                                    d={path.d} 
                                    fill="#233554" 
                                    stroke="#57caff"
                                    onClick={() => handleClick(id, path.category)}
                                    onMouseOver={(e) => handleMouseOver(e, path.id)}
                                    onMouseOut={(e) => handleMouseOut(e)}
                                    style={{ cursor: 'pointer', pointerEvents: 'visible'}}></path>
                                </g>
                            ))
                        }
                    </svg> 
                }
            </div>
            <div className='w-full h-[100px] bg-green-200'>
                {tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} text={tooltip.text} /> }
                {!tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} text={`Hover Over ${level}`} /> }
            </div>
        </div>
        
    )
}

export default MapBox