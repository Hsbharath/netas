import dynamic from 'next/dynamic';

// Dynamic import for SVG components
const StateMap = dynamic(() => import('@/ui/stateMap'));

function Page() {
  // Handle state selection and pass appropriate props to StateMap component
  return (
    <div>
      <h1>India Map</h1>
      <StateMap state='Karnataka' />
    </div>
  );
}

export default Page;
