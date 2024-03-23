import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-start justify-start p-24 overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        <Link href='/india'>India</Link>
        <Link href='/usa'>USA</Link>
        <Link href='/japan'>Japan</Link>
        <Link href='/australia'>Australia</Link>
      </div>
    </main>
  );
}
