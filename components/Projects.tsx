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
      images: ['/WEB1.png','/WEB2.png','/WEB4.png','/WEB5.png','/WEB6.png','/WEB7.png','/WEB8.png','/WEB9.png'],
    },
    {
      id: 2,
      title: 'Bataan Pet Hub Veterinary Clinic System',
      description:
        'A web system for managing veterinary appointments, pet records, and clinic operations.',
      images: ['/Bat1.png','/Bat3.png','/Bat4.png','/Bat5.png','/Bat6.png','/Bat7.png'],
    },
    {
      id: 3,
      title: 'JC Photography Studio Portfolio and Booking System',
      description:
        'A photography studio portfolio and booking system for clients and events.',
      images: ['/JC1.png','/JC2.png','/JC3.png','/jc4.png','/JC5.png'],
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
      <section className="pt-28 px-8 pb-16">
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-6 pt-4 pb-6">
          <h2 className="text-4xl font-extrabold text-[#ff6a00] mb-8 text-center">
            My Projects
          </h2>
        </div>

        {/* Projects Carousel Container */}
        <div className="flex gap-6 justify-center flex-wrap relative z-20">
          {projects.map((project) => {
            const index = currentIndex[project.id] ?? 0;
            return (
              <motion.div
                key={project.id}
                className="flex flex-col items-center justify-center w-[32%] bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg relative overflow-hidden hover:scale-[1.02] transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-gray-500/40 group-hover:border-orange-500/80 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.6)] transition-all duration-500"></div>

                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6a00] to-[#ff9e42] bg-clip-text text-transparent text-center relative z-10">
                  {project.title}
                </h3>
                <p className="text-center text-gray-300 text-sm mt-2 mb-4 relative z-10">
                  {project.description}
                </p>

                {/* Carousel */}
                <div className="relative w-full h-[28rem] flex items-center justify-center overflow-hidden z-10">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {project.images.map((img, i) => (
                      <div
                        key={i}
                        className="w-full flex-shrink-0 relative cursor-zoom-in"
                        onClick={() => setZoomState({ projectId: project.id, index: i })}
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${i + 1}`}
                          className="w-full h-[28rem] object-contain rounded-xl shadow-lg"
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors rounded-xl pointer-events-none"></div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-orange-500/20 backdrop-blur-md text-white text-3xl shadow-lg hover:bg-orange-500/40 hover:scale-110 transition-all duration-300 z-20"
                    onClick={() =>
                      handlePrev(project.id, project.images.length)
                    }
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-orange-500/20 backdrop-blur-md text-white text-3xl shadow-lg hover:bg-orange-500/40 hover:scale-110 transition-all duration-300 z-20"
                    onClick={() =>
                      handleNext(project.id, project.images.length)
                    }
                  >
                    ›
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Zoom Modal */}
      {zoomState && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80">
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Prev button */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-orange-500/30 backdrop-blur-md text-white text-3xl shadow-lg hover:bg-orange-500/60 hover:scale-110 transition-all"
              onClick={handleZoomPrev}
            >
              ‹
            </button>

            {/* Image */}
            <img
              src={
                projects.find((p) => p.id === zoomState.projectId)?.images[
                  zoomState.index
                ]
              }
              alt="Zoomed"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />

            {/* Next button */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-orange-500/30 backdrop-blur-md text-white text-3xl shadow-lg hover:bg-orange-500/60 hover:scale-110 transition-all"
              onClick={handleZoomNext}
            >
              ›
            </button>
          </div>

          {/* Close + Open full size */}
          <div className="mt-6 flex gap-4">
            <button
              className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
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
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Open Full Size
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
