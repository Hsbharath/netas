'use client'
import { fetchStateData } from '@/lib/data';
import { useParams } from "next/navigation";

const StateMap = () => {

  const params = useParams();
  const stateMap =  fetchStateData(params.id);

  const handleDistrictClick = (id) => {
    console.log(id)
  }

  return (
     <div className=''>
       <h1>State:</h1>
       <svg 
          preserveAspectRatio="xMidYMid meet"
          viewBox='-100 -50 1000 1000'>
          <g transform='scale(0.4)'>
            {
              Object.entries(stateMap).map(([id, path]) => (
                  <path 
                      key={id} 
                      d={path} 
                      fill="#94A3B8" 
                      stroke="black"
                      onClick={() => handleDistrictClick(id)}
                      style={{ cursor: 'pointer', pointerEvents: 'visible'}} />
              ))
            }
          </g>
        </svg> 
       {/* <svg viewBox="0 0 1000 800">
         <path d={statePath} fill="#FFFFFF" stroke="black" />
       </svg> */}
     </div>
  );
}

export default StateMap;

// 'use client'

// import { fetchStateData } from '@/lib/data';

// import { useRouter } from 'next/navigation';

// export default function StateMap({id}) {
//   const router = useRouter();
//   console.log(router);
  
//   //const statePath =  fetchStateData(id);

//   return (
//     <div>
//       <h1>State:</h1>
//       {/* <svg viewBox="0 0 1000 800">
//         <path d={statePath} fill="none" stroke="black" />
//       </svg> */}
//     </div>
//   );
// }