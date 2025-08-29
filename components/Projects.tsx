'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';

export default function Projects() {
  const [zoomState, setZoomState] = useState<{ projectId: number; index: number } | null>(null);
  const [currentIndex, setCurrentIndex] = useState<Record<number, number>>({});

  const projects = [
    {
      id: 1,
      title: 'Online Community for Bartenders with Weighted Average Algorithm',
      description:
        'A collaborative alcohol party planning system using Weighted Average Algorithm for recommendations.',
      images: ['/projects/WEB1.png','/projects/WEB2.png','/projects/WEB4.png','/projects/WEB5.png','/projects/WEB6.png','/projects/WEB7.png','/projects/WEB8.png','/projects/WEB9.png'],
      demoLink: "https://taberna-concur.vercel.app/sign-in",
      githubLink: "https://github.com/SwynnBliz/taberna-concur"
    },

    {
      id: 2,
      title: 'Bataan Pet Hub Veterinary Clinic System',
      description:
        'A web system for managing veterinary appointments, pet records, and clinic operations.',
      images: ['/projects/Bat1.png','/projects/Bat3.png','/projects/Bat4.png','/projects/Bat5.png','/projects/Bat6.png','/projects/Bat7.png'],
    },
    {
      id: 3,
      title: 'JC Photography Studio Portfolio and Booking System',
      description:
        'A photography studio portfolio and booking system for clients and events.',
      images: ['/projects/JC1.png','/projects/JC2.png','/projects/JC3.png','/projects/jc4.png','/projects/JC5.png'],
    },
  ];

  const handleNext = (projectId: number, length: number) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] ?? 0) + 1 >= length
          ? 0
          : (prev[projectId] ?? 0) + 1,
    }));
  };

  const handlePrev = (projectId: number, length: number) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] ?? 0) - 1 < 0
          ? length - 1
          : (prev[projectId] ?? 0) - 1,
    }));
  };

  

  const handleZoomNext = () => {
    if (!zoomState) return;
    const project = projects.find((p) => p.id === zoomState.projectId);
    if (!project) return;
    const nextIndex = (zoomState.index + 1) % project.images.length;
    setZoomState({ projectId: zoomState.projectId, index: nextIndex });
  };
  
    const handleDotClick = (projectId: number, dotIndex: number) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [projectId]: dotIndex, // ✅ set the current image index directly
    }));
  };


  const handleZoomPrev = () => {
    if (!zoomState) return;
    const project = projects.find((p) => p.id === zoomState.projectId);
    if (!project) return;
    const prevIndex =
      (zoomState.index - 1 + project.images.length) % project.images.length;
    setZoomState({ projectId: zoomState.projectId, index: prevIndex });
  };

return (
  <div className="relative min-h-screen w-full bg-gradient-to-b from-[#1a1a1a] to-black">
    {/* Navbar fixed at the top */}
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#1a1a1a]/95 to-black/80 backdrop-blur-md">
      <Navbar />
    </div>

    {/* Main Content */}
    <section className="pt-28 px-4 sm:px-6 lg:px-8 pb-20">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto pt-4 pb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6a00] to-[#ff9e42]">
            My Projects
          </span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20 max-w-7xl mx-auto">
        {projects.map((project) => {
          const index = currentIndex[project.id] ?? 0;
          return (
            <motion.div
              key={project.id}
              className="group flex flex-col items-center justify-between bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,106,0,0.4)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#ff6a00] to-[#ff9e42] bg-clip-text text-transparent text-center">
                {project.title}
              </h3>
              <p className="text-center text-gray-300 text-sm mt-2 mb-4">
                {project.description}
              </p>

              {/* Carousel */}
              <div className="relative w-full h-[16rem] sm:h-[20rem] md:h-[22rem] overflow-hidden rounded-xl">
                <motion.div
                  className="flex w-full h-full"
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 25 }}
                >
                  {project.images.map((img, i) => (
                    <motion.div
                      key={i}
                      className="w-full flex-shrink-0 relative cursor-zoom-in"
                      onClick={() => setZoomState({ projectId: project.id, index: i })}
                      initial={{ opacity: 0.6, scale: 0.95 }}
                      animate={{
                        opacity: i === index ? 1 : 0.6,
                        scale: i === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        className="w-full h-[16rem] sm:h-[20rem] md:h-[22rem] object-contain rounded-xl border border-white/10 shadow-lg group-hover:scale-[1.02] transition-transform"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all rounded-xl"></div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Prev Button */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#ff6a00]/40 backdrop-blur-md text-white text-2xl sm:text-3xl shadow-lg hover:bg-[#ff6a00]/70 transition-all"
                  onClick={() => handlePrev(project.id, project.images.length)}
                >
                  ‹
                </motion.button>

                {/* Next Button */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#ff6a00]/40 backdrop-blur-md text-white text-2xl sm:text-3xl shadow-lg hover:bg-[#ff6a00]/70 transition-all"
                  onClick={() => handleNext(project.id, project.images.length)}
                >
                  ›
                </motion.button>

                {/* Carousel Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className={`w-3 h-3 rounded-full cursor-pointer ${
                        dotIndex === index ? "bg-[#ff6a00]" : "bg-gray-400/50"
                      }`}
                      onClick={() => handleDotClick(project.id, dotIndex)}
                      animate={{
                        scale: dotIndex === index ? [1, 1.3, 1] : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: dotIndex === index ? Infinity : 0,
                        repeatType: "mirror",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href={project.demoLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#ff6a00] text-white font-medium hover:bg-[#ff3b1d] shadow-md hover:shadow-lg transition"
                >
                  View Demo
                </a>
                <a
                  href={project.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-[#ff6a00] text-[#ff6a00] font-medium hover:bg-[#ff6a00] hover:text-white shadow-md hover:shadow-lg transition"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Zoom Modal */}
    {zoomState && (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80">
        <div className="relative flex items-center justify-center w-full h-full px-4">
          {/* Prev button */}
          <button
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#ff6a00]/40 backdrop-blur-md text-white text-2xl sm:text-3xl shadow-lg hover:bg-[#ff6a00]/70 hover:scale-110 transition-all"
            onClick={handleZoomPrev}
          >
            ‹
          </button>

          {/* Image */}
          <motion.img
            src={
              projects.find((p) => p.id === zoomState.projectId)?.images[
                zoomState.index
              ]
            }
            alt="Zoomed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-h-[75vh] sm:max-h-[85vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
          />

          {/* Next button */}
          <button
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#ff6a00]/40 backdrop-blur-md text-white text-2xl sm:text-3xl shadow-lg hover:bg-[#ff6a00]/70 hover:scale-110 transition-all"
            onClick={handleZoomNext}
          >
            ›
          </button>
        </div>

        {/* Close + Open full size */}
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <button
            className="px-5 py-2 bg-[#ff6a00] text-white font-semibold rounded-lg shadow hover:bg-[#ff3b1d] transition"
            onClick={() => setZoomState(null)}
          >
            Close
          </button>
          <a
            href={
              projects.find((p) => p.id === zoomState.projectId)?.images[
                zoomState.index
              ]
            }
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
          >
            Open Full Size
          </a>
        </div>
      </div>
    )}
  </div>
);


}
