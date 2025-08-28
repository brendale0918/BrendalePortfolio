'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';
import LogoLoop from '../components/LogoLoop/LogoLoop';
import { Baloo_2 } from 'next/font/google';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPhp,
  SiSharp,
  SiDotnet,
  SiFirebase,
  SiGmail,
  SiJirasoftware,
  SiVercel,
  SiOpenai,
  SiApache,
} from "react-icons/si";

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Tech logos for the LogoLoop
const techLogos = [
  { node: <SiGmail className="text-[#EA4335]" />, title: "Gmail", href: "https://mail.google.com" },
  { node: <SiJirasoftware className="text-[#0052CC]" />, title: "Jira", href: "https://www.atlassian.com/software/jira" },
  { node: <SiMysql className="text-[#4479A1]" />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiPhp className="text-[#777BB4]" />, title: "PHP", href: "https://www.php.net" },
  { node: <SiReact className="text-[#61DBFB]" />, title: "React", href: "https://react.dev" },
  { node: <SiSharp className="text-[#239120]" />, title: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { node: <SiDotnet className="text-[#512BD4]" />, title: ".NET", href: "https://dotnet.microsoft.com/" },
  { node: <SiNextdotjs className="text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiVercel className="text-white" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiOpenai className="text-[#10A37F]" />, title: "ChatGPT", href: "https://openai.com/chatgpt" },
  { node: <SiTypescript className="text-[#3178C6]" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-[#38BDF8]" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiApache className="text-[#D22128]" />, title: "XAMPP", href: "https://www.apachefriends.org" },
];

// Data
const languages = [
  { name: 'HTML5', icon: '/html5.png', percent: 90 },
  { name: 'CSS3', icon: '/css-3.png', percent: 85 },
  { name: 'JavaScript', icon: '/javascript.png', percent: 80 },
  { name: 'React', icon: '/react.png', percent: 80 },
  { name: 'PHP', icon: '/php.png', percent: 80 },
  { name: 'C# .NET', icon: '/c.png', percent: 65 },
  { name: 'Next.js', icon: '/nextjs.png', percent: 70 },
  { name: 'TypeScript', icon: '/typescript.png', percent: 80 },
];

const tools = [
  { name: 'Git', icon: '/Github.png', percent: 80 },
  { name: 'VS Code', icon: '/Vscode.png', percent: 95 },
  { name: 'Microsoft Visual Studio', icon: '/Microsoft.png', percent: 80 },
];

const databases = [
  { name: 'Xampp', icon: '/Xampp.png', percent: 85 },
  { name: 'MySQL', icon: '/MySql.png', percent: 85 },
  { name: 'Firebase', icon: '/Firebase.png', percent: 85 },
];

// Render category cards
const renderCategoryCard = (
  title: string,
  items: { name: string; icon: string; percent: number }[]
) => (
  <motion.div
    key={title}
    className="p-5 sm:p-6 bg-[#242323] border border-[#ff6a00] rounded-2xl shadow-md 
               hover:shadow-[0_0_30px_#ff5722] transition-all duration-300 w-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#ffa94d] mb-4 text-center">
      {title}
    </h3>
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
      {items.map(item => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-2 w-16 sm:w-20 md:w-24"
        >
          {/* Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
            <Image
              src={item.icon}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Name */}
          <p className="text-white text-center text-[10px] sm:text-xs md:text-sm">
            {item.name}
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <motion.div
              className="bg-[#ff6a00] h-2 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.percent}%` }}
              transition={{ duration: 1.2 }}
            />
          </div>

          {/* Percentage */}
          <p className="text-[9px] sm:text-[11px] md:text-xs text-[#ffa94d] font-semibold">
            {item.percent}%
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-[#111111] snap-start overflow-hidden"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 md:py-20">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#ff6a00] mb-8 md:mb-12 text-center">
          My Skills
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {renderCategoryCard('Languages & Frameworks', languages)}
          {renderCategoryCard('Tools', tools)}
          {renderCategoryCard('Databases', databases)}
        </div>

        {/* Tech Logos Loop */}
        <div className="relative z-10 text-center py-10 px-4 md:px-20 -mt-2">
          <h3
            className={`text-xl sm:text-2xl md:text-4xl font-extrabold mb-6 md:mb-8 text-gradient ${baloo.className}`}
          >
            Skills & Tools I am familiar with
          </h3>

          <div className="max-w-4xl mx-auto h-[80px] xs:h-[85px] sm:h-[95px] md:h-[110px] relative overflow-hidden flex items-center">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={32} // slightly smaller so it fits neatly
            gap={25}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#0d0d0d"
            ariaLabel="Technologies I use"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
