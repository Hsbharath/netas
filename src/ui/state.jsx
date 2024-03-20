'use client'

import React from 'react'
import MapBox from './map';
const State = () => {

  return (
    <div className='w-full h-full flex items-center justify-center p-3 md:p-12'>
      <MapBox level={'state'}/>
    </div>
  );
}

export default State;