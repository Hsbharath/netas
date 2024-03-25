import { Inter, Merriweather_Sans } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const ma = Merriweather_Sans({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${ma.className} antialised`}>{children}</body>
    </html>
  );
}
