import { motion } from "framer-motion";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f1f1f3] text-slate-900">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border-b border-blue-200 bg-[#f1f1f3]/95 backdrop-blur"
      >
        <div className="flex w-full items-center justify-between px-8 py-5 lg:px-10">
          <motion.h1
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="cursor-pointer text-2xl font-semibold tracking-tight text-blue-700"
          >
            Abhishek Kumar Kamal
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="ml-auto flex items-center justify-end gap-8 text-base font-medium text-blue-700"
          >
            <a href="#about" className="transition hover:text-blue-700">
              About
            </a>
            <a href="#skills" className="transition hover:text-blue-700">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-blue-700">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-blue-700">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-blue-700">
              Contact
            </a>
          </motion.div>
        </div>
      </motion.nav>

      <section className="relative overflow-hidden bg-[#f1f1f3]">
        <div className="relative mx-auto min-h-[760px] max-w-7xl px-8 pb-12 pt-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="absolute left-[4%] top-[208px] z-20 lg:left-[10%] lg:top-[168px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-[260px] w-[260px] items-center justify-center rounded-full bg-[#4b5fcc] shadow-[0_25px_60px_rgba(67,86,191,0.25)] lg:h-[380px] lg:w-[380px]"
            >
              <div className="h-[232px] w-[232px] overflow-hidden rounded-full bg-[#f1f1f3] lg:h-[338px] lg:w-[338px]">
                <motion.img
                  src="/IMG_7692.JPG.jpeg"
                  alt="Abhishek Kumar Kamal"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.32 }}
                  whileHover={{ scale: 1.03 }}
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute left-[52%] top-[220px] z-20 max-w-[520px] lg:left-[58%] lg:top-[220px]">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.28, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-end gap-3 whitespace-nowrap text-5xl font-semibold leading-none tracking-tight text-slate-950 lg:text-[4rem]"
              >
                <span>Hi, I&apos;m</span>
                <span className="text-blue-700">Abhishek</span>
                <motion.span
                  aria-hidden="true"
                  className="inline-block origin-[70%_70%] text-[0.9em]"
                  animate={{ rotate: [0, 16, -8, 16, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                  }}
                >
                  👋
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.46 }}
                className="text-lg leading-8 text-slate-600"
              >
                Senior Software Engineer | Distributed Systems Design | Data
                Platforms | Backend Developer | Python, Kafka, Flink, GCP,
                Kubernetes, SQL | MLOps
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.52 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="rounded-full border-2 border-blue-700 px-8 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  View Projects
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="rounded-full bg-blue-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Contact Me
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  className="rounded-full border border-slate-950 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
                >
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
