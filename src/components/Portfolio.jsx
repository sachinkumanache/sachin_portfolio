import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiDownload,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const projects = [
    {
      title: "E-Commerce multi-vender",
      desc: "e-commerce with authentication, cart, and payments.",
      tech: ["JavaScript", "HTML", "CSS", "Firebase"],
      img: "/e-comm-project.png",
      github: "https://github.com/sachinkumanache/Ecommerce_Web",
      live: "https://charming-moonbeam-632fe7.netlify.app/",
    },
    {
      title: "Career Counselling",
      desc: "Discover career paths, book counselling sessions, track progress, and receive tailored recommendations.",
      tech: ["React", "CSS", "Firebase"],
      img: "/career-counselling-project.png",
      github: "https://github.com/sachinkumanache/careerCounseling",
      live: "https://peppy-dolphin-e49bbb.netlify.app/",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xrbongqd", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      } transition-colors duration-500`}
    >
      {/* NAVBAR */}
      <header
        className={`fixed w-full z-50 backdrop-blur border-b ${
          theme === "dark" ? "bg-gray-800/70 border-gray-700" : "bg-white/70"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold">
              S
            </div>
            <a href="#home" className="font-semibold text-lg">
              Sachin
            </a>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 border rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>

            <a
              href="https://drive.google.com/file/d/1xl2rfnYNN2OdSebpskabxeg7QzGnXJfn/view?usp=sharing"
              download
              className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded shadow-sm hover:opacity-95"
            >
              <FiDownload /> Resume
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: open ? "auto" : 0 }}
          className={`md:hidden overflow-hidden border-t ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white/80"
          }`}
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#skills" onClick={() => setOpen(false)}>
              Skills
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="mt-2 flex items-center gap-2"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
            <a
              href="https://drive.google.com/file/d/1xl2rfnYNN2OdSebpskabxeg7QzGnXJfn/view?usp=sharing"
              download
              className="flex items-center gap-2 mt-2"
            >
              <FiDownload /> Resume
            </a>
          </div>
        </motion.nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-24">
        {/* HERO */}
        <section id="home" className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                I'm Sachin — Frontend Developer
              </h1>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                I create efficient, responsive, and user-focused web
                applications using React, Node.js, and modern design tools.
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href="#projects"
                  className="rounded-md px-4 py-2 bg-indigo-600 text-white inline-flex items-center gap-2 shadow"
                >
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/1xl2rfnYNN2OdSebpskabxeg7QzGnXJfn/view?usp=sharing"
                  download
                  className="rounded-md px-4 py-2 border inline-flex items-center gap-2"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end"
            >
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/sachin-profile.png"
                  alt="Sachin profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {[
              {
                name: "HTML5",
                icon: <FaHtml5 className="text-orange-500 text-4xl" />,
              },
              {
                name: "CSS3",
                icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
              },
              {
                name: "JavaScript",
                icon: <FaJs className="text-yellow-500 text-4xl" />,
              },
              {
                name: "React",
                icon: <FaReact className="text-cyan-400 text-4xl" />,
              },
              {
                name: "Node.js",
                icon: <FaNodeJs className="text-green-500 text-4xl" />,
              },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
              },
              {
                name: "Git",
                icon: <FaGitAlt className="text-orange-600 text-4xl" />,
              },
              {
                name: "VS Code",
                icon: <FaCode className="text-blue-600 text-4xl" />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="text-green-600 text-4xl" />,
              },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.08 }}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
              >
                {tech.icon}
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -6 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full sm:w-40 h-32 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {p.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 border rounded"
                    >
                      <FiGithub /> GitHub
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded"
                    >
                      <FiExternalLink /> Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="bg-white dark:bg-gray-800 rounded p-6 shadow grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Let’s connect — I’m always open to new opportunities or
                collaborations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  kumanache@gmail.com
                </li>
                <li>
                  <span className="font-semibold">Phone:</span> +91-9082117390
                </li>
                <li className="flex gap-3 mt-2">
                  <a
                    href="https://github.com/sachinkumanache"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FiGithub /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sachin-kumanache/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaLinkedin className="text-blue-600" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                className="w-full border rounded px-3 py-2"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="email"
                className="w-full border rounded px-3 py-2"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                rows={5}
                className="w-full border rounded px-3 py-2"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-sm">
                  ✅ Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">❌ Something went wrong.</p>
              )}
            </form>
          </div>
        </section>

        <footer className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Designed and built by Sachin Kumanache © {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}
