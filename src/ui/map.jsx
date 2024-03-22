'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation';
import { fetchCountryData, fetchStateData, fetchConstituencyData } from '@/lib/data';
import Tooltip from './tooltip';
import StatesById from '@/lib/state-by-id';
import Link from 'next/link';

const MapBox = ({level}) => {
    const router = useRouter();
    const params = useParams();
    const [width, setWidth] = useState(312);
    const [height, setHeight] = useState(640);
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
                setWidth(data.size.width);
                setHeight(data.size.height);
                setMapData(data.data);
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
        <div className='w-full md:h-screen flex flex-col items-center justify-center gap-2 bg-green-400'>
            <div className='w-full h-full flex flex-col items-center justify-center mx-auto' style={{ height: 'calc(100vh - 100px)'}}>
                {
                    level === 'state' &&
                    <div className='w-full h-[50px] p-2'>
                        <Link href={`/${params.country}`}>
                            <span className='text-4xl font-semibold uppercase'>{StatesById[params.state]}</span>
                        </Link>
                    </div>
                }
                {
                    mapData && 
                    <svg  viewBox={`0 0 100% ${height}`}
                        width='100%'
                        height='100%'
                        style={{ position: 'relative', margin: 'auto', padding: '12px' }}>
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
            <div className='w-full flex items-center justify-center' style={{ height: '100px'}}>
                {tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} text={tooltip.text} /> }
                {!tooltip.visible && <Tooltip x={tooltip.x} y={tooltip.y} text={`Hover Over ${level} ${width} ${height}`} /> }
            </div>
        </div>
        
    )
}

export default MapBox