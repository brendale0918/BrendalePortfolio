'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Baloo_2 } from 'next/font/google';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // for hamburger icons

const baloo = Baloo_2({ subsets: ['latin'], weight: '700' });

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/50 backdrop-blur-md border-b border-white/10">
      <div className="px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <Image 
            src="/LOGO BREND.png"
            alt="Logo"
            width={50} 
            height={50} 
            className="rounded-full"
          />
          <div className={`${baloo.className} text-2xl md:text-3xl text-[#ff6a00]`}>
            Brendale De Leon
          </div>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 text-gray-200 text-lg tracking-wide ${baloo.className}`}>
          {navItems.map((item) => (
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`md:hidden bg-gray-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-6 text-lg text-gray-200 ${baloo.className}`}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)} // close on click
              className="hover:text-[#ff6a00] transition"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
