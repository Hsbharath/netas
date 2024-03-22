import StateMap from '@/ui/state';
export default function Page() {
  return (
    <div className='w-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-2 overflow-hidden'>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center bg-red-400'>
        <div>
          <StateMap />
        </div>
      </div>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto bg-white'></div>
    </div>
    // <div className='w-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-2 overflow-hidden'>
    //   <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto bg-yellow-400'>
    //     <div>
    //       <Country />
    //     </div>
    //   </div>
    //   <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto'>
    //     <hgroup className='flex flex-col items-center justify-center space-y-6'>
    //       <h4 className='text-2xl md:text-8xl font-semibold'>India</h4>
    //       <p className='text-xl md:text-2xl font-semibold'>
    //         Lok Sabha Elections
    //       </p>
    //       <h4 className='text-2xl md:text-4xl font-semibold'>2024</h4>
    //     </hgroup>
    //   </div>
    // </div>
  );
}
