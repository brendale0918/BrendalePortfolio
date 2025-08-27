// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans text-[#f2f2f2] bg-[#0d0d0d] scroll-smooth`}>
        {children} {/* The pages themselves handle navbar and effects */}
      </body>
    </html>
  );
}
