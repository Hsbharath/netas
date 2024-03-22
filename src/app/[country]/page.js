// Import the Country component from the correct path
import Country from '@/ui/country';
import ParlimentMap from '@/ui/parlimentMap';

// Define the Page component
export default function Page() {
  return (
    <div className='w-full md:h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto bg-sky-400/30'>
        <div className='w-full h-full'>
          {/* Render the Country component */}
          <Country />
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 md:h-full flex items-center justify-center mx-auto'>
        {/* <hgroup className='flex flex-col items-center justify-center space-y-6'>
          <h4 className='text-2xl md:text-8xl font-semibold'>India</h4>
          <p className='text-xl md:text-2xl font-semibold'>
            Lok Sabha Elections
          </p>
          <h4 className='text-2xl md:text-4xl font-semibold'>2024</h4>
        </hgroup> */}
        <ParlimentMap level={'country'} />
      </div>
    </div>
  );
}
