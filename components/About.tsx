'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Baloo_2 } from 'next/font/google';
import Navbar from './Navbar';


const baloo = Baloo_2({ subsets: ['latin'], weight: '700' });

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
};

const certificates: Certificate[] = [
  {
    title: 'IC3 Digital Literacy Certification – GS6',
    issuer: 'Certiport',
    date: 'May 2024',
    category: 'Digital Literacy',
    image: '/certs/ic3.png',
  },
  {
    title: 'IT Specialist – Software Development',
    issuer: 'Certiport',
    date: 'Dec 2024',
    category: 'Software Development',
    image: '/certs/software-dev.png',
  },
  {
    title: 'IT Specialist – Computational Thinking',
    issuer: 'Certiport',
    date: 'Dec 2024',
    category: 'Computational Thinking',
    image: '/certs/computational-thinking.png',
  },
  {
    title: 'Microsoft Office Specialist: Word Associate',
    issuer: 'Microsoft',
    date: 'Mar 2025',
    category: 'Office Tools',
    image: '/certs/word.png',
  },
  {
    title: 'Microsoft Office Specialist: Excel Associate',
    issuer: 'Microsoft',
    date: 'Apr 2025',
    category: 'Office Tools',
    image: '/certs/excel.png',
  },
  {
    title: 'Microsoft Office Specialist: PowerPoint Associate',
    issuer: 'Microsoft',
    date: 'May 2025',
    category: 'Office Tools',
    image: '/certs/powerpoint.png',
  },
  {
    title: 'Microsoft Office Specialist: Associate (Microsoft 365 Apps)',
    issuer: 'Microsoft',
    date: 'May 2025',
    category: 'Office Tools',
    image: '/certs/microsoft-associate.png',
  },
];

