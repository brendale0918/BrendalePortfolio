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
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black snap-start"
    >
      <Navbar />

      {/* BACKGROUND only inside Home */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Lightning hue={25} speed={1} intensity={1} size={1} />
      </div>

      <SplashCursor />

      {/* ✅ Content centered better */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between 
                      px-10 pt-32 pb-20 max-w-7xl mx-auto gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          className="text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            <BlurText
              text="Hi, I'm Brendale De Leon"
              delay={450}
              animateBy="words"
              direction="top"
              className="text-[#ff6a00]"
            />
          </h1>

          <h2 className={`text-xl md:text-2xl text-[#ff6a00] mb-6 ${baloo.className}`}>
            Aspiring Software Engineer
          </h2>

          <div className="text-white text-lg md:text-xl mb-6">
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

          {/* Social Links */}
          <div className="flex gap-6 mb-8 text-3xl text-white">
            {[
              { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/brendale-deleon-4413b3323/' },
              { icon: <FaGithub />, link: 'https://github.com/brendale0918' },
              { icon: <FaViber />, link: 'viber://chat?number=09218725324' },
              { icon: <FaInstagram />, link: 'https://www.instagram.com/brndleon_/' },
              { icon: <FaTiktok />, link: 'https://www.tiktok.com/@brendale9999?_t=ZS-8z7AasjBF4L&_r=1' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform transform hover:scale-125"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-5 flex-wrap">
            <a
              href="/De Leon, Brendale Resume.pdf"
              download
              className="bg-[#ff5722] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#ff784e] hover:shadow-lg transition-all duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="border border-[#ff5722] text-[#ff5722] px-6 py-3 rounded-xl font-medium hover:bg-[#ff5722] hover:text-white hover:shadow-lg transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
       {/* RIGHT SIDE PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ProfileCard
            name=""
            title=""
            handle="brndleon"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/Brendale.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </motion.div>

      </div>
    </section>
  );
}
