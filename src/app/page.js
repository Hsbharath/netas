import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between p-24 overflow-hidden'>
      <Link href='/india'>India</Link>
    </main>
  );
}
