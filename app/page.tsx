// app/page.tsx
'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Page() {
  useEffect(() => {
    if (window.location.hash === '') {
      window.location.replace('#home');
    }

    const main = document.querySelector("main"); // 👈 scroll container
    const sections = document.querySelectorAll("section");

    if (!main) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      {
        root: main,
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Brendale De Leon | Portfolio</title>
        <meta
          name="description"
          content="Portfolio website built with Next.js and Tailwind CSS"
        />
      </Head>

      <Navbar />

      <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section id="home" className="snap-start h-screen">
          <Home />
        </section>

        <section id="about" className="snap-start min-h-screen">
          <About />
        </section>

        <section id="skills" className="snap-start min-h-screen">
          <Skills />
        </section>

        <section id="projects" className="snap-start min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="snap-start min-h-screen">
          <Contact />
        </section>
      </main>
    </>
  );
}
