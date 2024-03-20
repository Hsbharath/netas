import StateMap from '@/ui/state';
export default function Page() {
  return (
    <div className='w-full md:h-screen flex flex-col md:flex-row items-center justify-center'>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center'>
        <StateMap />
      </div>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto'></div>
    </div>
  );
}
