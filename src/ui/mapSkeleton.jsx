import React from 'react'
import MapBox from './map';
function MapConatiner() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-2'>
        <div className='w-full flex items-center justify-center' style={{ height: 'calc(100vh - 100px)' }}>
            <MapBox level={'country'} />
        </div>
        <div className='w-full flex items-center justify-center' style={{ height: '100px', backgroundColor: 'green'}}>
            World
        </div>
    </div>
  )
}

export default MapConatiner;