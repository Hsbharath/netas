import India from '@/ui/india';
export default function Page() {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row items-center justify-center gap-2'>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto'>
        <India />
      </div>
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto'>
        <hgroup className='flex flex-col items-center justify-center space-y-6'>
          <h4 className='text-2xl md:text-8xl font-semibold'>India</h4>
          <p className='text-xl md:text-2xl font-semibold'>
            Lok Sabha Elections
          </p>
          <h4 className='text-2xl md:text-4xl font-semibold'>2024</h4>
        </hgroup>
      </div>
    </div>
  );
}