export default function About() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] snap-start overflow-hidden pt-28 pb-20"
    >
      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-[#ff6a00]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-[#ff5722]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      {/* About Me */}
<div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between 
                px-6 md:px-20 py-16 md:py-24 gap-12 max-w-7xl mx-auto">
  {/* Picture */}
  <motion.div
    className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[420px] md:h-[520px] rounded-3xl overflow-hidden 
               border-4 border-[#ff6a00] shadow-[0_0_40px_#ff5722aa] group mx-auto md:mx-0"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    whileHover={{ scale: 1.05 }}
  >
    <Image
      src="/BrendaleD.jpg"
      alt="Brendale De Leon"
      fill
      className="rounded-3xl object-cover transition-transform duration-500 group-hover:scale-110"
    />
    {/* Gradient overlay */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-tr from-[#ff6a00]/40 via-transparent to-[#ff784e]/30 
                 mix-blend-overlay pointer-events-none"
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    />
    {/* Glow border */}
    <div className="absolute -inset-2 rounded-3xl border-2 border-[#ff6a00]/40 blur-md"></div>
  </motion.div>

  {/* Text */}
  <motion.div
    className="flex-1 text-center md:text-left text-white"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className={`text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-gradient ${baloo.className}`}>
      About Me
    </h2>

    <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
      Hi! I&apos;m <span className="text-[#ff6a00] font-semibold">Brendale De Leon</span>, an aspiring web
      developer passionate about building{' '}
      <span className="text-[#ff784e] font-medium">modern, responsive, and user-friendly web applications</span>.
    </p>

    <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
      I specialize in <span className="text-[#ff6a00] font-medium">Next.js, React.js, and Tailwind CSS</span>, and I’m
      always learning to stay up-to-date with web trends.
    </p>

    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
      Outside coding, I enjoy singing at church and exploring creative ways to combine{' '}
      <span className="text-[#ff784e] font-medium">design and functionality</span>.
    </p>
  </motion.div>
</div>

{/* Internship + Academic */}
<div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 py-16 md:py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
    {/* Internship */}
    <motion.div
      className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#ff6a00]/40 
                 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_#ff572255] hover:shadow-[0_0_50px_#ff5722aa] 
                 transition-all duration-500"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 text-center sm:text-left">
        <div>
          <h3 className={`text-2xl sm:text-3xl font-bold text-[#ff6a00] mb-2 ${baloo.className}`}>
            Internship Experience
          </h3>
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
            Business Application Developer Intern
          </h4>
          <p className="text-[#ff784e] font-medium">Noah Business Application</p>
        </div>
        <span className="text-sm text-gray-400 mt-2 sm:mt-0">Sept 2024 – Oct 2024</span>
      </div>

      <ul className="list-disc list-inside space-y-3 text-gray-300 text-base sm:text-lg text-left">
        <li>Executed <span className="font-medium text-white">Business Rules Testing</span> specs.</li>
        <li>Performed <span className="font-medium text-white">manual testing</span> with docs.</li>
        <li>Reviewed <span className="font-medium text-white">test documentation</span> to improve QA.</li>
        <li>Collaborated with <span className="font-medium text-white">QA & Dev teams</span>.</li>
        <li>Assisted in verifying <span className="font-medium text-white">new features</span>.</li>
      </ul>
    </motion.div>

    {/* Academic */}
    <motion.div
      className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#ff6a00]/40 
                 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_#ff572255] hover:shadow-[0_0_50px_#ff5722aa] 
                 transition-all duration-500 text-center sm:text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h3 className={`text-2xl sm:text-3xl font-bold text-[#ff6a00] mb-4 ${baloo.className}`}>
        Academic Excellence
      </h3>
      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
        Recognized as a consistent <span className="text-[#ff784e] font-semibold">Dean’s Lister</span> 
        <span className="text-white"> from 1st Year, 2nd Semester</span> up to <span className="text-white">4th Year</span>.
      </p>
    </motion.div>
  </div>
</div>

{/* Certifications */}
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 pb-16 md:pb-24">
  <h3 className={`text-3xl sm:text-4xl font-bold text-center text-[#ff6a00] mb-8 md:mb-12 ${baloo.className}`}>
    Certifications & Training
  </h3>
  <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
    Professional certifications and specialized training that demonstrate my commitment to continuous learning.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
    {certificates.map((cert, index) => (
      <motion.div
        key={index}
        className="bg-[#242323] border border-[#ff6a00] rounded-2xl shadow-md p-6 flex flex-col 
                   justify-between hover:shadow-[0_0_30px_#ff5722] transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        <div className="w-full h-32 sm:h-40 relative mb-4">
          <Image src={cert.image} alt={cert.title} fill className="rounded-lg object-contain bg-black/20" />
        </div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{cert.title}</h4>
          <p className="text-xs sm:text-sm text-gray-400">{cert.issuer} | {cert.date}</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-[#ff6a00]/20 text-[#ff6a00] rounded-full">
            {cert.category}
          </span>
        </div>
        <button
          onClick={() => setSelectedCert(cert)}
          className="mt-6 px-4 py-2 bg-[#ff6a00] text-white rounded-lg font-medium 
                     hover:bg-[#ff5722] transition w-full sm:w-auto"
        >
          View
        </button>
      </motion.div>
    ))}
  </div>
</div>

{/* Modal */}
{selectedCert && (
  <motion.div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <motion.div
      className="bg-[#1a1a1a] rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-lg sm:max-w-2xl relative"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <button
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-lg sm:text-xl hover:text-[#ff6a00]"
        onClick={() => setSelectedCert(null)}
      >
        ✕
      </button>
      <h4 className="text-lg sm:text-2xl font-bold text-[#ff6a00] mb-4">{selectedCert.title}</h4>
      <p className="text-gray-300 mb-2 text-sm sm:text-base">{selectedCert.issuer} | {selectedCert.date}</p>
      <Image
        src={selectedCert.image}
        alt={selectedCert.title}
        width={600}
        height={400}
        className="rounded-lg object-contain mx-auto"
      />
    </motion.div>
  </motion.div>
)}

    </section>
  );
}
