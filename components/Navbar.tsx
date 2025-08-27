'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({ subsets: ['latin'], weight: '700' });

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-md border-b border-white/10">
      <div className="px-3 py-3 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Image 
            src="/LOGO BREND.png"
            alt="Logo"
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <div className={`${baloo.className} text-3xl text-[#ff6a00]`}>
            Brendale De Leon
          </div>
        </div>
        <div className={`flex gap-8 text-gray-200 text-lg tracking-wide ${baloo.className}`}>
          {["Home","About","Skills","Projects","Contact"].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative hover:text-[#ff6a00] transition 
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 
                         after:w-0 after:h-[2px] after:bg-[#ff6a00] after:transition-all hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
