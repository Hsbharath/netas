'use client'

import React from 'react'
import MapBox from './map';

const Country = () => {

    return (
        <div className='w-full h-full flex items-center justify-center p-3'>
            <MapBox level={'country'} />
        </div>
    )
}

export default Country