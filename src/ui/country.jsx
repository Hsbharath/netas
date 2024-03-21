'use client'

import React from 'react'
import { useParams } from 'next/navigation';
import MapBox from './map';

const Country = () => {
    const params = useParams();

    return (
        <div className='w-full h-full flex items-center justify-center p-3 md:p-12'>
            <MapBox level={'country'} />
        </div>
    )
}

export default Country