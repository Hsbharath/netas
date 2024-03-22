import StateMap from '@/ui/state';
export default function Page() {
  return (
    <div className='w-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-2 overflow-hidden'>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center'>
        <div className='w-full h-full'>
          <StateMap />
        </div>
      </div>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto bg-white'></div>
    </div>
  );
}
