'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import statesDataIndia from '@/lib/map-india';
import Link from 'next/link';

const India = () => {
    const router = useRouter();

    const handleStateClick = (state) => {
        router.push(`/india/${state}`);
    }

    return (
        <>
            <svg viewBox='0 0 1000 800'>
                {
                    Object.entries(statesDataIndia).map(([id, path]) => (
                        <path 
                            key={id} 
                            d={path} 
                            fill="#94A3B8" 
                            stroke="black"
                            onClick={() => handleStateClick(id)}
                            style={{ cursor: 'pointer', pointerEvents: 'visible'}} />
                    ))
                }
            </svg> 
            <Link href="/newstate">New State</Link>
        </>
    )
}

export default India