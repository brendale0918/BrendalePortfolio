"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
  } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    emailjs
      .sendForm(
        "service_51niazd",
        "template_o51d202",
        formRef.current,
        "fWC24jZuIKWxpOyRU"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          setSubmittedData({ name, email });
          formRef.current?.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-[#0a0a0a] to-black snap-start overflow-hidden">
      <Navbar />

     {/* Animated background blobs */}
<motion.div
  animate={{ opacity: [0.1, 0.25, 0.1], y: [0, 40, 0] }}
  transition={{ repeat: Infinity, duration: 12 }}
  className="absolute top-10 left-4 sm:top-20 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-gray-600 rounded-full blur-3xl"
/>
<motion.div
  animate={{ opacity: [0.1, 0.25, 0.1], y: [0, -50, 0] }}
  transition={{ repeat: Infinity, duration: 14 }}
  className="absolute bottom-10 right-4 sm:bottom-20 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-gray-800 rounded-full blur-3xl"
/>

{/* Contact Section */}
<section
  id="contact"
  className="px-4 sm:px-6 lg:px-8 py-16 pt-28 flex justify-center relative z-10 flex-grow"
>
  <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
    {/* Subtle glowing border */}
    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 opacity-20 animate-pulse"></div>

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-gray-300 to-[#ff6a00] bg-clip-text text-transparent mb-8 relative z-10"
    >
      Let’s Connect ✨
    </motion.h2>

    {/* Form */}
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="space-y-6 relative z-10"
    >
      {/* Name */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#ff6a00]"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-2 block w-full rounded-lg border border-gray-700 bg-black/40 text-white px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-700/40 transition"
        />
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[#ff6a00]"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-2 block w-full rounded-lg border border-gray-700 bg-black/40 text-white px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-700/40 transition"
        />
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#ff6a00]"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-2 block w-full rounded-lg border border-gray-700 bg-black/40 text-white px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:shadow-lg hover:shadow-gray-700/40 transition"
        ></textarea>
      </motion.div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 25px #555" }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 text-[#ff6a00] font-semibold py-2 sm:py-3 transition duration-300 shadow-lg disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </motion.button>
    </form>

    {/* Status Message */}
    {status && (
      <p className="text-center text-sm mt-4 text-gray-300">{status}</p>
    )}

    {/* Show Submitted Info */}
    {submittedData && (
      <div className="mt-6 p-4 rounded-lg bg-black/30 border border-gray-600 text-gray-200 text-center relative z-10 text-sm sm:text-base">
        <p>
          <span className="text-gray-300 font-bold">
            {submittedData.name}
          </span>{" "}
          ({submittedData.email}) has contacted you 🎉
        </p>
      </div>
    )}

    {/* Social Links */}
    <div className="flex flex-wrap justify-center gap-6 mt-8 relative z-10">
      <a
        href="mailto:example@email.com"
        className="text-gray-400 hover:text-gray-200 text-xl sm:text-2xl transition"
      >
        <FaEnvelope />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        className="text-gray-400 hover:text-gray-200 text-xl sm:text-2xl transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        className="text-gray-400 hover:text-gray-200 text-xl sm:text-2xl transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="text-gray-400 hover:text-gray-200 text-xl sm:text-2xl transition"
      >
        <FaTwitter />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        className="text-gray-400 hover:text-gray-200 text-xl sm:text-2xl transition"
      >
        <FaFacebook />
      </a>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="relative bottom-0 left-0 w-full text-center py-6 sm:py-8 border-t border-gray-800 bg-gradient-to-r from-black/80 via-gray-900 to-black/80">
  <p className="text-xs sm:text-sm text-gray-400 flex flex-wrap items-center justify-center gap-2">
    © {new Date().getFullYear()}{" "}
    <span className="font-semibold bg-gradient-to-r from-[#ff6a00] via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
      Brendale De Leon
    </span>
  </p>

  <p className="mt-2 text-gray-500 text-[10px] sm:text-xs">
    Built with passion and dedication
  </p>
</footer>
</div>

  );
}
