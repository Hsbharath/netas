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
    const [size, setSize] = useState(0);
    // const [height, setHeight] = useState(640);
    const [mapData, setMapData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [tooltip, setTooltip] = useState({
        x: 0,
        y: 0,
        text: '',
        visible: false
    });

    const colors = {
        'NDA': '#FF9650',
        'UPA': '#1EB4FF',
        'MGB': '#00C86E',
        'OTH': '#8489BB'
    }

    useEffect(() => {
        fetchData(level)
    }, []);

    const fetchData = async (level) => {
        let data = null;
        switch(level){
            case 'country':
                data = await fetchCountryData(params);
                setSize(data.size);
                // setHeight(data.size.height);
                setMapData(data.data);
                break;
            case 'state':
                data = await fetchStateData(params);
                if(!(data instanceof Error)){
                    setSize(data.size);
                    // setHeight(data.size.height);
                    setMapData(data.data);
                    break;
                }else{
                    setErrorMessage(`Error fetching - ${StatesById[params.state]} ${level} data`);
                }
            case 'constituency':
                data = await fetchConstituencyData(params);
                setSize(312);
                // setHeight(640);
                setMapData(data);
                break;
            default:
                break;
        }
    }

    const handleClick = (id, category) => { 
        switch (category) {
            case 'country':
                router.push(`/${params.country}`);
                break;
            case 'state':
                console.log(id);
                router.push(`/${params.country}/${id}`);
                break;
            case 'constituency':
                router.push(`/${params.country}/${params.state}/${id}`);
                break;
            default:
                break;
        }
    }

    const handleMouseOver = (e, path) => {
        const rect = e.target.getBoundingClientRect();
        const color = path.party === '' ? '#233554' : colors[path.party]/90;
        setTooltip({ x: rect.left, y: rect.top, text: path.title, visible: true });
        e.target.setAttribute('fill', color);
    }

    const handleMouseOut = (e, path) => {
        setTooltip({...tooltip, visible: false});
        const color = path.party === '' ? '#FFFFFF' : colors[path.party];
        e.target.setAttribute('fill', color);
    }

    return (
        <div className='w-full h-full md:h-screen flex flex-col items-center justify-center gap-2'>
            <div className='relative w-full h-full flex flex-col items-center justify-center' style={{ height: 'calc(100vh - 100px)'}}>
                {
                    level === 'state' &&
                    <div className='fixed top-0 left-0 w-full h-[50px] flex items-center justify-start gap-2 py-2 px-4'>
                        <Link href={`/${params.country}`}>Back
                        </Link> 
                        <p className='text-2xl font-medium uppercase'>
                            {StatesById[params.state]}
                        </p>
                    </div>
                }
                {
                    mapData && 
                    <svg  viewBox={`${size.left} ${size.top} ${size.width} ${size.height}`}
                        width="100%"
                        height="100%"
                        style={{ alignContent: 'center', margin: 'auto', padding: '12px' }}>
                        {
                            Object.entries(mapData).map(([id, path]) => (
                                <g key={id}>
                                    <path 
                                    key={id} 
                                    d={path.d} 
                                    fill={path.party === '' ? "#FFFFFF" : colors[path.party]}
                                    //stroke="#57caff"
                                    stroke='#233554'
                                    onClick={() => handleClick(id, path.category)}
                                    onMouseOver={(e) => handleMouseOver(e, path)}
                                    onMouseOut={(e) => handleMouseOut(e, path)}
                                    style={{ cursor: 'pointer', pointerEvents: 'visible'}}></path>
                                </g>
                            ))
                        }
                    </svg> 
                }
            </div>
            <div className='w-full flex items-center justify-center' style={{ height: '100px'}}>
                {errorMessage === '' && tooltip.visible && <Tooltip color={'sky'} text={tooltip.text} /> }
                {errorMessage === '' && !tooltip.visible && <Tooltip color={'sky'} text={`Tap/Click on map to see details`} /> }
                {errorMessage && <Tooltip color={'red'} text={errorMessage} />}
            </div>
        </div>
        
    )
}

export default MapBox