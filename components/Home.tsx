'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Baloo_2 } from 'next/font/google';
import BlurText from '../components/TextAnimation/BlurText ';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import TextType from './TypeText/TextType';
import Navbar from './Navbar';
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaViber } from 'react-icons/fa';

const baloo = Baloo_2({ subsets: ['latin'], weight: '700' });

const SplashCursor = dynamic(() => import('./Animations/SplashCursor'), { ssr: false });
const Lightning = dynamic(() => import('./background/Lightning'), { ssr: false });

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden 
                 bg-gradient-to-b from-black via-gray-900 to-black snap-start"
    >
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning hue={25} speed={1} intensity={1} size={1} />
      </div>

      <SplashCursor />

    {/* HOME SECTION */}
<div
  id="home"
  className="relative z-10 flex flex-col-reverse md:flex-row items-center 
             justify-between px-6 sm:px-10 pt-24 sm:pt-32 pb-32 sm:pb-40 md:pb-48 
             max-w-7xl mx-auto gap-12 min-h-screen md:min-h-[90vh]"
>
  {/* LEFT TEXT */}
  <motion.div
    className="text-center md:text-left max-w-xl w-full"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
      <BlurText text="Hi, I'm Brendale De Leon" className="text-[#ff6a00]" />
    </h1>

    <h2 className={`text-base sm:text-lg md:text-2xl text-[#ff6a00] mb-6 ${baloo.className}`}>
      Aspiring Software Engineer
    </h2>

    <div className="text-gray-300 text-sm sm:text-base md:text-lg mb-6">
      <TextType
        text={[
          'I create beautiful, functional, and user-friendly digital experiences.',
          'Passionate about turning ideas into reality through clean code.',
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="|"
        loop={true}
      />
    </div>

    {/* Social Icons */}
    <div className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-8 text-xl sm:text-2xl">
      {[
        { icon: <FaLinkedin />, link: 'https://linkedin.com/in/brendale-deleon-4413b3323/' },
        { icon: <FaGithub />, link: 'https://github.com/brendale0918' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/brndleon_/' },
        { icon: <FaTiktok />, link: 'https://www.tiktok.com/@brendale9999' },
      ].map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full 
                     bg-white/10 hover:bg-[#ff6a00] hover:text-white transition-all duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6">
      <a
        href="/De Leon, Brendale Resume.pdf"
        download
        className="w-full sm:w-auto bg-[#ff5722] text-white px-6 py-3 rounded-xl font-medium 
                   hover:bg-[#ff784e] shadow-lg transition-all duration-300 text-center"
      >
        Download CV
      </a>
      <a
        href="#contact"
        className="w-full sm:w-auto border border-[#ff5722] text-[#ff5722] px-6 py-3 
                   rounded-xl font-medium hover:bg-[#ff5722] hover:text-white hover:shadow-lg 
                   transition-all duration-300 text-center"
      >
        Contact
      </a>
    </div>
  </motion.div>

  {/* RIGHT PROFILE CARD */}
  <motion.div
    className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <ProfileCard
      handle="brndleon"
      status="Online"
      contactText="Contact Me"
      avatarUrl="/Brendale.jpg"
      showUserInfo
      enableTilt
      enableMobileTilt={true}
      onContactClick={() =>
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      }
    />
  </motion.div>
</div>


    </section>
  );
}
